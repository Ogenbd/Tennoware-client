import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import './News.css';

import ContainedLoading from '../loading/ContainedLoading';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      platform: undefined,
      loading: false,
      loaded: 0
    }
  }

  componentDidMount() {
    if (localStorage.news) {
      this.getNews(localStorage.news);
    } else {
      this.getNews('pc');
    }
  }

  getNews = (platform) => {
    if (this.state.platform !== platform) {
      this.setState({
        loading: true,
        platform: platform,
        loaded: 0,
        news: []
      });
      fetch(`https://api.warframestat.us/${platform}/news`)
        .then(res => {
          if (res.status === 200) {
            res.json().then(res => {
              localStorage.setItem('news', `${platform}`);
              this.sortForDisplay(res, platform);
            });
          }
        });
    }
  }

  sortForDisplay = (news, platform) => {
    let sortedNews = [];
    sortedNews = news.filter(item => item.translations.en && !item.imageLink.includes('forums'))
    sortedNews.forEach(item => {
      item.imageLink = item.imageLink.replace('http:', 'https:');
      if (item.translations.en === 'Tennobaum Has Begun! Get Gifting, Tenno!') item.imageLink = 'https://n9e5v4d8.ssl.hwcdn.net/uploads/62fbad11ef9f0593634fccceac474742.jpg';
    });
    sortedNews.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateB - dateA;
    });
    this.setState({
      news: sortedNews,
      platform: platform,
      // loading: false,
    })
  }

  imageLoaded = () => {
    if (this.state.news.length === this.state.loaded + 1) {
      this.setState(prevState => ({ loaded: prevState.loaded + 1, loading: false }));
    } else {
      this.setState(prevState => ({ loaded: prevState.loaded + 1 }));
    }
  }

  handleError = (idx) => {
    let news = this.state.news.map((item, index) => {
      if (idx === index) {
        let newItem = item;
        item.imageLink = require('../../assets/general/unavail.jpg')
        return newItem;
      } else {
        return item;
      }
    });
    this.setState(prevState => ({
      news: news,
      loaded: prevState.loaded + 1,
      loading: false
    }));
  }

  render() {
    return (
      <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
        <div className="screen">
          <div className="top-title"><p>News & Updates</p></div>
          <div className="news-container">
            <div className="page-subtitle">Tennoware Updates</div>
            <div className="articles">
              <div className="article tennoware-news">
                <h1>Introduction</h1>
                <div className="update-content">
                  <p>Tennoware is a Warframe builds calculator, it is both mobile and desktop friendly, can be installed on your mobile device and has offline functionality.</p>
                  <p>Creating and account is optional and free and it lets you save your builds and like other peoples public community builds.</p>
                  <p>Tennoware is still in early stages of development. Please understand that some server issues and/or bugs are lurking around.</p>
                  <p>If you encounter a bug or wish to provide feedback or a feature suggestion, I would appreciate if you would let me know over at the <a className="reddit-link" href="https://www.reddit.com/r/tennoware">Tennoware subreddit.</a></p>
                </div>
              </div>
              <div className="article tennoware-news">
                <h1>Update 1.1.0!</h1>
                <div className="update-content">
                  <p>Added standalone Tennoware accounts without a Google/Facebook requirment.</p>
                  <p>Added more filtering and sorting options to the mod picker.</p>
                  <p>General improvments to make the app feel more responsive, mostly around things popping in and out of the screen and general mod picker behavior. The Warframe news section will display the news even if there were errors loading the images. No more empty news page unless you are offline!</p>
                  <p>For the complete update notes head over to the <a className="reddit-link" href="https://www.reddit.com/r/Tennoware/comments/a3oyso/tennoware_update_log/">Tennoware update log.</a></p>
                </div>
              </div>
            </div>
            <div className="page-subtitle">Warframe News</div>
            <div className="wf-news">
              {this.props.online &&
                <div className="news-toggle">
                  <div className={"platform-button " + (this.state.platform === 'pc' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('pc') }}><img className={"platform-icon " + (this.state.platform === 'pc' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/pc.png')} alt="PC" /></div>
                  <div className={"platform-button " + (this.state.platform === 'ps4' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('ps4') }}><img className={"platform-icon " + (this.state.platform === 'ps4' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/ps4.png')} alt="PS4" /></div>
                  <div className={"platform-button " + (this.state.platform === 'xb1' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('xb1') }}><img className={"platform-icon " + (this.state.platform === 'xb1' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/xb1.png')} alt="XB1" /></div>
                </div>
              }
            </div>
            {this.props.online &&
              <div className="loading-articles-coupler">
                <div className={"news-loading " + (!this.state.loading ? 'hide-it' : 'show-it')}>
                  <ContainedLoading />
                </div>
                <div className={"articles-wrapper articles " + (this.state.loading ? 'hide-it' : 'show-it')}>
                  {this.state.news.map((item, index) => {
                    return (
                      <a key={index} href={item.link} className="article">
                        <img className="article-image" onError={() => { this.handleError(index) }} onLoad={this.imageLoaded} src={item.imageLink} alt="" />
                        <p className="article-message">{item.translations.en}</p>
                      </a>
                    )
                  })}
                </div>
              </div>
              // <div className="news-articles">
              //   <React.Fragment>
              //      <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
              //        {!this.state.loading
              //         ? <React.Fragment>
              //           {this.state.news.map((item, index) => {
              //             return (
              //               <a key={index} href={item.link} className={"article " + (this.state.news.length === this.state.loaded ? 'article-loaded' : 'article-not-loaded')}>
              //                 <img className="article-image" onError={() => { this.handleError(index) }} onLoad={this.imageLoaded} src={item.imageLink} alt="" />
              //                 <p className="article-message">{item.translations.en}</p>
              //               </a>
              //             )
              //           })}
              //         </React.Fragment>
              //         : <ContainedLoading />
              //       }
              //     </CSSTransition>
              //   </React.Fragment>
              // </div>
            }
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default News;