import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './BuildSaver.css';


// still needs error handling and defering to like button


export class BuildSaver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBuildSaver: false,
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
        this.setState({
            showBuildSaver: true
        });
    }

    hideBuildSaver = () => {
        document.body.classList.remove('noscroll');
        this.setState({
            showBuildSaver: false
        });
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
                    {!this.props.metaInfo.Owner &&
                        <p className="interactable-p">Save</p>
                    }
                    {this.props.metaInfo.Owner &&
                        <p className="interactable-p">Update</p>
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
            </React.Fragment>
        )
    }
}

export default withRouter(BuildSaver);
