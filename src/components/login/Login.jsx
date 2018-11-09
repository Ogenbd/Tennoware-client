import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './Login.css';
import '../../general.css';

export class Login extends Component {
    login = (id) => {
        let data = JSON.stringify({ id: id })
        fetch('http://192.168.1.114:50000/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(res => res.json())
            .then(res => {
                this.props.logUser(res);
            })
    }

    responseGoogle = (response) => {
        if (!this.props.user) {
            this.login(response.googleId)
        }
    }

    responseFacebook = (response) => {
        if (!this.props.user) {
            this.login(response.id)
        }
    }

    failGoogle = (response) => {
        console.log(response);
    }

    failFacebook = (response) => {
        console.log(response);
    }

    render() {
        return (
            // <div className={"login " + (this.props.showLogin ? "show-login" : "hide-login")}>
            <div className={"popup login-bg " + (this.props.showLogin ? "popup-active" : "popup-inactive")}>
                <div className={"popup-topbar " + (this.props.showLogin ? "popup-active" : "popup-inactive")}>
                </div>
                <div className="popup-content login-content">
                    <div className="login-box">
                        <div className="login-topbar">
                            <div className="popup-x login-x" onClick={this.props.hideLogin}>
                                <div className="popup-x-bar one-bar login-bar"></div>
                                <div className="popup-x-bar two-bar login-bar"></div>
                            </div>
                        </div>
                        <div className="consentorama"><p>By logging in you accept the use of cookies.</p></div>
                        <div className="consentorama"><p>Note: You should not login to sites/apps that use Social Authentication on public computers/devices. If you are still intending to login on a public computer remember to logout of this app AND google/facebook.</p></div>
                        <div className="auth-wrapper">
                            <GoogleLogin
                                clientId="739460553448-jgjkog0elfmiivoclc482h8bnl52p7gv.apps.googleusercontent.com"
                                className="auth-button google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.failGoogle}
                                fetchBasicProfile={false}
                                tag="div"
                                theme="dark"
                            >
                                <img src={require('../../assets/googleicon.png')} alt='' />
                                <span> Login with Google</span>
                            </GoogleLogin>
                            <FacebookLogin
                                appId="707507742959348"
                                cssClass="auth-button facebook"
                                icon={<img src={require('../../assets/facebookicon.png')} alt='' />}
                                tag="div"
                                fields=""
                                cookie="false"
                                onFailure={this.failFacebook}
                                callback={this.responseFacebook} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
