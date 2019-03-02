import React, { PureComponent } from 'react';
import Switch from 'react-switch';
import './Stats.css';

export class BeastStats extends PureComponent {
    constructor(props) {
        super(props);
        this.softInputArmor = React.createRef();
        this.softInputHealth = React.createRef();
        this.softInputShields = React.createRef();
        this.state = {
            open: false,
            effects: {},
            elemental: [],
            linkArmor: false,
            armorAmount: '',
            linkHealth: false,
            healthAmount: '',
            linkShields: false,
            shieldsAmount: '',
            baseStatsToggle: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        let effects = {};
        let elemental = [];
        let linkArmor = false;
        let linkHealth = false;
        let linkShields = false;
        if (state.baseStatsToggle) {
            return {
                effects: effects,
                elemental: elemental,
                linkArmor: linkArmor,
                linkHealth: linkHealth,
                linkShields: linkShields
            }
        }
        props.mods.forEach(mod => {
            if (mod.name) {
                if (mod.link) {
                    if (mod.effects.armorLink) {
                        linkArmor = true;
                    } else if (mod.effects.healthLink) {
                        linkHealth = true;
                    } else if (mod.effects.shieldsLink) {
                        linkShields = true;
                    }
                }
                BeastStats.groupEffects(mod, effects, elemental);
            }
        });
        return {
            effects: effects,
            elemental: elemental,
            linkArmor: linkArmor,
            linkHealth: linkHealth,
            linkShields: linkShields
        }
    }

    static groupEffects(mod, effects, elemental) {
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
            damageType.icon = require(`../../assets/dynamic/damage/${damageType.type}.png`)
        })
        return finalDamageArray;
    }

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    toggleBaseStats = () => {
        this.setState(prevState => ({ baseStatsToggle: !prevState.baseStatsToggle }))
    }

    handleArmorChange = ({ target }) => {
        let value = target.value;
        value = this.checkValue(value);
        this.setState({ armorAmount: value })
    }

    handleHealthChange = ({ target }) => {
        let value = target.value;
        value = this.checkValue(value);
        this.setState({ healthAmount: value })
    }

    handleShieldsChange = ({ target }) => {
        let value = target.value;
        value = this.checkValue(value);
        this.setState({ shieldsAmount: value })
    }

    checkValue = (value) => {
        if (parseInt(value, 10) < 0) {
            return '';
        } else if (parseInt(value, 10) > 9999) {
            return '9999';
        } else {
            return value;
        }
    }

    focusSoftInputArmor = () => {
        if (this.props.viewWidth < 1280) {
            this.softInputArmor.current.focus();
        }
    }

    focusSoftInputHealth = () => {
        if (this.props.viewWidth < 1280) {
            this.softInputHealth.current.focus();
        }
    }

    focusSoftInputShields = () => {
        if (this.props.viewWidth < 1280) {
            this.softInputShields.current.focus();
        }
    }

    blurInput = ({ target, key }) => {
        if (key === 'Enter') {
            target.blur();
        }
    }

    calcArmor = () => {
        let armor = this.props.frame.armor;
        if (this.state.effects.armor) {
            armor = armor + armor * this.state.effects.armor;
        }
        if (this.state.linkArmor && parseInt(this.state.armorAmount, 10) > 0) {
            armor = armor + this.state.effects.armorLink * parseInt(this.state.armorAmount, 10);
        }
        return armor;
    }

    calcHealth = () => {
        let health = this.props.frame.health;
        if (this.state.effects.health) {
            health = health + this.props.frame.baseHealth * this.state.effects.health;
        }
        if (this.state.linkHealth && parseInt(this.state.healthAmount, 10) > 0) {
            health = health + this.state.effects.healthLink * parseInt(this.state.healthAmount, 10);
        }
        return health;
    }

    calcShields = () => {
        let shields = this.props.frame.shields;
        if (this.state.effects.shields) {
            shields = shields + this.props.frame.baseShields * this.state.effects.shields;
        }
        if (this.state.linkShields && parseInt(this.state.shieldsAmount, 10) > 0) {
            shields = shields + this.state.effects.shieldsLink * parseInt(this.state.shieldsAmount, 10);
        }
        return shields;
    }

    render() {
        let { frame } = this.props;
        let { effects, open } = this.state;
        let damage = this.calcDamage();
        let armor = this.calcArmor();
        let health = this.calcHealth();
        let shields = this.calcShields();
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <img src={require('../../assets/general/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (open ? 'point-left' : 'point-right')} />
                    <p>STATS</p>
                </div>
                <div className={"ranged-stats " + (open ? 'open-ranged-stats' : 'closed-ranged-stats')}>
                    <div className="ranged-stats-inner-wrapper">
                        <div className="stats-wrapper">
                            <div className="stats-item damage">
                                <div className="stats-switch">
                                    <p className="stat-name">Show Base Stats</p>
                                    <Switch className="stat" onChange={this.toggleBaseStats} checked={this.state.baseStatsToggle} />
                                </div>
                            </div>
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
                                <div className={"warframe-stat " + (frame.armor < armor ? "increased-stat" : frame.armor === armor ? "" : "decreased-stat")}><p>{Math.floor(armor)}</p></div>
                            </div>
                            {this.state.linkArmor &&
                                <div className="stats-item">
                                    <p className="stat-name">Warframe Armor: </p>
                                    <div className="str-stat"><input className="str-input" type="number" value={this.state.armorAmount} onFocus={this.focusSoftInputArmor} onChange={this.handleArmorChange} /></div>
                                </div>
                            }
                            <div className="stats-item">
                                <p className="stat-name">Damage reduction: </p>
                                <div className="warframe-stat"><p>{Math.round(armor / (300 + armor) * 1000) / 10}%</p></div>
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Health: </p>
                                <div className={"warframe-stat " + (frame.health < health ? "increased-stat" : frame.health === health ? "" : "decreased-stat")}><p>{Math.floor(health)}</p></div>
                            </div>
                            {this.state.linkHealth &&
                                <div className="stats-item">
                                    <p className="stat-name">Warframe Health: </p>
                                    <div className="str-stat"><input className="str-input" type="number" value={this.state.healthAmount} onFocus={this.focusSoftInputHealth} onChange={this.handleHealthChange} /></div>
                                </div>
                            }
                            <div className="stats-item">
                                <p className="stat-name">Shields: </p>
                                <div className={"warframe-stat " + (frame.shields < shields ? "increased-stat" : frame.shields === shields ? "" : "decreased-stat")}><p>{Math.floor(shields)}</p></div>
                            </div>
                            {this.state.linkShields &&
                                <div className="stats-item">
                                    <p className="stat-name">Warframe Shields: </p>
                                    <div className="str-stat"><input className="str-input" type="number" value={this.state.shieldsAmount} onFocus={this.focusSoftInputShields} onChange={this.handleShieldsChange} /></div>
                                </div>
                            }
                            <div className="stats-note">Stats do not take DNA Integrity, Loyalty or Collar type into account.</div>
                        </div>
                    </div>
                </div>
                <div className="soft-input-wrapper">
                    <input ref={this.softInputArmor} type="number" className="soft-input" value={this.state.armorAmount} onChange={this.handleArmorChange} onKeyUp={this.blurInput} />
                </div>
                <div className="soft-input-wrapper">
                    <input ref={this.softInputHealth} type="number" className="soft-input" value={this.state.healthAmount} onChange={this.handleHealthChange} onKeyUp={this.blurInput} />
                </div>
                <div className="soft-input-wrapper">
                    <input ref={this.softInputShields} type="number" className="soft-input" value={this.state.shieldsAmount} onChange={this.handleShieldsChange} onKeyUp={this.blurInput} />
                </div>
            </React.Fragment>
        )
    }
}

export default BeastStats
