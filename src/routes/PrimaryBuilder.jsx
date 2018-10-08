import React, { Component } from 'react';

import { RangedWeaponModding } from '../components/rangedweapon/RangedWeaponModding';


class PrimaryBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weapon: {},
            relevantMods: [],
            slotPolarities: [],
            originalPolarityCount: {},
            metaInfo: {
                UserID: undefined,

            }
        }
    }

    componentDidMount() {
        if (this.props.match.params.build) {
            this.confirmBuild()
        } else {
            this.setupBuilder()
        }
        console.log(this.props);
    }

    setupBuilder = () => {
        let weapon = this.props.weapons.find(item => {
            return item.name.toLowerCase() === this.props.match.params.id.toLowerCase();
        });
        if (weapon !== undefined) {
            this.props.setTitle(weapon.name);
            let slotPolarities = [];
            let originalPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
            let filteredMods = this.props.mods.filter(mod => {
                return mod.type === 'PRIMARY' || weapon.type.some(keyword => {
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
                weapon: weapon,
                relevantMods: filteredMods,
                slotPolarities: slotPolarities,
                originalPolarityCount: originalPolarityCount
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
                console.log(res);
                if (res.ItemName === this.props.match.params.id.toLowerCase() && res.BuildStr === this.props.match.params.pre) {
                    this.setState({
                        metaInfo: res
                    });
                    this.setupBuilder();
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
                {/* <div className="primary-builder"> */}
                {this.props.title === this.state.weapon.name &&
                    <RangedWeaponModding redirectToVoid={this.redirectToVoid} weapon={this.state.weapon} mods={this.state.relevantMods} slotPolarities={this.state.slotPolarities} originalPolarityCount={this.state.originalPolarityCount} viewWidth={this.props.viewWidth} match={this.props.match} user={this.props.user} metaInfo={this.state.metaInfo} />
                }
            </div>
        )
    }
}

export default PrimaryBuilder;
