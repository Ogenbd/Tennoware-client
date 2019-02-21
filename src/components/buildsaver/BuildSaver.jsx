import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './BuildSaver.css';

import apiUrl from '../../apiUrl';

export class BuildSaver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBuildSaver: false,
            exact: false,
            error: null,
            loading: false,
            inputError: null,
            buildName: '',
            buildDesc: ''
        }
    }

    componentDidMount() {
        if (this.props.metaInfo.Owner) {
            let isPrivate = this.props.metaInfo.Private ? true : false
            this.setState({
                buildName: this.props.metaInfo.BuildName,
                buildDesc: this.props.metaInfo.BuildDesc
            });
        }
    }

    showBuildSaver = () => {
        if (this.props.slottedAmount > 0) {
            document.body.classList.add('noscroll');
            let error = null;
            if (this.props.match.params.build) {
                let buildState = this.props.getBuildStr();
                if (buildState.buildStr === this.props.match.params.pre && !this.props.metaInfo.Owner) error = 'This exact build was already saved by another community member. Consider liking this build, it will be added to your "My Builds" list.';
            }
            this.setState({
                showBuildSaver: true,
                error: error,
            });
        }
    }

    hideBuildSaver = () => {
        document.body.classList.remove('noscroll');
        this.setState({
            showBuildSaver: false,
            error: null
        });
    }

    makePrivate = () => {
        this.setState({
            private: true
        });
    }

    makePublic = () => {
        this.setState({
            private: false
        });
    }

    handleBuildName = ({ target }) => {
        this.setState({
            buildName: target.value
        });
    }

    handleBuildDesc = ({ target }) => {
        this.setState({
            buildDesc: target.value
        });
    }

    saveBuild = (isPrivate) => {
        if (!this.state.loading) {
            if (this.state.buildName.length < 8) {
                this.setState({
                    inputError: 'name'
                });
                setTimeout(() => {
                    this.setState({
                        inputError: null
                    });
                }, 5000);
            } else {
                this.setState({
                    loading: true
                });
                let buildState = this.props.getBuildStr()
                let buildData = {
                    orokin: this.props.orokin,
                    forma: this.props.formaCount,
                    buildStr: buildState.buildStr,
                    riven: buildState.riven,
                    private: isPrivate,
                    buildName: this.state.buildName,
                    buildDesc: this.state.buildDesc,
                    item: decodeURIComponent(this.props.match.params.id),
                    type: this.props.type
                }
                this.props.orokin ? buildData.orokin = 1 : buildData.orokin = 0;
                let token = localStorage.getItem('jwt');
                if (this.props.match.params.build && this.props.metaInfo.Owner) {
                    buildData.buildId = this.props.match.params.build;
                    fetch(`${apiUrl}/updatebuild`, {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
                        body: JSON.stringify(buildData)
                    })
                        .then(res => {
                            if (res.status === 200) {
                                res.json().then(() => {
                                    this.setState({
                                        error: 'Build saved.',
                                        buildData: buildData,
                                        buildId: buildData.buildId,
                                        loading: false
                                    })
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
                        .catch(err => {
                            this.setState({
                                error: 'Unable to connect to Tennoware server! Please try again later.',
                                loading: false
                            })
                        });
                } else {
                    fetch(`${apiUrl}/savebuild`, {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
                        body: JSON.stringify(buildData)
                    })
                        .then(res => {
                            if (res.status === 200) {
                                res.json().then(({ res }) => {
                                    this.setState({
                                        error: 'Build saved.',
                                        buildData: buildData,
                                        buildId: res,
                                        loading: false
                                    })
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
                        .catch(err => {
                            this.setState({
                                error: 'Unable to connect to Tennoware server! Please try again later.',
                                loading: false
                            })
                        });
                }
            }
        }
    }

    okClick = () => {
        this.hideBuildSaver();
        if (this.state.error === 'Build saved.') {
            document.body.classList.remove('noscroll');
            this.redirectToSaved(this.state.buildData, this.state.buildId);
        }
    }

    redirectToSaved = (buildData, buildId) => {
        let newUrl = `/${this.props.type}/${decodeURIComponent(this.props.match.params.id)}/${buildData.buildStr}/${buildId}`;
        document.body.classList.remove('noscroll');
        this.props.history.push(newUrl);
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.props.slottedAmount > 0 ? 'interactable interactable-semi-inactive' : 'uninteractable interactable-inactive'} onClick={this.showBuildSaver}>
                    {this.props.metaInfo.Owner
                        ? <p className="interactable-p">Update</p>
                        : <p className="interactable-p">Save</p>
                    }
                </div>
                <div className={"popup " + (this.state.showBuildSaver ? "popup-active" : "popup-inactive")}>
                    <div className={"popup-topbar " + (this.state.showBuildSaver ? "popup-active" : "popup-inactive")}>
                        <div className="popup-x" onClick={this.hideBuildSaver}>
                            <div className="popup-x-bar one-bar"></div>
                            <div className="popup-x-bar two-bar"></div>
                        </div>
                    </div>
                    <div className="popup-content build-saver">
                        {this.state.error !== null &&
                            <div className="error-box">
                                <p className="error-text">{this.state.error}</p>
                                <div className="interactable interactable-semi-inactive" onClick={this.okClick}><p className="interactable-p">OK</p></div>
                            </div>
                        }
                        {!this.state.exact && this.state.error === null &&
                            <React.Fragment>
                                {/* <div className="save-box"> */}
                                <div className="public-saver">
                                    <p>Guidelines:</p>
                                    <ul>
                                        <li>Public builds must have a descriptive name in english.</li>
                                        <li>Private builds are still accessible to the public but do not show up in community builds lists. You can still share them by linking directly to them.</li>
                                        <li>Troll/joke builds should not be saved as public builds.</li>
                                        <li>Avoid using offensive language in a public build's name or description.</li>
                                        <li>Saved public builds might be privatized or deleted by a moderator if a user does not follow these very simple guidelines. Repeat offenders might lose the ability to save public builds or just get banned.</li>
                                    </ul>
                                </div>
                                <label className="build-label build-name" name="build-name">
                                    <p>Build Name</p>
                                    <input className={"build-input " + (this.state.inputError === 'name' ? 'error-border' : '')} name="build-name" type="text" spellCheck="false" placeholder="Minimum 8 characters" value={this.state.buildName} onChange={this.handleBuildName} />
                                </label>
                                <label className="build-label build-desc" name="build-desc">
                                    <p>Build Description</p>
                                    <textarea className="build-input build-desc-box" name="build-desc" type="text" spellCheck="false" placeholder="Optional" value={this.state.buildDesc} onChange={this.handleBuildDesc} />
                                </label>
                                <div className="check-private">
                                    <div className="interactable interactable-semi-inactive" onClick={() => { this.saveBuild(1) }}>
                                        {this.state.loading
                                            ? <div className="spinner gold-spinner">
                                                <div className="bounce1"></div>
                                                <div className="bounce2"></div>
                                                <div className="bounce3"></div>
                                            </div>
                                            : <p className="interactable-p">Save as Private</p>
                                        }
                                    </div>
                                    <div className="interactable interactable-semi-inactive" onClick={() => { this.saveBuild(0) }}>
                                        {this.state.loading
                                            ? <div className="spinner gold-spinner">
                                                <div className="bounce1"></div>
                                                <div className="bounce2"></div>
                                                <div className="bounce3"></div>
                                            </div>
                                            : <p className="interactable-p">Save as Public</p>
                                        }
                                    </div>
                                </div>
                                {/* <div className="interactable interactable-semi-inactive" onClick={this.saveBuild}>
                                    {this.state.loading
                                        ? <div className="spinner gold-spinner">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                        : <p className="interactable-p">Save</p>
                                    }
                                </div> */}
                                {/* </div> */}
                            </React.Fragment>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(BuildSaver);
