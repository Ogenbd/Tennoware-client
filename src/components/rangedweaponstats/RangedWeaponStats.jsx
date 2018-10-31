import React, { Component } from 'react';
import './RangedWeaponStats.css';

export class RangedWeaponStats extends Component {
    constructor(props) {
        super(props);
        this.softInput = React.createRef();
        this.state = {
            effects: {},
            elemental: [],
            conditionalEffects: [],
            mode: 0,
            zoom: 0,
            powerStr: 100,
            open: false,
            aiming: false,
            kill: false,
            headshot: false,
            reload: false,
            cast: false,
            first: false,
            aimingToggle: false,
            killToggle: false,
            headshotToggle: false,
            reloadToggle: false,
            castToggle: false,
            firstToggle: false
        }
    }

    static getDerivedStateFromProps(props) {
        let effects = {};
        let elemental = [];
        let conditionalEffects = [];
        let conditional = {
            aiming: false,
            kill: false,
            headshot: false,
            reload: false,
            cast: false,
            first: false
        }
        props.mods.forEach(mod => {
            if (mod.name) {
                if (mod.name !== 'Riven Mod') {
                    if (mod.conditional) {
                        for (let condition in mod.conditional) {
                            conditional[condition] = mod.conditional[condition]
                        }
                        let modEffects = JSON.parse(JSON.stringify(mod.effects));
                        for (let effect in modEffects) {
                            modEffects[effect] = modEffects[effect] * (mod.currRank + 1);
                        }
                        conditionalEffects.push({
                            effects: modEffects,
                            conditions: mod.conditional
                        })
                    } else {
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
                                } else if (effect === 'totalDamage') {
                                    effects.totalDamage = mod.effects.totalDamage[mod.currRank];
                                } else if (effects[effect]) {
                                    effects[effect] = effects[effect] + mod.effects[effect] * (mod.currRank + 1);
                                } else {
                                    effects[effect] = mod.effects[effect] * (mod.currRank + 1);
                                }
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
            }
        });
        return {
            effects: effects,
            elemental: elemental,
            conditionalEffects: conditionalEffects,
            aiming: conditional.aiming,
            kill: conditional.kill,
            headshot: conditional.headshot,
            reload: conditional.reload,
            cast: conditional.cast,
            first: conditional.first
        };
    }

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    toggleAiming = () => {
        this.setState(prevState => ({ aimingToggle: !prevState.aimingToggle }))
    }

    toggleHeadshot = () => {
        this.setState(prevState => ({ headshotToggle: !prevState.headshotToggle }))
    }

    toggleKill = () => {
        this.setState(prevState => ({ killToggle: !prevState.killToggle }))
    }

    toggleReload = () => {
        this.setState(prevState => ({ reloadToggle: !prevState.reloadToggle }))
    }

    toggleCast = () => {
        this.setState(prevState => ({ castToggle: !prevState.castToggle }))
    }

    toggleFirst = () => {
        this.setState(prevState => ({ firstToggle: !prevState.firstToggle }))
    }

    toggleZoom = () => {
        if (this.props.weapon.zoom[this.state.zoom + 1]) {
            this.setState(prevState => ({
                zoom: prevState.zoom + 1
            }));
        } else {
            this.setState({
                zoom: 0
            });
        }
    }

    calcStatus = () => {
        let status = {}
        let statusMult = 1;
        let multishotMult = 1;
        let baseStatus = 0;
        if (this.state.effects.status) {
            statusMult += this.state.effects.status;
        }
        let conditionalStatusEffects = this.state.conditionalEffects.filter(conditional => {
            return conditional.effects.status;
        });
        conditionalStatusEffects.forEach(conditionalEffect => {
            if (this.state.aimingToggle === conditionalEffect.conditions.aiming && this.state.castToggle === conditionalEffect.conditions.cast) {
                statusMult += conditionalEffect.effects.status;
            }
        });
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
        let baseDamageMult = 1;
        let multishotMult = 1;
        let weaponDamage;
        let combinedElement;
        let secondCombinedElement;
        let typeIndex;
        let nativeElementPosition;
        let nativeElementType;
        let conditionalBaseDamageEffects = this.state.conditionalEffects.filter(conditional => {
            return conditional.effects.baseDamage;
        });
        conditionalBaseDamageEffects.forEach(conditionalEffect => {
            if (this.state.firstToggle === conditionalEffect.conditions.first) {
                baseDamageMult += conditionalEffect.effects.baseDamage;
            }
        });
        if (this.state.effects.baseDamage) {
            baseDamageMult += this.state.effects.baseDamage
        }
        if (this.state.effects.multishot && !this.props.weapon.modes[this.state.mode].singleProjectile) {
            multishotMult += this.state.effects.multishot
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
        if (this.props.weapon.exalted) {
            finalDamageArray.forEach(damageType => {
                damageType.damage = damageType.damage * (this.state.powerStr / 100);
            })
        }
        if (this.state.effects.totalDamage) {
            finalDamageArray.forEach(damageType => {
                damageType.damage = damageType.damage * (1 + this.state.effects.totalDamage);
            })
        }
        finalDamageArray.forEach(damageType => {
            damageType.icon = require(`../../assets/${damageType.type}.png`)
        })
        return finalDamageArray;
    }

    calcCritChance = () => {
        let critChanceMult = 1;
        let conditionalCritChanceEffects = this.state.conditionalEffects.filter(conditional => {
            return conditional.effects.critChance;
        });
        conditionalCritChanceEffects.forEach(conditionalEffect => {
            if (this.state.aimingToggle === conditionalEffect.conditions.aiming && this.state.headshotToggle === conditionalEffect.conditions.headshot) {
                critChanceMult += conditionalEffect.effects.critChance;
            }
        });
        if (this.state.effects.critChance) {
            critChanceMult += this.state.effects.critChance;
        }
        // lanka zoom
        if (this.props.weapon.name === 'LANKA' && this.state.zoom > 0) {
            return (Math.round((this.props.weapon.modes[this.state.mode].critChance * critChanceMult) * 1000) / 10) + this.props.weapon.zoom[this.state.zoom].effect;
        }
        return {
            display: Math.round((this.props.weapon.modes[this.state.mode].critChance * critChanceMult) * 1000) / 10,
            mult: critChanceMult
        };
    }

    calcCritMult = () => {
        let critMultMult = 1;
        let conditionalCritMultEffects = this.state.conditionalEffects.filter(conditional => {
            return conditional.effects.critMult;
        });
        conditionalCritMultEffects.forEach(conditionalEffect => {
            if (this.state.aimingToggle === conditionalEffect.conditions.aiming && this.state.killToggle === conditionalEffect.conditions.kill) {
                critMultMult += conditionalEffect.effects.critMult;
            }
        });
        if (this.state.effects.critMult) {
            critMultMult += this.state.effects.critMult;
        }
        // rubico (prime) zoom
        if ((this.props.weapon.name === 'RUBICO' || this.props.weapon.name === 'RUBICO PRIME') && this.state.zoom > 0) {
            critMultMult += this.props.weapon.zoom[this.state.zoom].effect;
        }
        return {
            display: Math.round((this.props.weapon.modes[this.state.mode].critMult * critMultMult) * 10) / 10,
            mult: critMultMult
        };
    }

    calcFireRate = () => {
        let fireRateMult = 1;
        let conditionalFireRateEffects = this.state.conditionalEffects.filter(conditional => {
            return conditional.effects.fireRate;
        });
        conditionalFireRateEffects.forEach(conditionalEffect => {
            if (this.state.aimingToggle === conditionalEffect.conditions.aiming && this.state.reloadToggle === conditionalEffect.conditions.reload) {
                fireRateMult += conditionalEffect.effects.fireRate;
            }
        });
        if (this.state.effects.fireRate) {
            if (this.props.weapon.bow) {
                fireRateMult += this.state.effects.fireRate * 2;
            } else {
                fireRateMult += this.state.effects.fireRate;
            }
        }
        if (this.state.effects.chargeRate) {
            fireRateMult += this.state.effects.chargeRate;
        }
        return {
            display: Math.round((this.props.weapon.modes[this.state.mode].fireRate * fireRateMult) * 10) / 10,
            mult: fireRateMult
        };
    }

    handleChange = ({ target }) => {
        let value = target.value;
        if (value > 999) value = 999;
        if (value < -60) value = -60;
        this.setState({ powerStr: value })
    }

    focusSoftInput = () => {
        if (this.props.viewWidth < 1223) {
            this.softInput.current.focus();
        }
    }

    blurInput = ({ target, key }) => {
        if (key === 'Enter') {
            target.blur();
        }
    }

    render() {
        const { weapon } = this.props;
        const { mode, effects, zoom } = this.state;
        const critChance = this.calcCritChance();
        const critMult = this.calcCritMult();
        const fireRate = this.calcFireRate();
        const status = this.calcStatus();
        const damage = this.calcDamage();
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <img src={require('../../assets/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (this.state.open ? 'point-left' : 'point-right')} />
                    <p>STATS</p>
                </div>
                <div className={"ranged-stats " + (this.state.open ? 'open-ranged-stats' : 'closed-ranged-stats')}>
                    <div className="ranged-stats-inner-wrapper">
                        <div className="top-bar-margin"></div>
                        {weapon.modes.length > 1 &&
                            <div className="modes">
                                {weapon.modes.map((instance, index) => (
                                    <div key={index} className={"activatable " + (mode === index ? 'interactable-active' : 'interactable-inactive')} onClick={() => this.setState({ mode: index })}>
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
                                        <div key={instance.type} className="stat"><p>{instance.type}: </p><p className="stat-frag">{Math.round(instance.damage * 10) / 10}</p><img className="damage-icon" src={instance.icon} alt="" /></div>
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
                                    <div className={"stat " + (fireRate.mult > 1 ? "increased-stat" : fireRate.mult === 1 ? "" : "decreased-stat")}>
                                        <p>{fireRate.display}</p>
                                    </div>
                                </div>
                            }
                            {weapon.modes[mode].chargeRate &&
                                <div className="stats-item">
                                    <p className="stat-name">Charge Rate: </p>
                                    <div className={"stat " + (fireRate.mult > 1 ? "increased-stat" : fireRate.mult === 1 ? "" : "decreased-stat")}>
                                        <p>{Math.round(weapon.modes[mode].chargeRate / fireRate.mult * 100) / 100}</p>
                                    </div>
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
                                        ? <div className={"stat " + (effects.rangeLimit > 0 ? "increased-stat" : "decreased-stat")}>
                                            <p>{effects.rangeLimit + weapon.modes[mode].rangeLimit}m</p>
                                        </div>
                                        : <div className="stat">
                                            <p>{weapon.modes[mode].rangeLimit}m</p>
                                        </div>
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
                                        ? <div className={"stat " + (effects.flightSpeed > 0 ? "increased-stat" : "decreased-stat")}><p>{weapon.modes[mode].falloffMin * (1 + effects.flightSpeed)}-{weapon.modes[mode].falloffMax * (1 + effects.flightSpeed)}m</p></div>
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
                                    ? <div className={"stat " + (effects.magSize > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round(weapon.magSize * (1 + effects.magSize))}</p></div>
                                    : <div className="stat"><p>{weapon.magSize}</p></div>
                                }
                            </div>
                            {weapon.maxAmmo &&
                                <div className="stats-item">
                                    <p className="stat-name">Max Ammo: </p>
                                    {effects.maxAmmo
                                        ? <div className={"stat " + (effects.maxAmmo > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round(weapon.maxAmmo * (1 + effects.maxAmmo))}</p></div>
                                        : <div className="stat"><p>{weapon.maxAmmo}</p></div>
                                    }
                                </div>
                            }
                            <div className="stats-item">
                                <p className="stat-name">Reload: </p>
                                {effects.reload
                                    ? <div className={"stat " + (effects.reload > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((weapon.reload / (1 + effects.reload)) * 10) / 10}s</p></div>
                                    : <div className="stat"><p>{Math.round(weapon.reload * 10) / 10}s</p></div>
                                }
                            </div>
                            {(weapon.modes[mode].punchThrough > 0 || effects.punchThrough) &&
                                <div className="stats-item">
                                    <p className="stat-name">Punch Through: </p>
                                    {effects.punchThrough
                                        ? <div className={"stat " + (effects.punchThrough > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round((weapon.modes[mode].punchThrough + effects.punchThrough) * 10) / 10}m</p></div>
                                        : <div className="stat"><p>{Math.round(weapon.modes[mode].punchThrough * 10) / 10}m</p></div>
                                    }
                                </div>
                            }
                            <div className="stats-item">
                                <p className="stat-name">Critical Chance: </p>
                                <div className={"stat " + (critChance.mult > 1 ? "increased-stat" : critChance.mult === 1 ? "" : "decreased-stat")}><p>{critChance.display}%</p></div>
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Critical Multiplier: </p>
                                <div className={"stat " + (critMult.mult > 1 ? "increased-stat" : critMult.mult === 1 ? "" : "decreased-stat")}><p>{critMult.display}x</p></div>
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Status: </p>
                                <div className={"stat " + (status.chance > Math.round(weapon.modes[mode].status * 1000) / 10 ? "increased-stat" : status.chance === Math.round(weapon.modes[mode].status * 1000) / 10 ? "" : "decreased-stat")}><p>{status.chance}%</p></div>
                            </div>
                            {weapon.modes[mode].pellets &&
                                <div className="stats-item">
                                    <p className="stat-name">Status Per Pellet: </p>
                                    <div className={"stat " + (status.chance > Math.round(weapon.modes[mode].status * 1000) / 10 ? "increased-stat" : status.chance === Math.round(weapon.modes[mode].status * 1000) / 10 ? "" : "decreased-stat")}><p>{status.chancePerPellet}%</p></div>
                                </div>
                            }
                            {/* headshot damage on sniper zoom */}
                            {weapon.headshotDamage && zoom > 0 &&
                                <div className="stats-item">
                                    <p className="stat-name">Headshot Damage: </p>
                                    <div className="stat"><p>{weapon.zoom[zoom].effect}%</p></div>
                                </div>
                            }
                            {/* str mod for exalted weapons */}
                            {weapon.exalted &&
                                <div className="stats-item">
                                    <p className="stat-name">Power Strength: </p>
                                    <div className="str-stat"><input className="str-input" type="number" value={this.state.powerStr} onFocus={this.focusSoftInput} onChange={this.handleChange} /><span className="stat">%</span></div>
                                </div>
                            }
                        </div>
                        <div className="modes">
                            {weapon.zoom &&
                                <div className={"zoom activatable " + (this.state.zoom > 0 ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleZoom}>
                                    <p className="interactable-p">{weapon.zoom[zoom].name}</p>
                                </div>
                            }
                        </div>
                        <div className="modes">
                            {this.state.aiming &&
                                <div className={"condition activatable " + (this.state.aimingToggle ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleAiming}>
                                    <p className="interactable-p">While Aiming</p>
                                </div>
                            }
                            {this.state.headshot &&
                                <div className={"activatable condition " + (this.state.headshotToggle ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleHeadshot}>
                                    <p className="interactable-p">After Headshot</p>
                                </div>
                            }
                            {this.state.kill &&
                                <div className={"activatable condition " + (this.state.killToggle ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleKill}>
                                    <p className="interactable-p kill-activatable">After Kill</p>
                                </div>
                            }
                            {this.state.reload &&
                                <div className={"activatable condition " + (this.state.reloadToggle ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleReload}>
                                    <p className="interactable-p">After Reload</p>
                                </div>
                            }
                            {this.state.cast &&
                                <div className={"activatable condition " + (this.state.castToggle ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleCast}>
                                    <p className="interactable-p">After Cast</p>
                                </div>
                            }
                            {this.state.first &&
                                <div className={"activatable condition " + (this.state.firstToggle ? 'interactable-active' : 'interactable-inactive')} onClick={this.toggleFirst}>
                                    <p className="interactable-p">First Shot</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="soft-input-wrapper">
                    <input ref={this.softInput} type="number" className="soft-input" value={this.state.powerStr} onChange={this.handleChange} onKeyUp={this.blurInput} />
                    <p className="soft-percent">%</p>
                </div>
            </React.Fragment>
        )
    }
}

export default RangedWeaponStats;
