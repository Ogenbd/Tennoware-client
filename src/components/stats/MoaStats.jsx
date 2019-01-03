import React, { PureComponent } from 'react';
import './Stats.css';

export class MoaStats extends PureComponent {
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
        }
    }

    static getDerivedStateFromProps(props) {
        let effects = {};
        let elemental = [];
        let linkArmor = false;
        let linkHealth = false;
        let linkShields = false;
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
                MoaStats.groupEffects(mod, effects, elemental);
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

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
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
        if (this.props.viewWidth < 1203) {
            this.softInputArmor.current.focus();
        }
    }

    focusSoftInputHealth = () => {
        if (this.props.viewWidth < 1203) {
            this.softInputHealth.current.focus();
        }
    }

    focusSoftInputShields = () => {
        if (this.props.viewWidth < 1203) {
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
            health = health + this.props.frame.health * this.state.effects.health;
        }
        if (this.state.linkHealth && parseInt(this.state.healthAmount, 10) > 0) {
            health = health + this.state.effects.healthLink * parseInt(this.state.healthAmount, 10);
        }
        return health;
    }

    calcShields = () => {
        let shields = this.props.frame.shields;
        if (this.state.effects.shields) {
            shields = shields + this.props.frame.shields * this.state.effects.shields;
        }
        if (this.state.linkShields && parseInt(this.state.shieldsAmount, 10) > 0) {
            shields = shields + this.state.effects.shieldsLink * parseInt(this.state.shieldsAmount, 10);
        }
        return shields;
    }

    render() {
        let { frame } = this.props;
        let { open } = this.state;
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
                        <div className="top-bar-margin"></div>
                        <div className="stats-wrapper">
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

export default MoaStats
