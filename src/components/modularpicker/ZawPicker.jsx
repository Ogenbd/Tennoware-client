import React, { Component, lazy } from 'react';
import { CSSTransition } from "react-transition-group";
import { Helmet } from "react-helmet";
import './ModularPicker.css';
import '../stats/Stats.css';

import RightAd from '../adunits/RightAd';
import BottomAd from '../adunits/BottomAd';

const ModularBuildList = lazy(() => import('../modularbuildlist/ModularBuildList'));

export class ZawPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: { first: [], second: [], third: [] },
            first: undefined,
            second: undefined,
            third: undefined,
            open: false
        }
    }

    async componentDidMount() {
        // (window.adsbygoogle = window.adsbygoogle || []).push({
        //     google_ad_client: "ca-pub-9367218977396146"
        // });
        let items = await this.props.items()
        this.setState({ items: items.default });
    }

    toggleStats = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    setFirst = (idx) => {
        this.setState({ first: idx });
    }
    setSecond = (idx) => {
        this.setState({ second: idx });
    }
    setThird = (idx) => {
        this.setState({ third: idx });
    }

    constructZaw = () => {
        if (this.state.first !== undefined && this.state.second !== undefined && this.state.third !== undefined) {
            let strike = this.state.items.first[this.state.first].name.toLowerCase();
            let grip = this.state.items.second[this.state.second].name.toLowerCase();
            let zaw = {
                name: `${this.state.items.first[this.state.first].name} ${this.state.items.second[this.state.second].name} ${this.state.items.third[this.state.third].name}`,
                speed: this.state.items.first[this.state.first].speed + this.state.items.second[this.state.second].speed + this.state.items.third[this.state.third].speed,
                critChance: this.state.items.first[this.state.first].critChance + this.state.items.third[this.state.third].critChance,
                critMult: this.state.items.first[this.state.first].critMult,
                status: this.state.items.first[this.state.first].status + this.state.items.third[this.state.third].status,
                damage: this.state.items.first[this.state.first].damage + this.state.items.second[this.state.second].damage + this.state.items.third[this.state.third].damage,
                split: this.state.items.first[this.state.first].split
            }
            if (!this.state.items.second[this.state.second].grip && (this.state.items.first[this.state.first].twoHanded.type === 'HEAVY BLADES' || this.state.items.first[this.state.first].twoHanded.type === 'HAMMERS')) zaw.damage = Math.floor(1.7 * zaw.damage);
            if (!this.state.items.second[this.state.second].grip && (this.state.items.first[this.state.first].twoHanded.type === 'POLEARMS' || this.state.items.first[this.state.first].twoHanded.type === 'STAVES')) zaw.damage = Math.floor(1.18 * zaw.damage);
            if (strike.includes(' ')) strike = strike.split(' ')[1];
            if (grip.includes(' ')) grip = grip.split(' ')[1];
            zaw.slide = this.state.items.specials[this.state.items.third[this.state.third].type][strike][grip].slide;
            zaw.wall = this.state.items.specials[this.state.items.third[this.state.third].type][strike][grip].wall;
            return zaw;
        };
        return null;
    }

    goToModding = () => {
        let id = encodeURIComponent(`${this.state.items.first[this.state.first].name.toLowerCase()} ${this.state.items.second[this.state.second].name.toLowerCase()} ${this.state.items.third[this.state.third].name.toLowerCase()}`)
        this.props.history.push(`/zaws/${id}`);
    }

    render() {
        let zaw = this.constructZaw();
        return (
            <div className="screen">
                <Helmet>
                    <title>Tennoware - zaws</title>
                </Helmet>
                <div className="top-title"><p>ZAWS</p></div>
                <div className="kitgun-picker">
                    {this.state.items.first.length > 0 &&
                        <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
                            <React.Fragment>
                                <div className="part-select">
                                    <ModularBuildList type={'zaws'} orokin={require('../../assets/general/catalyst.png')} items={this.state.items} />
                                    <div className="picker-section">
                                        <div className="section-title">Strike</div>
                                        {this.state.items.first.map((strike, index) => (
                                            <div key={index} className={"modular-part " + (this.state.first === index ? 'modular-part-picked' : '')} onClick={() => { this.setFirst(index) }}>
                                                <div className="part-info">
                                                    <div className="part-item">
                                                        <p className="part-name">{strike.name}</p>
                                                        <img className="part-image" src={strike.img} alt="" />
                                                    </div>
                                                    <div className="part-stats">
                                                        <div className="strike-damage-wrapper">
                                                            <div className="strike-damage-split">
                                                                {strike.split.map(instance => (
                                                                    <div key={instance.type} className="damage-instance"><img className="damage-icon" src={require(`../../assets/dynamic/damage/${instance.type}.png`)} alt="" /><p>{(Math.round(instance.percent * strike.damage * 10) / 10).toFixed(1)}</p></div>
                                                                ))}
                                                            </div>
                                                            <p>Damage: {strike.damage}</p>
                                                        </div>
                                                        <div className="part-supplement">
                                                            <div className="supplemental"><p className="sup-type">Crit Chance:</p> {strike.critChance * 100}%</div>
                                                            <div className="supplemental"><p className="sup-type">Crit Damage:</p> {strike.critMult.toFixed(1)}x</div>
                                                            <div className="supplemental"><p className="sup-type">Status:</p> {strike.status * 100}%</div>
                                                            <div className="supplemental"><p className="sup-type">Speed Bonus:</p> {strike.speed >= 0 ? '+' : ''}{strike.speed.toFixed(3)}</div>
                                                        </div>
                                                        <div className="strike-catagory-wrapper">
                                                            <p>1H: {strike.oneHanded.type}</p>
                                                            <p>2H: {strike.twoHanded.type}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="picker-section">
                                        <div className="section-title">Grip</div>
                                        {this.state.items.second.map((grip, index) => (
                                            <div key={index} className={"modular-part " + (this.state.second === index ? 'modular-part-picked' : '')} onClick={() => { this.setSecond(index) }}>
                                                <div className="part-info">
                                                    <div className="part-item">
                                                        <p className="part-name">{grip.name}</p>
                                                        <img className="part-image" src={grip.img} alt="" />
                                                    </div>
                                                    <div className="part-stats grip-part-stats">
                                                        <div className="strike-catagory-wrapper">
                                                            {grip.grip
                                                                ? <div className="grip-stat-wrapper"><p className="grip-stat-title">Grip:</p><p className="grip-stat">1H</p></div>
                                                                : <div className="grip-stat-wrapper"><p className="grip-stat-title">Grip:</p><p className="grip-stat">2H</p></div>
                                                            }
                                                        </div>
                                                        <div className="strike-catagory-wrapper">
                                                            <div className="grip-stat-wrapper"><p className="grip-stat-title">Damage Bonus:</p><p className="grip-stat">{grip.damage}</p></div>
                                                        </div>
                                                        <div className="strike-catagory-wrapper">
                                                            <div className="grip-stat-wrapper"><p className="grip-stat-title">Attack Speed:</p><p className="grip-stat">{grip.speed.toFixed(3)}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="picker-section">
                                        <div className="section-title">Link</div>
                                        {this.state.items.third.map((link, index) => (
                                            <div key={index} className={"modular-part " + (this.state.third === index ? 'modular-part-picked' : '')} onClick={() => { this.setThird(index) }}>
                                                <div className="part-info">
                                                    <div className="part-item">
                                                        <p className="part-name">{link.name}</p>
                                                        <img className="part-image" src={link.img} alt="" />
                                                    </div>
                                                    <div className="part-stats grip-part-stats">
                                                        <div className="strike-catagory-wrapper">
                                                            <div className="grip-stat-wrapper"><p className="grip-stat-title">Damage Bonus:</p><p className="grip-stat">{link.damage}</p></div>
                                                        </div>
                                                        <div className="strike-catagory-wrapper">
                                                            <div className="grip-stat-wrapper"><p className="grip-stat-title">Crit Bonus:</p><p className="grip-stat">{Math.round(link.critChance * 100)}%</p></div>
                                                        </div>
                                                        <div className="strike-catagory-wrapper">
                                                            <div className="grip-stat-wrapper"><p className="grip-stat-title">Status Bonus:</p><p className="grip-stat">{Math.round(link.status * 100)}%</p></div>
                                                        </div>
                                                        <div className="strike-catagory-wrapper">
                                                            <div className="grip-stat-wrapper"><p className="grip-stat-title">Speed Bonus:</p><p className="grip-stat">{link.speed.toFixed(3)}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={"mobile-mod-it " + (zaw ? 'mobile-mod-it-active' : 'mobile-mod-it-inactive')} onClick={this.goToModding}>Mod It</div>
                                <div className={"kitgun-pull-tab " + (this.state.open ? 'kitgun-open-pull-tab' : 'kitgun-closed-pull-tab')} onClick={this.toggleStats}>
                                    <img src={require('../../assets/general/arrowicong.png')} alt=">>" className={"kitgun-pull-tab-arrow " + (this.state.open ? 'kitgun-point-left' : 'kitgun-point-right')} />
                                    <p>STATS</p>
                                </div>
                                <div className={"kitgun-ranged-stats " + (this.state.open ? 'kitgun-open-ranged-stats' : 'kitgun-closed-ranged-stats')}>
                                    <div className="kitgun-ranged-stats-inner-wrapper">
                                        <div className="kitgun-top-bar-margin"></div>
                                        <div className="stats-wrapper">
                                            {zaw
                                                ? <React.Fragment>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Average x Speed: </p>
                                                        <div className="stat"><p>{(Math.round((zaw.damage * (1 + zaw.critChance * (zaw.critMult - 1))) * zaw.speed * 10) / 10).toFixed(1)}</p></div>
                                                        <p className="stat-name">Damage Average: </p>
                                                        <div className="stat"><p>{(Math.round(zaw.damage * (1 + zaw.critChance * (zaw.critMult - 1)) * 10) / 10).toFixed(1)}</p></div>
                                                    </div>
                                                    <div className="stats-item damage">
                                                        <p className="stat-name">Damage: </p>
                                                        <div className="damage">
                                                            {zaw.split.map(instance => (
                                                                <div key={instance.type} className="stat"><p>{instance.type}: </p><p className="stat-frag">{(Math.round(instance.percent * zaw.damage * 10) / 10).toFixed(1)}</p><img className="damage-icon" src={require(`../../assets/dynamic/damage/${instance.type}.png`)} alt="" /></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Spin Attack: </p>
                                                        <div className="stat"><p>{zaw.slide}</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Leap Attack: </p>
                                                        <div className="stat"><p>{zaw.damage}</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Wall Attack: </p>
                                                        <div className="stat"><p>{zaw.wall}</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Speed: </p>
                                                        <div className="stat"><p>{zaw.speed.toFixed(3)}</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Critical Chance: </p>
                                                        <div className="stat"><p>{Math.round(zaw.critChance * 100)}%</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Critical Multiplier: </p>
                                                        <div className="stat"><p>{zaw.critMult}x</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Status: </p>
                                                        <div className="stat"><p>{Math.round(zaw.status * 100)}%</p></div>
                                                    </div>
                                                    <div className={"mod-it-button " + ((this.state.first !== undefined && this.state.second !== undefined && this.state.third !== undefined) ? 'activatable interactable-semi-inactive' : 'disabled-button interactable-inactive')} onClick={this.goToModding}>
                                                        <p className="interactable-p">Mod It</p>
                                                    </div>
                                                </React.Fragment>
                                                : <div className="stats-item"><p className="stat-name">Pick a Strike, Grip and Link.</p></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        </CSSTransition>
                    }
                    <div className="modular-bottom-g">
                        <BottomAd />
                    </div>
                </div>
                {this.props.viewWidth > 1555 &&
                    <div className="right-g">
                        <RightAd />
                    </div>
                }
            </div>
        )
    }
}

export default ZawPicker;
