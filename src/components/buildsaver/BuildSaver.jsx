import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './BuildSaver.css';

export class BuildSaver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            private: false,
            buildName: '',
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
        })
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
                item: this.props.match.params.id
            }
            buildData.buildStr[41] === 'x' ? buildData.riven = 1 : buildData.riven = 0;
            this.state.private ? buildData.private = 1 : buildData.private = 0;
            this.props.orokin ? buildData.orokin = 1 : buildData.orokin = 0;
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

    redirectToSaved = (buildData, buildId) => {
        console.log(buildId);
        // fix url
        let newUrl = `/${this.props.type}/${this.props.match.params.id}/${buildData.buildStr}/${this.props.user}/${buildId}`;
        this.props.history.push(newUrl);
    }

    stopPropagation = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            <div className={"dark-bg " + (this.props.buildSaver ? "show-dark-bg" : "hide-dark-bg")} onClick={this.hideBuildSaver}>
                <div className="build-saver-window" onClick={this.stopPropagation}>
                    <input type="checkbox" value={this.state.private} onChange={this.togglePrivate} />
                    <input type="text" placeholder="Build Name" value={this.state.buildName} onChange={this.handleBuildName} />
                    <div className="build-action" onClick={this.saveBuild}>
                        <p className="build-action-text">Save</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BuildSaver)
