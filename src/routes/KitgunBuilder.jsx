import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import apiUrl from '../apiUrl';
import RightAd from '../components/adunits/RightAd';
import Loading from '../components/loading/Loading';

import EightSlotModding from '../components/modding/EightSlotModding';

class KitgunBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: decodeURIComponent(this.props.match.params.id).toLocaleUpperCase(),
            item: {},
            relevantMods: [],
            slotPolarities: [],
            originalPolarityCount: {},
            metaInfo: {},
            error: null,
            arcanes: [],
            loading: true
        }
    }

    componentDidMount() {
        if (this.props.match.params.build) {
            this.confirmBuild()
        } else {
            this.setupBuilder({})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.build && !prevProps.user && this.props.user) {
            let token = localStorage.getItem('jwt');
            fetch(`${apiUrl}/getbuild`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
                body: JSON.stringify({ buildId: this.props.match.params.build })
            })
                .then(res => {
                    if (res.status === 200) {
                        res.json().then(({ res }) => {
                            if (res && res.ItemName === decodeURIComponent(this.props.match.params.id.toLowerCase()) && res.BuildStr === this.props.match.params.pre) {
                                this.setState({ metaInfo: res });
                            } else if (res.status === 401) {
                                this.props.history.replace('/unauthorized');
                            } else {
                                this.setState({
                                    error: 'Build does not exist in our database.'
                                })
                            }
                        });
                    } else {
                        this.setState({
                            error: 'Server error! Please try again later.'
                        })
                    }
                })
                .catch(() => {
                    this.setState({
                        error: 'Unable to connect to Tennoware server! Please try again later.'
                    })
                });
        }
    }

    setupBuilder = async (metaInfo) => {
        setTimeout(() => {
            Promise.all([this.props.items(), this.props.mods(), this.props.arcanes()]).then(data => {
                let parts = this.props.match.params.id.split(' ');
                try {
                    let item = {
                        name: `${parts[0].toUpperCase()}-${parts[1].toUpperCase()}-${parts[2].toUpperCase()}`,
                        mastery: 0,
                        type: data[0].default.gripCombo[parts[0]].type,
                        polarities: [],
                        noise: data[0].default.gripCombo[parts[0]].noise,
                        reload: data[0].default.loaderCombo[parts[0]][parts[2]].reload,
                        magSize: data[0].default.loaderCombo[parts[0]][parts[2]].magSize,
                        disposition: 3,
                        modes: [
                            {
                                trigger: data[0].default.gripCombo[parts[0]].trigger,
                                fireRate: data[0].default.gripCombo[parts[0]][parts[1]].fireRate,
                                accuracy: data[0].default.gripCombo[parts[0]].accuracy,
                                punchThrough: data[0].default.gripCombo[parts[0]].punchThrough,
                                critChance: data[0].default.loaderCombo[parts[0]][parts[2]].critChance,
                                critMult: data[0].default.loaderCombo[parts[0]][parts[2]].critMult,
                                status: data[0].default.loaderCombo[parts[0]][parts[2]].status,
                                damage: data[0].default.gripCombo[parts[0]][parts[1]].damage,
                                split: data[0].default.gripCombo[parts[0]][parts[1]].split
                            }
                        ]
                    }
                    if (data[0].default.gripCombo[parts[0]].falloffMin) item.modes[0].falloffMin = data[0].default.gripCombo[parts[0]].falloffMin;
                    if (data[0].default.gripCombo[parts[0]].falloffMax) item.modes[0].falloffMax = data[0].default.gripCombo[parts[0]].falloffMax;
                    if (data[0].default.gripCombo[parts[0]].ammoCost) item.modes[0].ammoCost = data[0].default.gripCombo[parts[0]].ammoCost;
                    if (data[0].default.gripCombo[parts[0]][parts[1]].rangeLimit) item.modes[0].rangeLimit = data[0].default.gripCombo[parts[0]][parts[1]].rangeLimit;
                    let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
                    let filteredMods = data[1].default.filter(mod => {
                        return mod.type === 'PISTOL' || item.type.some(keyword => {
                            return keyword === mod.type
                        });
                    });
                    filteredMods.forEach((mod, index) => mod.index = index);
                    this.setState({
                        item: item,
                        relevantMods: filteredMods,
                        slotPolarities: [],
                        originalPolarityCount: originalPolarityCount,
                        metaInfo: metaInfo,
                        arcanes: data[2].default
                    });
                }
                catch {
                    this.redirectToVoid();
                }
            });
        }, 350);
    }

    confirmBuild = () => {
        let token = localStorage.getItem('jwt');
        fetch(`${apiUrl}/getbuild`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
            body: JSON.stringify({ buildId: this.props.match.params.build })
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(({ res }) => {
                        if (res && res.ItemName === decodeURIComponent(this.props.match.params.id.toLowerCase()) && res.BuildStr === this.props.match.params.pre) {
                            this.setupBuilder(res);
                        } else if (res.status === 401) {
                            this.props.history.replace('/unauthorized');
                        } else {
                            this.setState({
                                error: 'This build does not exist in our database.'
                            })
                        }
                    });
                } else {
                    this.setState({
                        error: 'Server error! Please try again later.'
                    })
                }
            })
            .catch(() => {
                this.setState({
                    error: 'Unable to connect to Tennoware server! Please try again later.'
                })
            });
    }

    redirectToVoid = () => {
        this.props.history.replace('/void');
    }

    confirmError = () => {
        this.props.history.replace(`/${this.props.type}/${decodeURIComponent(this.props.match.params.id)}`);
    }

    readyToShow = () => {
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Tennoware - {decodeURIComponent(this.props.match.params.id)}</title>
                </Helmet>
                <div className="top-title">
                    <p>KITGUN</p>
                    <p className="modular-subtitle">{this.state.title}</p>
                </div>
                <div className="screen">
                    <div></div>
                    {this.state.error !== null
                        ? <div className="modding-wrapper">
                            <div className={"general-error " + (this.state.error !== null ? 'show-general-error' : 'hide-general-error')}>
                                <div className="general-error-box">
                                    <p>{this.state.error}</p>
                                    <div className="interactable interactable-semi-inactive general-button" onClick={this.confirmError}><p className="interactable-p">Confirm</p></div>
                                </div>
                            </div>
                        </div>
                        : <React.Fragment>
                            {this.state.item.name &&
                                <div className="modding-wrapper">
                                    <EightSlotModding redirectToVoid={this.redirectToVoid} readyToShow={this.readyToShow} type={this.props.type} orokin={require('../assets/general/catalyst.png')} riven={'ranged'} item={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} arcanes={this.state.arcanes} />
                                </div>
                            }
                            {this.state.loading &&
                                <div className="modding-wrapper">
                                    <Loading />
                                </div>
                            }
                        </React.Fragment>
                    }
                    <div className="side-panel">
                        {this.props.viewWidth > 1465 &&
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

export default KitgunBuilder;
