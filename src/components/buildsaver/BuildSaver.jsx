import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './BuildSaver.css';


// still needs error handling and defering to like button


export class BuildSaver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBuildSaver: false,
            exact: false,
            private: false,
            buildName: '',
            buildDesc: ''
        }
    }

    componentDidMount() {
        if (this.props.metaInfo.Owner) {
            let isPrivate = this.props.metaInfo.Private ? true : false
            this.setState({
                private: isPrivate,
                buildName: this.props.metaInfo.BuildName,
                buildDesc: this.props.metaInfo.BuildDesc
            });
        }
    }

    showBuildSaver = () => {
        document.body.classList.add('noscroll');
        let exact = false;
        if (this.props.match.params.build) {
            let buildState = this.props.getBuildStr();
            if (buildState.buildStr === this.props.match.params.pre && !this.props.metaInfo.Owner) exact = true;
        }
        this.setState({
            showBuildSaver: true,
            exact: exact
        });
    }

    hideBuildSaver = () => {
        document.body.classList.remove('noscroll');
        this.setState({
            showBuildSaver: false
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

    saveBuild = () => {
        if (this.state.buildName.length < 12) {

        } else {
            let buildState = this.props.getBuildStr()
            let buildData = {
                orokin: this.props.orokin,
                forma: this.props.formaCount,
                user: this.props.user,
                buildStr: buildState.buildStr,
                riven: buildState.riven,
                private: this.state.private,
                buildName: this.state.buildName,
                buildDesc: this.state.buildDesc,
                item: this.props.match.params.id
            }
            this.state.private ? buildData.private = 1 : buildData.private = 0;
            this.props.orokin ? buildData.orokin = 1 : buildData.orokin = 0;
            if (this.props.match.params.build && this.props.metaInfo.Owner) {
                buildData.buildId = this.props.match.params.build;
                // fix url
                fetch('http://192.168.1.114:50000/updatebuild', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(buildData)
                })
                    .then(res => res.json())
                    .then(({ res }) => {
                        this.redirectToSaved(buildData, buildData.buildId);
                    })
                    .catch(err => {
                        console.log('error')
                    });
            } else {
                // fix url
                fetch('http://192.168.1.114:50000/savebuild', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(buildData)
                })
                    .then(res => res.json())
                    .then(({ res }) => {
                        this.redirectToSaved(buildData, res);
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }
        }
    }

    redirectToSaved = (buildData, buildId) => {
        // fix url
        let newUrl = `/${this.props.type}/${this.props.match.params.id}/${buildData.buildStr}/${buildId}`;
        document.body.classList.remove('noscroll');
        this.props.history.push(newUrl, { req: true });
    }

    stopPropagation = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            <React.Fragment>
                <div className="interactable interactable-semi-inactive" onClick={this.showBuildSaver}>
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
                        {this.state.exact &&
                            <div className="exact-build">This exact build was already saved by another community member. Consider liking this build, it will be added to your My Builds list.</div>
                        }
                        {!this.state.exact &&
                            <React.Fragment>
                                <div className="check-private">
                                    <div className={"activatable " + (this.state.private ? "interactable-inactive" : "interactable-active")} onClick={this.makePublic}>
                                        <p className="interactable-p">Public</p>
                                    </div>
                                    <div className={"activatable " + (this.state.private ? "interactable-active" : "interactable-inactive")} onClick={this.makePrivate}>
                                        <p className="interactable-p">Private</p>
                                    </div>
                                </div>
                                <label className="build-label build-name" name="build-name">
                                    <p>Build Name</p>
                                    <input className="build-input" name="build-name" type="text" spellCheck="false" placeholder="Minimum 8 characters" value={this.state.buildName} onChange={this.handleBuildName} />
                                </label>
                                <label className="build-label build-desc" name="build-desc">
                                    <p>Build Description</p>
                                    <textarea className="build-input build-desc-box" name="build-desc" type="text" spellCheck="false" placeholder="Optional" value={this.state.buildDesc} onChange={this.handleBuildDesc} />
                                </label>
                                <div className="interactable interactable-semi-inactive" onClick={this.saveBuild}>
                                    <p className="interactable-p">Save</p>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(BuildSaver);
