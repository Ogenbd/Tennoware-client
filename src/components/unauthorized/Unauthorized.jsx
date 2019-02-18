import React, { Component } from 'react';
import './Unauthorized.css';

export class Unauthorized extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="top-title"><p>UNAUTHERIZED</p></div>
                <div className="screen">
                    <div></div>
                    <div className="unauth">
                        <div className="unauth-wrapper"><div className="unauth-box">User authorization issue. Please try re-logging.</div></div>
                    </div>
                    <div></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Unauthorized;
