import React, { Component } from 'react';
import '../unauthorized/Unauthorized.css';

export class TheVoid extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="top-title"><p>VOID</p></div>
        <div className="screen">
          <div></div>
          <div className="unauth">
            <div className="unauth-wrapper"><div className="unauth-box"><p>Something went wrong. Maybe the build you were trying to look at got deleted by its owner, maybe the page you tried to get to doesnt even exist, or maybe this is an early build for this app and it has a bug that made you wind up here. If you do think a bug got you here than please let us know over at <a href="https://reddit.com/r/tennoware" className="reddit-link">reddit.com/r/tennoware</a> and try to be as descriptive as possible!</p></div></div>
          </div>
          <div></div>
        </div>
      </React.Fragment>
    )
  }
}

export default TheVoid
