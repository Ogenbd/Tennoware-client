import React, { PureComponent } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import '../rangedweapon/RangedWeaponStats.css';
import './WarframeStats.css';

export class WarframeStats extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            effects: {},
            growingPowerSlotted: false,
            growingPowerActive: true,
            growingPowerEffect: 0,
            abilityOne: 0,
            abilityTwo: 0,
            abilityThree: 0,
            abilityFour: 0,
            augmentOne: undefined,
            augmentTwo: undefined,
            augmentThree: undefined,
            augmentFour: undefined,
        }
    }

    static getDerivedStateFromProps(props) {
        let effects = {};
        let augments = []
        let growingPower = { slotted: false, active: true, effect: 0 }
        if (props.chosenAuraMod.name === 'Growing Power') {
            growingPower.slotted = true;
            growingPower.effect = props.chosenAuraMod.effects.strength
        }
        WarframeStats.groupEffects(props.chosenAuraMod, effects);
        WarframeStats.groupEffects(props.chosenExilusMod, effects);
        if (props.chosenExilusMod.name && props.chosenExilusMod.augment) augments[props.chosenExilusMod.augment.ability] = cloneDeep(props.chosenExilusMod);
        props.mods.forEach(mod => {
            if (mod.augment) augments[mod.augment.ability] = cloneDeep(mod)
            WarframeStats.groupEffects(mod, effects);
        });
        return {
            effects: effects,
            growingPowerSlotted: growingPower.slotted,
            growingPowerEffect: growingPower.effect,
            augmentOne: augments[0],
            augmentTwo: augments[1],
            augmentThree: augments[2],
            augmentFour: augments[3],
        }
    }

    static groupEffects(mod, effects) {
        if (mod.name) {
            for (let effect in mod.effects) {
                if (effect !== 'none') {
                    if (effects[effect]) {
                        effects[effect] = effects[effect] + mod.effects[effect] * (mod.currRank + 1);
                    } else {
                        effects[effect] = mod.effects[effect] * (mod.currRank + 1);
                    }
                }
            }
        }
    }

    generateAbilityOne = () => {
        if (this.state.augmentOne) {
            let stats = this.generateAbilityStats(0, this.state.augmentOne.augment.details[this.state.abilityOne], this.state.augmentOne.effects, this.state.augmentOne.currRank)
            return stats;
        } else {
            let stats = this.generateAbilityStats(0, this.props.frame.abilities[0].details[this.state.abilityOne])
            return stats;
        }
    }

    generateAbilityTwo = () => {
        if (this.state.augmentTwo) {
            let stats = this.generateAbilityStats(1, this.state.augmentTwo.augment.details[this.state.abilityTwo], this.state.augmentTwo.effects, this.state.augmentTwo.currRank)
            return stats;
        } else {
            let stats = this.generateAbilityStats(1, this.props.frame.abilities[1].details[this.state.abilityTwo])
            return stats;
        }
    }



    generateAbilityThree = () => {
        if (this.state.augmentThree) {
            let stats = this.generateAbilityStats(2, this.state.augmentThree.augment.details[this.state.abilityThree], this.state.augmentThree.effects, this.state.augmentThree.currRank)
            return stats;
        } else {
            let stats = this.generateAbilityStats(2, this.props.frame.abilities[2].details[this.state.abilityThree])
            return stats;
        }
    }

    generateAbilityFour = () => {
        if (this.state.augmentFour) {
            let stats = this.generateAbilityStats(3, this.state.augmentFour.augment.details[this.state.abilityFour], this.state.augmentFour.effects, this.state.augmentFour.currRank)
            return stats;
        } else {
            let stats = this.generateAbilityStats(3, this.props.frame.abilities[3].details[this.state.abilityFour])
            return stats;
        }
    }

    generateAbilityStats = (abilityNum, abilityDetails, augEffects, augRank) => {
        let stats = []
        for (let coefficient in abilityDetails) {
            if (coefficient !== 'mode') {
                abilityDetails[coefficient].forEach((stat, index) => {
                    if (typeof stat.base === 'function') stat.base = stat.base(augEffects, augRank);
                    if (coefficient === 'efficiency') {
                        let cost;
                        let costMult = 1;
                        if (this.state.effects.efficiency) costMult -= this.state.effects.efficiency;
                        stat.base * costMult < stat.base * 0.25 ? cost = stat.base * 0.25 : cost = stat.base * costMult;
                        stats.push(
                            <div key={`${coefficient}${index}`} className="ability-stat">
                                <div className="ability-stat-name">{stat.name}</div>
                                <div className={"ability-stat-amount " + (cost < stat.base ? "increased-stat" : cost > stat.base ? "decreased-stat" : "")}>{Math.round(cost * 100) / 100}{stat.suffix ? stat.suffix : ''}{stat.icon ? <img className="damage-icon" src={stat.icon} alt="" /> : ''}</div>
                            </div>
                        )
                    } else if (coefficient === 'channel') {
                        let drain;
                        let efficiencyMult = 1;
                        let durationMult = 1;
                        if (this.state.effects.efficiency) efficiencyMult -= this.state.effects.efficiency;
                        if (this.state.effects.duration) durationMult += this.state.effects.duration;
                        stat.base * (efficiencyMult / durationMult) < stat.base * 0.25 ? drain = stat.base * 0.25 : drain = stat.base * (efficiencyMult / durationMult);
                        stats.push(
                            <div key={`${coefficient}${index}`} className="ability-stat">
                                <div className="ability-stat-name">{stat.name}</div>
                                <div className={"ability-stat-amount " + (drain < stat.base ? "increased-stat" : drain > stat.base ? "decreased-stat" : "")}>{Math.round(drain * 100) / 100}{stat.suffix ? stat.suffix : ''}{stat.icon ? <img className="damage-icon" src={stat.icon} alt="" /> : ''}</div>
                            </div>
                        )
                    } else if (coefficient === 'armor') {
                        let strengthMult = this.state.effects.strength ? this.state.effects.strength + 1 : 1;
                        let armorMult = this.state.effects.armor ? this.state.effects.armor + 1 : 1;
                        stats.push(
                            <div key={`${coefficient}${index}`} className="ability-stat">
                                <div className="ability-stat-name">{stat.name}</div>
                                <div className={"ability-stat-amount " + (strengthMult + armorMult > 2 ? "increased-stat" : strengthMult + armorMult < 2 ? "decreased-stat" : "")}>{Math.round((stat.base + 5 * this.props.frame.armor * armorMult) * strengthMult * 10) / 10}</div>
                            </div>
                        )
                    } else if (coefficient === 'inverse') {
                        let durationMult = this.state.effects.duration ? this.state.effects.duration + 1 : 1;
                        stats.push(
                            <div key={`${coefficient}${index}`} className="ability-stat">
                                <div className="ability-stat-name">{stat.name}</div>
                                <div className={"ability-stat-amount " + (durationMult > 1 ? "increased-stat" : durationMult < 1 ? "decreased-stat" : "")}>{Math.round(stat.base / durationMult * 10) / 10}</div>
                            </div>
                        )
                        // these are exceptions for specific warframe abilities
                    } else if (coefficient === 'exception') {
                        if (this.props.frame.name === 'ATLAS') {
                            if (abilityNum === 0) {
                                let durationMult = this.state.effects.duration ? this.state.effects.duration : 0;
                                stats.push(
                                    <div key={`${coefficient}${index}`} className="ability-stat">
                                        <div className="ability-stat-name">{stat.name}</div>
                                        <div className={"ability-stat-amount " + (durationMult > 0 ? "increased-stat" : durationMult < 0 ? "decreased-stat" : "")}>{stat.base * (1 + durationMult) >= 0.5 ? Math.round(stat.base * (1 + durationMult) * 10) / 10 : 0.5}</div>
                                    </div>
                                )
                            } else if (abilityNum === 3) {
                                if (index === 0) {
                                    let strengthMult = this.state.effects.strength ? this.state.effects.strength : 0;
                                    let armorMult = this.state.effects.armor ? this.state.effects.armor : 0;
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            <div className={"ability-stat-amount " + (strengthMult + armorMult > 0 ? "increased-stat" : strengthMult + armorMult < 0 ? "decreased-stat" : "")}>{Math.round(stat.base * (1 + strengthMult + armorMult))}</div>
                                        </div>
                                    )
                                } else if (index === 1) {
                                    let strengthMult = this.state.effects.strength ? this.state.effects.strength : 0;
                                    let healthMult = this.state.effects.health ? this.state.effects.health : 0;
                                    let shieldsMult = this.state.effects.shields ? this.state.effects.shields : 0;
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            <div className={"ability-stat-amount " + (strengthMult + healthMult + shieldsMult > 0 ? "increased-stat" : strengthMult + healthMult + shieldsMult < 0 ? "decreased-stat" : "")}>{Math.round(stat.base * (5 + strengthMult + healthMult + shieldsMult))}</div>
                                        </div>
                                    )
                                } else if (index === 2) {
                                    let durationMult = this.state.effects.duration ? this.state.effects.duration : 0;
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            <div className={"ability-stat-amount " + (durationMult > 0 ? "increased-stat" : durationMult < 0 ? "decreased-stat" : "")}>{stat.base * (1 + durationMult) >= 0.5 && stat.base * (1 + durationMult) < 1.5 ? Math.round(stat.base * (1 + durationMult) * 10) / 10 : stat.base * (1 + durationMult) > 1.5 ? 1.5 : 0.5}</div>
                                        </div>
                                    )
                                }
                            }
                        }
                        if (this.props.frame.name === 'EQUINOX') {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.strength
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 50 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 50}%</div>
                                        : <div className="ability-stat-amount">{stat.base}%</div>
                                    }
                                </div>
                            )
                        }
                        if (this.props.frame.name === 'FROST' || this.props.frame.name === 'FROST PRIME') {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.range
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.range > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.range < 60 ? Math.round((stat.base + stat.base * this.state.effects.range) * 10) / 10 : 60}°</div>
                                        : <div className="ability-stat-amount">{stat.base}°</div>
                                    }
                                </div>
                            )
                        }
                        if (this.props.frame.name === 'GARA') {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.strength
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 90 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 90}%</div>
                                        : <div className="ability-stat-amount">{stat.base}%</div>
                                    }
                                </div>
                            )
                        }
                        if (this.props.frame.name === 'IVARA') {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.strength
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 100 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 100}%</div>
                                        : <div className="ability-stat-amount">{stat.base}%</div>
                                    }
                                </div>
                            )
                        }
                        if (this.props.frame.name === 'MESA' || this.props.frame.name === 'MIRAGE' || this.props.frame.name === 'MIRAGE PRIME') {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.strength
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 95 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 95}%</div>
                                        : <div className="ability-stat-amount">{stat.base}%</div>
                                    }
                                </div>
                            )
                        }
                        // end of exceptions
                    } else {
                        stats.push(
                            <div key={`${coefficient}${index}`} className="ability-stat">
                                <div className="ability-stat-name">{stat.name}</div>
                                {this.state.effects[coefficient]
                                    ? <div className={"ability-stat-amount " + ((stat.base + stat.base * this.state.effects[coefficient] > stat.base ? "increased-stat" : "decreased-stat"))}>{Math.round((stat.base + stat.base * this.state.effects[coefficient]) * 10) / 10}{stat.suffix ? stat.suffix : ''}{stat.icon ? <img className="damage-icon" src={stat.icon} alt="" /> : ''}</div>
                                    : <div className="ability-stat-amount">{stat.base}{stat.suffix || ''}{stat.icon ? <img className="damage-icon" src={stat.icon} alt="" /> : ''}</div>
                                }
                            </div>
                        )
                    }
                });
            }
        }
        return stats;
    }


    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    render() {
        let { frame } = this.props;
        let { effects, open, abilityOne, abilityTwo, abilityThree, abilityFour } = this.state;
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <img src={require('../../assets/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (open ? 'point-left' : 'point-right')} />
                    <p>STATS</p>
                </div>
                <div className={"ranged-stats " + (open ? 'open-ranged-stats' : 'closed-ranged-stats')}>
                    <div className="ranged-stats-inner-wrapper">
                        <div className="stats-wrapper">
                            <div className="stats-item">
                                <p className="stat-name">Armor: </p>
                                {effects.armor
                                    ? <div className={"warframe-stat " + (frame.armor < frame.armor + (frame.armor * effects.armor) ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.armor + (frame.armor * effects.armor))}</p></div>
                                    : <div className="warframe-stat"><p>{frame.armor}</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Damage reduction: </p>
                                {effects.armor
                                    ? <div className="warframe-stat"><p>{Math.round((frame.armor + (frame.armor * effects.armor)) / ((frame.armor + (frame.armor * effects.armor) + 300)) * 1000) / 10}%</p></div>
                                    : <div className="warframe-stat"><p>{Math.round(frame.armor / (300 + frame.armor) * 1000) / 10}%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Energy: </p>
                                {effects.energy
                                    ? <div className={"warframe-stat " + (frame.energy < frame.energy + (frame.energy * effects.energy) ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.energy + (frame.baseEnergy * effects.energy))}</p></div>
                                    : <div className="warframe-stat"><p>{frame.energy}</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Health: </p>
                                {effects.health
                                    ? <div className={"warframe-stat " + (frame.health < frame.health + (frame.health * effects.health) ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.health + (frame.baseHealth * effects.health))}</p></div>
                                    : <div className="warframe-stat"><p>{frame.health}</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Shields: </p>
                                {effects.shields
                                    ? <div className={"warframe-stat " + (frame.shields < frame.shields + (frame.shields * effects.shields) ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.shields + (frame.baseShield * effects.shields))}</p></div>
                                    : <div className="warframe-stat"><p>{frame.shields}</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Sprint Speed: </p>
                                {effects.speed
                                    ? <div className={"warframe-stat " + (frame.speed < frame.speed + (frame.speed * effects.speed) ? "increased-stat" : "decreased-stat")}><p>{Math.round((frame.speed + frame.speed * effects.speed) * 100) / 100}</p></div>
                                    : <div className="warframe-stat"><p>{frame.speed}</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Duration: </p>
                                {effects.duration
                                    ? <div className={"warframe-stat " + (effects.duration > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((1 + effects.duration) * 100)}%</p></div>
                                    : <div className="warframe-stat"><p>100%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Efficiency: </p>
                                {effects.efficiency
                                    ? <div className={"warframe-stat " + (effects.efficiency > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((1 + effects.efficiency) * 100)}%</p></div>
                                    : <div className="warframe-stat"><p>100%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Range: </p>
                                {effects.range
                                    ? <div className={"warframe-stat " + (effects.range > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((1 + effects.range) * 100)}%</p></div>
                                    : <div className="warframe-stat"><p>100%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Power Strength: </p>
                                {effects.strength
                                    ? <div className={"warframe-stat " + (effects.strength > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((1 + effects.strength) * 100)}%</p></div>
                                    : <div className="warframe-stat"><p>100%</p></div>
                                }
                            </div>
                            <div className="frame-ability">
                                <div className="ability-title">
                                    <p>{frame.abilities[0].name}</p>
                                    <img src={frame.abilities[0].img} alt="" />
                                </div>
                                {frame.abilities[0].details.length > 1 &&
                                    <div className="modes">
                                        {frame.abilities[0].details.map((instance, index) => (
                                            <div key={index} className={"activatable " + (abilityOne === index ? 'interactable-active' : 'interactable-inactive')} onClick={() => this.setState({ abilityOne: index })}>
                                                <p className="interactable-p">{instance.mode}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                                {this.generateAbilityOne()}
                            </div>
                            <div className="frame-ability">
                                <div className="ability-title">
                                    <p>{frame.abilities[1].name}</p>
                                    <img src={frame.abilities[1].img} alt="" />
                                </div>
                                {frame.abilities[1].details.length > 1 &&
                                    <div className="modes">
                                        {frame.abilities[1].details.map((instance, index) => (
                                            <div key={index} className={"activatable " + (abilityTwo === index ? 'interactable-active' : 'interactable-inactive')} onClick={() => this.setState({ abilityTwo: index })}>
                                                <p className="interactable-p">{instance.mode}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                                {this.generateAbilityTwo()}
                            </div>
                            <div className="frame-ability">
                                <div className="ability-title">
                                    <p>{frame.abilities[2].name}</p>
                                    <img src={frame.abilities[2].img} alt="" />
                                </div>
                                {frame.abilities[2].details.length > 1 &&
                                    <div className="modes">
                                        {frame.abilities[2].details.map((instance, index) => (
                                            <div key={index} className={"activatable " + (abilityThree === index ? 'interactable-active' : 'interactable-inactive')} onClick={() => this.setState({ abilityThree: index })}>
                                                <p className="interactable-p">{instance.mode}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                                {this.generateAbilityThree()}
                            </div>
                            <div className="frame-ability">
                                <div className="ability-title">
                                    <p>{frame.abilities[3].name}</p>
                                    <img src={frame.abilities[3].img} alt="" />
                                </div>
                                {frame.abilities[3].details.length > 1 &&
                                    <div className="modes">
                                        {frame.abilities[3].details.map((instance, index) => (
                                            <div key={index} className={"activatable " + (abilityFour === index ? 'interactable-active' : 'interactable-inactive')} onClick={() => this.setState({ abilityFour: index })}>
                                                <p className="interactable-p">{instance.mode}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                                {this.generateAbilityFour()}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WarframeStats
