import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {
    login = () => {
        let data = JSON.stringify({ id: 1111111111111 })
        fetch('http://192.168.1.114:50000/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(res => res.json())
            .then(({ res }) => {
                this.props.logUser(res);
            })
    }

    render() {
        return (
            <div className={"login " + (this.props.showLogin ? "show-login" : "hide-login")}>
                <div className="login-box">
                    {/* <p className="login-title">Login</p> */}
                    <div className="build-action" onClick={this.login}>Sign in with pooper</div>
                </div>
            </div>
        )
    }
}

export default Login
