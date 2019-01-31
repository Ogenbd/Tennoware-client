import React, { Component, lazy } from 'react';
import { Helmet } from "react-helmet";

import apiUrl from '../apiUrl';

const MeleeModding = lazy(() => import('../components/modding/MeleeModding'));

class MeleeBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            item: {},
            relevantMods: [],
            slotPolarities: [],
            originalPolarityCount: {},
            metaInfo: {},
            error: null,
            arcanes: []
        }
    }

    componentDidMount() {
        // (window.adsbygoogle = window.adsbygoogle || []).push({
        //     google_ad_client: "ca-pub-9367218977396146"
        // });
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
        let arcanes = await this.props.arcanes().then(data => data.default);
        let strike;
        let grip;
        let link;
        let parts = this.props.match.params.id.split(' ');
        let specialStrike = parts[0];
        let specialGrip = parts[1];
        if (parts[0] === 'plague') {
            parts.shift();
            specialStrike = parts[0];
            specialGrip = parts[1];
            parts[0] = `plague ${parts[0]}`;
        }
        if (parts[1] === 'plague') {
            parts.splice(1, 1);
            specialGrip = parts[1];
            parts[1] = `plague ${parts[1]}`
        }
        if (parts.length === 4) {
            parts[2] = `${parts[2]} ${parts[3]}`
            parts.splice(3, 1);
        } else if (parts.length === 5) {
            parts[2] = `${parts[2]} ${parts[3]} ${parts[4]}`
            parts.splice(3, 2);
        }
        strike = items.first.find(item => item.name === parts[0].toUpperCase())
        grip = items.second.find(item => item.name === parts[1].toUpperCase())
        link = items.third.find(item => item.name === parts[2].toUpperCase())
        try {
            let item = {
                name: `${strike.name}-${grip.name}-${link.name}`,
                mastery: 0,
                type: [grip.grip ? strike.oneHanded.type : strike.twoHanded.type],
                polarities: [],
                stance: grip.grip ? strike.oneHanded.polarity : strike.twoHanded.polarity,
                disposition: 3,
                modes: [
                    {
                        speed: strike.speed + grip.speed + link.speed,
                        slide: items.specials[link.type][specialStrike][specialGrip].slide,
                        wall: items.specials[link.type][specialStrike][specialGrip].wall,
                        critChance: strike.critChance + link.critChance,
                        critMult: strike.critMult,
                        status: strike.status + link.status,
                        damage: strike.damage + grip.damage + link.damage,
                        split: strike.split
                    }
                ]
            }
            if (!grip.grip && (strike.twoHanded.type === 'HEAVY BLADES' || strike.twoHanded.type === 'HAMMERS')) item.modes[0].damage = Math.floor(item.modes[0].damage * 1.7);
            if (!grip.grip && (strike.twoHanded.type === 'POLEARMS' || strike.twoHanded.type === 'STAVES')) item.modes[0].damage = Math.floor(item.modes[0].damage * 1.18);
            item.modes[0].slam = item.modes[0].damage;
            let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
            let filteredMods = mods.filter(mod => {
                return mod.type === 'MELEE' || mod.type === 'CHANNELING' || item.type.some(keyword => {
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
                metaInfo: metaInfo,
                arcanes: arcanes
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
                    <p>ZAW</p>
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
                            <MeleeModding redirectToVoid={this.redirectToVoid} type={this.props.type} orokin={require('../assets/general/catalyst.png')} riven={'melee'} item={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} arcanes={this.state.arcanes} />
                        }
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default MeleeBuilder;