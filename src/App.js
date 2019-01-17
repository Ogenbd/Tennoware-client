import React, { Component } from 'react';
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
      updateRequired: undefined
    }
    this.debouncedSetWidth = debounce(this.setViewWidth, 100)
  }

  componentDidMount() {
    let jwt;
    localStorage.jwt ? jwt = true : jwt = false;
    navigator.onLine ? this.checkVer('1.2.1', jwt) : this.setState({ updateRequired: false, user: jwt });
    window.addEventListener('resize', this.debouncedSetWidth);
    window.addEventListener('updateavail', this.updateInit);
    window.addEventListener('online', this.setOnline);
    window.addEventListener('offline', this.setOffline);
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

  // checkMessage = (e) => {
  //   if (e.data === 'donewaiting') window.location.reload();
  // }

  // promptUpdate = () => {
  //   this.setState({ update: true });
  // }

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

  render() {
    return (
      <div className="app">
        <div className="background-image"></div>
        <div className="topbar">
          <div className="top-left">
            <div className="app-name">
              <p>TENNOWARE</p>
            </div>
          </div>
          <div className="page-title"></div>
          <div className="top-buttons">
            {this.state.online &&
              <React.Fragment>
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
                ? <div className="main">
                  <div className="screen">
                    <div className="update-screen">
                      <div className="top-title"><p>UPDATE</p></div>
                      <div className="update-block">
                        <p>Tennoware has been updated!</p>
                        <p>Fetching updated data...</p>
                        <div className="update-loading-container"><ContainedLoading /></div>
                      </div>
                    </div>
                  </div>
                </div>
                : <Routing viewWidth={this.state.viewWidth} user={this.state.user} online={this.state.online} logUser={this.logUser} updateRequired={this.state.updateRequired} />
              }
            </React.Fragment>
          }
        </div>
        <Sidebar user={this.state.user} online={this.state.online} />
        <Login showLogin={this.state.showLogin} hideLogin={this.hideLogin} logUser={this.logUser} user={this.state.user} />
        {/* <div className={"update-popup " + (this.state.updateRequired ? 'show-update' : 'hide-update')}>
          <div className="update-popup-content">
            {this.state.updateRequired &&
              <React.Fragment>
                <p className="update-touch">An update is available! Please wait for Tennoware to fetch the new data.</p>
                {this.state.update
                  ? <div className="interactable interactable-semi-inactive" style={{ minWidth: '87px' }} onClick={this.updateInit}>
                    <p className="interactable-p">Update</p>
                  </div>
                  : <div className="update-loading-container"><ContainedLoading /></div>
                }
              </React.Fragment>
            }
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;