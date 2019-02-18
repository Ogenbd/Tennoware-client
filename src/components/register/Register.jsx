import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import './Register.css';

import apiUrl from '../../apiUrl';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captcha: undefined,
      user: undefined,
      pass: undefined,
      loading: false,
      error: undefined,
      credentialError: false
    }
    this.userInput = React.createRef();
    this.passInput = React.createRef();
  }

  captcha = (value) => {
    this.setState({ captcha: value });
  }

  credentialsBuffer = () => {
    if (this.state.captcha && !this.state.loading) {
      this.setState({ loading: true }, this.getCredentials())
    }
  }

  getCredentials = () => {
    fetch(`${apiUrl}/credentials`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ captcha: this.state.captcha })
    })
      .then(res => {
        if (res.status === 200) {
          res.json().then(res => {
            this.setState({
              user: res.cred.id,
              pass: res.cred.pass,
              loading: false
            });
          });
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

  centerIt = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
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
            credentialError: true
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
      <React.Fragment>
        <Helmet>
          <title>Tennoware - register</title>
        </Helmet>
        <div className="top-title"><p>REGISTER</p></div>
        <div className="screen">
          <div></div>
          <div className="register">
            <div className="register-window">
              <div className="request-blurb">
                <p>Tennoware does not ask for or save any personal data. When you request an account randominzed credentials will be generated for you. Due to not wanting to save any personal information we can not provide a way to recover an account or lost credentials. If you wish to register a recoverable account consider logging in with the Google/Facebook option.</p>
              </div>
              {this.state.error &&
                <div className="request-blurb">
                  <p className="cred-error">{this.state.error}</p>
                </div>
              }
              {this.state.user
                ? <div className="account-section">
                  <div className="generated-account">
                    <p className="cred-warning">Save these credentials! Once you leave this page they no longer appear anywhere.</p>
                    <p>User: <span className="success-login">{this.state.user}</span></p>
                    <p>Password: <span className="success-login">{this.state.pass}</span></p>
                  </div>
                  {this.props.user
                    ? <div className="success-login">Successfully Logged In!</div>
                    : <React.Fragment>
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
                      {this.state.credentialError
                        ? <div className="cred-error">Incorrect Username/Password</div>
                        : <div className="cred-error"></div>
                      }
                      <div className="interactable interactable-semi-inactive" onClick={this.authenticate}>
                        {this.state.loading
                          ? <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                          </div>
                          : <p className="interactable-p">Login</p>
                        }
                      </div>
                    </React.Fragment>
                  }
                </div>
                : <React.Fragment>
                  <div className="account-section">
                    {this.state.error
                      ? <div className="register-error">{this.state.error}</div>
                      : <div className="captcha-wrapper">
                        <ReCAPTCHA
                          sitekey="6LdG_4EUAAAAAND1KAXOlkD7XU6EAc_Gf9ylVLaD"
                          onChange={this.captcha}
                          theme="dark"
                          size="compact"
                        />
                      </div>
                    }
                  </div>
                  <div className={this.state.captcha ? 'interactable interactable-semi-inactive cred-button' : 'uninteractable interactable-inactive no-pointer cred-button'} onClick={this.credentialsBuffer}>
                    {this.state.loading
                      ? <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                      : <p className="interactable-p">Get Credentials</p>
                    }
                  </div>
                </React.Fragment>
              }
            </div>
          </div>
          <div></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Register;
