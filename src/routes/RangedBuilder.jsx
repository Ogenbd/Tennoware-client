import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/loading/Loading';

// import EightSlotModding from '../components/eightslotmodding/EightSlotModding';

const EightSlotModding = Loadable({
    loader: () => import('../components/eightslotmodding/EightSlotModding'),
    loading: Loading,
    modules: ['EightSlotModding']
});


class RangedBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            weapon: {},
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


    setupBuilder = async (metaInfo) => {
        let weapons = await this.props.weapons();
        let mods = await this.props.mods();
        let weapon = weapons.find(item => {
            return item.name.toLowerCase() === this.props.match.params.id.toLowerCase();
        });
        if (weapon !== undefined) {
            let slotPolarities = [];
            let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
            let filteredMods = mods.filter(mod => {
                return mod.type === 'PRIMARY' || mod.type === 'PISTOL' || weapon.type.some(keyword => {
                    return keyword === mod.type
                });
            });
            filteredMods.forEach((mod, index) => mod.index = index);
            if (weapon.polarities.length > 0) {
                weapon.polarities.forEach(polarity => {
                    slotPolarities.push(polarity);
                    originalPolarityCount[polarity]++
                });
            }
            this.setState({
                title: weapon.name,
                weapon: weapon,
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
        fetch('http://192.168.1.114:50000/getbuild', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ buildId: this.props.match.params.build, userId: this.props.user })
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
                {!this.state.weapon.name &&
                    <Loading />
                }
                {this.state.weapon.name &&
                    <EightSlotModding redirectToVoid={this.redirectToVoid} type={this.props.type} orokin={'catalyst'} riven={'ranged'} weapon={this.state.weapon} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} />
                }
            </div>
        )
    }
}

export default RangedBuilder;
