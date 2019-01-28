import React, { Component } from 'react';
import '../unauthorized/Unauthorized.css';

export class TheVoid extends Component {
  render() {
    return (
      <div className="screen">
                <div className="top-title"><p>VOID</p></div>
                <div className="unauth">
                    <div className="unauth-wrapper"><div className="unauth-box">Something went wrong. Maybe the build you were trying to look at got deleted by its owner, maybe the page to tried to get to doesnt even exist, or maybe this is a really early build for this app and it has a bug that made you wind up here. If you do think a bug made you end up here than please let us know over at <a href="https://reddit.com/r/tennoware">reddit.com/r/tennoware</a> and try to be as descriptive as possible!</div></div>
                </div>
            </div>
    )
  }
}

export default TheVoid
