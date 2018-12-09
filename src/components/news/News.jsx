import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import './News.css';

import Loading from '../loading/Loading';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      platform: undefined,
      loading: false
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
      this.state.loading ? this.setState({ platform: platform }) : this.setState({ loading: true, platform: platform })
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
    let sortedNews = news.filter(item => item.translations.en && !item.imageLink.includes('forums'))
    sortedNews.forEach(item => {
      item.imageLink = item.imageLink.replace('http:', 'https:');
    });
    sortedNews.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateB - dateA;
    });
    this.setState({
      news: sortedNews,
      platform: platform,
      loading: false
    })
  }

  render() {
    return (
      <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
        <div className="screen">
          <div className="top-title"><p>News</p></div>
          <div className="news-container">
            <div className="wf-news">
              {this.props.online &&
                <div className="news-toggle">
                  <div className={"platform-button " + (this.state.platform === 'pc' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('pc') }}><img className={"platform-icon " + (this.state.platform === 'pc' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/pc.png')} alt="PC" /></div>
                  <div className={"platform-button " + (this.state.platform === 'ps4' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('ps4') }}><img className={"platform-icon " + (this.state.platform === 'ps4' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/ps4.png')} alt="PS4" /></div>
                  <div className={"platform-button " + (this.state.platform === 'xb1' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('xb1') }}><img className={"platform-icon " + (this.state.platform === 'xb1' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/xb1.png')} alt="XB1" /></div>
                </div>
              }
            </div>
            <div className="articles">
              <div className="article tennoware-news">
                <h1>Introduction</h1>
                <div className="update-content">
                  <p>Tennoware is a Warframe build calculator, it is also a fully featured <a className="reddit-link" href="https://en.wikipedia.org/wiki/Progressive_web_applications">Progressive Web App</a>, meaning it is both mobile and desktop friendly, can be installed on your mobile device and has offline functionality.</p>
                  <p>Tennoware is still in early stages of development. Please understand that some server issues and/or bugs are lurking around.</p>
                  <p>For bug reports, feedback, feature suggestions and general Tennoware discussion go <a className="reddit-link" href="https://www.reddit.com/r/tennoware">here.</a></p>
                </div>
              </div>
              <div className="article tennoware-news">
                <h1>Update 1.0.4!</h1>
                <div className="update-content">
                  <p>This update fixed an issue that caused builds with rivens that had fractional stats to crash the app. I ran a database update query to fix affected builds. If you saved a build with a fractional riven stat and are still unable to access it please let me know at the <a className="reddit-link" href="https://www.reddit.com/r/tennoware">Tennoware subreddit.</a></p>
                  <p>For the complete update notes head over to the <a className="reddit-link" href="https://www.reddit.com/r/Tennoware/comments/a3oyso/tennoware_update_log/">Tennoware update log.</a></p>
                </div>
              </div>
              {this.props.online &&
                <React.Fragment>
                  {!this.state.loading
                    ? <React.Fragment>
                      {this.state.news.map((item, index) => {
                        return (
                          <a key={index} href={item.link} className="article">
                            <img className="article-image" src={item.imageLink} alt="" />
                            <p className="article-message">{item.translations.en}</p>
                          </a>
                        )
                      })}
                    </React.Fragment>
                    : <Loading />
                  }
                </React.Fragment>
              }
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default News;