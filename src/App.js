import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import './general.css';

import Routing from './Routing';
import Sidebar from './components/sidebar/Sidebar';
// import Login from './components/login/Login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      title: '',
      viewWidth: window.innerWidth,
      user: 1,
      indicator: !navigator.onLine
    }
    this.debouncedSetWidth = debounce(this.setViewWidth, 100)
  }

  componentDidMount() {
    window.addEventListener('resize', this.debouncedSetWidth)
    window.addEventListener('online', this.indicatorOff)
    window.addEventListener('offline', this.indicatorOn)
  }

  indicatorOff = () => {
    this.setState({
      indicator: false
    });
  }
  
  indicatorOn = () => {
    this.setState({
      indicator: true
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
  
  logUser = (id) => {
    document.body.classList.remove('noscroll');
    this.setState({
      user: id,
      showLogin: false
    });
  }

  logout = () => {
    this.setState({
      user: undefined
    })
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
            {/* {this.state.user
              ? <div className="user-account">
                <Link className="user-account-item" to="/mystuff">My Stuff</Link> | <p className="user-account-item" onClick={this.logout}>Log out</p>
              </div>
              : <p className="user-account-item" onClick={this.showLogin}>Login</p>
            } */}
          </div>
        </div>
        <div className="main-view">
          <Routing viewWidth={this.state.viewWidth} user={this.state.user} />
        </div>
        <Sidebar />
        {/* <Login showLogin={this.state.showLogin} logUser={this.logUser} /> */}
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


