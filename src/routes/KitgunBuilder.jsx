import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/loading/Loading';


const EightSlotModding = Loadable({
    loader: () => import('../components/modding/EightSlotModding'),
    loading: Loading,
});


class KitgunBuilder extends Component {
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
        // let weaponList = [] 
        // this.props.weapons.forEach(weapon => {
        //     weaponList.push(weapon.name)
        // })
        // console.log(weaponList);
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
    // if (item !== undefined) {
    // } else {
    //     this.redirectToVoid();
    // }
    // }

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
                <div className="top-title">
                <p>KITGUN</p>
                <p className="modular-subtitle">{this.state.title}</p>
                </div>
                {!this.state.item.name &&
                    <Loading />
                }
                {this.state.item.name &&
                    <EightSlotModding redirectToVoid={this.redirectToVoid} type={this.props.type} orokin={'catalyst'} riven={'ranged'} item={this.state.item} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} online={this.props.online} />
                }
            </div>
        )
    }
}

export default KitgunBuilder;
