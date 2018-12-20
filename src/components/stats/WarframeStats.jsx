import React, { PureComponent } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import './Stats.css';

export class WarframeStats extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            effects: {},
            arbitrations: false,
            growingPowerSlotted: false,
            growingPowerActive: true,
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

    static getDerivedStateFromProps(props, state) {
        let effects = {};
        let augments = []
        let growingPowerSlotted = false;
        if (props.full) {
            if (props.frame.name === 'NIDUS') effects.strength = 0.15;
            if (state.arbitrations) {
                if (effects.strength) {
                    effects.strength += 3;
                } else {
                    effects.strength = 3;
                }
            }
            if (props.chosenAuraMod.name === 'Growing Power') {
                growingPowerSlotted = true;
                if (effects.strength && state.growingPowerActive) {
                    effects.strength += props.chosenAuraMod.effects.growingPower * (props.chosenAuraMod.currRank + 1);
                } else if (!effects.strength && state.growingPowerActive) {
                    effects.strength = props.chosenAuraMod.effects.growingPower * (props.chosenAuraMod.currRank + 1);
                }
            }
            WarframeStats.groupEffects(props.chosenAuraMod, effects);
            WarframeStats.groupEffects(props.chosenExilusMod, effects);
            if (props.chosenExilusMod.name && props.chosenExilusMod.augment) augments[props.chosenExilusMod.augment.ability] = cloneDeep(props.chosenExilusMod);
        }
        props.mods.forEach(mod => {
            if (mod.augment) augments[mod.augment.ability] = cloneDeep(mod)
            WarframeStats.groupEffects(mod, effects);
        });
        return {
            effects: effects,
            growingPowerSlotted: growingPowerSlotted,
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
                    if (typeof mod.effects[effect] === 'object') {
                        if (effects[effect]) {
                            effects[effect] = effects[effect] + mod.effects[effect][mod.set.setCurr - 1] * (mod.currRank + 1);
                        } else {
                            effects[effect] = mod.effects[effect][mod.set.setCurr - 1] * (mod.currRank + 1);
                        }
                    }
                    else if (effects[effect]) {
                        effects[effect] = effects[effect] + mod.effects[effect] * (mod.currRank + 1);
                    } else {
                        effects[effect] = mod.effects[effect] * (mod.currRank + 1);
                    }
                }
            }
        }
    }

    toggleGrowingPower = () => {
        let newEffects = cloneDeep(this.state.effects);
        if (this.state.growingPowerActive) {
            newEffects.strength -= this.state.growingPowerEffect;
            this.setState({
                growingPowerActive: false,
                effects: newEffects
            });
        } else {
            newEffects.strength += this.state.growingPowerEffect;
            this.setState({
                growingPowerActive: true,
                effects: newEffects
            });
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
                                <div className={"ability-stat-amount " + (strengthMult + armorMult > 2 ? "increased-stat" : strengthMult + armorMult < 2 ? "decreased-stat" : "")}>{Math.round((stat.base + stat.mult * this.props.frame.armor * armorMult) * strengthMult * 10) / 10}</div>
                            </div>
                        )
                    } else if (coefficient === 'inverse') {
                        let durationMult = this.state.effects.duration ? this.state.effects.duration + 1 : 1;
                        stats.push(
                            <div key={`${coefficient}${index}`} className="ability-stat">
                                <div className="ability-stat-name">{stat.name}</div>
                                <div className={"ability-stat-amount " + (durationMult > 1 ? "increased-stat" : durationMult < 1 ? "decreased-stat" : "")}>{Math.round(stat.base / durationMult * 10) / 10}{stat.suffix ? stat.suffix : ''}{stat.icon ? <img className="damage-icon" src={stat.icon} alt="" /> : ''}</div>
                            </div>
                        )
                        // the next else if contents are exceptions for specific warframe abilities that have a min/max calculation or otherwise a singular type of calculation
                    } else if (coefficient === 'exception') {
                        if (this.props.frame.name === 'ATLAS' || ((this.props.frame.name === 'VALKYR' || this.props.frame.name === 'VALKYR PRIME') && abilityNum === 0)) {
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
                                            <div className={"ability-stat-amount " + (durationMult > 0 ? "increased-stat" : durationMult < 0 ? "decreased-stat" : "")}>{stat.base * (1 + durationMult) >= 0.5 && stat.base * (1 + durationMult) < 1.5 ? Math.round(stat.base * (1 + durationMult) * 100) / 100 : stat.base * (1 + durationMult) > 1.5 ? 1.5 : 0.5}</div>
                                        </div>
                                    )
                                }
                            }
                        }
                        if (this.props.frame.name === 'EQUINOX') {
                            if (this.state.abilityThree === 1) {
                                if (index === 0) {
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            {this.state.effects.strength
                                                ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 50 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 50}%</div>
                                                : <div className="ability-stat-amount">{stat.base}%</div>
                                            }
                                        </div>
                                    )
                                } else if (index === 1) {
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            {this.state.effects.strength
                                                ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 30 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 30}%</div>
                                                : <div className="ability-stat-amount">{stat.base}%</div>
                                            }
                                        </div>
                                    )
                                }
                            } else if (this.state.abilityThree === 0) {
                                if (index === 0) {
                                    let strengthMult = this.state.effects.strength ? this.state.effects.strength + 1 : 1;
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            {this.state.effects.strength
                                                ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{Math.round((stat.base / strengthMult) * 10) / 10}%</div>
                                                : <div className="ability-stat-amount">{stat.base}%</div>
                                            }
                                        </div>
                                    )
                                } else if (index === 1) {
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            {this.state.effects.strength
                                                ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 80 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 80}%</div>
                                                : <div className="ability-stat-amount">{stat.base}%</div>
                                            }
                                        </div>
                                    )
                                }
                            }
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
                        if (this.props.frame.name === 'GARA' || this.props.frame.name === 'NIDUS' || this.props.frame.name === 'HARROW') {
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
                        if (this.props.frame.name === 'IVARA' || this.props.frame.name === 'NYX' || this.props.frame.name === 'NYX PRIME' || (this.props.frame.name === 'GARUDA' && abilityNum === 3)) {
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
                        if (this.props.frame.name === 'GARUDA' && abilityNum === 2) {
                            let efficiencyMult = this.state.effects.efficiency ? this.state.effects.efficiency + 1 : 1;
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.efficiency
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.efficiency > 0 ? "increased-stat" : "decreased-stat"))}>{Math.round((3.2391 * efficiencyMult ** 6 - 19.996 * efficiencyMult ** 5 + 50.42 * efficiencyMult ** 4 - 65.961 * efficiencyMult ** 3 + 47.108 * efficiencyMult ** 2 - 17.238 * efficiencyMult + 2.673) * 1000) / 10}%</div>
                                        : <div className="ability-stat-amount">25%</div>
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
                        if (this.props.frame.name === 'NOVA' || this.props.frame.name === 'NOVA PRIME' || ((this.props.frame.name === 'VALKYR' || this.props.frame.name === 'VALKYR PRIME') && abilityNum === 1)) {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.strength
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + (this.state.effects.strength * 100) < 75 ? Math.round(stat.base + (this.state.effects.strength * 100)) : 75}%</div>
                                        : <div className="ability-stat-amount">{stat.base}%</div>
                                    }
                                </div>
                            )
                        }
                        if (this.props.frame.name === 'OBERON' || this.props.frame.name === 'OBERON PRIME') {
                            if (abilityNum === 0) {
                                stats.push(
                                    <div key={`${coefficient}${index}`} className="ability-stat">
                                        <div className="ability-stat-name">{stat.name}</div>
                                        {this.state.effects.strength
                                            ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{Math.floor(stat.base + stat.base * this.state.effects.strength)}</div>
                                            : <div className="ability-stat-amount">{stat.base}%</div>
                                        }
                                    </div>
                                )
                            } else if (abilityNum === 1) {
                                let rangeMult = this.state.effects.range ? this.state.effects.range : 0;
                                if (index === 0) {
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            <div className={"ability-stat-amount " + (rangeMult > 0 ? "increased-stat" : rangeMult < 0 ? "decreased-stat" : "")}>{Math.round((stat.base + 11.25 * rangeMult) * 10) / 10}m</div>
                                        </div>
                                    )
                                } else if (index === 1) {
                                    stats.push(
                                        <div key={`${coefficient}${index}`} className="ability-stat">
                                            <div className="ability-stat-name">{stat.name}</div>
                                            <div className={"ability-stat-amount " + (rangeMult > 0 ? "increased-stat" : rangeMult < 0 ? "decreased-stat" : "")}>{Math.round(stat.base + 135 * rangeMult)}°</div>
                                        </div>
                                    )
                                }
                            }
                        }
                        if (this.props.frame.name === 'SARYN' || this.props.frame.name === 'SARYN PRIME') {
                            let strengthMult = this.state.effects.strength ? this.state.effects.strength + 1 : 1;
                            if (abilityNum === 0) {
                                stats.push(
                                    <div key={`${coefficient}${index}`} className="ability-stat">
                                        <div className="ability-stat-name">{stat.name}</div>
                                        <div className={"ability-stat-amount " + (strengthMult > 1 ? "increased-stat" : strengthMult < 1 ? "decreased-stat" : "")}>{Math.round(stat.base / strengthMult * 10) / 10}%</div>
                                    </div>
                                )
                            } else if (abilityNum === 2) {
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
                        }
                        if (this.props.frame.name === 'TRINITY' || this.props.frame.name === 'TRINITY PRIME') {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.strength
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 75 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 75}%</div>
                                        : <div className="ability-stat-amount">{stat.base}%</div>
                                    }
                                </div>
                            )
                        }
                        if (this.props.frame.name === 'NEKROS' || this.props.frame.name === 'NEKROS PRIME' || ((this.props.frame.name === 'MAG' || this.props.frame.name === 'MAG PRIME') && abilityNum === 3)) {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.strength
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.strength > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.strength < 80 ? Math.round((stat.base + stat.base * this.state.effects.strength) * 10) / 10 : 80}%</div>
                                        : <div className="ability-stat-amount">{stat.base}%</div>
                                    }
                                </div>
                            )
                        }
                        if (this.props.frame.name === 'BANSHEE' || this.props.frame.name === 'BANSHEE PRIME') {
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
                        if (this.props.frame.name === 'BARUUK') {
                            stats.push(
                                <div key={`${coefficient}${index}`} className="ability-stat">
                                    <div className="ability-stat-name">{stat.name}</div>
                                    {this.state.effects.range
                                        ? <div className={"ability-stat-amount " + ((this.state.effects.range > 0 ? "increased-stat" : "decreased-stat"))}>{stat.base + stat.base * this.state.effects.range < 360 ? Math.round((stat.base + stat.base * this.state.effects.range) * 10) / 10 : 360}°</div>
                                        : <div className="ability-stat-amount">{stat.base}°</div>
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
        this.setState(prevState => ({ open: !prevState.open }));
    }

    toggleArbitrations = () => {
        this.setState(prevState => ({ arbitrations: !prevState.arbitrations }));
    }
    
    render() {
        let { frame } = this.props;
        let { effects, open, abilityOne, abilityTwo, abilityThree, abilityFour } = this.state;
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <img src={require('../../assets/general/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (open ? 'point-left' : 'point-right')} />
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
                                    ? <div className={"warframe-stat " + (frame.shields < frame.shields + (frame.shields * effects.shields) ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.shields + (frame.baseShields * effects.shields))}</p></div>
                                    : <div className="warframe-stat"><p>{frame.shields}</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Speed: </p>
                                {effects.speed
                                    ? <div className={"warframe-stat " + (frame.speed < frame.speed + (frame.speed * effects.speed) ? "increased-stat" : "decreased-stat")}><p>{Math.round((frame.speed + frame.speed * effects.speed) * 100) / 100}</p></div>
                                    : <div className="warframe-stat"><p>{frame.speed}</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Duration: </p>
                                {effects.duration
                                    ? <div className={"warframe-stat " + (effects.duration > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((1 + effects.duration) * 1000) / 10}%</p></div>
                                    : <div className="warframe-stat"><p>100%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Efficiency: </p>
                                {effects.efficiency
                                    ? <div className={"warframe-stat " + (effects.efficiency > 0 ? "increased-stat" : "decreased-stat")}><p>{effects.efficiency < 0.75 ? Math.round((1 + effects.efficiency) * 1000) / 10 : 175}%</p></div>
                                    : <div className="warframe-stat"><p>100%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Range: </p>
                                {effects.range
                                    ? <div className={"warframe-stat " + (effects.range > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((1 + effects.range) * 1000) / 10}%</p></div>
                                    : <div className="warframe-stat"><p>100%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Power Strength: </p>
                                {effects.strength
                                    ? <div className={"warframe-stat " + (effects.strength > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((1 + effects.strength) * 1000) / 10}%</p></div>
                                    : <div className="warframe-stat"><p>100%</p></div>
                                }
                            </div>
                            {this.state.growingPowerSlotted &&
                                <div className="modes">
                                    <div className={"activatable " + (this.state.growingPowerActive ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleGrowingPower}>
                                        <p className="interactable-p">Growing Power</p>
                                    </div>
                                </div>
                            }
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
                            {this.props.full &&
                                <div className="modes">
                                    <div className={"activatable " + (this.state.arbitrations ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleArbitrations}>
                                        <p className="interactable-p">Arbitration Bonus</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WarframeStats
