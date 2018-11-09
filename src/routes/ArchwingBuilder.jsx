import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/loading/Loading';


const EightSlotModding = Loadable({
    loader: () => import('../components/modding/EightSlotModding'),
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
            metaInfo: {}
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
                .then(res => res.json())
                .then(({ res }) => {
                    if (res.ItemName === this.props.match.params.id.toLowerCase() && res.BuildStr === this.props.match.params.pre) {
                        this.setState({ metaInfo: res });
                    } else {
                        this.redirectToVoid();
                    }
                })
                .catch(err => {
                    console.log('error')
                });
        }
    }

    setupBuilder = async (metaInfo) => {
        let items = await this.props.items();
        let mods = await this.props.mods();
        let item = items.find(archwing => {
            return archwing.name.toLowerCase() === this.props.match.params.id.toLowerCase();
        });
        if (item !== undefined) {
            let slotPolarities = [];
            let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
            let filteredMods = mods.filter(mod => {
                return mod.type === 'ARCHWING' || item.name.includes(mod.type);
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
        } else {
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
            .then(res => res.json())
            .then(({ res }) => {
                if (res.ItemName === this.props.match.params.id.toLowerCase() && res.BuildStr === this.props.match.params.pre) {
                    this.setupBuilder(res);
                } else {
                    this.redirectToVoid();
                }
            })
            .catch(err => {
                console.log('error')
            });
    }

    redirectToVoid = () => {
        this.props.history.replace('/void');
    }

    render() {
        return (
            <div className="screen">
                <div className="top-title"><p>{this.state.title}</p></div>
                {!this.state.item.name &&
                    <Loading />
                }
                {this.state.item.name &&
                    <EightSlotModding redirectToVoid={this.redirectToVoid} type={this.props.type} orokin={'reactor'} item={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} />
                }
            </div>
        )
    }
}

export default RangedBuilder;