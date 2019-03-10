import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BuildList.css';

import apiUrl from '../../apiUrl';
import ContainedLoading from '../loading/ContainedLoading';
import Rating from '../rating/Rating';

const updateTimesImport = () => import('../../data/updatetimes' /* webpackChunkName: "upst" */);

export class BuildList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBuildList: false,
            builds: [],
            requested: false,
            loader: false,
            error: null,
            focusedIdx: null,
            buildDesc: '',
            buildName: ''
        }
    }

    showBuildList = () => {
        document.body.classList.add('noscroll');
        if (this.state.requested) {
            this.setState({
                showBuildList: true,
            });
        } else {
            this.setState({
                showBuildList: true,
                loader: true
            });
            this.requestBuilds();
        }
    }

    hideBuildList = () => {
        document.body.classList.remove('noscroll');
        this.setState({
            showBuildList: false,
            focusedIdx: null
        });
    }

    requestBuilds = () => {
        // fix url
        fetch(`${apiUrl}/getbuilds`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ itemName: this.props.match.params.id, type: this.props.type })
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(res => {
                        this.sortBuilds(res)
                    });
                } else {
                    this.setState({
                        requested: true,
                        loader: false,
                        error: 'Server error! Please try again later.'
                    })
                }
            })
            .catch(() => {
                this.setState({
                    requested: true,
                    loader: false,
                    error: 'Unable to connect to Tennoware server! Please try again later.'
                })
            });
    }

    sortBuilds = (builds) => {
        if (builds.length > 0) {
            updateTimesImport().then(data => {
                builds.forEach(buildsItem => {
                    let updateTimeIndex = data.default.findIndex(item => {
                        return item.name === this.props.match.params.id
                    });
                    if (updateTimeIndex === -1 || data.default[updateTimeIndex].updated < Date.parse(buildsItem.CreateDT)) {
                        buildsItem.outdated = false;
                    } else {
                        buildsItem.outdated = true;
                    }
                })
                builds.sort((a, b) => {
                    let dateA = Date.parse(a.CreateDT)
                    let dateB = Date.parse(b.CreateDT)
                    if (a.Rating < b.Rating) return 1
                    if (a.Rating > b.Rating) return -1
                    if (dateA < dateB) return 1
                    if (dateA > dateB) return -1
                    return 0;
                });
                this.setState({
                    builds: builds,
                    requested: true,
                    loader: false
                });
            });
        } else {
            this.setState({
                builds: builds,
                requested: true,
                loader: false
            });
        }
    }

    generateBuildList = () => {
        let builds = [];
        this.state.builds.forEach((build, index) => {
            let date = new Date(build.CreateDT).toLocaleDateString();
            let orokinStr;
            let riven;
            build.Orokin === 1 ? orokinStr = this.props.orokin : orokinStr = require('../../assets/general/nocatalyst.png');
            build.Riven === 1 ? riven = require('../../assets/general/rivenon.png') : riven = require('../../assets/general/rivenoff.png');
            builds.push(
                <div key={index} className="build-list-item">
                    <div className="build-item-row name-row">
                        <div className="build-list-name">{build.BuildName}</div>
                        {build.outdated
                            ? <div className="my-build-outdated">Possibly Outdated</div>
                            : <div className="build-list-date">{date}</div>
                        }
                    </div>
                    <div className="build-item-row info-row">
                        <img className="build-list-img" src={orokinStr} alt={"orokin"} />
                        <div className="build-list-forma-block"><img className="build-list-img" src={require('../../assets/general/forma.png')} alt={""} /><p>: {build.Forma}</p></div>
                        {this.props.riven &&
                            <img className="build-list-img" src={riven} alt={"riven"} />
                        }
                    </div>
                    <div className="build-item-row info-row">
                        <div style={{ width: '50%' }}>
                            {build.Rating
                                ? <div><Rating readOnly rating={build.Rating} /><p className="vote-num">{`(Based on ${build.Rated} votes)`}</p></div>
                                : <div className="vote-num"><p>No user ratings.</p></div>
                            }
                        </div>
                        <div style={{ width: '50%' }}>
                            {build.BuildDesc.length > 0
                                ? <div className="interactable interactable-semi-inactive" onClick={() => this.showDescription(index)}><p className="interactable-p">Description</p></div>
                                : <div className="uninteractable interactable-inactive"><p className="interactable-p">Description</p></div>
                            }
                            {build.BuildID === parseInt(this.props.match.params.build, 10)
                                ? <div className="uninteractable interactable-inactive"><p className="interactable-p">Open</p></div>
                                : <Link to={`/${this.props.type}/${this.props.match.params.id}/${build.BuildStr}/${build.BuildID}`}><div className="interactable interactable-semi-inactive" ><p className="interactable-p">Open</p></div></Link>
                            }
                        </div>
                    </div>
                </div>
            )
        })
        if (builds.length === 0) {
            builds.push(
                <div key={1} className="no-builds-wrapper">
                    <p className="no-builds">
                        There are no public community builds for {this.props.match.params.id.toUpperCase()} yet. If you can suggest a good build please do so by creating and saving it as a public build!
                    </p>
                </div>
            )
        }
        return builds;
    }

    showDescription = (buildIdx) => {
        this.setState({
            focusedIdx: buildIdx,
            buildName: this.state.builds[buildIdx].BuildName,
            buildDesc: this.state.builds[buildIdx].BuildDesc
        });
    }

    hideDescription = () => {
        this.setState({
            focusedIdx: null
        });
    }

    render() {
        let buildList = this.generateBuildList()
        return (
            <React.Fragment>
                <div className="interactable interactable-semi-inactive" onClick={this.showBuildList}><p className="interactable-p">Community Builds</p></div>
                <div className={"popup " + (this.state.showBuildList ? "popup-active" : "popup-inactive")}>
                    <div className={"popup-topbar " + (this.state.showBuildList ? "popup-active" : "popup-inactive")}>
                        <div className="popup-x" onClick={this.hideBuildList}>
                            <div className="popup-x-bar one-bar"></div>
                            <div className="popup-x-bar two-bar"></div>
                        </div>
                        <div className="topbar-title">
                            <p>Community Builds</p>
                        </div>
                    </div>
                    {this.state.loader
                        ? <div className="popup-content">
                            <ContainedLoading />
                        </div>
                        : <React.Fragment>
                            {this.state.error === null
                                ? <div className="popup-content build-list">
                                    {buildList}
                                </div>
                                : <div className="popup-content build-list">
                                    <div className="no-builds-wrapper">
                                        <p className="no-builds">
                                            {this.state.error}
                                        </p>
                                    </div>
                                </div>
                            }
                        </React.Fragment>
                    }
                    <div className="list-desc" style={this.state.focusedIdx !== null ? { opacity: 1, zIndex: 9112 } : { opacity: 0, zIndex: -1, transitionDelay: '0s, 0.2s' }}>
                        <div className="list-desc-box">
                            {this.state.buildDesc.length > 0 &&
                                <React.Fragment>
                                    <div className="build-title">{this.state.buildName}</div>
                                    <div className="build-description-box">{this.state.buildDesc}</div>
                                    <div className="interactable interactable-semi-inactive" onClick={this.hideDescription}><p className="interactable-p">Done</p></div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BuildList
