import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <div className="sidebar-title">
            {/* <div className={"sidebar-title " + (this.state.open ? 'opened-sidebar' : 'closed-sidebar')}> */}
            <div className="menu-x-wrapper" onClick={this.closeSidebar}>
              <div className="menu-bar top"></div>
              <div className="menu-bar bot"></div>
            </div>
            <div className="main-title">
              <p>TENNOWARE</p>
            </div>
          </div>
          <div className="sidebar-content">
            <div className="nav-links">
              <Link to="/" className="nav-item" onClick={this.closeSidebar}><p>Home</p></Link>
              {this.props.user && this.props.online &&
                <Link to="/mybuilds" className="nav-item" onClick={this.closeSidebar}><p>My Builds</p></Link>
              }
              <Link to="/warframes" className="nav-item" onClick={this.closeSidebar}><p>Warframes</p></Link>
              <Link to="/primaryweapons" className="nav-item" onClick={this.closeSidebar}><p>Primary Weapons</p></Link>
              <Link to="/secondaryweapons" className="nav-item" onClick={this.closeSidebar}><p>Secondary Weapons</p></Link>
              <Link to="/meleeweapons" className="nav-item" onClick={this.closeSidebar}><p>Melee Weapons</p></Link>
              <Link to="/kitguns" className="nav-item" onClick={this.closeSidebar}><p>Kitguns</p></Link>
              <Link to="/zaws" className="nav-item" onClick={this.closeSidebar}><p>Zaws</p></Link>
              <Link to="/beasts" className="nav-item" onClick={this.closeSidebar}><p>Beasts</p></Link>
              <Link to="/sentinels" className="nav-item" onClick={this.closeSidebar}><p>Sentinels</p></Link>
              <Link to="/moas" className="nav-item" onClick={this.closeSidebar}><p>MOAs</p></Link>
              <Link to="/sentinelweapons" className="nav-item" onClick={this.closeSidebar}><p>Robotic Weapons</p></Link>
              <Link to="/archwings" className="nav-item" onClick={this.closeSidebar}><p>Archwings</p></Link>
              <Link to="/archguns-land" className="nav-item" onClick={this.closeSidebar}><p>Archguns - Land</p></Link>
              <Link to="/archguns-space" className="nav-item" onClick={this.closeSidebar}><p>Archguns - Space</p></Link>
              <Link to="/archmelee" className="nav-item" onClick={this.closeSidebar}><p>Archmelee</p></Link>
            </div>
            <div className="botton-info">
              <a href="https://www.patreon.com/tennoware"><img className="patreon-side" src={require('../../assets/general/patreon2.jpg')} alt="Patreon" /></a>
              <p className="bs-container"><Link className="bottom-info-link" to="/terms" onClick={this.closeSidebar}>terms of service</Link>  <Link className="bottom-info-link" to="/privacy" onClick={this.closeSidebar}>privacy policy</Link></p>
              <p className="bs-para">Copyright © 2018 - Today. All rights reserved. For personal use only. Tennoware.com has no affiliation with Digital Extremes Ltd or Warframe. All artwork, screenshots, characters or other recognizable features of the intellectual property relating to Warframe are the intellectual property of Digital Extreme Ltd.</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Sidebar;
