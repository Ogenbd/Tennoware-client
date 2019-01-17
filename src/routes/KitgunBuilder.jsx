import React, { Component, lazy } from 'react';
import { Helmet } from "react-helmet";

import apiUrl from '../apiUrl';

const EightSlotModding = lazy(() => import('../components/modding/EightSlotModding'));

class KitgunBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            item: {},
            relevantMods: [],
            slotPolarities: [],
            originalPolarityCount: {},
            metaInfo: {},
            error: null
        }
    }

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9367218977396146"
        });
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
                            if (res && res.ItemName === this.props.match.params.id.toLowerCase() && res.BuildStr === this.props.match.params.pre) {
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
        let items = await this.props.items().then(data => data.default);
        let mods = await this.props.mods().then(data => data.default);
        let parts = this.props.match.params.id.split(' ');
        try {
            let item = {
                name: `${parts[0].toUpperCase()}-${parts[1].toUpperCase()}-${parts[2].toUpperCase()}`,
                mastery: 0,
                type: items.gripCombo[parts[0]].type,
                polarities: [],
                noise: items.gripCombo[parts[0]].noise,
                reload: items.loaderCombo[parts[0]][parts[2]].reload,
                magSize: items.loaderCombo[parts[0]][parts[2]].magSize,
                disposition: 3,
                modes: [
                    {
                        trigger: items.gripCombo[parts[0]].trigger,
                        fireRate: items.gripCombo[parts[0]][parts[1]].fireRate,
                        accuracy: items.gripCombo[parts[0]].accuracy,
                        punchThrough: items.gripCombo[parts[0]].punchThrough,
                        critChance: items.loaderCombo[parts[0]][parts[2]].critChance,
                        critMult: items.loaderCombo[parts[0]][parts[2]].critMult,
                        status: items.loaderCombo[parts[0]][parts[2]].status,
                        damage: items.gripCombo[parts[0]][parts[1]].damage,
                        split: items.gripCombo[parts[0]][parts[1]].split
                    }
                ]
            }
            if (items.gripCombo[parts[0]].falloffMin) item.modes[0].falloffMin = items.gripCombo[parts[0]].falloffMin;
            if (items.gripCombo[parts[0]].falloffMax) item.modes[0].falloffMax = items.gripCombo[parts[0]].falloffMax;
            if (items.gripCombo[parts[0]].ammoCost) item.modes[0].ammoCost = items.gripCombo[parts[0]].ammoCost;
            if (items.gripCombo[parts[0]][parts[1]].rangeLimit) item.modes[0].rangeLimit = items.gripCombo[parts[0]][parts[1]].rangeLimit;
            let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
            let filteredMods = mods.filter(mod => {
                return mod.type === 'PISTOL' || item.type.some(keyword => {
                    return keyword === mod.type
                });
            });
            filteredMods.forEach((mod, index) => mod.index = index);
            this.setState({
                title: item.name,
                item: item,
                relevantMods: filteredMods,
                slotPolarities: [],
                originalPolarityCount: originalPolarityCount,
                metaInfo: metaInfo
            });
        }
        catch {
            this.redirectToVoid();
        }
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
                        if (res && res.ItemName === this.props.match.params.id.toLowerCase() && res.BuildStr === this.props.match.params.pre) {
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
        this.props.history.replace(`/${this.props.type}/${this.props.match.params.id}`);
    }

    render() {
        return (
            <div className="screen">
                <Helmet>
                    <title>Tennoware - {this.props.match.params.id}</title>
                </Helmet>
                <div className="top-title">
                    <p>KITGUN</p>
                    <p className="modular-subtitle">{this.state.title}</p>
                </div>
                {this.state.error !== null
                    ? <div className={"general-error " + (this.state.error !== null ? 'show-general-error' : 'hide-general-error')}>
                        <div className="general-error-box">
                            <p>{this.state.error}</p>
                            <div className="interactable interactable-semi-inactive general-button" onClick={this.confirmError}><p className="interactable-p">Confirm</p></div>
                        </div>
                    </div>
                    : <React.Fragment>
                        {this.state.item.name &&
                            <EightSlotModding redirectToVoid={this.redirectToVoid} type={this.props.type} orokin={require('../assets/general/catalyst.png')} riven={'ranged'} item={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} />
                        }
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default KitgunBuilder;
