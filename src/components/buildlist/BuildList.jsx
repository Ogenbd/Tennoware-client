import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Link } from 'react-router-dom';
import './BuildList.css';

import Loading from '../loading/Loading';

export class BuildList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBuildList: false,
            builds: [],
            requested: false,
            loader: false,
            error: null,
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
            showBuildList: false
        });
    }

    requestBuilds = () => {
        // fix url
        fetch('http://192.168.1.114:50000/getbuilds', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ itemName: this.props.match.params.id })
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(res => {
                        this.setState({
                            builds: res,
                            requested: true,
                            loader: false
                        });
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

    generateBuildList = () => {
        let builds = [];
        if (this.state.builds.length > 0) {
            let sortedBuilds = cloneDeep(this.state.builds)
            sortedBuilds.sort((a, b) => {
                let dateA = Date.parse(a.CreateDT)
                let dateB = Date.parse(b.CreateDT)
                if (a.Likes < b.Likes) return 1
                if (a.Likes > b.Likes) return -1
                if (dateA < dateB) return 1
                if (dateA > dateB) return -1
                return 0;
            });
            sortedBuilds.forEach((build, index) => {
                let date = new Date(build.CreateDT).toLocaleDateString();
                let orokinStr;
                let riven;
                build.Orokin === 1 ? orokinStr = this.props.orokin : orokinStr = 'nocatalyst';
                build.Riven === 1 ? riven = 'rivenon' : riven = 'rivenoff';
                builds.push(
                    <Link to={`/${this.props.type}/${this.props.match.params.id}/${build.BuildStr}/${build.BuildID}`} key={index} className="build-list-item">
                        <div className="build-item-row name-row">
                            <div className="build-list-name">{build.BuildName}</div>
                            <div className="build-list-date">{date}</div>
                        </div>
                        <div className="build-item-row info-row">
                            <div className="build-list-likes">Likes: {build.Likes}</div>
                            <img className="build-list-img" src={require(`../../assets/${orokinStr}.png`)} alt={"orokin"} />
                            <div className="build-list-forma-block"><img className="build-list-img" src={require('../../assets/forma.png')} alt={""} /><p>: {build.Forma}</p></div>
                            {this.props.riven &&
                                <img className="build-list-img" src={require(`../../assets/${riven}.png`)} alt={"riven"} />
                            }
                        </div>
                    </Link>
                )
            })
        } else {
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
                        ? <Loading />
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
                </div>
            </React.Fragment>
        )
    }
}

export default BuildList
