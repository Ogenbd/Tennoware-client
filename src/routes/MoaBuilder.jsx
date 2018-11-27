import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/loading/Loading';


const TenSlotModding = Loadable({
    loader: () => import('../components/modding/TenSlotModding'),
    loading: Loading,
});


class RangedBuilder extends Component {
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
        // let itemList = [] 
        // this.props.items.forEach(item => {
        //     itemList.push(item.name)
        // })
        // console.log(itemList);
        // let sortedMods = this.props.mods.sort((a, b) => {
        //     if (a.abrev[0] > b.abrev[0]) return 1
        //     if (a.abrev[0] < b.abrev[0]) return -1
        //     if (a.abrev[1] > b.abrev[1]) return 1
        //     if (a.abrev[1] < b.abrev[1]) return -1
        // })
        // let check = sortedMods.filter((mod, index) => {
        //     if (index > 0) {
        //     return mod.abrev === sortedMods[index - 1].abrev
        //     }
        // })
        // console.log(sortedMods);
        // console.log(check);
        if (this.props.match.params.build) {
            this.confirmBuild()
        } else {
            this.setupBuilder({})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.build && !prevProps.user && this.props.user) {
            let token = localStorage.getItem('jwt');
            fetch('http://192.168.1.114:50000/getbuild', {
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
        let parts = this.props.match.params.id.split(' ');
        let bracket = items.first.find(part => {
            return part.name.toLowerCase() === parts[0].toLowerCase();
        });
        let core = items.second.find(part => {
            return part.name.toLowerCase() === parts[1].toLowerCase();
        });
        let gyro = items.third.find(part => {
            return part.name.toLowerCase() === parts[2].toLowerCase();
        });
        try {
            let item = {
                name: `${parts[0].toUpperCase()}-${parts[1].toUpperCase()}-${parts[2].toUpperCase()}`,
                health: items.base.health + items.base.health * core.health + items.base.health * gyro.health,
                shields: items.base.shields + items.base.shields * core.shields + items.base.shields * gyro.shields,
                armor: items.base.armor + items.base.armor * core.armor + items.base.armor * gyro.armor,
                polarities: bracket.polarities
            }
            let slotPolarities = [];
            let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
            let filteredMods = mods.filter(mod => {
                return mod.type === 'COMPANION' || mod.type === 'ROBOTIC' || mod.type === 'MOA' || mod.type === 'ALL';
            });
            filteredMods.forEach((mod, index) => mod.index = index);
            if (item.polarities.length > 0) {
                item.polarities.forEach(polarity => {
                    slotPolarities.push(polarity);
                    originalPolarityCount[polarity]++
                });
            }
            this.setState({
                title: item.name,
                item: item,
                relevantMods: filteredMods,
                slotPolarities: slotPolarities,
                originalPolarityCount: originalPolarityCount,
                metaInfo: metaInfo
            });
        }
        catch {
            this.redirectToVoid();
        }
    }

    confirmBuild = () => {
        // fix url
        let token = localStorage.getItem('jwt');
        fetch('http://192.168.1.114:50000/getbuild', {
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
        // this.props.history.replace('/void');
    }

    confirmError = () => {
        this.props.history.replace(`/${this.props.type}/${this.props.match.params.id}`);
    }

    render() {
        return (
            <div className="screen">
                <div className="top-title">
                    <p>MOAS</p>
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
                        {this.state.item.name
                            ? <TenSlotModding redirectToVoid={this.redirectToVoid} type={this.props.type} orokin={'reactor'} item={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} />
                            : <Loading />
                        }
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default RangedBuilder;