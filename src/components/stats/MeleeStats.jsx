import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import Switch from 'react-switch';
import 'rc-slider/assets/index.css';
import './Stats.css';

export class MeleeStats extends Component {
    constructor(props) {
        super(props);
        this.softInput = React.createRef();
        this.state = {
            effects: {},
            elemental: [],
            mode: 0,
            combo: 0,
            statusOnTarget: 0,
            comboDamageStep: 0.5,
            powerStr: 100,
            razorwingBlitz: 0,
            open: false,
            berserker: false,
            berserkerStacks: 0,
            arbitrations: false,
            gladOverride: false,
            gladSet: 0,
            baseStatsToggle: false
        }
    }

    componentDidMount() {
        if (this.props.weapon.step) {
            this.setState({
                comboDamageStep: this.props.weapon.step
            });
        }
    }

    static getDerivedStateFromProps(props, state) {
        let effects = {};
        let elemental = [];
        let berserker = false;
        let gladSet = state.gladOverride ? state.gladSet : 0;
        if (state.baseStatsToggle) {
            return {
                effects: effects,
                elemental: elemental
            }
        }
        if (state.arbitrations) effects.baseDamage = 3;
        props.mods.forEach(mod => {
            if (mod.name) {
                if (mod.name !== 'Riven Mod') {
                    if (mod.effects.berserker) berserker = true;
                    if (mod.effects.gladCritChance && !state.gladOverride) gladSet++
                    for (let effect in mod.effects) {
                        if (effect !== 'none') {
                            if (effect === 'elemental') {
                                let exists = elemental.findIndex(element => {
                                    return element.type === mod.effects.elemental.type;
                                });
                                if (exists === -1) {
                                    let damageObj = {
                                        type: mod.effects.elemental.type,
                                        damage: Math.round((mod.effects.elemental.damage * (mod.currRank + 1)) * 100) / 100
                                    }
                                    elemental.push(damageObj)
                                } else {
                                    elemental[exists].damage = Math.round((elemental[exists].damage + mod.effects.elemental.damage * (mod.currRank + 1)) * 100) / 100;
                                }
                            } else if (typeof mod.effects[effect] === 'object') {
                                if (effects[effect]) {
                                    effects[effect] = effects[effect] + mod.effects[effect][mod.set.setCurr - 1] * (mod.currRank + 1);
                                } else {
                                    effects[effect] = mod.effects[effect][mod.set.setCurr - 1] * (mod.currRank + 1);
                                }
                            } else if (effects[effect]) {
                                effects[effect] = effects[effect] + mod.effects[effect] * (mod.currRank + 1);
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
            }
        });
        return {
            effects: effects,
            elemental: elemental,
            berserker: berserker,
            gladSet: gladSet
        };
    }

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    toggleArbitrations = () => {
        this.setState(prevState => ({ arbitrations: !prevState.arbitrations }))
    }

    toggleBaseStats = () => {
        this.setState(prevState => ({ baseStatsToggle: !prevState.baseStatsToggle }))
    }

    setGladSet = (value) => {
        this.setState({
            gladSet: value,
            gladOverride: true
        });
    }

    setCondition = (value) => {
        this.setState({
            statusOnTarget: value,
        });
    }

    setBerserkerStacks = (value) => {
        this.setState({
            berserkerStacks: value
        });
    }

    setCombo = (value) => {
        this.setState({
            combo: value
        });
    }
    setRazorwingBlitz = (value) => {
        this.setState({
            razorwingBlitz: value
        });
    }

    calcStatus = () => {
        let statusMult = 1;
        let comboMult = 0;
        let status = {};
        if (this.state.effects.comboStatus) comboMult += this.state.effects.comboStatus;
        if (this.state.effects.status) statusMult += this.state.effects.status;
        if (comboMult !== 0 && this.state.combo > 0) {
            if (this.props.weapon.modes[this.state.mode].status * statusMult * (1 + comboMult * (this.state.combo + 1)) / 100 >= 1) {
                status.chance = 100;
                status.chancePerPellet = 100;
            } else {
                status.chance = Math.round(this.props.weapon.modes[this.state.mode].status * statusMult * (1 + comboMult * (this.state.combo + 1)) * 1000) / 10;
                if (this.props.weapon.modes[this.state.mode].pellets) {
                    if ((1 - (1 - this.props.weapon.modes[this.state.mode].status * statusMult * (1 + comboMult * (this.state.combo + 1)))) * 100 >= 100) {
                        status.chancePerPellet = 100
                    } else {
                        status.chancePerPellet = Math.round(((1 - Math.pow(1 - this.props.weapon.modes[this.state.mode].status * statusMult * (1 + comboMult * (this.state.combo + 1)), 1 / this.props.weapon.modes[this.state.mode].pellets)) * 100) * 10) / 10;
                    }
                }
            }
        } else {
            if (this.props.weapon.modes[this.state.mode].status * statusMult / 100 >= 1) {
                status.chance = 100;
                status.chancePerPellet = 100;
            } else {
                status.chance = Math.round(this.props.weapon.modes[this.state.mode].status * statusMult * 1000) / 10;
                if (this.props.weapon.modes[this.state.mode].pellets) {
                    if ((1 - (1 - this.props.weapon.modes[this.state.mode].status * statusMult)) * 100 >= 100) {
                        status.chancePerPellet = 100
                    } else {
                        status.chancePerPellet = Math.round(((1 - Math.pow(1 - this.props.weapon.modes[this.state.mode].status * statusMult, 1 / this.props.weapon.modes[this.state.mode].pellets)) * 100) * 10) / 10;
                    }
                }
            }
        }
        if (this.props.weapon.type[0] === 'EXALTED BLADE' && this.state.mode > 0) {
            status.chance += 50 * this.state.powerStr / 100;
        }
        if (status.chance > 100) status.chance = 100;
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

    calcSpecials = () => {
        let specials = {
            slide: this.props.weapon.modes[this.state.mode].slide,
            wall: this.props.weapon.modes[this.state.mode].wall,
            slam: this.props.weapon.modes[this.state.mode].slam
        }
        let elementMult = 1;
        this.state.elemental.forEach(element => {
            elementMult += element.damage;
        });
        for (let special in specials) {
            if (specials[special]) {
                if (this.state.effects.baseDamage) specials[special] = Math.floor(specials[special] * (1 + this.state.effects.baseDamage));
                if (this.state.effects.damage) specials[special] += this.state.effects.damage;
                if (elementMult > 0) specials[special] *= elementMult;
                if (this.props.weapon.exalted) specials[special] *= this.state.powerStr / 100;
                if (this.state.combo > 0) specials[special] *= (this.state.combo + 1);
                if (this.state.effects.conditionOverload && this.state.statusOnTarget > 0) specials[special] *= Math.pow(1 + this.state.effects.conditionOverload, this.state.statusOnTarget);
                specials[special] = Math.round(specials[special] * 10) / 10;
            }
        }
        return specials;
    }

    // refactor sometime.... its a giant mess
    calcDamage = () => {
        let finalDamageArray = [];
        let calcedElementalEffects = [];
        let totalElementalDamageArr = [];
        let damageSplit = [];
        let baseDamageMult = 1;
        let weaponDamage;
        let combinedElement;
        let secondCombinedElement;
        let typeIndex;
        let nativeElementPosition;
        let nativeElementType;
        if (this.state.effects.baseDamage) {
            baseDamageMult += this.state.effects.baseDamage
        }
        weaponDamage = Math.floor(this.props.weapon.modes[this.state.mode].damage * baseDamageMult);
        if (this.state.effects.damage) weaponDamage += this.state.effects.damage;
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
        });
        if (this.props.weapon.exalted) {
            finalDamageArray.forEach(damageType => {
                damageType.damage = damageType.damage * (this.state.powerStr / 100);
            });
        }
        if (this.state.combo > 0) {
            finalDamageArray.forEach(damageType => {
                damageType.damage = damageType.damage * (this.state.combo + 1);
            });
        }
        if (this.state.effects.conditionOverload && this.state.statusOnTarget > 0) {
            finalDamageArray.forEach(damageType => {
                damageType.damage = damageType.damage * Math.pow(1 + this.state.effects.conditionOverload, this.state.statusOnTarget);
            });
        }
        finalDamageArray.forEach(damageType => {
            damageType.icon = require(`../../assets/dynamic/damage/${damageType.type}.png`)
        });
        return finalDamageArray;
    }

    calcCritChance = () => {
        let critChanceMult = 1;
        let comboMult = 0;
        let critChance;
        if (this.state.effects.comboCritChance) comboMult += this.state.effects.comboCritChance;
        if (this.state.gladSet > 0 && !this.props.weapon.exalted) comboMult += 0.15 * this.state.gladSet;
        if (this.state.effects.critChance) {
            critChanceMult += this.state.effects.critChance;
        }
        comboMult !== 0 && this.state.combo > 0
            ? critChance = (this.props.weapon.modes[this.state.mode].critChance * critChanceMult) * (1 + comboMult * (this.state.combo + 1))
            : critChance = this.props.weapon.modes[this.state.mode].critChance * critChanceMult;
        return {
            display: critChance,
            mult: critChanceMult,
            comboMult: comboMult
        };
    }

    calcCritMult = () => {
        let critMultMult = 1;
        if (this.state.effects.critMult) {
            critMultMult += this.state.effects.critMult;
        }
        return {
            display: this.props.weapon.modes[this.state.mode].critMult * critMultMult,
            mult: critMultMult
        };
    }

    calcDPS = (damage, critChance, critMult) => {
        let averageHitDamage;
        let totalDamage = 0;
        damage.forEach(type => { totalDamage += type.damage });
        averageHitDamage = totalDamage * (1 + critChance * (critMult - 1));
        return averageHitDamage
    }

    calcSpeed = () => {
        let speedMult = 1;
        if (this.state.effects.speed) speedMult += this.state.effects.speed;
        if (this.state.berserker && this.state.berserkerStacks > 0) {
            let berserkerMult = this.state.effects.berserker * this.state.berserkerStacks;
            berserkerMult > 0.75 ? speedMult += 0.75 : speedMult += berserkerMult;
        }
        if (this.props.weapon.name === 'DIWATA') speedMult += 0.25 * (this.state.powerStr / 100) * this.state.razorwingBlitz
        return {
            display: this.props.weapon.modes[this.state.mode].speed * speedMult,
            mult: speedMult
        }
    }

    calcProcWeights = (damage, status) => {
        let totalDamage = damage.reduce((acc, damage) => {
            if (damage.type === 'Impact' || damage.type === 'Puncture' || damage.type === 'Slash') {
                return acc + damage.damage * 4
            } else {
                return acc + damage.damage
            }
        }, 0);
        let statusChance = status.chancePerPellet ? status.chancePerPellet / 100 : status.chance / 100;
        let procBreakdown = damage.map(instance => {
            if (instance.type === 'Impact' || instance.type === 'Puncture' || instance.type === 'Slash') {
                return {
                    type: instance.type,
                    chance: Math.round(instance.damage * 4 / totalDamage * statusChance * 1000) / 10,
                }
            } else {
                return {
                    type: instance.type,
                    chance: Math.round(instance.damage / totalDamage * statusChance * 1000) / 10
                }
            }
        });
        procBreakdown.forEach(instance => {
            if (isNaN(instance.chance)) instance.chance = 0;
        })
        return procBreakdown;
    }

    handleChange = ({ target }) => {
        let value = parseInt(target.value, 10);
        if (value > 999) value = 999;
        if (value < 0) value = '';
        if (isNaN(value)) value = '';
        this.setState({ powerStr: value })
    }

    focusSoftInput = () => {
        if (this.props.viewWidth < 1280) {
            this.softInput.current.focus();
        }
    }

    blurInput = ({ target, key }) => {
        if (key === 'Enter') {
            target.blur();
        }
    }

    conditionMarks = () => {
        let marks = {};
        for (let i = 0; i < 7; i++) {
            marks[i] = {}
            marks[i].label = `${i}`;
            i === this.state.statusOnTarget ? marks[i].style = { color: '#fff9a0', textShadow: '0px 0px 8px rgba(255, 249, 160, 1)' } : marks[i].style = { color: 'white' }
        }
        return marks;
    }

    gladMarks = () => {
        let marks = {};
        for (let i = 0; i < 7; i++) {
            marks[i] = {}
            marks[i].label = `${i}`;
            i === this.state.gladSet ? marks[i].style = { color: '#fff9a0', textShadow: '0px 0px 8px rgba(255, 249, 160, 1)' } : marks[i].style = { color: 'white' }
        }
        return marks;
    }

    berserkerMarks = () => {
        let marks = {};
        for (let i = 0; i < 4; i++) {
            marks[i] = {}
            marks[i].label = `${i}`;
            i === this.state.berserkerStacks ? marks[i].style = { color: '#fff9a0', textShadow: '0px 0px 8px rgba(255, 249, 160, 1)' } : marks[i].style = { color: 'white' }
        }
        return marks;
    }

    comboMarks = () => {
        let marks = {};
        for (let i = 0; i < this.state.comboDamageStep * 7; i = i + this.state.comboDamageStep) {
            marks[i] = {}
            marks[i].label = `${i + 1}x`;
            this.state.comboDamageStep > 0.5
                ? i === this.state.combo ? marks[i].style = { color: '#fff9a0', textShadow: '0px 0px 8px rgba(255, 249, 160, 1)', fontSize: '10px' } : marks[i].style = { color: 'white', fontSize: '10px' }
                : i === this.state.combo ? marks[i].style = { color: '#fff9a0', textShadow: '0px 0px 8px rgba(255, 249, 160, 1)' } : marks[i].style = { color: 'white' }
        }
        return marks;
    }

    razorwingBlitzMarks = () => {
        let marks = {};
        for (let i = 0; i < 5; i++) {
            marks[i] = {}
            marks[i].label = `${i}`;
            i === this.state.razorwingBlitz ? marks[i].style = { color: '#fff9a0', textShadow: '0px 0px 8px rgba(255, 249, 160, 1)' } : marks[i].style = { color: 'white' }
        }
        return marks;
    }

    render() {
        const { weapon } = this.props;
        const { mode, berserker, berserkerStacks, combo, comboDamageStep, gladSet, statusOnTarget, razorwingBlitz } = this.state;
        const speed = this.calcSpeed();
        const damage = this.calcDamage();
        const critChance = this.calcCritChance();
        const critMult = this.calcCritMult();
        const status = this.calcStatus();
        const specials = this.calcSpecials();
        const averageHitDamage = this.calcDPS(damage, critChance.display, critMult.display);
        const procBreakdown = this.calcProcWeights(damage, status);
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <img src={require('../../assets/general/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (this.state.open ? 'point-left' : 'point-right')} />
                    <p>STATS</p>
                </div>
                <div className={"ranged-stats " + (this.state.open ? 'open-ranged-stats' : 'closed-ranged-stats')}>
                    <div className="ranged-stats-inner-wrapper">
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
                            <div className="stats-item damage first-stat">
                                <div className="stats-switch">
                                    <p className="stat-name">Show Base Stats</p>
                                    <Switch className="stat" onChange={this.toggleBaseStats} checked={this.state.baseStatsToggle} />
                                </div>
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Average x Speed: </p>
                                <div className="stat"><p>{(Math.round(averageHitDamage * speed.display * 10) / 10).toFixed(1)}</p></div>
                                <p className="stat-name">Hit Average: </p>
                                <div className="stat"><p>{(Math.round(averageHitDamage * 10) / 10).toFixed(1)}</p></div>
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
                                <p className="stat-name">Mastery: </p>
                                <div className="stat"><p>{weapon.mastery}</p></div>
                            </div>
                            {weapon.modes[mode].slide &&
                                <div className="stats-item">
                                    <p className="stat-name">Spin Attack: </p>
                                    <div className="stat"><p>{specials.slide}</p></div>
                                </div>
                            }
                            {weapon.modes[mode].slam &&
                                <div className="stats-item">
                                    <p className="stat-name">Leap Attack: </p>
                                    <div className="stat"><p>{specials.slam}</p></div>
                                </div>
                            }
                            {weapon.modes[mode].wall &&
                                <div className="stats-item">
                                    <p className="stat-name">Wall Attack: </p>
                                    <div className="stat"><p>{specials.wall}</p></div>
                                </div>
                            }
                            {weapon.modes[mode].speed &&
                                <div className="stats-item">
                                    <p className="stat-name">Attack Speed: </p>
                                    <div className={"stat " + (speed.mult > 1 ? "increased-stat" : speed.mult === 1 ? "" : "decreased-stat")}>
                                        <p>{Math.round(speed.display * 1000) / 1000}</p>
                                    </div>
                                </div>
                            }
                            <div className="stats-item">
                                <p className="stat-name">Critical Chance: </p>
                                <div className={"stat " + ((critChance.mult > 1 || (critChance.comboMult > 0 && combo > 0)) ? "increased-stat" : critChance.mult === 1 ? "" : "decreased-stat")}><p>{Math.round(critChance.display * 1000) / 10}%</p></div>
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Critical Multiplier: </p>
                                <div className={"stat " + (critMult.mult > 1 ? "increased-stat" : critMult.mult === 1 ? "" : "decreased-stat")}><p>{Math.round(critMult.display * 10) / 10}x</p></div>
                            </div>
                            {weapon.modes[mode].pellets &&
                                <div className="stats-item">
                                    <p className="stat-name">Pellets: </p>
                                    <div className="stat"><p>{weapon.modes[mode].pellets}</p></div>
                                </div>
                            }
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
                            <div className="stats-item damage">
                                <p className="status-breakdown">Chance For Specific Status Effect{weapon.modes[mode].pellets ? ' Per Pellet' : ''}: </p>
                                <div className="damage">
                                    {procBreakdown.map(instance => (
                                        <div key={instance.type} className="stat"><p>{instance.type}: </p><p className="stat-frag">{instance.chance.toFixed(1)}%</p></div>
                                    ))}
                                </div>
                            </div>
                            {/* str mod for exalted weapons */}
                            {weapon.exalted &&
                                <div className="stats-item">
                                    <p className="stat-name">Power Strength: </p>
                                    <div className="str-stat"><input className="str-input" type="number" value={this.state.powerStr} onFocus={this.focusSoftInput} onChange={this.handleChange} /><span className="stat">%</span></div>
                                </div>
                            }
                        </div>
                        <div className="modes">
                            {weapon.name === 'DIWATA' &&
                                <div className="slider-box">
                                    <p className="slider-title">Razorwing Blitz Stacks</p>
                                    <div className="slider-wrapper">
                                        <Slider min={0} max={4} value={razorwingBlitz} onChange={this.setRazorwingBlitz} dots={true} handleStyle={{ backgroundColor: '#96dbfa' }} marks={this.razorwingBlitzMarks()} />
                                    </div>
                                </div>
                            }
                            {this.state.effects.conditionOverload &&
                                <div className="slider-box">
                                    <p className="slider-title">Status Effects on Target:</p>
                                    <div className="slider-wrapper">
                                        <Slider min={0} max={6} value={statusOnTarget} step={1} onChange={this.setCondition} dots={true} handleStyle={{ backgroundColor: '#96dbfa' }} marks={this.conditionMarks()} />
                                    </div>
                                </div>
                            }
                            {berserker &&
                                <div className="slider-box">
                                    <p className="slider-title">Berserker Stacks</p>
                                    <div className="slider-wrapper">
                                        <Slider min={0} max={3} value={berserkerStacks} step={1} onChange={this.setBerserkerStacks} dots={true} handleStyle={{ backgroundColor: '#96dbfa' }} marks={this.berserkerMarks()} />
                                    </div>
                                </div>
                            }
                            <div className="slider-box">
                                <p className="slider-title">Combo</p>
                                <div className="slider-wrapper">
                                    <Slider min={0} max={comboDamageStep * 6} value={combo} step={comboDamageStep} onChange={this.setCombo} dots={true} handleStyle={{ backgroundColor: '#96dbfa' }} marks={this.comboMarks()} />
                                </div>
                            </div>
                            {!weapon.exalted &&
                                <div className="slider-box">
                                    <p className="slider-title">Gladiator Set Override</p>
                                    <div className="slider-wrapper">
                                        <Slider min={0} max={6} value={gladSet} step={1} onChange={this.setGladSet} dots={true} handleStyle={{ backgroundColor: '#96dbfa' }} marks={this.gladMarks()} />
                                    </div>
                                </div>
                            }
                            <div className="stats-item damage">
                                <div className="stats-switch">
                                    <p className="stat-name">Arbitrations Bonus</p>
                                    <Switch className="stat" onChange={this.toggleArbitrations} checked={this.state.arbitrations} />
                                </div>
                            </div>
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

export default MeleeStats;
