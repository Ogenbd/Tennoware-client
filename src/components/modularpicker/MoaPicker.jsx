import React, { Component, lazy } from 'react';
import { CSSTransition } from "react-transition-group";
import { Helmet } from "react-helmet";
import './ModularPicker.css';
import '../stats/Stats.css';

import RightAd from '../adunits/RightAd';
import BottomAd from '../adunits/BottomAd';

const ModularBuildList = lazy(() => import('../modularbuildlist/ModularBuildList'));

export class MoaPicker extends Component {
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

    constructMoa = () => {
        if (this.state.first !== undefined && this.state.second !== undefined && this.state.third !== undefined) {
            let bracket = this.state.items.first[this.state.first];
            let core = this.state.items.second[this.state.second];
            let gyro = this.state.items.third[this.state.third];
            let moa = {
                name: `${this.state.items.first[this.state.first].name} ${this.state.items.second[this.state.second].name} ${this.state.items.third[this.state.third].name}`,
                health: this.state.items.base.health + this.state.items.base.health * core.health + this.state.items.base.health * gyro.health,
                shields: this.state.items.base.shields + this.state.items.base.shields * core.shields + this.state.items.base.shields * gyro.shields,
                armor: this.state.items.base.armor + this.state.items.base.armor * core.armor + this.state.items.base.armor * gyro.armor,
                polarities: bracket.desc
            }
            return moa;
        }
        return null;
    }

    goToModding = () => {
        let id = encodeURIComponent(`${this.state.items.first[this.state.first].name.toLowerCase()} ${this.state.items.second[this.state.second].name.toLowerCase()} ${this.state.items.third[this.state.third].name.toLowerCase()}`)
        this.props.history.push(`/moas/${id}`);
    }

    render() {
        let moa = this.constructMoa();
        return (
            <div className="screen">
                <Helmet>
                    <title>Tennoware - MOAs</title>
                </Helmet>
                <div className="top-title"><p>MOAS</p></div>
                <div className="kitgun-picker">
                    {this.state.items.first.length > 0 &&
                        <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
                            <React.Fragment>
                                <div className="part-select">
                                    <ModularBuildList type={'moas'} orokin={require('../../assets/general/reactor.png')} items={this.state.items} />
                                    <div className="picker-section">
                                        <div className="section-title">Brackets</div>
                                        {this.state.items.first.map((bracket, index) => (
                                            <div key={index} className={"modular-part " + (this.state.first === index ? 'modular-part-picked' : '')} onClick={() => { this.setFirst(index) }}>
                                                <div className="part-info">
                                                    <div className="part-item">
                                                        <p className="part-name">{bracket.name}</p>
                                                        <img className="part-image" src={bracket.img} alt="" />
                                                    </div>
                                                    <p className="part-desc">{bracket.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="picker-section">
                                        <div className="section-title">Cores</div>
                                        {this.state.items.second.map((core, index) => (
                                            <div key={index} className={"modular-part " + (this.state.second === index ? 'modular-part-picked' : '')} onClick={() => { this.setSecond(index) }}>
                                                <div className="part-info">
                                                    <div className="part-item">
                                                        <p className="part-name">{core.name}</p>
                                                        <img className="part-image" src={core.img} alt="" />
                                                    </div>
                                                    <p className="part-desc">{core.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="picker-section">
                                        <div className="section-title">Gyros</div>
                                        {this.state.items.third.map((gyro, index) => (
                                            <div key={index} className={"modular-part " + (this.state.third === index ? 'modular-part-picked' : '')} onClick={() => { this.setThird(index) }}>
                                                <div className="part-info">
                                                    <div className="part-item">
                                                        <p className="part-name">{gyro.name}</p>
                                                        <img className="part-image" src={gyro.img} alt="" />
                                                    </div>
                                                    <p className="part-desc">{gyro.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={"mobile-mod-it " + (moa ? 'mobile-mod-it-active' : 'mobile-mod-it-inactive')} onClick={this.goToModding}>Mod It</div>
                                <div className={"kitgun-pull-tab " + (this.state.open ? 'kitgun-open-pull-tab' : 'kitgun-closed-pull-tab')} onClick={this.toggleStats}>
                                    <img src={require('../../assets/general/arrowicong.png')} alt=">>" className={"kitgun-pull-tab-arrow " + (this.state.open ? 'kitgun-point-left' : 'kitgun-point-right')} />
                                    <p>STATS</p>
                                </div>
                                <div className={"kitgun-ranged-stats " + (this.state.open ? 'kitgun-open-ranged-stats' : 'kitgun-closed-ranged-stats')}>
                                    <div className="kitgun-ranged-stats-inner-wrapper">
                                        <div className="kitgun-top-bar-margin"></div>
                                        <div className="stats-wrapper">
                                            {moa
                                                ? <React.Fragment>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Armor: </p>
                                                        <div className="stat"><p>{moa.armor}</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Health: </p>
                                                        <div className="stat"><p>{moa.health}</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Shields: </p>
                                                        <div className="stat"><p>{moa.shields}</p></div>
                                                    </div>
                                                    <div className="stats-item">
                                                        <p className="stat-name">Polarities: </p>
                                                        <div className="stat"><p>{moa.polarities}</p></div>
                                                    </div>
                                                    <div className={"mod-it-button " + ((this.state.first !== undefined && this.state.second !== undefined && this.state.third !== undefined) ? 'activatable interactable-semi-inactive' : 'disabled-button interactable-inactive')} onClick={this.goToModding}>
                                                        <p className="interactable-p">Mod It</p>
                                                    </div>
                                                </React.Fragment>
                                                : <div className="stats-item"><p className="stat-name">Pick a Bracket, Core and Gyro.</p></div>
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

export default MoaPicker;
