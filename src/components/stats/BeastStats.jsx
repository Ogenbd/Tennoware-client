import React, { PureComponent } from 'react';
import './Stats.css';

export class BeastStats extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            effects: {},
        }
    }

    static getDerivedStateFromProps(props) {
        let effects = {};
        props.mods.forEach(mod => {
            BeastStats.groupEffects(mod, effects);
        });
        return {
            effects: effects,
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

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    render() {
        let { frame } = this.props;
        let { effects, open } = this.state;
        return (
            <React.Fragment>
                <div className={"pull-tab " + (this.state.open ? 'open-pull-tab' : 'closed-pull-tab')} onClick={this.toggleStats}>
                    <img src={require('../../assets/arrowicong.png')} alt=">>" className={"pull-tab-arrow " + (open ? 'point-left' : 'point-right')} />
                    <p>STATS</p>
                </div>
                <div className={"ranged-stats " + (open ? 'open-ranged-stats' : 'closed-ranged-stats')}>
                    <div className="ranged-stats-inner-wrapper">
                        <div className="top-bar-margin"></div>
                        <div className="stats-wrapper">
                            <div className="stats-item damage">
                                <p className="stat-name">Damage: </p>
                                <div className="damage">
                                    {frame.split.map(instance => (
                                        <div key={instance.type} className="stat">
                                            <p>{instance.type}: </p>
                                            {effects.baseDamage
                                                ? <p className="stat-frag">{Math.round((frame.damage * instance.percent * (1 + effects.baseDamage)) * 10) / 10}</p>
                                                : <p className="stat-frag">{Math.round(frame.damage * instance.percent * 10) / 10}</p>
                                            }
                                            <img className="damage-icon" src={require(`../../assets/${instance.type}.png`)} alt="" />
                                        </div>
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
