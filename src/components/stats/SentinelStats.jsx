import React, { PureComponent } from 'react';
import Switch from 'react-switch';
import './Stats.css';

export class SentinelStats extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            effects: {},
            baseStatsToggle: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        let effects = {};
        if (state.baseStatsToggle) {
            return {
                effects: effects
            }
        }
        props.mods.forEach(mod => {
            SentinelStats.groupEffects(mod, effects);
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

    toggleBaseStats = () => {
        this.setState(prevState => ({ baseStatsToggle: !prevState.baseStatsToggle }))
    }

    render() {
        let { frame } = this.props;
        let { effects, open } = this.state;
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
                            <div className="stats-item">
                                <p className="stat-name">Armor: </p>
                                {effects.armor
                                    ? <div className={"warframe-stat " + (effects.armor > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.armor + (frame.armor * effects.armor))}</p></div>
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
                                    ? <div className={"warframe-stat " + (effects.health > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.health * (1 + effects.health))}</p></div>
                                    : <div className="warframe-stat"><p>{frame.health}</p></div>
                                }
                            </div>
                            <div className="stats-item">
                                <p className="stat-name">Shields: </p>
                                {effects.shields
                                    ? <div className={"warframe-stat " + (effects.shields > 0 ? "increased-stat" : "decreased-stat")}><p>{Math.round(frame.shields * (1 + effects.shields))}</p></div>
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

export default SentinelStats
