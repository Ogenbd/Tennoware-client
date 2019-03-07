import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './ModularBuildList.css';
import '../builddescription/BuildDescription.css';

import apiUrl from '../../apiUrl';
import ContainedLoading from '../loading/ContainedLoading';
import Rating from '../rating/Rating';

export class ModularBuildList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showBuildList: false,
            builds: [],
            requested: false,
            loader: false,
            error: null,
            first: '',
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
            showBuildList: false
        });
    }

    requestBuilds = () => {
        fetch(`${apiUrl}/getcat`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: this.props.type })
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(res => {
                        this.sortBuilds(res);
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
            builds.sort((a, b) => {
                let dateA = Date.parse(a.CreateDT)
                    let dateB = Date.parse(b.CreateDT)
                    if (a.Rating < b.Rating) return 1
                    if (a.Rating > b.Rating) return -1
                    if (dateA < dateB) return 1
                    if (dateA > dateB) return -1
                    return 0;
            });
        }
        this.setState({
            builds: builds,
            requested: true,
            loader: false
        });
    }

    setFirst = (name) => {
        this.state.first === name
            ? this.setState({
                first: ''
            })
            : this.setState({
                first: name
            });
    }

    generateList = () => {
        let display = [];
        if (this.state.builds.length > 0) {
            let generatedList = this.state.builds.slice(0);
            generatedList.forEach((item, index) => {
                let parts = item.ItemName.split(' ');
                if (this.props.type === 'zaws') {
                    if (parts[0] === 'plague') {
                        parts.shift();
                        parts[0] = `plague ${parts[0]}`;
                    }
                    if (parts[1] === 'plague') {
                        parts.splice(1, 1);
                        parts[1] = `plague ${parts[1]}`
                    }
                    if (parts.length === 4) {
                        parts[2] = `${parts[2]} ${parts[3]}`
                        parts.splice(3, 1);
                    } else if (parts.length === 5) {
                        parts[2] = `${parts[2]} ${parts[3]} ${parts[4]}`
                        parts.splice(3, 2);
                    }
                }
                let firstImg = this.props.items.first.findIndex(part => {
                    return part.name.toLowerCase() === parts[0].toLowerCase();
                });
                let secondImg = this.props.items.second.findIndex(part => {
                    return part.name.toLowerCase() === parts[1].toLowerCase();
                });
                let thirdImg = this.props.items.third.findIndex(part => {
                    return part.name.toLowerCase() === parts[2].toLowerCase();
                });
                let orokinImg;
                let hasRivens;
                let riven;
                let date = new Date(item.CreateDT).toLocaleDateString();
                item.Orokin === 1 ? orokinImg = this.props.orokin : orokinImg = require('../../assets/general/nocatalyst.png');
                item.Riven === 1 ? riven = require('../../assets/general/rivenon.png') : riven = require('../../assets/general/rivenoff.png');
                this.props.type !== 'moas' ? hasRivens = true : hasRivens = false;
                display.push(
                    <div key={index} className="build-container" style={this.state.first === '' ? {} : parts[0] === this.state.first.toLowerCase() ? {} : { display: 'none' }}>
                        <div className="modular-build-list-item">
                            <div className="build-item-row name-row">
                                <div className="build-list-name">{item.BuildName}</div>
                                <div className="build-list-date">{date}</div>
                            </div>
                            <div className="build-item-row info-row">
                                <img className="build-list-img" src={orokinImg} alt={"orokin"} />
                                <div className="build-list-forma-block"><img className="build-list-img" src={require('../../assets/general/forma.png')} alt={""} /><p>: {item.Forma}</p></div>
                                {hasRivens &&
                                    <img className="build-list-img" src={riven} alt={"riven"} />
                                }
                            </div>
                            <div className="build-item-row info-row">
                                <div className="filter-icon">
                                    <img className="filter-icon-img" src={this.props.items.first[firstImg].img} alt="" />
                                    <div className="filter-icon-name"><p>{this.props.items.first[firstImg].name.toUpperCase()}</p></div>
                                </div>
                                <div className="filter-icon">
                                    <img className="filter-icon-img" src={this.props.items.second[secondImg].img} alt="" />
                                    <div className="filter-icon-name"><p>{this.props.items.second[secondImg].name.toUpperCase()}</p></div>
                                </div>
                                <div className="filter-icon">
                                    <img className="filter-icon-img" src={this.props.items.third[thirdImg].img} alt="" />
                                    <div className="filter-icon-name"><p>{this.props.items.third[thirdImg].name.toUpperCase()}</p></div>
                                </div>
                            </div>
                            <div className="build-item-row info-row">
                                <div style={{ width: '50%' }}>
                                    {item.Rating
                                        ? <div><Rating readOnly rating={item.Rating} /><p className="vote-num">{`(Based on ${item.Rated} votes)`}</p></div>
                                        : <div className="vote-num"><p>No user ratings.</p></div>
                                    }
                                </div>
                                <div style={{ width: '50%' }}>
                                    {item.BuildDesc.length > 0
                                        ? <div className="interactable interactable-semi-inactive" onClick={() => this.showDescription(index)}><p className="interactable-p">Description</p></div>
                                        : <div className="uninteractable interactable-inactive"><p className="interactable-p">Description</p></div>
                                    }
                                    <Link to={`/${this.props.type}/${item.ItemName}/${item.BuildStr}/${item.BuildID}`}><div className="interactable interactable-semi-inactive" ><p className="interactable-p">Open</p></div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        } else {
            display.push(
                <div key={1} className="no-builds-wrapper">
                    <p className="no-builds">
                        There are no public community builds for {this.props.type.toUpperCase()} yet. If you can suggest a good build please do so by creating and saving it as a public build!
                    </p>
                </div>
            )
        }
        return display;
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
        let buildList = this.generateList();
        return (
            <React.Fragment>
                <div className="interactable interactable-semi-inactive build-list-button" onClick={this.showBuildList}><p className="interactable-p">Community Builds</p></div>
                <div className={"popup " + (this.state.showBuildList ? "popup-active" : "popup-inactive")}>
                    <div className={"modular-popup-topbar " + (this.state.showBuildList ? "popup-active" : "popup-inactive")}>
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
                        : <div className="popup-content modular-build-list">
                            {this.props.type === 'kitguns' &&
                                <div className="filter-icon-wrapper">
                                    {this.props.items.first.map((item, index) => (
                                        <div key={index} className={"interactable filter-icon " + (this.state.first === item.name ? "interactable-active" : "interactable-inactive")} onClick={() => { this.setFirst(item.name) }}>
                                            <img className="filter-icon-img" src={item.img} alt={item.name} />
                                            <div className="filter-icon-name">{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            }
                            {this.state.error === null
                                ? <div className="modular-build-list-wrapper">
                                    {buildList}
                                </div>
                                : <div className="modular-build-list-wrapper">
                                    <div className="no-builds-wrapper">
                                        <p className="no-builds">
                                            {this.state.error}
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
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

export default ModularBuildList
