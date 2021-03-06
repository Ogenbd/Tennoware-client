import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import './News.css';

import ContainedLoading from '../loading/ContainedLoading';
import RightAd from '../adunits/RightAd';
import BottomAd from '../adunits/BottomAd';
import TopAd from '../adunits/TopAd';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      platform: undefined,
      loading: false,
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
    sortedNews = news.filter(item => item.translations.en);
    sortedNews.forEach(item => {
      item.since = `${new Date(item.date).toLocaleDateString(undefined, { year: '2-digit', month: '2-digit', day: '2-digit' })}`;
    });
    sortedNews.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateB - dateA;
    });
    this.setState({
      news: sortedNews,
      platform: platform,
    })
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Tennoware, A Warframe Builds Calculator.</title>
        </Helmet>
        {this.props.viewWidth < 1280
          ? <div className="top-title"><p>TENNOWARE</p></div>
          : <div className="top-title"><p>HOME</p></div>
        }
        <div className="screen">
          <div></div>
          <div className="news-container">
            <div className="home-left">
              <div className="tennoware-update">
                <div className="update-title">Update 1.4.14</div>
                <div className="update-content">
                  <p>Added Atlas Prime access items.</p>
                  <p>Added the Pathocyst.</p>
                  <p>Added Aura mods and arcanes from Arbitrations Revisited patch.</p>
                  <p>And some other minor additions/fixes. For a complete list of additions, changes and fixes head over to the <a className="reddit-link" href="https://www.reddit.com/r/Tennoware/comments/a3oyso/tennoware_update_log/">Tennoware update log</a>.</p>
                  <p>To report bugs, missing things, incorrect stats and feature suggestions head over to the <a className="reddit-link" href="https://www.reddit.com/r/Tennoware/">Tennoware subreddit</a>.</p>
                </div>
              </div>
              <div className="tennoware-update">
                <div className="update-title">Support Tennoware</div>
                <div className="update-content">
                  <p>If you like Tennoware and want to support development, consider dropping some credits over at <a className="reddit-link" href="https://www.patreon.com/tennoware">The Tennoware Patreon Page</a>.</p>
                  <p>Becoming a patron doesn't only help with server and hosting costs, it also lets Patrons influence the upcoming features of Tennoware!</p>
                </div>
              </div>
              <div className="tennoware-update">
                <div className="update-title">Orbiter News</div>
                {this.props.online
                  ? <div className="update-content">
                    <div className="news-toggle">
                      <div className="platform-wrapper">
                        <div className={"platform-button " + (this.state.platform === 'pc' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('pc') }}><img className={"platform-icon " + (this.state.platform === 'pc' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/pc.png')} alt="PC" /></div>
                        <div className={"platform-button " + (this.state.platform === 'ps4' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('ps4') }}><img className={"platform-icon " + (this.state.platform === 'ps4' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/ps4.png')} alt="PS4" /></div>
                        <div className={"platform-button " + (this.state.platform === 'xb1' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('xb1') }}><img className={"platform-icon " + (this.state.platform === 'xb1' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/xb1.png')} alt="XB1" /></div>
                        <div className={"platform-button " + (this.state.platform === 'swi' ? 'platform-picked' : 'platform-unpicked')} onClick={() => { this.getNews('swi') }}><img className={"platform-icon " + (this.state.platform === 'swi' ? 'platform-picked-icon' : 'platform-unpicked-icon')} src={require('../../assets/general/swi.png')} alt="SWI" /></div>
                      </div>
                      <p>News data provided by the <a className="WFCD" href="https://github.com/wfcd">Warframe Community Developers</a></p>
                    </div>
                    {this.state.loading
                      ? <React.Fragment>
                        {this.state.news.map((item, index) => {
                          return (
                            <div className="news-item" key={index}><p className="news-date">[{item.since}]:</p><a href={item.link} className="reddit-link">{item.translations.en}</a></div>
                          )
                        })}
                      </React.Fragment>
                      : <ContainedLoading />
                    }
                  </div>
                  : <div className="update-content">Connect to internet for News</div>
                }
              </div>
            </div>
            <div className="right-wrapper">
              {this.props.online &&
                <TopAd />
              }
              <div className="home-right">
                <Link to="/warframes" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/titania.png')} alt="" />
                  <div className="tile-name"><p>WARFRAMES</p></div>
                </Link>
                <Link to="/primaryweapons" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/sybaris.png')} alt="" />
                  <div className="tile-name"><p>PRIMARY WEAPONS</p></div>
                </Link>
                <Link to="/secondaryweapons" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/magnus.png')} alt="" />
                  <div className="tile-name"><p>SECONDARY WEAPONS</p></div>
                </Link>
                <Link to="/meleeweapons" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/war.png')} alt="" />
                  <div className="tile-name"><p>MELEE WEAPONS</p></div>
                </Link>
                <Link to="/kitguns" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/catchmoon.png')} alt="" />
                  <div className="tile-name"><p>KITGUNS</p></div>
                </Link>
                <Link to="/zaws" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/kronsh.png')} alt="" />
                  <div className="tile-name"><p>ZAWS</p></div>
                </Link>
                <Link to="/beasts" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/chesa-kubrow.png')} alt="" />
                  <div className="tile-name"><p>BEASTS</p></div>
                </Link>
                <Link to="/sentinels" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/taxon.png')} alt="" />
                  <div className="tile-name"><p>SENTINELS</p></div>
                </Link>
                <Link to="/moas" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/para-moa.png')} alt="" />
                  <div className="tile-name"><p>MOAS</p></div>
                </Link>
                <Link to="/sentinelweapons" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/deth-machine-rifle.png')} alt="" />
                  <div className="tile-name"><p>ROBOTIC WEAPONS</p></div>
                </Link>
                <Link to="/archwings" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/odonata.png')} alt="" />
                  <div className="tile-name"><p>ARCHWINGS</p></div>
                </Link>
                <Link to="/archguns-land" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/grattler.png')} alt="" />
                  <div className="tile-name"><p>ARCHGUNS - LAND</p></div>
                </Link>
                <Link to="/archguns-space" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/fluctus.png')} alt="" />
                  <div className="tile-name"><p>ARCHGUNS - SPACE</p></div>
                </Link>
                <Link to="/archmelee" className="tile-wrapper">
                  <img className="tile-image" src={require('../../assets/general/kaszas.png')} alt="" />
                  <div className="tile-name"><p>ARCHMELEE</p></div>
                </Link>
              </div>
              {this.props.online &&
                <BottomAd />
              }
            </div>
          </div>
          <div className="side-panel">
            {(this.props.viewWidth > 1375 && this.props.online) &&
              <div className="right-g">
                <RightAd />
              </div>
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default News;