import React, { Component } from 'react';
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
      online: navigator.onLine
    }
    this.debouncedSetWidth = debounce(this.setViewWidth, 100)
  }

  async componentDidMount() {
    window.addEventListener('resize', this.debouncedSetWidth)
    if (localStorage.jwt) {
      // if (navigator.onLine) {
      this.setState({ user: true })
      // }
    }
    window.addEventListener('online', this.setOnline)
    window.addEventListener('offline', this.setOffline)
  }

  // autoAuthenticate = () => {
  //   let token = localStorage.getItem('jwt');
  //   var decoded = jwt.decode(token, 'a', true);
  //   console.log(decoded);
  // fetch('http://192.168.1.114:50000/authenticate', {
  //   method: 'get',
  //   headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
  // })
  //   .then(res => res.json())
  //   .then(res => {
  //   })
  // }

  setOffline = () => {
    this.setState({
      online: false
    });
    console.log('off');
  }

  setOnline = () => {
    this.setState({
      online: true
    });
    console.log('on');
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
    // console.log(res.token);
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
          <Routing viewWidth={this.state.viewWidth} user={this.state.user} online={this.state.online} />
        </div>
        <Sidebar user={this.state.user} online={this.state.online} />
        <Login showLogin={this.state.showLogin} hideLogin={this.hideLogin} logUser={this.logUser} user={this.state.user} />
      </div>
    );
  }
}

export default App;

const debounce = (fn, delay) => {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}


