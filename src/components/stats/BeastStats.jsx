import React, { PureComponent } from 'react';
import './Stats.css';

export class BeastStats extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            effects: {},
            elemental: [],
            // collar: false
        }
    }

    static getDerivedStateFromProps(props) {
        let effects = {};
        let elemental = [];
        props.mods.forEach(mod => {
            BeastStats.groupEffects(mod, effects, elemental);
        });
        return {
            effects: effects,
            elemental: elemental
        }
    }

    static groupEffects(mod, effects, elemental) {
        if (mod.name) {
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
                        effects[effect] = effects[effect] + mod.effects[effect] * (mod.currRank + 1);
                    } else {
                        effects[effect] = mod.effects[effect] * (mod.currRank + 1);
                    }
                }
            }
        }
    }


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

    calcDamage = () => {
        let finalDamageArray = [];
        let calcedElementalEffects = [];
        let totalElementalDamageArr = [];
        let damageSplit = [];
        let baseDamageMult = 1;
        let multishotMult = 1;
        let weaponDamage;
        let combinedElement;
        let secondCombinedElement;
        let typeIndex;
        let nativeElementPosition;
        let nativeElementType;
        if (this.state.effects.baseDamage) {
            baseDamageMult += this.state.effects.baseDamage
        }
        weaponDamage = Math.floor(this.props.frame.damage * baseDamageMult) * multishotMult
        this.state.elemental.forEach(element => {
            calcedElementalEffects.push({
                type: element.type,
                damage: weaponDamage * element.damage
            })
        })
        this.props.frame.split.forEach(type => {
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
        });
        if (this.state.effects.totalDamage) {
            finalDamageArray.forEach(damageType => {
                damageType.damage = damageType.damage * (1 + this.state.effects.totalDamage);
            })
        }
        finalDamageArray.forEach(damageType => {
            damageType.icon = require(`../../assets/general/${damageType.type}.png`)
        })
        return finalDamageArray;
    }

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    render() {
        let { frame } = this.props;
        let { effects, open } = this.state;
        let damage = this.calcDamage();
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <img src={require('../../assets/general/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (open ? 'point-left' : 'point-right')} />
                    <p>STATS</p>
                </div>
                <div className={"ranged-stats " + (open ? 'open-ranged-stats' : 'closed-ranged-stats')}>
                    <div className="ranged-stats-inner-wrapper">
                        <div className="top-bar-margin"></div>
                        <div className="stats-wrapper">
                            {/* {frame.type[0] === 'KUBROW' &&
                                <div className="modes">
                                    <div className={"activatable " + (!collar ? 'interactable-active' : 'interactable-inactive')} onClick={this.setTaichen}>
                                        <p className="interactable-p">Taichen</p>
                                    </div>
                                    <div className={"activatable " + (collar ? 'interactable-active' : 'interactable-inactive')} onClick={this.setKavasa}>
                                        <p className="interactable-p">Kavasa</p>
                                    </div>
                                </div>
                            } */}
                            <div className="stats-item damage">
                                <p className="stat-name">Damage: </p>
                                <div className="damage">
                                    {damage.map(instance => (
                                        <div key={instance.type} className="stat"><p>{instance.type}: </p><p className="stat-frag">{(Math.round(instance.damage * 10) / 10).toFixed(1)}</p><img className="damage-icon" src={instance.icon} alt="" /></div>
                                    ))}
                                </div>
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Critical Chance: </p>
                                {effects.critChance
                                    ? <div className={"warframe-stat " + (effects.critChance > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.critChance * (effects.critChance + 1) * 100)}%</p></div>
                                    : <div className="warframe-stat"><p>{frame.critChance * 100}%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Critical Multiplier: </p>
                                {effects.critMult
                                    ? <div className={"warframe-stat " + (effects.critMult > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.critMult * (effects.critMult + 1) * 100) / 100}x</p></div>
                                    : <div className="warframe-stat"><p>{frame.critMult}x</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Status: </p>
                                {effects.status
                                    ? <div className={"warframe-stat " + (effects.status > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.status * (effects.status + 1) * 100)}%</p></div>
                                    : <div className="warframe-stat"><p>{frame.status * 100}%</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Armor: </p>
                                {effects.armor
                                    ? <div className={"warframe-stat " + (frame.armor < frame.armor + (frame.armor * effects.armor) ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.armor + (frame.armor * effects.armor))}</p></div>
                                    : <div className="warframe-stat"><p>{frame.armor}</p></div>
                                }
                            </div>
                            {/* <div className="stats-item">
                                <p className="stat-name">Damage reduction: </p>
                                {effects.armor
                                    ? <div className="warframe-stat"><p>{Math.round((frame.armor + (frame.armor * effects.armor)) / ((frame.armor + (frame.armor * effects.armor) + 300)) * 1000) / 10}%</p></div>
                                    : <div className="warframe-stat"><p>{Math.round(frame.armor / (300 + frame.armor) * 1000) / 10}%</p></div>
                                }
                            </div> */}
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BeastStats
