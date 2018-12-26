import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import './App.css';
import './general.css';

import Routing from './Routing';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      viewWidth: window.innerWidth,
      user: false,
      online: navigator.onLine,
      update: false
    }
    this.debouncedSetWidth = debounce(this.setViewWidth, 100)
  }

  componentDidMount() {
    window.addEventListener('resize', this.debouncedSetWidth)
    window.addEventListener('updateavail', this.promptUpdate)
    if (localStorage.jwt) {
      this.setState({ user: true })
    }
    window.addEventListener('online', this.setOnline)
    window.addEventListener('offline', this.setOffline)
  }

  checkMessage = (e) => {
    if (e.data === 'donewaiting') window.location.reload();
  }

  promptUpdate = () => {
    this.setState({ update: true })
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
    })
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
          <Routing viewWidth={this.state.viewWidth} user={this.state.user} online={this.state.online} logUser={this.logUser} />
        </div>
        <Sidebar user={this.state.user} online={this.state.online} />
        <Login showLogin={this.state.showLogin} hideLogin={this.hideLogin} logUser={this.logUser} user={this.state.user} />
        <div className={"update-popup " + (this.state.update ? 'show-update' : 'hide-update')}>
          <div className="update-popup-content">
            <p className="update-touch">An update is available! Make sure to close all other instances of Tennoware before updating.</p>
            <div className="interactable interactable-semi-inactive" onClick={this.updateInit}>
              <p className="interactable-p">Get Update</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// const debounce = (fn, delay) => {
//   var timer = null;
//   return function () {
//     var context = this, args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       fn.apply(context, args);
//     }, delay);
//   };
// }


