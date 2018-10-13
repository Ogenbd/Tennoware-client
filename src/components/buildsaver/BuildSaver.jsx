import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './BuildSaver.css';

export class BuildSaver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            private: false,
            buildName: '',
            buildDesc: ''
        }
    }

    componentDidMount() {
        if (this.props.metaInfo.UserID) {
            let isPrivate = this.props.metaInfo.Private ? true : false
            this.setState({
                private: isPrivate,
                buildName: this.props.metaInfo.BuildName,
                buildDesc: this.props.metaInfo.BuildDesc
            });
        }
    }

    hideBuildSaver = () => {
        this.props.hideBuildSaver();
    }

    togglePrivate = () => {
        this.setState(prevState => ({
            private: !prevState.private
        }));
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
            let buildData = {
                orokin: this.props.orokin,
                forma: this.props.formaCount,
                user: this.props.user,
                buildStr: this.props.buildStr,
                private: this.state.private,
                buildName: this.state.buildName,
                buildDesc: this.state.buildDesc,
                item: this.props.match.params.id
            }
            buildData.buildStr[41] === 'x' ? buildData.riven = 1 : buildData.riven = 0;
            this.state.private ? buildData.private = 1 : buildData.private = 0;
            this.props.orokin ? buildData.orokin = 1 : buildData.orokin = 0;
            if (this.props.match.params.build && this.props.metaInfo.UserID) {
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
                        console.log('error')
                    });
            }
        }
    }

    redirectToSaved = (buildData, buildId) => {
        let type = this.props.match.url.split('/', 2);
        // fix url
        let newUrl = `/${type[1]}/${this.props.match.params.id}/${buildData.buildStr}/${buildId}`;
        this.props.history.push(newUrl, { req: true });
    }

    stopPropagation = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            // <div className={"dark-bg " + (this.props.buildSaver ? "show-dark-bg" : "hide-dark-bg")} onClick={this.hideBuildSaver}>
            // <div className="build-saver-window" onClick={this.stopPropagation}>
            <div className={"popup " + (this.props.buildSaver ? "popup-active" : "popup-inactive")}>
                <div className={"popup-topbar " + (this.props.buildSaver ? "popup-active" : "popup-inactive")}>
                    <div className="popup-x" onClick={this.hideBuildSaver}>
                        <div className="popup-x-bar one-bar"></div>
                        <div className="popup-x-bar two-bar"></div>
                    </div>
                </div>
                <div className="popup-content build-saver">
                    <label className="check-private" name="private">
                        <p>Private?</p>
                        <input name="private" type="checkbox" value={this.state.private} onChange={this.togglePrivate} />
                    </label>
                    <label className="build-name-input-label" name="build-name">
                        <p>Build Name</p>
                        <input className="build-name-input" name="build-name" type="text" placeholder="Build Name" value={this.state.buildName} onChange={this.handleBuildName} />
                    </label>
                    <label className="build-name-input-label" name="build-desc">
                        <p>Build Description</p>
                        <textarea className="build-name-input build-desc-box" name="build-desc" type="text" placeholder="Build Description" value={this.state.buildDesc} onChange={this.handleBuildDesc} />
                    </label>
                    <div className="interactable interactable-semi-inactive" onClick={this.saveBuild}>
                        <p className="interactable-p">Save</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BuildSaver)
