import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';
import cloneDeep from 'lodash/cloneDeep';
import '../../general.css';
import './MyBuilds.css';

import Loading from '../loading/Loading';

export default class MyBuilds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arsenal: [],
            getting: true,
            unlike: false,
            delete: false,
            target: null
        }
    }

    async componentDidMount() {
        let token = localStorage.getItem('jwt');
        fetch('http://192.168.1.114:50000/mybuilds', {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
        })
            .then(res => res.json())
            .then(({ res }) => {
                this.generateBuildArsenal(res);
                // this.generateBuildArsenal(res, allItems);
            })
            .catch(err => {
                console.log('error')
            });
    }

    componentDidUpdate() {
        if (!this.props.user || !this.props.online) this.props.history.replace('/');
    }

    generateBuildArsenal = (builds) => {
        let arsenal = [];
        if (builds.length > 0) {
            builds.forEach(build => {
                let arsenalItem = {
                    id: build.BuildID,
                    buildName: build.BuildName,
                    name: build.ItemName,
                    source: build.Source,
                    buildStr: build.BuildStr,
                    date: build.CreateDT,
                    forma: build.Forma,
                    orokin: build.Orokin,
                    type: build.Type,
                    likes: build.Likes,
                    riven: build.Riven,
                    loading: false
                }
                if (build.Type === 'primaryweapons' || build.Type === 'secondaryweapons' || build.Type === 'sentinelweapons' || build.Type === 'meleeweapons' || build.Type === 'kitguns') arsenalItem.hasRivens = true;
                if (build.Type === 'kitguns') {
                    let parts = build.ItemName.split(' ');
                    arsenalItem.img = require(`../../assets/itemimages/${parts[0]}.png`);
                } else {
                    arsenalItem.img = require(`../../assets/itemimages/${build.ItemName.replace(/\s+/g, '-')}.png`)
                }
                arsenal.push(arsenalItem);
            });
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

    generateList = () => {
        let saved = [];
        let liked = [];
        this.state.arsenal.forEach((item, index) => {
            let date = new Date(item.date).toLocaleDateString();
            let potato;
            if (item.type === 'primaryweapons' || item.type === 'secondaryweapons' || item.type === 'sentinelweapons' || item.type === 'meleeweapons' || item.type === 'archguns' || item.type === 'archmelees' || item.type === 'zaws' || item.type === 'kitguns') {
                potato = 'catalyst'
            } else {
                potato = 'reactor'
            }
            let orokinStr;
            let riven;
            item.orokin === 1 ? orokinStr = potato : orokinStr = 'nocatalyst';
            item.riven === 1 ? riven = 'rivenon' : riven = 'rivenoff';
            if (item.source === 'builds') {
                saved.push(
                    <div key={index} className="build-container">
                        <div className="my-item-wrapper">
                            <img className="my-item-image" src={item.img} alt="" />
                            <div className="my-item-name"><p>{item.name.toUpperCase()}</p></div>
                        </div>
                        <div className="my-build-list-item">
                            <div className="my-build-item-row name-row">
                                <div className="my-build-list-name">{item.buildName}</div>
                                <div className="my-build-list-date">{date}</div>
                            </div>
                            <div className="my-build-item-row info-row">
                                <div className="my-build-list-likes">Likes: {item.likes}</div>
                                <img className="my-build-list-img" src={require(`../../assets/${orokinStr}.png`)} alt={"orokin"} />
                                <div className="my-build-list-forma-block"><img className="my-build-list-img" src={require('../../assets/forma.png')} alt={""} /><p>: {item.forma}</p></div>
                                {item.hasRivens
                                    ? <img className="my-build-list-img" src={require(`../../assets/${riven}.png`)} alt={"riven"} />
                                    : <div className="my-riven-placeholder"></div>
                                }
                            </div>
                        </div>
                        <div className="my-build-buttons">
                            <div className="interactable interactable-semi-inactive" onClick={() => { this.navigateToBuild(index) }}><p className="interactable-p">Open</p></div>
                            <div className="interactable interactable-semi-inactive delete-button" onClick={() => { this.handleDelete(index) }}>
                                {item.loading
                                    ? <div className="spinner">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                    : <p className="interactable-p">Delete</p>
                                }
                            </div>
                        </div>
                    </div>
                )
            } else {
                liked.push(
                    <div key={index} className="build-container">
                        <div className="my-item-wrapper">
                            <img className="my-item-image" src={item.img} alt="" />
                            <div className="my-item-name"><p>{item.name.toUpperCase()}</p></div>
                        </div>
                        <div className="my-build-list-item">
                            <div className="my-build-item-row name-row">
                                <div className="my-build-list-name">{item.buildName}</div>
                                <div className="my-build-list-date">{date}</div>
                            </div>
                            <div className="my-build-item-row info-row">
                                <div className="my-build-list-likes">Likes: {item.likes}</div>
                                <img className="my-build-list-img" src={require(`../../assets/${orokinStr}.png`)} alt={"orokin"} />
                                <div className="my-build-list-forma-block"><img className="my-build-list-img" src={require('../../assets/forma.png')} alt={""} /><p>: {item.forma}</p></div>
                                {item.hasRivens
                                    ? <img className="my-build-list-img" src={require(`../../assets/${riven}.png`)} alt={"riven"} />
                                    : <div className="my-riven-placeholder"></div>
                                }
                            </div>
                        </div>
                        <div className="my-build-buttons">
                            <div className="interactable interactable-semi-inactive" onClick={() => { this.navigateToBuild(index) }}><p className="interactable-p">Open</p></div>
                            <div className="interactable interactable-semi-inactive delete-button" onClick={() => { this.handleUnlike(index) }}>
                                {item.loading
                                    ? <div className="spinner">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                    : <p className="interactable-p">Unlike</p>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        });
        return { saved: saved, liked: liked };
    }

    navigateToBuild = (buildNum) => {
        this.props.history.push(`/${this.state.arsenal[buildNum].type}/${this.state.arsenal[buildNum].name}/${this.state.arsenal[buildNum].buildStr}/${this.state.arsenal[buildNum].id}`);
    }

    handleUnlike = (arsenalIndex) => {
        if (this.state.target === null) {
            console.log(arsenalIndex);
            this.setState({
                unlike: true,
                target: arsenalIndex
            });
        }
    }

    handleDelete = (arsenalIndex) => {
        if (this.state.target === null) {
            console.log(arsenalIndex);
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
        fetch(`http://192.168.1.114:50000/unlike`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
            body: JSON.stringify({
                build: arsenal[temp].id
            })
        })
            .then(res => res.json())
            .then(() => {
                arsenal.splice(temp, 1);
                this.setState({
                    arsenal: arsenal,
                    target: null
                })
            })
            .catch(err => {
                console.log('error')
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
        fetch(`http://192.168.1.114:50000/delete`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
            body: JSON.stringify({
                build: arsenal[temp].id
            })
        })
            .then(() => {
                arsenal.splice(temp, 1);
                this.setState({
                    arsenal: arsenal,
                    target: null
                })
            })
            .catch(err => {
                console.log('error')
            });
    }

    render() {
        let list = this.generateList();
        return (
            // <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
            <div className="screen">
                <div className="top-title"><p>My Builds</p></div>
                <div className="my-builds">
                    {this.state.getting
                        ? <Loading />
                        : <div className="builds-wrapper">
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
                        </div>
                    }
                    <div className={"popup " + (this.state.unlike ? "popup-active" : "popup-inactive")}>
                        <div className={"popup-topbar " + (this.state.unlike ? "popup-active" : "popup-inactive")}></div>
                        <div className="popup-content conformation-wrapper">
                            <div className="conformation-box">
                                <div className="conformation-dialog">Are you sure?</div>
                                <div className="conformation-buttons">
                                    <div className="interactable interactable-semi-inactive" onClick={this.unsetRemoval}><p className="interactable-p">Cancel</p></div>
                                    <div className="interactable interactable-semi-inactive delete-button" onClick={this.unlikeBuild}><p className="interactable-p">Unlike</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"popup " + (this.state.delete ? "popup-active" : "popup-inactive")}>
                        <div className={"popup-topbar " + (this.state.delete ? "popup-active" : "popup-inactive")}></div>
                        <div className="popup-content conformation-wrapper">
                            <div className="conformation-box">
                                <div className="conformation-dialog">Are you sure?</div>
                                <div className="conformation-buttons">
                                    <div className="interactable interactable-semi-inactive" onClick={this.unsetRemoval}><p className="interactable-p">Cancel</p></div>
                                    <div className="interactable interactable-semi-inactive delete-button" onClick={this.deleteBuild}><p className="interactable-p">Delete</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // </CSSTransition>
        )
    }
}
