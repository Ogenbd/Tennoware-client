import React, { Component } from 'react';
import { Spring, animated } from "react-spring/renderprops";
import { Helmet } from "react-helmet";
import './ModularPicker.css';
import '../stats/Stats.css';

import RightAd from '../adunits/RightAd';
import BottomAd from '../adunits/BottomAd';
import ModdingAd from '../adunits/ModdingAd';
import ModularBuildList from '../modularbuildlist/ModularBuildList';

export class KitgunPicker extends Component {
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

  componentDidMount() {
    this.props.items().then(items => {
      this.setState({ items: items.default });
    });
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

  constructKitgun = () => {
    if (this.state.first !== undefined && this.state.second !== undefined && this.state.third !== undefined) {
      let chamber = this.state.items.first[this.state.first].name.toLowerCase();
      let grip = this.state.items.second[this.state.second].name.toLowerCase();
      let loader = this.state.items.third[this.state.third].name.toLowerCase();
      let kitgun = {
        name: `${this.state.items.first[this.state.first].name} ${this.state.items.second[this.state.second].name} ${this.state.items.third[this.state.third].name}`,
        mastery: 0,
        type: this.state.items.gripCombo[chamber].type,
        noise: this.state.items.gripCombo[chamber].noise,
        reload: this.state.items.loaderCombo[chamber][loader].reload,
        magSize: this.state.items.loaderCombo[chamber][loader].magSize,
        trigger: this.state.items.gripCombo[chamber].trigger,
        fireRate: this.state.items.gripCombo[chamber][grip].fireRate,
        accuracy: this.state.items.gripCombo[chamber].accuracy,
        punchThrough: this.state.items.gripCombo[chamber].punchThrough,
        critChance: this.state.items.loaderCombo[chamber][loader].critChance,
        critMult: this.state.items.loaderCombo[chamber][loader].critMult,
        status: this.state.items.loaderCombo[chamber][loader].status,
        damage: this.state.items.gripCombo[chamber][grip].damage,
        split: this.state.items.gripCombo[chamber][grip].split
      }
      if (this.state.items.gripCombo[chamber].falloffMin) kitgun.falloffMin = this.state.items.gripCombo[chamber].falloffMin;
      if (this.state.items.gripCombo[chamber].falloffMax) kitgun.falloffMax = this.state.items.gripCombo[chamber].falloffMax;
      if (this.state.items.gripCombo[chamber][grip].rangeLimit) kitgun.rangeLimit = this.state.items.gripCombo[chamber][grip].rangeLimit;
      if (this.state.items.gripCombo[chamber].ammoCost) kitgun.ammoCost = this.state.items.gripCombo[chamber].ammoCost;
      return kitgun;
    }
    return null;
  }

  goToModding = () => {
    let id = encodeURIComponent(`${this.state.items.first[this.state.first].name.toLowerCase()} ${this.state.items.second[this.state.second].name.toLowerCase()} ${this.state.items.third[this.state.third].name.toLowerCase()}`)
    this.props.history.push(`/kitguns/${id}`);
  }

  render() {
    let kitgun = this.constructKitgun();
    return (
      <React.Fragment>
        <Helmet>
          <title>Tennoware - kitguns</title>
        </Helmet>
        <div className="top-title"><p>KITGUNS</p></div>
        <div className="screen">
          <div></div>
          <Spring
            native
            config={{ tension: 120, friction: 14 }}
            from={{ opacity: this.state.items.first.length > 0 ? 1 : 0 }}
            to={{ opacity: this.state.items.first.length > 0 ? 1 : 0 }}>
            {props => (
              <animated.div style={props} className="kitgun-picker">
                <div className="part-select">
                  <ModularBuildList type={'kitguns'} orokin={require('../../assets/general/catalyst.png')} items={this.state.items} />
                  <div className="picker-section">
                    <div className="section-title">Chamber</div>
                    {this.state.items.first.map((chamber, index) => (
                      <div key={index} className={"modular-part " + (this.state.first === index ? 'modular-part-picked' : '')} onClick={() => { this.setFirst(index) }}>
                        <div className="part-info">
                          <div className="part-item">
                            <p className="part-name">{chamber.name}</p>
                            <img className="part-image" src={chamber.img} alt="" />
                          </div>
                          <p className="part-desc">{chamber.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div style={{ marginTop: '5px' }}></div>
                    {this.props.online &&
                      <BottomAd />
                    }
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
                          <p className="part-desc">{grip.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div style={{ marginTop: '5px' }}></div>
                    {this.props.online &&
                      <ModdingAd />
                    }
                  </div>
                  <div className="picker-section">
                    <div className="section-title">Loader</div>
                    <div className="loaders-chart">
                      <p>Crit</p>
                      <p className="smaller">Mag Size</p>
                      <img className="loader-arrow" src={require('../../assets/general/point-arrow.png')} alt="" />
                      <img className="loader-arrow down-arrow" src={require('../../assets/general/point-arrow.png')} alt="" />
                      <p className="smaller">Reload</p>
                      <p>Status</p>
                    </div>
                    {this.state.items.third.map((loader, index) => (
                      <div key={index} className={"modular-part " + (this.state.third === index ? 'modular-part-picked' : '')} onClick={() => { this.setThird(index) }}>
                        <div className="part-info">
                          <div className="part-item">
                            <p className="part-name">{loader.name}</p>
                            <img className="part-image" src={loader.img} alt="" />
                          </div>
                          <p className="part-desc">{loader.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={"mobile-mod-it " + (kitgun ? 'mobile-mod-it-active' : 'mobile-mod-it-inactive')} onClick={this.goToModding}>Mod It</div>
                <div className={"kitgun-pull-tab " + (this.state.open ? 'kitgun-open-pull-tab' : 'kitgun-closed-pull-tab')} onClick={this.toggleStats}>
                  <img src={require('../../assets/general/arrowicong.png')} alt=">>" className={"kitgun-pull-tab-arrow " + (this.state.open ? 'kitgun-point-left' : 'kitgun-point-right')} />
                  <p>STATS</p>
                </div>
                <div className={"kitgun-ranged-stats " + (this.state.open ? 'kitgun-open-ranged-stats' : 'kitgun-closed-ranged-stats')}>
                  <div className="kitgun-ranged-stats-inner-wrapper">
                    <div className="kitgun-top-bar-margin"></div>
                    <div className="stats-wrapper">
                      {kitgun
                        ? <React.Fragment>
                          <div className="stats-item">
                            <p className="stat-name">Sustained DPS: </p>
                            {kitgun.ammoCost
                              ? <div className="stat"><p>{(Math.round(((kitgun.damage * (1 + kitgun.critChance * (kitgun.critMult - 1))) * kitgun.fireRate * ((kitgun.magSize / kitgun.ammoCost) / kitgun.fireRate) / ((kitgun.magSize / kitgun.ammoCost) / kitgun.fireRate + kitgun.reload)) * 10) / 10).toFixed(1)}</p></div>
                              : <div className="stat"><p>{(Math.round((kitgun.damage * (1 + kitgun.critChance * (kitgun.critMult - 1))) * kitgun.fireRate * (kitgun.magSize / kitgun.fireRate) / (kitgun.magSize / kitgun.fireRate + kitgun.reload) * 10) / 10).toFixed(1)}</p></div>
                            }
                            <p className="stat-name">Burst DPS: </p>
                            <div className="stat"><p>{(Math.round((kitgun.damage * (1 + kitgun.critChance * (kitgun.critMult - 1))) * kitgun.fireRate * 10) / 10).toFixed(1)}</p></div>
                            <p className="stat-name">Damage Average: </p>
                            <div className="stat"><p>{(Math.round(kitgun.damage * (1 + kitgun.critChance * (kitgun.critMult - 1)) * 10) / 10).toFixed(1)}</p></div>
                          </div>
                          <div className="stats-item damage">
                            <p className="stat-name">Damage: </p>
                            <div className="damage">
                              {kitgun.split.map(instance => (
                                <div key={instance.type} className="stat"><p>{instance.type}: </p><p className="stat-frag">{(Math.round(instance.percent * kitgun.damage * 10) / 10).toFixed(1)}</p><img className="damage-icon" src={require(`../../assets/dynamic/damage/${instance.type}.png`)} alt="" /></div>
                              ))}
                            </div>
                          </div>
                          <div className="stats-item">
                            <p className="stat-name">Trigger: </p>
                            <div className="stat"><p>{kitgun.trigger}</p></div>
                          </div>
                          <div className="stats-item">
                            <p className="stat-name">Noise: </p>
                            <div className="stat"><p>{kitgun.noise}</p></div>
                          </div>
                          <div className="stats-item">
                            <p className="stat-name">Base Accuracy: </p>
                            <div className="stat"><p>{kitgun.accuracy}</p></div>
                          </div>
                          <div className="stats-item">
                            <p className="stat-name">Fire Rate: </p>
                            <div className="stat"><p>{kitgun.fireRate}</p></div>
                          </div>
                          {kitgun.rangeLimit &&
                            <div className="stats-item">
                              <p className="stat-name">Range Limit: </p>
                              <div className="stat"><p>{kitgun.rangeLimit}</p></div>
                            </div>
                          }
                          {kitgun.falloffMin &&
                            <div className="stats-item">
                              <p className="stat-name">Falloff: </p>
                              <div className="stat"><p>{kitgun.falloffMin}-{kitgun.falloffMax}</p></div>
                            </div>
                          }
                          {kitgun.ammoCost &&
                            <div className="stats-item">
                              <p className="stat-name">Ammo Cost: </p>
                              <div className="stat"><p>{kitgun.ammoCost}</p></div>
                            </div>
                          }
                          <div className="stats-item">
                            <p className="stat-name">Magazine Size: </p>
                            <div className="stat"><p>{kitgun.magSize}</p></div>
                          </div>
                          <div className="stats-item">
                            <p className="stat-name">Reload: </p>
                            <div className="stat"><p>{kitgun.reload}</p></div>
                          </div>
                          {kitgun.punchThrough > 0 &&
                            <div className="stats-item">
                              <p className="stat-name">Punch Through: </p>
                              <div className="stat"><p>{kitgun.punchThrough}</p></div>
                            </div>
                          }
                          <div className="stats-item">
                            <p className="stat-name">Critical Chance: </p>
                            <div className="stat"><p>{Math.round(kitgun.critChance * 100)}%</p></div>
                          </div>
                          <div className="stats-item">
                            <p className="stat-name">Critical Multiplier: </p>
                            <div className="stat"><p>{kitgun.critMult}</p></div>
                          </div>
                          <div className="stats-item">
                            <p className="stat-name">Status: </p>
                            <div className="stat"><p>{Math.round(kitgun.status * 100)}%</p></div>
                          </div>
                          <div className={"mod-it-button " + ((this.state.first !== undefined && this.state.second !== undefined && this.state.third !== undefined) ? 'activatable interactable-semi-inactive' : 'disabled-button interactable-inactive')} onClick={this.goToModding}>
                            <p className="interactable-p">Mod It</p>
                          </div>
                        </React.Fragment>
                        : <div className="stats-item"><p className="stat-name">Pick a Chamber, Grip and Loader.</p></div>
                      }
                    </div>
                  </div>
                </div>
              </animated.div>
            )}
          </Spring>
          <div className="side-panel">
            {(this.props.viewWidth > 1363 && this.props.online) &&
              <div className="right-g">
                <RightAd />
              </div>
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default KitgunPicker;
