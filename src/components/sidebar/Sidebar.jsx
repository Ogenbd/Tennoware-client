import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  openSidebar = () => {
    this.setState({ open: true })
    document.body.classList.add('noscroll');
  }

  closeSidebar = () => {
    document.body.classList.remove('noscroll');
    this.setState({ open: false })
  }

  myBuildsActive = () => {
    return JSON.stringify(window.location.href).includes('mybuilds');
  }

  primaryActive = () => {
    return JSON.stringify(window.location.href).includes('primaryweapons');
  }

  secondaryActive = () => {
    return JSON.stringify(window.location.href).includes('secondaryweapons');
  }

  warframeActive = () => {
    return JSON.stringify(window.location.href).includes('warframes');
  }

  archwingActive = () => {
    return JSON.stringify(window.location.href).includes('archwings');
  }

  archgunActive = () => {
    return JSON.stringify(window.location.href).includes('archguns');
  }

  sentinelsActive = () => {
    return JSON.stringify(window.location.href).includes('sentinels');
  }
  
  sentinelWeaponsActive = () => {
    return JSON.stringify(window.location.href).includes('sentinelweapons');
  }
  
  beastsActive = () => {
    return JSON.stringify(window.location.href).includes('beasts');
  }

  kitgunsActive = () => {
    return JSON.stringify(window.location.href).includes('kitguns');
  }

  moasActive = () => {
    return JSON.stringify(window.location.href).includes('moas');
  }

  render() {
    return (
      <React.Fragment>
      <div className="sidebar-pull-tab" onClick={this.openSidebar}>
        <div className="burger-wrapper">
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </div>
      <div className={"sidebar " + (this.state.open ? 'opened-sidebar' : 'closed-sidebar')}>
        <div className={"sidebar-title " + (this.state.open ? 'opened-sidebar' : 'closed-sidebar')}>
          <div className="menu-x-wrapper" onClick={this.closeSidebar}>
            <div className="menu-bar top"></div>
            <div className="menu-bar bot"></div>
          </div>
          <div className="main-title">
            <p>TENNOWARE</p>
          </div>
        </div>
        <div className="sidebar-content">
          <NavLink exact to="/" className="nav-item" activeClassName="selected" onClick={this.closeSidebar}><p>News</p></NavLink>
          {this.props.user && this.props.online &&
          <NavLink exact to="/mybuilds" className="nav-item" activeClassName="selected" isActive={this.myBuildsActive} onClick={this.closeSidebar}><p>My Builds</p></NavLink>
          }
          <NavLink exact to="/warframes" className="nav-item" activeClassName="selected" isActive={this.warframeActive} onClick={this.closeSidebar}><p>Warframes</p></NavLink>
          <NavLink exact to="/primaryweapons" className="nav-item" activeClassName="selected" isActive={this.primaryActive} onClick={this.closeSidebar}><p>Primary Weapons</p></NavLink>
          <NavLink exact to="/secondaryweapons" className="nav-item" activeClassName="selected" isActive={this.secondaryActive} onClick={this.closeSidebar}><p>Secondary Weapons</p></NavLink>
          <NavLink exact to="/kitguns" className="nav-item" activeClassName="selected" isActive={this.kitgunsActive} onClick={this.closeSidebar}><p>Kitguns</p></NavLink>
          <NavLink exact to="/beasts" className="nav-item" activeClassName="selected" isActive={this.beastsActive} onClick={this.closeSidebar}><p>Beasts</p></NavLink>
          <NavLink exact to="/sentinels" className="nav-item" activeClassName="selected" isActive={this.sentinelsActive} onClick={this.closeSidebar}><p>Sentinels</p></NavLink>
          <NavLink exact to="/moas" className="nav-item" activeClassName="selected" isActive={this.moasActive} onClick={this.closeSidebar}><p>MOAs</p></NavLink>
          <NavLink exact to="/sentinelweapons" className="nav-item" activeClassName="selected" isActive={this.sentinelWeaponsActive} onClick={this.closeSidebar}><p>Robotic Weapons</p></NavLink>
          <NavLink exact to="/archwings" className="nav-item" activeClassName="selected" isActive={this.archwingActive} onClick={this.closeSidebar}><p>Archwings</p></NavLink>
          <NavLink exact to="/archguns" className="nav-item" activeClassName="selected" isActive={this.archgunActive} onClick={this.closeSidebar}><p>Arch-Guns</p></NavLink>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Sidebar;
