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
          <NavLink exact to="/warframes" className="nav-item" activeClassName="selected" isActive={this.warframeActive} onClick={this.closeSidebar}><p>Warframe Builder</p></NavLink>
          <NavLink exact to="/primaryweapons" className="nav-item" activeClassName="selected" isActive={this.primaryActive} onClick={this.closeSidebar}><p>Primary Builder</p></NavLink>
          <NavLink exact to="/secondaryweapons" className="nav-item" activeClassName="selected" isActive={this.secondaryActive} onClick={this.closeSidebar}><p>Secondary Builder</p></NavLink>
          <NavLink exact to="/archwings" className="nav-item" activeClassName="selected" isActive={this.archwingActive} onClick={this.closeSidebar}><p>Archwing Builder</p></NavLink>
          <NavLink exact to="/archguns" className="nav-item" activeClassName="selected" isActive={this.archgunActive} onClick={this.closeSidebar}><p>Arch-Gun Builder</p></NavLink>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Sidebar;
