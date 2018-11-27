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
      loading: true
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
    let sortedNews = news.filter(item => item.translations.en)
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
      <div className="screen">
        <div className="top-title"><p>News</p></div>
        <div className="news-container">
          <div className="wf-news">
            {this.props.online &&
              <div className="news-toggle">
                <div className={"platform-button " + (this.state.platform === 'pc' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('pc') }}><img className={"platform-icon " + (this.state.platform === 'pc' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/pc.png')} alt="PC" /></div>
                <div className={"platform-button " + (this.state.platform === 'ps4' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('ps4') }}><img className={"platform-icon " + (this.state.platform === 'ps4' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/ps4.png')} alt="PS4" /></div>
                <div className={"platform-button " + (this.state.platform === 'xb1' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('xb1') }}><img className={"platform-icon " + (this.state.platform === 'xb1' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/xb1.png')} alt="XB1" /></div>
              </div>
            }
          </div>
          <div className="articles">
            <div className="article tennoware-article">
              <h1>Tennoware Updates</h1>
              <div>
                <h3>Initial release!</h3>
                <p>Please submit bugs here</p>
              </div>
            </div>
            {this.props.online &&
              <React.Fragment>
                {!this.state.loading
                  ? <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
                    <React.Fragment>
                      {this.state.news.map((item, index) => {
                        return (
                          <a key={index} href={item.link} className="article">
                            <img className="article-image" src={item.imageLink} alt="" />
                            <p className="article-message">{item.message}</p>
                          </a>
                        )
                      })}
                    </React.Fragment>
                  </CSSTransition>
                  : <Loading />
                }
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default News;