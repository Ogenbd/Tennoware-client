import React, { Component } from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import { Helmet } from "react-helmet";
import cloneDeep from 'lodash/cloneDeep';
import '../../general.css';
import './MyBuilds.css';

import apiUrl from '../../apiUrl';
import Loading from '../loading/Loading';
import RightAd from '../adunits/RightAd';
import BottomAd from '../adunits/BottomAd';

const updateTimesImport = () => import('../../data/updatetimes' /* webpackChunkName: "upst" */);

export default class MyBuilds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arsenal: [],
            search: '',
            getting: true,
            unlike: false,
            delete: false,
            target: null,
            error: null
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('jwt');
        fetch(`${apiUrl}/mybuilds`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(({ res }) => this.generateBuildArsenal(res))
                } else if (res.status === 401) {
                    this.props.history.replace('/unauthorized');
                } else {
                    this.setState({ getting: false, error: 'Server error! Please try again later.' })
                }
            })
            .catch(res => {
                this.setState({ getting: false, error: 'Unable to connect to Tennoware server! Please try again later.' })
            });
    }

    componentDidUpdate() {
        if (!this.props.user || !this.props.online) this.props.history.replace('/');
    }

    generateBuildArsenal = async (builds) => {
        let arsenal = [];
        let updateTimes = await updateTimesImport().then(data => data.default);
        if (builds.length > 0) {
            await Promise.all(builds.map(async (build) => {
                let arsenalItem = {
                    id: build.BuildID,
                    buildName: build.BuildName,
                    name: build.ItemName,
                    source: build.Source,
                    buildStr: build.BuildStr,
                    date: Date.parse(build.CreateDT),
                    forma: build.Forma,
                    orokin: build.Orokin,
                    type: build.Type,
                    likes: build.Likes,
                    riven: build.Riven,
                    loading: false
                }
                if (build.Type === 'primaryweapons' || build.Type === 'secondaryweapons' || build.Type === 'sentinelweapons' || build.Type === 'meleeweapons' || build.Type === 'kitguns') arsenalItem.hasRivens = true;
                arsenalItem.img = await this.getItemImage(build);
                let updateTimeIndex = updateTimes.findIndex(item => {
                    return item.name === arsenalItem.name
                });
                if (updateTimeIndex === -1 || updateTimes[updateTimeIndex].updated < arsenalItem.date) {
                    arsenalItem.outdated = false;
                } else {
                    arsenalItem.outdated = true;
                }
                arsenal.push(arsenalItem);
            }));
            arsenal.sort((a, b) => {
                return b.date - a.date
            });
            this.setState({
                arsenal: arsenal,
                getting: false
            });
        } else {
            this.setState({
                getting: false
            });
        }
    }

    getItemImage = async (build) => {
        let itemImage;
        let itemIdx;
        let list = await this.getImageList(build.Type).then(data => data.default);
        if (build.Type === 'moas' || build.Type === 'kitguns') {
            itemIdx = list.first.findIndex(item => {
                return item.name.toLowerCase() === build.ItemName.toLowerCase().split(' ')[0];
            });
            itemImage = list.first[itemIdx].img;
        } else if (build.Type === 'zaws') {
            let first = build.ItemName.toLowerCase().split(' ');
            first[0] === 'plague' ? first = `plague ${first[1]}` : first = first[0];
            itemIdx = list.first.findIndex(item => {
                return item.name.toLowerCase() === first;
            });
            itemImage = list.first[itemIdx].img;
        } else {
            itemIdx = list.findIndex(item => {
                return item.name.toLowerCase() === build.ItemName.toLowerCase();
            });
            itemImage = list[itemIdx].img;
        }
        return itemImage;
    }

    getImageList = (type) => {
        switch (type) {
            case 'warframes':
                return this.props.warframes();
            case 'primaryweapons':
                return this.props.primaryweapons();
            case 'secondaryweapons':
                return this.props.secondaryweapons();
            case 'meleeweapons':
                return this.props.meleeweapons();
            case 'archwings':
                return this.props.archwings();
            case 'archguns-land':
                return this.props.archguns();
            case 'archguns-space':
                return this.props.archguns();
            case 'archmelee':
                return this.props.archmelee();
            case 'sentinels':
                return this.props.sentinels();
            case 'sentinelweapons':
                return this.props.sentinelweapons();
            case 'beasts':
                return this.props.beasts();
            case 'kitguns':
                return this.props.kitguns();
            case 'moas':
                return this.props.moas();
            case 'zaws':
                return this.props.zaws();
            default:
                return undefined;
        }
    }

    generateList = () => {
        let saved = [];
        let liked = [];
        this.state.arsenal.forEach((item, index) => {
            if (item.name.toLowerCase().includes(this.state.search.toLowerCase()) || item.buildName.toLowerCase().includes(this.state.search.toLowerCase())) {
                let date = new Date(item.date).toLocaleDateString();
                let potato;
                if (item.type === 'primaryweapons' || item.type === 'secondaryweapons' || item.type === 'sentinelweapons' || item.type === 'meleeweapons' || item.type.includes('archguns') || item.type === 'archmelees' || item.type === 'zaws' || item.type === 'kitguns') {
                    potato = require('../../assets/general/catalyst.png')
                } else {
                    potato = require('../../assets/general/reactor.png')
                }
                let orokinStr;
                let riven;
                item.orokin === 1 ? orokinStr = potato : orokinStr = require('../../assets/general/nocatalyst.png');
                item.riven === 1 ? riven = require('../../assets/general/rivenon.png') : riven = require('../../assets/general/rivenoff.png');
                let itemBlock = <div key={index} className="my-build-container">
                    <div className="my-item-wrapper">
                        <img className="my-item-image" src={item.img} alt="" />
                        <div className="my-item-name"><p>{item.name.toUpperCase()}</p></div>
                    </div>
                    <div className="my-build-list-item">
                        <div className="my-build-item-row name-row">
                            <div className="my-build-list-name">{item.buildName}</div>
                            {item.outdated
                                ? <div className="my-build-outdated">Possibly Outdated</div>
                                : <div className="my-build-list-date">{date}</div>
                            }
                        </div>
                        <div className="my-build-item-row info-row">
                            <div className="my-build-list-likes">Likes: {item.likes}</div>
                            <img className="my-build-list-img" src={orokinStr} alt={"orokin"} />
                            <div className="my-build-list-forma-block"><img className="my-build-list-img" src={require('../../assets/general/forma.png')} alt={""} /><p>: {item.forma}</p></div>
                            {item.hasRivens
                                ? <img className="my-build-list-img" src={riven} alt={"riven"} />
                                : <div className="my-riven-placeholder"></div>
                            }
                        </div>
                    </div>
                    <div className="my-build-buttons">
                        <div className="interactable interactable-semi-inactive" onClick={() => { this.navigateToBuild(index) }}><p className="interactable-p">Open</p></div>
                        {item.source === 'builds'
                            ? <div className="interactable interactable-semi-inactive delete-button" onClick={() => { this.handleDelete(index) }}>
                                {item.loading
                                    ? <div className="spinner">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                    : <p className="interactable-p">Delete</p>
                                }
                            </div>
                            : <div className="interactable interactable-semi-inactive delete-button" onClick={() => { this.handleUnlike(index) }}>
                                {item.loading
                                    ? <div className="spinner red-spinner">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                    : <p className="interactable-p">Unlike</p>
                                }
                            </div>
                        }
                    </div>
                </div>
                item.source === 'builds' ? saved.push(itemBlock) : liked.push(itemBlock)
            }
        });
        return { saved: saved, liked: liked };
    }

    navigateToBuild = (buildNum) => {
        this.props.history.push(`/${this.state.arsenal[buildNum].type}/${this.state.arsenal[buildNum].name}/${this.state.arsenal[buildNum].buildStr}/${this.state.arsenal[buildNum].id}`);
    }

    handleUnlike = (arsenalIndex) => {
        if (this.state.target === null) {
            this.setState({
                unlike: true,
                target: arsenalIndex
            });
        }
    }

    handleDelete = (arsenalIndex) => {
        if (this.state.target === null) {
            this.setState({
                delete: true,
                target: arsenalIndex
            });
        }
    }

    unsetRemoval = () => {
        this.setState({
            unlike: false,
            delete: false,
            target: null
        })
    }

    unlikeBuild = () => {
        let arsenal = cloneDeep(this.state.arsenal);
        let temp = this.state.target;
        arsenal[temp].loading = true;
        this.setState({
            arsenal: arsenal,
            unlike: false
        });
        let token = localStorage.getItem('jwt');
        fetch(`${apiUrl}/unlike`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
            body: JSON.stringify({
                build: arsenal[temp].id
            })
        })
            .then(res => {
                if (res.status === 200) {
                    arsenal.splice(temp, 1);
                    this.setState({
                        arsenal: arsenal,
                        target: null
                    })
                } else if (res.status === 401) {
                    this.props.history.replace('/unauthorized');
                } else {
                    this.setState({ error: 'Server error! Please try again later.' })
                }
            })
            .catch(res => {
                this.setState({ error: 'Unable to connect to Tennoware server! Please try again later.' })
            });
    }

    deleteBuild = () => {
        let arsenal = cloneDeep(this.state.arsenal);
        let temp = this.state.target;
        arsenal[temp].loading = true;
        this.setState({
            arsenal: arsenal,
            delete: false,
        });
        let token = localStorage.getItem('jwt');
        fetch(`${apiUrl}/delete`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
            body: JSON.stringify({
                build: arsenal[temp].id
            })
        })
            .then(res => {
                if (res.status === 200) {
                    arsenal.splice(temp, 1);
                    this.setState({
                        arsenal: arsenal,
                        target: null
                    })
                } else if (res.status === 401) {
                    this.props.history.replace('/unauthorized');
                } else {
                    this.setState({ error: 'Server error! Please try again later.' })
                }
            })
            .catch(res => {
                this.setState({ error: 'Unable to connect to Tennoware server! Please try again later.' })
            });
    }

    blurInput = ({ key, target }) => {
        if (key === 'Enter') {
            target.blur();
        }
    }

    filterItems = ({ target }) => {
        this.setState({
            search: target.value
        })
    }

    render() {
        let list = this.generateList();
        return (
            <React.Fragment>
                <Helmet>
                    <title>Tennoware - my builds</title>
                </Helmet>
                <div className="top-title"><p>MY BUILDS</p></div>
                <div className="screen">
                    <div></div>
                    <div className="my-builds">
                        <div className="my-builds-topbar">
                            <div className="search-wrapper my-builds-search">
                                <input className="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.filterItems} onKeyUp={this.blurInput} />
                            </div>
                        </div>
                        <div className="builds-wrapper">
                            <BottomAd />
                            {this.state.getting
                                ? <Loading />
                                : <Spring
                                    native
                                    config={{ tension: 120, friction: 14 }}
                                    from={{ opacity: 0 }}
                                    to={{ opacity: 1 }}>
                                    {props => (
                                        <animated.div style={props}>
                                            {this.state.error !== null
                                                ? <div className="no-builds">{this.state.error}</div>
                                                : <React.Fragment>
                                                    {this.state.arsenal.length < 1
                                                        ? <div className="no-builds">You have not saved or liked any builds yet.</div>
                                                        : <React.Fragment>
                                                            {list.saved.length > 0 &&
                                                                <React.Fragment>
                                                                    <div className="my-builds-subtitle">Saved Builds</div>
                                                                    {list.saved}
                                                                </React.Fragment>
                                                            }
                                                            {list.liked.length > 0 &&
                                                                <React.Fragment>
                                                                    <div className="my-builds-subtitle">Liked Builds</div>
                                                                    {list.liked}
                                                                </React.Fragment>
                                                            }
                                                        </React.Fragment>
                                                    }
                                                </React.Fragment>
                                            }
                                        </animated.div>
                                    )}
                                </Spring>
                            }
                        </div>
                        <div className={"conformation-wrapper " + (this.state.unlike ? "conformation-active" : "conformation-inactive")} >
                            <div className="conformation-box">
                                <div className="conformation-dialog">Are you sure?</div>
                                <div className="conformation-buttons">
                                    <div className="interactable interactable-semi-inactive" onClick={this.unsetRemoval}><p className="interactable-p">Cancel</p></div>
                                    <div className="interactable interactable-semi-inactive delete-button" onClick={this.unlikeBuild}><p className="interactable-p">Unlike</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={"conformation-wrapper " + (this.state.delete ? "conformation-active" : "conformation-inactive")} >
                            <div className="conformation-box">
                                <div className="conformation-dialog">Are you sure?</div>
                                <div className="conformation-buttons">
                                    <div className="interactable interactable-semi-inactive" onClick={this.unsetRemoval}><p className="interactable-p">Cancel</p></div>
                                    <div className="interactable interactable-semi-inactive delete-button" onClick={this.deleteBuild}><p className="interactable-p">Delete</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-panel">
                        {this.props.viewWidth > 1260 &&
                            <div className="right-g">
                                <RightAd />
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
