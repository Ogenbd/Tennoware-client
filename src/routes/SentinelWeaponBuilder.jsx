import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import apiUrl from '../apiUrl';
import Loading from '../components/loading/Loading';
import BuildError from '../components/builderror/BuildError';

import EightSlotModding from '../components/modding/EightSlotModding';

class RangedBuilder extends Component {
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
            loading: true
        }
    }

    componentDidMount() {
        if (this.props.match.params.build) {
            this.confirmBuild(false)
        } else {
            this.setupBuilder({})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.build && prevProps.user !== this.props.user) {
            this.confirmBuild(true);
        }
    }

    setupBuilder = (metaInfo) => {
        setTimeout(() => {
            this.props.items().then(items => {
                let item = items.default.find(weapon => {
                    return weapon.name.toLowerCase() === decodeURIComponent(this.props.match.params.id.toLowerCase());
                });
                if (item !== undefined) {
                    if (item.mods === 'primary') {
                        this.props.primaryMods().then(mods => this.setupItem(item, mods.default, metaInfo));
                    } else if (item.mods === 'secondary') {
                        this.props.secondaryMods().then(mods => this.setupItem(item, mods.default, metaInfo));
                    } else if (item.mods === 'melee') {
                        this.props.meleeMods().then(mods => this.setupItem(item, mods.default, metaInfo));
                    }
                } else {
                    this.redirectToVoid();
                }
            });
        }, 350);
    }

    setupItem = (item, mods, metaInfo) => {
        let slotPolarities = [];
        let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
        let filteredMods = mods.filter(mod => {
            return mod.type === 'PRIMARY' || mod.type === 'PISTOL' || mod.type === 'MELEE' || item.type.some(keyword => {
                return keyword === mod.type
            });
        });
        filteredMods.forEach((mod, index) => mod.index = index);
        if (item.polarities.length > 0) {
            item.polarities.forEach(polarity => {
                slotPolarities.push(polarity);
                originalPolarityCount[polarity]++
            });
        }
        this.setState({
            item: item,
            relevantMods: filteredMods,
            slotPolarities: slotPolarities,
            originalPolarityCount: originalPolarityCount,
            metaInfo: metaInfo
        });
    }

    confirmBuild = (logChange) => {
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
                            logChange ? this.setState({ metaInfo: res }) : this.setupBuilder(res);
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
                <div className="top-title"><p>{this.state.title}</p></div>
                {this.state.error !== null
                    ? <BuildError error={this.state.error} confirmError={this.confirmError} />
                    : <React.Fragment>
                        {this.state.item.name &&
                            <EightSlotModding redirectToVoid={this.redirectToVoid} readyToShow={this.readyToShow} type={this.props.type} orokin={require('../assets/general/catalyst.png')} riven={this.state.item.mods === 'melee' ? 'melee' : 'ranged'} item={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} />
                        }
                        {this.state.loading &&
                            <Loading />
                        }
                    </React.Fragment>
                }
            </React.Fragment >
        )
    }
}

export default RangedBuilder;
