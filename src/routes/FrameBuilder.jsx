import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import apiUrl from '../apiUrl';
import Loading from '../components/loading/Loading';
import BuildError from '../components/builderror/BuildError';

import WarframeModding from '../components/modding/WarframeModding';

class FrameBuilder extends Component {
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
            Promise.all([this.props.items(), this.props.mods(), this.props.arcanes()]).then(data => {
                let selected = data[0].default.find(item => {
                    return item.name.toLowerCase() === decodeURIComponent(this.props.match.params.id.toLowerCase());
                });
                if (selected !== undefined) {
                    let slotPolarities = [];
                    let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
                    let filteredMods = data[1].default.filter(mod => {
                        return mod.type === 'WARFRAME' || mod.type === 'AURA' || mod.type === 'EXILUS' || mod.type === selected.name || selected.name.includes(mod.type);
                    });
                    filteredMods.forEach((mod, index) => mod.index = index);
                    if (selected.polarities.length > 0) {
                        selected.polarities.forEach(polarity => {
                            slotPolarities.push(polarity);
                            originalPolarityCount[polarity]++
                        });
                    }
                    this.setState({
                        item: selected,
                        relevantMods: filteredMods,
                        arcanes: data[2].default,
                        slotPolarities: slotPolarities,
                        originalPolarityCount: originalPolarityCount,
                        metaInfo: metaInfo
                    });
                } else {
                    this.redirectToVoid();
                }
            });
        }, 350);
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

    updateInfo = (newMetaInfo) => {
        this.setState({
            metaInfo: newMetaInfo
        });
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
                            <WarframeModding redirectToVoid={this.redirectToVoid} updateInfo={this.updateInfo} readyToShow={this.readyToShow} type={this.props.type} orokin={require('../assets/general/reactor.png')} frame={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} arcanes={this.state.arcanes} />
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

export default FrameBuilder;