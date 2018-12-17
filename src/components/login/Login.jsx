import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './Login.css';
import '../../general.css';

import apiUrl from '../../apiUrl';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputScreen: false
        }
        this.userInput = React.createRef();
        this.passInput = React.createRef();
    }

    login = (id) => {
        let data = JSON.stringify({ id: id })
        fetch(`${apiUrl}/login`, {
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
        // console.log(response);
    }

    failFacebook = (response) => {
        // console.log(response);
    }

    localLogin = () => {
        this.setState({ inputScreen: true });
    }

    backItUp = () => {
        this.setState({ inputScreen: false });
    }

    passToPass = ({ key }) => {
        if (key === 'Enter') {
            this.passInput.current.focus();
        }
    }

    ifEnter = ({ key }) => {
        if (key === 'Enter') {
            this.authenticate();
        }
    }

    centerIt = ({ target }) => {
        setTimeout(() => {
            target.closest('.login-content').scrollTop = target.offsetTop;
        }, 400);
    }

    authenticate = () => {
        fetch(`${apiUrl}/customlogin`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: this.userInput.current.value, pass: this.passInput.current.value })
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(res => {
                        this.props.logUser(res)
                    });
                } else if (res.status === 403) {
                    this.setState({
                        loading: false,
                        error: 'Incorrect Username/Password'
                    })
                } else {
                    this.setState({
                        loading: false,
                        error: 'Server error! Please try again later.'
                    })
                }
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: 'Unable to connect to Tennoware server! Please try again later.'
                })
            });
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
                            {this.state.inputScreen
                                ? <div className="back-block" onClick={this.backItUp}>
                                    <img src={require('../../assets/general/back-arrow.png')} alt="" />
                                    <p>Back</p>
                                </div>
                                : <div className="popup-x login-x" onClick={this.props.hideLogin}>
                                    <div className="popup-x-bar one-bar login-bar"></div>
                                    <div className="popup-x-bar two-bar login-bar"></div>
                                </div>
                            }
                        </div>
                        <div className="consentorama"><p>This Web App uses <a className="wiki-link" href="https://en.wikipedia.org/wiki/HTTP_cookie">Cookies</a> (for Third Party logins) and <a className='wiki-link' href="https://en.wikipedia.org/wiki/JSON_Web_Token">Json Web Tokens</a> in order to provide a modern browsing experience.</p></div>
                        <div className="consentorama"><p>By logging in you accept the use of cookies and JWTs.</p></div>
                        {this.state.inputScreen
                            ? <div className="auth-wrapper">
                                {this.state.error
                                    ? <div className="login-error">{this.state.error}</div>
                                    : <div className="login-error"></div>
                                }
                                <div className="login-input">
                                    <label htmlFor="user"></label>
                                    <div className="search-wrapper">
                                        <input ref={this.userInput} id="user" className="search" type="text" placeholder="User ID" onKeyUp={this.passToPass} onFocus={this.centerIt} />
                                    </div>
                                </div>
                                <div className="login-input">
                                    <label htmlFor="pswrd"></label>
                                    <div className="search-wrapper">
                                        <input ref={this.passInput} id="pswrd" className="search" type="password" placeholder="Password" onKeyUp={this.ifEnter} onFocus={this.centerIt} />
                                    </div>
                                </div>
                                <div className="interactable interactable-semi-inactive" onClick={this.authenticate}><p className="interactable-p">Login</p></div>
                                <div className="register-blurb">Dont have an account? <Link onClick={this.props.hideLogin} className="wiki-link" to={'/register'}>Register Here</Link>.</div>
                            </div>
                            : <div className="auth-wrapper">
                                <GoogleLogin
                                    // clientId="739460553448-jgjkog0elfmiivoclc482h8bnl52p7gv.apps.googleusercontent.com" // dev
                                    clientId="447751559919-plpvda85naihs6is6chim2u9jnd3ult1.apps.googleusercontent.com" // prod
                                    className="auth-button google"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.failGoogle}
                                    fetchBasicProfile={false}
                                    tag="div"
                                    theme="dark"
                                >
                                    <img src={require('../../assets/general/googleicon.png')} alt='' />
                                    <span> Login with Google</span>
                                </GoogleLogin>
                                <FacebookLogin
                                    // appId="707507742959348" //dev
                                    appId="713698015671816" // prod
                                    cssClass="auth-button facebook"
                                    icon={<img src={require('../../assets/general/facebookicon.png')} alt='' />}
                                    tag="div"
                                    fields=""
                                    cookie="false"
                                    onFailure={this.failFacebook}
                                    callback={this.responseFacebook} />
                                <div to='/tennowarelogin' className="auth-button local-login" onClick={this.localLogin}>
                                    <div className="tennoware-t">T</div>
                                    <div className="create-button">Login/Create Account</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
