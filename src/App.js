import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';
import './App.css';
import './general.css';

import Routing from './Routing';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import apiUrl from './apiUrl';
import ContainedLoading from './components/loading/ContainedLoading';
import Loading from './components/loading/Loading';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      viewWidth: window.innerWidth,
      user: false,
      online: navigator.onLine,
      update: false,
      updateRequired: undefined,
      navToggle: false,
      mountTime: Date.now()
    }
    this.debouncedSetWidth = debounce(this.setViewWidth, 100)
  }

  componentDidMount() {
    let jwt;
    localStorage.jwt ? jwt = true : jwt = false;
    navigator.onLine ? this.checkVer('1.4.8', jwt) : this.setState({ updateRequired: false, user: jwt });
    window.addEventListener('resize', this.debouncedSetWidth);
    window.addEventListener('updateavail', this.updateInit);
    window.addEventListener('online', this.setOnline);
    window.addEventListener('offline', this.setOffline);
    window.addEventListener('visibilitychange', this.checkMountTime);
  }

  checkVer = (ver, jwt) => {
    fetch(`${apiUrl}/checkver`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        res.json().then(res => {
          this.checkForUpdate(ver, res, jwt)
        });
      })
      .catch(() => {
        this.setState({ updateRequired: false, user: jwt })
      })
  }

  checkMountTime = () => {
    if (!document.hidden && Date.now() - this.state.mountTime > 21600000) window.location.reload();
  }

  checkForUpdate = (local, server, jwt) => {
    let localVer = local.split('.');
    let serverVer = server.split('.');
    if (parseInt(serverVer[0], 10) > parseInt(localVer[0], 10)) {
      this.setState({ updateRequired: true, user: jwt });
    } else if (parseInt(serverVer[1], 10) > parseInt(localVer[1], 10)) {
      this.setState({ updateRequired: true, user: jwt });
    } else if (parseInt(serverVer[2], 10) > parseInt(localVer[2], 10)) {
      this.setState({ updateRequired: true, user: jwt });
    } else {
      this.setState({ updateRequired: false, user: jwt });
    }
  }

  setOffline = () => {
    this.setState({
      online: false
    });
  }

  setOnline = () => {
    this.setState({
      online: true
    });
  }

  setViewWidth = () => {
    this.setState({ viewWidth: window.innerWidth });
  }

  showLogin = () => {
    document.body.classList.add('noscroll');
    this.setState({
      showLogin: true
    });
  }

  hideLogin = () => {
    document.body.classList.remove('noscroll');
    this.setState({
      showLogin: false
    });
  }

  logUser = (res) => {
    document.body.classList.remove('noscroll');
    localStorage.setItem('jwt', res.token);
    this.setState({
      user: true,
      showLogin: false
    });
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.setState({
      user: undefined
    });
  }

  updateInit = () => {
    window.location.reload();
  }

  goHome = () => {
    this.props.history.push('/');
  }

  showNav = () => {
    this.setState({
      navToggle: true
    });
  }

  hideNav = () => {
    setTimeout(() => {
      this.setState({
        navToggle: false
      });
    }, 20)
  }

  render() {
    return (
      <div className="app">
        <div className="background-image"></div>
        <div className="topbar">
          <Link to="/" className="top-left">
            <div className="app-name">
              <p>TENNOWARE</p>
            </div>
          </Link>
          <div className="page-title">
            {this.state.viewWidth > 1279 &&
              <div className="nav-menu" onMouseLeave={this.hideNav}>
                <p className={"nav-menu-trigger " + (this.state.navToggle ? 'active-nav' : '')} onMouseEnter={this.showNav}>Navigation <span className="chev-down">›</span></p>
                <div className="nav-hider"></div>
                <div className={"nav-options " + (this.state.navToggle ? 'active-nav-option' : '')}>
                  <div className="nav-subcat">
                    <div className="subcat-title">Regular</div>
                    <Link className="nav-option" to="/warframes" onClick={this.hideNav}>Warframes</Link>
                    <Link className="nav-option" to="/primaryweapons" onClick={this.hideNav}>Primary Weapons</Link>
                    <Link className="nav-option" to="/secondaryweapons" onClick={this.hideNav}>Secondary Weapons</Link>
                    <Link className="nav-option" to="/meleeweapons" onClick={this.hideNav}>Melee Weapons</Link>
                    <Link className="nav-option" to="/archguns-land" onClick={this.hideNav}>Archguns - Land</Link>
                    <Link className="nav-option" to="/beasts" onClick={this.hideNav}>Beasts</Link>
                    <Link className="nav-option" to="/sentinels" onClick={this.hideNav}>Sentinels</Link>
                    <Link className="nav-option" to="/sentinelweapons" onClick={this.hideNav}>Robotic Weapons</Link>
                  </div>
                  <div className="nav-right">
                    <div className="nav-shortsubs">
                      <div className="nav-subcat">
                        <div className="subcat-title">Archwing</div>
                        <Link className="nav-option" to="/archwings" onClick={this.hideNav}>Archwings</Link>
                        <Link className="nav-option" to="/archguns-space" onClick={this.hideNav}>Archguns - Space</Link>
                        <Link className="nav-option" to="/archmelee" onClick={this.hideNav}>Archmelee</Link>
                      </div>
                      <div className="nav-subcat">
                        <div className="subcat-title">Modular</div>
                        <Link className="nav-option" to="/zaws" onClick={this.hideNav}>Zaws</Link>
                        <Link className="nav-option" to="/kitguns" onClick={this.hideNav}>Kitguns</Link>
                        <Link className="nav-option" to="/moas" onClick={this.hideNav}>MOAs</Link>
                      </div>
                    </div>
                    <div className="nav-bs">
                      <a href="https://www.patreon.com/tennoware"><img className="patreon" src={require('./assets/general/patreon.jpg')} alt="Patreon" /></a>
                      <p className="bs-container-nav"><Link className="bottom-info-link" to="/terms" onClick={this.closeSidebar}>terms of service</Link>  <Link className="bottom-info-link" to="/privacy" onClick={this.closeSidebar}>privacy policy</Link></p>
                      <p className="bs-para-nav">Copyright © 2018 - Today. All rights reserved. For personal use only. Tennoware.com has no affiliation with Digital Extremes Ltd or Warframe. All artwork, screenshots, characters or other recognizable features of the intellectual property relating to Warframe are the intellectual property of Digital Extreme Ltd.</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className="top-buttons">
            {this.state.online &&
              <React.Fragment>
                {this.state.viewWidth > 1279 && this.state.user &&
                  <React.Fragment>
                    <Link to="/mybuilds" className="user-account-item">My Builds</Link>
                    <p> | </p>
                  </React.Fragment>
                }
                {this.state.user
                  ? <p className="user-account-item" onClick={this.logout}>Logout</p>
                  : <p className="user-account-item" onClick={this.showLogin}>Login</p>
                }
              </React.Fragment>
            }
          </div>
        </div>
        <div className="main-view">
          {this.state.updateRequired === undefined
            ? <Loading />
            : <React.Fragment>
              {this.state.updateRequired
                ? <div className="screen">
                  <div></div>
                  <div className="update-screen">
                    <div className="top-title"><p>UPDATE</p></div>
                    <div className="update-block">
                      <p>Tennoware has been updated!</p>
                      <p>Fetching updated data...</p>
                      <div className="update-loading-container"><ContainedLoading /></div>
                    </div>
                  </div>
                  <div></div>
                </div>
                : <Routing viewWidth={this.state.viewWidth} user={this.state.user} online={this.state.online} logUser={this.logUser} updateRequired={this.state.updateRequired} />
              }
            </React.Fragment>
          }
        </div>
        <Sidebar user={this.state.user} online={this.state.online} />
        <Login showLogin={this.state.showLogin} hideLogin={this.hideLogin} logUser={this.logUser} user={this.state.user} />
      </div>
    );
  }
}

export default App;