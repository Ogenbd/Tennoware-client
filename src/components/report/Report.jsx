import React, { Component } from 'react';
import './Report.css';

import apiUrl from '../../apiUrl';

export class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showReport: false,
            complaint: null,
            loading: false,
            error: null,
        }
    }

    showReport = () => {
        this.setState({
            showReport: true
        });
    }

    hideReport = () => {
        this.setState({
            showReport: false
        });
    }

    setComplaint = (number) => {
        this.setState({
            complaint: number
        });
    }

    submitReport = () => {
        if (this.state.complaint !== null) {
            this.setState({
                loading: true
            })
            let token = localStorage.getItem('jwt');
            // fix url
            fetch(`${apiUrl}/report`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
                body: JSON.stringify({
                    build: this.props.match.params.build,
                    user: this.props.user,
                    complaint: this.state.complaint
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            error: 'Report submitted.',
                            loading: false
                        });
                    } else if (res.status === 409) {
                        this.setState({
                            error: 'You have already submitted a report for this build.',
                            loading: false
                        })
                    } else if (res.status === 401) {
                        this.props.history.replace('/unauthorized');
                    } else {
                        this.setState({
                            error: 'Server error! Please try again later.',
                            loading: false
                        })
                    }
                })
                .catch(() => {
                    this.setState({
                        error: 'Unable to connect to Tennoware server! Please try again later.',
                        loading: false
                    })
                });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="interactable interactable-semi-inactive report-button" onClick={this.showReport}>
                    <p className="interactable-p">Report</p>
                </div>
                <div className={"popup " + (this.state.showReport ? "popup-active" : "popup-inactive")}>
                    <div className={"popup-topbar " + (this.state.showReport ? "popup-active" : "popup-inactive")}>
                        <div className="popup-x" onClick={this.hideReport}>
                            <div className="popup-x-bar one-bar"></div>
                            <div className="popup-x-bar two-bar"></div>
                        </div>
                    </div>
                    <div className="popup-content build-report">
                        {this.state.error !== null
                            ? <div className="error-box">
                                <p className="error-text">{this.state.error}</p>
                                <div className="interactable interactable-semi-inactive" onClick={this.hideReport}><p className="interactable-p">OK</p></div>
                            </div>
                            : <React.Fragment>
                                <div className="report-par">
                                    <p>Select the reason you wish to report this build for.</p>
                                </div>
                                <div className="reasons">
                                    <div className={"activatable " + (this.state.complaint === 1 ? "interactable-active" : "interactable-inactive")} onClick={() => { this.setComplaint(1) }}>
                                        <p className="interactable-p">Troll/Joke public build</p>
                                    </div>
                                    <div className={"activatable " + (this.state.complaint === 2 ? "interactable-active" : "interactable-inactive")} onClick={() => { this.setComplaint(2) }}>
                                        <p className="interactable-p">Offensive language</p>
                                    </div>
                                    <div className={"activatable " + (this.state.complaint === 3 ? "interactable-active" : "interactable-inactive")} onClick={() => { this.setComplaint(3) }}>
                                        <p className="interactable-p">Undescriptive build name</p>
                                    </div>
                                </div>
                                <div className={(this.state.complaint ? "interactable interactable-semi-inactive submit-report-button" : "uninteractable interactable-inactive submit-report-button")} onClick={this.submitReport}>
                                    {this.state.loading
                                        ? <div className="spinner gold-spinner">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                        : <p className="interactable-p">Submit</p>
                                    }
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Report;
