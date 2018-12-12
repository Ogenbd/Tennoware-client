import React, { Component } from 'react';
import Loadable from 'react-loadable';

import apiUrl from '../apiUrl';
import Loading from '../components/loading/Loading';

const WarframeModding = Loadable({
    loader: () => import('../components/modding/WarframeModding'),
    loading: Loading,
    delay: 400
});

class FrameBuilder extends Component {
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
        let items = await this.props.items();
        let mods = await this.props.mods();
        let selected = items.find(item => {
            return item.name.toLowerCase() === this.props.match.params.id.toLowerCase();
        });
        if (selected !== undefined) {
            let slotPolarities = [];
            let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
            let filteredMods = mods.filter(mod => {
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
                title: selected.name,
                item: selected,
                relevantMods: filteredMods,
                slotPolarities: slotPolarities,
                originalPolarityCount: originalPolarityCount,
                metaInfo: metaInfo
            });
        } else {
            this.redirectToVoid();
        }
    }

    confirmBuild = () => {
        // fix url
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
                <div className="top-title"><p>{this.state.title}</p></div>
                {this.state.error !== null
                    ? <div className={"general-error " + (this.state.error !== null ? 'show-general-error' : 'hide-general-error')}>
                        <div className="general-error-box">
                            <p>{this.state.error}</p>
                            <div className="interactable interactable-semi-inactive general-button" onClick={this.confirmError}><p className="interactable-p">Confirm</p></div>
                        </div>
                    </div>
                    : <React.Fragment>
                        {this.state.item.name
                            ? <WarframeModding redirectToVoid={this.redirectToVoid} type={this.props.type} orokin={require('../assets/general/reactor.png')} frame={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} />
                            : <Loading />
                        }
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default FrameBuilder;