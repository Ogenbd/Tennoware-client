import React, { Component } from 'react';
import './RangedWeaponStats.css';

export class RangedWeaponStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            effects: {},
            elemental: [],
            mode: 0,
            open: false
        }
    }

    static getDerivedStateFromProps(props) {
        let effects = {};
        let elemental = [];
        props.mods.forEach(mod => {
            if (mod.name !== 'Riven Mod') {
                for (let effect in mod.effects) {
                    if (effect !== 'none') {
                        if (effect === 'elemental') {
                            let exists = elemental.findIndex(element => {
                                return element.type === mod.effects.elemental.type;
                            })
                            if (exists === -1) {
                                let damageObj = {
                                    type: mod.effects.elemental.type,
                                    damage: Math.round((mod.effects.elemental.damage * (mod.currRank + 1)) * 100) / 100
                                }
                                elemental.push(damageObj)
                            } else {
                                elemental[exists].damage = Math.round((elemental[exists].damage + mod.effects.elemental.damage * (mod.currRank + 1)) * 100) / 100;
                            }
                        } else if (effects[effect]) {
                            effects[effect] = Math.round((effects[effect] + mod.effects[effect] * (mod.currRank + 1)) * 100) / 100;
                        } else {
                            effects[effect] = mod.effects[effect] * (mod.currRank + 1);
                        }
                    }
                }
            } else {
                mod.effects.forEach(rivenEffect => {
                    if (rivenEffect.elemental) {
                        let exists = elemental.findIndex(element => {
                            return element.type === rivenEffect.elemental.type;
                        })
                        if (exists === -1) {
                            let damageObj = {
                                type: rivenEffect.elemental.type,
                                damage: Math.round((rivenEffect.elemental.damage) * 100) / 100
                            }
                            elemental.push(damageObj)
                        } else {
                            elemental[exists].damage = Math.round((elemental[exists].damage + rivenEffect.elemental.damage) * 100) / 100;
                        }
                    } else {
                        for (let effect in rivenEffect) {
                            if (effects[effect]) {
                                effects[effect] = Math.round((effects[effect] + rivenEffect[effect]) * 100) / 100;
                            } else {
                                effects[effect] = rivenEffect[effect];
                            }
                        }
                    }
                })
            }
        });
        return {
            effects: effects,
            elemental: elemental
        };
    }

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    calcStatus = () => {
        let status = {}
        let statusMult = 1;
        let multishotMult = 1;
        let baseStatus = 0;
        if (this.state.effects.status) {
            statusMult += this.state.effects.status;
        }
        if (this.state.effects.multishot && this.props.weapon.modes[this.state.mode].trigger !== 'Held' && !this.props.weapon.modes[this.state.mode].singleProjectile) {
            multishotMult += this.state.effects.multishot
        }
        if (this.state.effects.baseStatus) {
            baseStatus += this.state.effects.baseStatus
        }
        if (this.props.weapon.modes[this.state.mode].status * statusMult + baseStatus >= 1) {
            status.chance = 100;
            status.chancePerPellet = 100;
        } else {
            status.chance = Math.round(((1 - Math.pow(1 - this.props.weapon.modes[this.state.mode].status * statusMult, multishotMult)) * 100) * 10) / 10 + baseStatus;
            if (status.chance > 100) status.chance = 100;
            if (this.props.weapon.modes[this.state.mode].pellets) {
                if ((1 - (1 - this.props.weapon.modes[this.state.mode].status * statusMult)) * 100 + baseStatus >= 100) {
                    status.chancePerPellet = 100
                } else {
                    status.chancePerPellet = Math.round(((1 - Math.pow(1 - this.props.weapon.modes[this.state.mode].status * statusMult + baseStatus, 1 / this.props.weapon.modes[this.state.mode].pellets)) * 100) * 10) / 10;
                }
            }
        }
        return status;
    }
    // theres probably a better way to do this
    combineElements(first, second) {
        if ((first.type === 'Toxin' && second.type === 'Electricity') || (second.type === 'Toxin' && first.type === 'Electricity')) {
            return { type: 'Corrosive', damage: first.damage + second.damage }
        } else if ((first.type === 'Toxin' && second.type === 'Cold') || (second.type === 'Toxin' && first.type === 'Cold')) {
            return { type: 'Viral', damage: first.damage + second.damage }
        } else if ((first.type === 'Toxin' && second.type === 'Heat') || (second.type === 'Toxin' && first.type === 'Heat')) {
            return { type: 'Gas', damage: first.damage + second.damage }
        } else if ((first.type === 'Electricity' && second.type === 'Heat') || (second.type === 'Electricity' && first.type === 'Heat')) {
            return { type: 'Radiation', damage: first.damage + second.damage }
        } else if ((first.type === 'Electricity' && second.type === 'Cold') || (second.type === 'Electricity' && first.type === 'Cold')) {
            return { type: 'Magnetic', damage: first.damage + second.damage }
        } else if ((first.type === 'Heat' && second.type === 'Cold') || (second.type === 'Heat' && first.type === 'Cold')) {
            return { type: 'Blast', damage: first.damage + second.damage }
        }
    }

    // refactor sometime.... its a giant mess
    calcDamage = () => {
        let finalDamageArray = [];
        let calcedElementalEffects = [];
        let totalElementalDamageArr = [];
        let damageSplit = [];
        let baseDamageMult;
        let multishotMult;
        let weaponDamage;
        let combinedElement;
        let secondCombinedElement;
        let typeIndex;
        let nativeElementPosition;
        let nativeElementType;
        if (this.state.effects.baseDamage) {
            baseDamageMult = 1 + this.state.effects.baseDamage
        } else {
            baseDamageMult = 1
        }
        if (this.state.effects.multishot && !this.props.weapon.modes[this.state.mode].singleProjectile) {
            multishotMult = 1 + this.state.effects.multishot
        } else {
            multishotMult = 1
        }
        weaponDamage = Math.floor(this.props.weapon.modes[this.state.mode].damage * baseDamageMult) * multishotMult
        this.state.elemental.forEach(element => {
            calcedElementalEffects.push({
                type: element.type,
                damage: weaponDamage * element.damage
            })
        })
        this.props.weapon.modes[this.state.mode].split.forEach(type => {
            damageSplit.push({
                type: type.type,
                damage: weaponDamage * type.percent
            })
        });
        nativeElementPosition = damageSplit.findIndex(type => {
            return type.type !== 'Impact' && type.type !== 'Slash' && type.type !== 'Puncture'
        });
        if (nativeElementPosition !== -1) {
            nativeElementType = damageSplit[nativeElementPosition].type;
            calcedElementalEffects.forEach(element => {
                if (element.type === nativeElementType) {
                    element.damage += damageSplit[nativeElementPosition].damage;
                    damageSplit.splice(nativeElementPosition, 1);
                    nativeElementPosition = -1;
                }
            });
        }
        if (nativeElementPosition !== -1 && (nativeElementType === 'Toxin' || nativeElementType === 'Electricity' || nativeElementType === 'Heat' || nativeElementType === 'Cold')) {
            calcedElementalEffects.push(damageSplit[nativeElementPosition]);
            damageSplit.splice(nativeElementPosition, 1);
            nativeElementPosition = -1;
        }
        switch (calcedElementalEffects.length) {
            case 1:
                totalElementalDamageArr.push(calcedElementalEffects[0])
                break;
            case 2:
                combinedElement = this.combineElements(calcedElementalEffects[0], calcedElementalEffects[1]);
                totalElementalDamageArr.push(combinedElement)
                break;
            case 3:
                combinedElement = this.combineElements(calcedElementalEffects[0], calcedElementalEffects[1]);
                totalElementalDamageArr.push(combinedElement, calcedElementalEffects[2])
                break;
            case 4:
                combinedElement = this.combineElements(calcedElementalEffects[0], calcedElementalEffects[1]);
                secondCombinedElement = this.combineElements(calcedElementalEffects[2], calcedElementalEffects[3]);
                totalElementalDamageArr.push(combinedElement, secondCombinedElement);
                break;
            default:
                break;
        }
        if (this.state.effects.impact) {
            typeIndex = damageSplit.findIndex(type => {
                return type.type === 'Impact'
            });
            if (typeIndex !== -1) {
                damageSplit[typeIndex].damage += damageSplit[typeIndex].damage * this.state.effects.impact
            }
        }
        if (this.state.effects.slash) {
            typeIndex = damageSplit.findIndex(type => {
                return type.type === 'Slash'
            });
            if (typeIndex !== -1) {
                damageSplit[typeIndex].damage += damageSplit[typeIndex].damage * this.state.effects.slash
            }
        }
        if (this.state.effects.puncture) {
            typeIndex = damageSplit.findIndex(type => {
                return type.type === 'Puncture'
            });
            if (typeIndex !== -1) {
                damageSplit[typeIndex].damage += damageSplit[typeIndex].damage * this.state.effects.puncture
            }
        }
        if (nativeElementPosition !== -1) {
            if (nativeElementType === 'Corrosive' || nativeElementType === 'Viral' || nativeElementType === 'Radiation' || nativeElementType === 'Blast' || nativeElementType === 'Gas' || nativeElementType === 'Magnetic') {
                let nativeInCalcCheck = totalElementalDamageArr.findIndex(calcedElement => {
                    return calcedElement.type === nativeElementType;
                });
                if (nativeInCalcCheck !== -1) {
                    totalElementalDamageArr[nativeInCalcCheck].damage += damageSplit[nativeElementPosition].damage;
                    damageSplit.splice(nativeElementPosition, 1);
                }
            }
        }
        damageSplit.forEach(instance => {
            finalDamageArray.push(instance)
        });
        totalElementalDamageArr.forEach(element => {
            finalDamageArray.push(element)
        })
        return finalDamageArray;
    }

    render() {
        const { weapon } = this.props;
        const { mode, effects } = this.state;
        const status = this.calcStatus();
        const damage = this.calcDamage();
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <p>STATS</p>
                    <img src={require('../../assets/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (this.state.open ? 'point-left' : 'point-right')} />
                </div>
                <div className={"ranged-stats " + (this.state.open ? 'open-ranged-stats' : 'closed-ranged-stats')}>
                    <div className="top-bar-margin"></div>
                    {weapon.modes.length > 1 &&
                        <div className="modes">
                            {weapon.modes.map((instance, index) => (
                                <div key={index} className={"interactable " + (mode === index ? 'interactable-active' : 'interactable-inactive')} onClick={() => this.setState({ mode: index })}>
                                    <p className="interactable-p">{instance.name}</p>
                                </div>
                            ))}
                        </div>
                    }
                    <div className="stats-wrapper">
                        <div className="stats-item damage">
                            <p className="stat-name">Damage: </p>
                            <div className="damage">
                                {damage.map(instance => (
                                    <div key={instance.type} className="stat"><p>{instance.type}: </p><p className="stat-frag">{Math.round(instance.damage * 10) / 10}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="stats-item">
                            <p className="stat-name">Mastery: </p>
                            <div className="stat"><p>{weapon.mastery}</p></div>
                        </div>
                        <div className="stats-item">
                            <p className="stat-name">Trigger: </p>
                            <div className="stat"><p>{weapon.modes[mode].trigger}</p></div>
                        </div>
                        <div className="stats-item">
                            <p className="stat-name">Noise: </p>
                            <div className="stat"><p>{weapon.noise}</p></div>
                        </div>
                        <div className="stats-item">
                            <p className="stat-name">Base Accuracy: </p>
                            <div className="stat"><p>{weapon.modes[mode].accuracy}</p></div>
                        </div>
                        {weapon.modes[mode].fireRate &&
                            <div className="stats-item">
                                <p className="stat-name">Fire Rate: </p>
                                {effects.fireRate
                                    ? <div className="stat">
                                        {weapon.bow
                                            ? <p>{Math.round((weapon.modes[mode].fireRate * ((1 + effects.fireRate) * 2)) * 100) / 100}</p>
                                            : <p>{Math.round((weapon.modes[mode].fireRate * (1 + effects.fireRate)) * 100) / 100}</p>
                                        }
                                    </div>
                                    : <div className="stat"><p>{weapon.modes[mode].fireRate}</p></div>
                                }
                            </div>
                        }
                        {weapon.modes[mode].chargeRate &&
                            <div className="stats-item">
                                <p className="stat-name">Charge Rate: </p>
                                {effects.fireRate
                                    ? <div className="stat">
                                        {weapon.bow
                                            ? <p>{Math.round((weapon.modes[mode].chargeRate / ((1 + effects.fireRate) * 2)) * 100) / 100}s</p>
                                            : <p>{Math.round((weapon.modes[mode].chargeRate / (1 + effects.fireRate)) * 100) / 100}s</p>
                                        }
                                    </div>
                                    : <div className="stat"><p>{weapon.modes[mode].chargeRate}s</p></div>
                                }
                            </div>
                        }
                        {weapon.modes[mode].burst &&
                            <div className="stats-item">
                                <p className="stat-name">Rounds Per Burst: </p>
                                <div className="stat"><p>{weapon.modes[mode].burst}</p></div>
                            </div>
                        }
                        {weapon.modes[mode].rangeLimit &&
                            <div className="stats-item">
                                <p className="stat-name">Range Limit: </p>
                                {effects.rangeLimit
                                    ? <div className="stat"><p>{effects.rangeLimit + weapon.modes[mode].rangeLimit}m</p></div>
                                    : <div className="stat"><p>{weapon.modes[mode].rangeLimit}m</p></div>
                                }
                            </div>
                        }
                        {weapon.modes[mode].pellets &&
                            <div className="stats-item">
                                <p className="stat-name">Pellets: </p>
                                {effects.multishot
                                    ? <div className="stat"><p>{weapon.modes[mode].pellets * (1 + effects.multishot)}</p></div>
                                    : <div className="stat"><p>{weapon.modes[mode].pellets}</p></div>
                                }
                            </div>
                        }
                        {weapon.modes[mode].falloffMin &&
                            <div className="stats-item">
                                <p className="stat-name">Falloff: </p>
                                {effects.flightSpeed
                                    ? <div className="stat"><p>{weapon.modes[mode].falloffMin * (1 + effects.flightSpeed)}-{weapon.modes[mode].falloffMax * (1 + effects.flightSpeed)}m</p></div>
                                    : <div className="stat"><p>{weapon.modes[mode].falloffMin}-{weapon.modes[mode].falloffMax}m</p></div>
                                }
                            </div>
                        }
                        {weapon.modes[mode].ammoCost &&
                            <div className="stats-item">
                                <p className="stat-name">Ammo Cost: </p>
                                <div className="stat"><p>{weapon.modes[mode].ammoCost}</p></div>
                            </div>
                        }
                        <div className="stats-item">
                            <p className="stat-name">Magazine Size: </p>
                            {effects.magSize
                                ? <div className="stat"><p>{Math.round(weapon.magSize * (1 + effects.magSize))}</p></div>
                                : <div className="stat"><p>{weapon.magSize}</p></div>
                            }
                        </div>
                        {weapon.maxAmmo &&
                            <div className="stats-item">
                                <p className="stat-name">Max Ammo: </p>
                                {effects.maxAmmo
                                    ? <div className="stat"><p>{Math.round(weapon.maxAmmo * (1 + effects.maxAmmo))}</p></div>
                                    : <div className="stat"><p>{weapon.maxAmmo}</p></div>
                                }
                            </div>
                        }
                        <div className="stats-item">
                            <p className="stat-name">Reload: </p>
                            {effects.reload
                                ? <div className="stat"><p>{Math.round((weapon.reload / (1 + effects.reload)) * 10) / 10}s</p></div>
                                : <div className="stat"><p>{Math.round(weapon.reload * 10) / 10}s</p></div>
                            }
                        </div>
                        {(weapon.modes[mode].punchThrough > 0 || effects.punchThrough) &&
                            <div className="stats-item">
                                <p className="stat-name">Punch Through: </p>
                                {effects.punchThrough
                                    ? <div className="stat"><p>{Math.round((weapon.modes[mode].punchThrough + effects.punchThrough) * 10) / 10}m</p></div>
                                    : <div className="stat"><p>{Math.round(weapon.modes[mode].punchThrough * 10) / 10}m</p></div>
                                }
                            </div>
                        }
                        <div className="stats-item">
                            <p className="stat-name">Critical Chance: </p>
                            {effects.critChance
                                ? <div className="stat"><p>{Math.round((weapon.modes[mode].critChance * (1 + effects.critChance)) * 1000) / 10}%</p></div>
                                : <div className="stat"><p>{Math.round(weapon.modes[mode].critChance * 1000) / 10}%</p></div>
                            }
                        </div>
                        <div className="stats-item">
                            <p className="stat-name">Critical Multiplier: </p>
                            {effects.critMult
                                ? <div className="stat"><p>{Math.round((weapon.modes[mode].critMult * (1 + effects.critMult)) * 10) / 10}x</p></div>
                                : <div className="stat"><p>{weapon.modes[mode].critMult}x</p></div>
                            }
                        </div>
                        <div className="stats-item">
                            <p className="stat-name">Status: </p>
                            <div className="stat"><p>{status.chance}%</p></div>
                        </div>
                        {weapon.modes[mode].pellets &&
                            <div className="stats-item">
                                <p className="stat-name">Status Per Pellet: </p>
                                <div className="stat"><p>{status.chancePerPellet}%</p></div>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RangedWeaponStats;
