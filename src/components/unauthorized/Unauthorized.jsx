import React, { Component } from 'react';
import './Unauthorized.css';

export class Unauthorized extends Component {
    render() {
        return (
            <div className="screen">
                <div className="top-title"><p>Unauthorized</p></div>
                <div className="unauth">
                    <div className="unauth-wrapper"><div className="unauth-box">User authorization issue. Please try re-logging.</div></div>
                </div>
            </div>
        )
    }
}

export default Unauthorized;
