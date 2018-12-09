import React, { Component } from 'react';
import './RangedRivenEditor.css';

export class RangedRivenEditor extends Component {
  constructor(props) {
    super(props);
    this.softInputOne = React.createRef();
    this.softInputTwo = React.createRef();
    this.softInputThree = React.createRef();
    this.softInputFour = React.createRef();
    this.state = {
      effects: ['None', 'Ammo Maximum', 'Cold Damage', 'Critical Chance', 'Critical Damage', 'Damage', 'Damage vs. Corpus', 'Damage vs. Grineer', 'Damage vs. Infested', 'Electricity Damage', 'Heat Damage', 'Fire Rate', 'Flight Speed', 'Impact Damage', 'Mag Capacity', 'Multishot', 'Toxin Damage', 'Punch Through', 'Puncture Damage', 'Reload Speed', 'Slash Damage', 'Status Chance', 'Status Duration', 'Recoil', 'Zoom'],
      openEffect: null,
      polarity: 'madurai',
      effectOne: 'None',
      numOne: '',
      effectTwo: 'None',
      numTwo: '',
      effectThree: 'None',
      numThree: '',
      effectFour: 'None',
      numFour: '',
    }
  }

  componentDidMount() {
    // this.updateRiven();
    if (this.props.buildStr && this.props.buildStr[41] === 'x') {
      let preRiven = this.createPreRiven(this.props.buildStr.slice(41, 75));
      this.setState({
        polarity: preRiven.polarity,
        effectOne: preRiven.effectOne,
        numOne: preRiven.numOne,
        effectTwo: preRiven.effectTwo,
        numTwo: preRiven.numTwo,
        effectThree: preRiven.effectThree,
        numThree: preRiven.numThree,
        effectFour: preRiven.effectFour,
        numFour: preRiven.numFour,
      }, this.updateRiven)
    }
  }

  createPreRiven = (rivenStr) => {
    let rivenMod = {
      polarity: 'madurai',
      effectOne: 'None',
      numOne: '',
      effectTwo: 'None',
      numTwo: '',
      effectThree: 'None',
      numThree: '',
      effectFour: 'None',
      numFour: '',
    }
    if (rivenStr[1] === '0' || rivenStr[1] === '7') {
      this.props.redirectToVoid();
    }
    rivenMod.polarity = this.props.transPolarity(rivenStr[1]);
    let statsStr = rivenStr.slice(2);
    let statsArr = statsStr.match(/.{1,8}/g)
    rivenMod.effectOne = this.findRivenStat(parseInt(statsArr[0].slice(0, 2), 10));
    rivenMod.numOne = this.findRivenAmount(statsArr[0].slice(2));
    rivenMod.effectTwo = this.findRivenStat(parseInt(statsArr[1].slice(0, 2), 10));
    rivenMod.numTwo = this.findRivenAmount(statsArr[1].slice(2));
    rivenMod.effectThree = this.findRivenStat(parseInt(statsArr[2].slice(0, 2), 10));
    rivenMod.numThree = this.findRivenAmount(statsArr[2].slice(2));
    rivenMod.effectFour = this.findRivenStat(parseInt(statsArr[3].slice(0, 2), 10));
    rivenMod.numFour = this.findRivenAmount(statsArr[3].slice(2));
    console.log(rivenMod);
    return rivenMod;
  }

  findRivenStat = (index) => {
    if (typeof index !== 'number' || isNaN(index) || index < 0 || index > this.state.effects.length - 1) {
      this.props.redirectToVoid();
    }
    return this.state.effects[index];
  }

  findRivenAmount = (amountStr) => {
    let number = 0;
    let amount = parseFloat(amountStr.slice(1));
    console.log(amount);
    if (isNaN(amount)) {
      this.props.redirectToVoid();
    } else if (amountStr[0] === 'p') {
      number += amount;
    } else if (amountStr[0] === 'n') {
      number -= amount;
    }
    return number;
  }


  updateRiven = () => {
    let rivenMod = {
      polarity: this.state.polarity,
      effects: [],
      effectOne: 'None',
      numOne: '',
      effectTwo: 'None',
      numTwo: '',
      effectThree: 'None',
      numThree: '',
      effectFour: 'None',
      numFour: '',
      desc: '',
    }
    if (this.state.effectOne !== 'None') {
      let effectOneObj = this.constructEffect(this.state.effectOne, this.state.numOne / 100);
      if (effectOneObj) {
        rivenMod.effects.push(effectOneObj);
      }
      rivenMod.effectOne = this.state.effectOne;
      rivenMod.numOne = this.state.numOne;
      rivenMod.desc += `${this.state.numOne >= 0 ? '+' : ''}${this.state.numOne}${this.state.effectOne === 'Punch Through' ? 'm ' : '% '}${this.state.effectOne}\n`;
      if (this.state.effectTwo !== 'None') {
        let effectTwoObj = this.constructEffect(this.state.effectTwo, this.state.numTwo / 100);
        if (effectTwoObj) {
          rivenMod.effects.push(effectTwoObj);
        }
        rivenMod.effectTwo = this.state.effectTwo;
        rivenMod.numTwo = this.state.numTwo;
        rivenMod.desc += `${this.state.numTwo >= 0 ? '+' : ''}${this.state.numTwo}${this.state.effectTwo === 'Punch Through' ? 'm ' : '% '}${this.state.effectTwo}\n`;
        if (this.state.effectThree !== 'None') {
          let effectThreeObj = this.constructEffect(this.state.effectThree, this.state.numThree / 100);
          if (effectThreeObj) {
            rivenMod.effects.push(effectThreeObj);
          }
          rivenMod.effectThree = this.state.effectThree;
          rivenMod.numThree = this.state.numThree;
          rivenMod.desc += `${this.state.numThree >= 0 ? '+' : ''}${this.state.numThree}${this.state.effectThree === 'Punch Through' ? 'm ' : '% '}${this.state.effectThree}\n`;
          if (this.state.effectFour !== 'None') {
            let effectFourObj = this.constructEffect(this.state.effectFour, this.state.numFour / 100);
            if (effectFourObj) {
              rivenMod.effects.push(effectFourObj);
            }
            rivenMod.effectFour = this.state.effectFour;
            rivenMod.numFour = this.state.numFour;
            rivenMod.desc += `${this.state.numFour >= 0 ? '+' : ''}${this.state.numFour}${this.state.effectFour === 'Punch Through' ? 'm ' : '% '}${this.state.effectFour}`;
          }
        }
      }
    }
    this.hideRivenEditor();
    this.props.handleRiven(rivenMod);
  }

  constructEffect = (effect, amount) => {
    let rivenEffect = {};
    switch (effect) {
      case 'Ammo Maximum':
        rivenEffect.maxAmmo = amount;
        return rivenEffect;
      case 'Cold Damage':
        rivenEffect = { elemental: { damage: amount, type: 'Cold' } }
        return rivenEffect;
      case 'Critical Chance':
        rivenEffect.critChance = amount;
        return rivenEffect;
      case 'Critical Damage':
        rivenEffect.critMult = amount;
        return rivenEffect;
      case 'Damage':
        rivenEffect.baseDamage = amount;
        return rivenEffect;
      case 'Electricity Damage':
        rivenEffect = { elemental: { damage: amount, type: 'Electricity' } }
        return rivenEffect;
      case 'Heat Damage':
        rivenEffect = { elemental: { damage: amount, type: 'Heat' } }
        return rivenEffect;
      case 'Fire Rate':
        rivenEffect.fireRate = amount;
        return rivenEffect;
      case 'Flight Speed':
        rivenEffect.flightSpeed = amount;
        return rivenEffect;
      case 'Impact Damage':
        rivenEffect.impact = amount;
        return rivenEffect;
      case 'Mag Capacity':
        rivenEffect.magSize = amount;
        return rivenEffect;
      case 'Multishot':
        rivenEffect.multishot = amount;
        return rivenEffect;
      case 'Toxin Damage':
        rivenEffect = { elemental: { damage: amount, type: 'Toxin' } }
        return rivenEffect;
      case 'Punch Through':
        rivenEffect.punchThrough = amount * 100;
        return rivenEffect;
      case 'Puncture Damage':
        rivenEffect.puncture = amount;
        return rivenEffect;
      case 'Reload Speed':
        rivenEffect.reload = amount;
        return rivenEffect;
      case 'Slash Damage':
        rivenEffect.slash = amount;
        return rivenEffect;
      case 'Status Chance':
        rivenEffect.status = amount;
        return rivenEffect;
      default:
        return null;
    }
  }

  setPolarity = (e, polarity) => {
    e.stopPropagation();
    this.setState({ polarity: polarity })
  }

  handleChange = ({ target }) => {
    let value = target.value;
    if (value > 999) value = 999;
    if (value < -999) value = -999;
    this.setState({ [target.name]: value })
  }

  setEffect = (e, effectNum, effect) => {
    e.stopPropagation();
    this.setState({
      [effectNum]: effect,
      openEffect: null
    });

  }

  // setSlot = (slot) => {
  //   this.setState({ pickedSlot: slot });
  // }

  openEffect = (e, effectSlot) => {
    e.stopPropagation();
    this.setState({ openEffect: effectSlot });
  }

  determineOptionSet = () => {
    if (!this.state.openEffect) {
      return null;
    } else if (this.state.openEffect === 1) {
      return this.effectOneDisplayOptions();
    } else if (this.state.openEffect === 2) {
      return this.effectTwoDisplayOptions();
    } else if (this.state.openEffect === 3) {
      return this.effectThreeDisplayOptions();
    } else if (this.state.openEffect === 4) {
      return this.effectFourDisplayOptions();
    }
  }

  effectOneDisplayOptions = () => {
    let optionsList = [];
    this.state.effects.forEach((effect, index) => {
      if (effect === 'None' && this.state.effectTwo === 'None') {
        optionsList.push(<div className={"interactable stat-choice " + (this.state.effectOne === effect ? "interactable-active" : "interactable-inactive")} key={index} onClick={(e) => this.setEffect(e, 'effectOne', effect)}><div className="effect-choice"><p>{effect}</p></div></div>);
      } else if (effect !== this.state.effectTwo && effect !== this.state.effectThree && effect !== this.state.effectFour && effect !== 'None') {
        optionsList.push(<div className={"interactable stat-choice " + (this.state.effectOne === effect ? "interactable-active" : "interactable-inactive")} key={index} onClick={(e) => this.setEffect(e, 'effectOne', effect)}><div className="effect-choice"><p>{effect}</p></div></div>);
      }
    });
    return optionsList;
  }

  effectTwoDisplayOptions = () => {
    let optionsList = [];
    this.state.effects.forEach((effect, index) => {
      if (effect === 'None' && this.state.effectThree === 'None') {
        optionsList.push(<div className={"interactable stat-choice " + (this.state.effectTwo === effect ? "interactable-active" : "interactable-inactive")} key={index} onClick={(e) => this.setEffect(e, 'effectTwo', effect)}><div className="effect-choice"><p>{effect}</p></div></div>);
      } else if (effect !== this.state.effectOne && effect !== this.state.effectThree && effect !== this.state.effectFour && effect !== 'None') {
        optionsList.push(<div className={"interactable stat-choice " + (this.state.effectTwo === effect ? "interactable-active" : "interactable-inactive")} key={index} onClick={(e) => this.setEffect(e, 'effectTwo', effect)}><div className="effect-choice"><p>{effect}</p></div></div>);
      }
    });
    return optionsList;
  }

  effectThreeDisplayOptions = () => {
    let optionsList = [];
    this.state.effects.forEach((effect, index) => {
      if (effect === 'None' && this.state.effectFour === 'None') {
        optionsList.push(<div className={"interactable stat-choice " + (this.state.effectThree === effect ? "interactable-active" : "interactable-inactive")} key={index} onClick={(e) => this.setEffect(e, 'effectThree', effect)}><div className="effect-choice"><p>{effect}</p></div></div>);
      } else if (effect !== this.state.effectOne && effect !== this.state.effectTwo && effect !== this.state.effectFour && effect !== 'None') {
        optionsList.push(<div className={"interactable stat-choice " + (this.state.effectThree === effect ? "interactable-active" : "interactable-inactive")} key={index} onClick={(e) => this.setEffect(e, 'effectThree', effect)}><div className="effect-choice"><p>{effect}</p></div></div>);
      }
    });
    return optionsList;
  }

  effectFourDisplayOptions = () => {
    let optionsList = [];
    this.state.effects.forEach((effect, index) => {
      if (effect !== this.state.effectOne && effect !== this.state.effectTwo && effect !== this.state.effectThree) {
        optionsList.push(<div className={"interactable stat-choice " + (this.state.effectFour === effect ? "interactable-active" : "interactable-inactive")} key={index} onClick={(e) => this.setEffect(e, 'effectFour', effect)}><div className="effect-choice"><p>{effect}</p></div></div>);
      }
    });
    return optionsList;
  }

  // getAvailSlots = () => {
  //   let availSlots = [];
  //   this.props.chosenMods.forEach((slot, index) => {
  //     if (!slot.name) {
  //       availSlots.push(<div key={index} className={"riven-slot " + (this.state.pickedSlot === index ? "picked-slot-riven" : "unpicked-slot-riven")} onClick={() => this.setSlot(index)}>{index + 1}</div>)
  //     } else {
  //       availSlots.push(<div key={index} className="unavail-riven-slot"></div>)
  //     }
  //   });
  //   return availSlots;
  // }

  stopPropagation = (e) => {
    e.stopPropagation();
  }

  focusSoftInput = ({ target }) => {
    if (this.props.viewWidth < 1203) {
      switch (target.name) {
        case 'numOne':
          this.softInputOne.current.focus();
          break;
        case 'numTwo':
          this.softInputTwo.current.focus();
          break;
        case 'numThree':
          this.softInputThree.current.focus();
          break;
        case 'numFour':
          this.softInputFour.current.focus();
          break;
        default:
          break;
      }
    }
  }

  blurInput = ({ target, key }) => {
    if (key === 'Enter') {
      target.blur();
    }
  }

  showRivenEditor = () => {
    document.body.classList.add('noscroll');
    this.setState({
      showRivenEditor: true
    });
  }

  hideRivenEditor = () => {
    document.body.classList.remove('noscroll');
    this.setState({
      openEffect: null,
      showRivenEditor: false
    });
  }

  render() {
    let displayOptions = this.determineOptionSet();
    return (
      <React.Fragment>
        <div className="interactable interactable-inactive riven" onClick={this.showRivenEditor}>
          <div className="riven-placeholder"></div>
        </div>
        <div className={"popup " + (this.state.showRivenEditor ? "popup-active" : "popup-inactive")}>
          <div className={"popup-topbar " + (this.state.showRivenEditor ? "popup-active" : "popup-inactive")}>
            <div className="popup-x" onClick={this.hideRivenEditor}>
              <div className="popup-x-bar one-bar"></div>
              <div className="popup-x-bar two-bar"></div>
            </div>
          </div>
          <div className="popup-content riven-editor">
            <div className="riven-window">
              <div className="riven-polarity">
                <div className="riven-window-title">Riven Polarity</div>
                <div className="hexa-wrapper hexa-first">
                  <div className={"riven-hexagon hexagon " + (this.state.polarity === 'madurai' ? 'polarity-large' : '')} onClick={(e) => { this.setPolarity(e, 'madurai') }}>
                    <span>
                      <img className="hex-polarity" src={require('../../assets/general/maduraiblack.png')} alt="madurai" />
                    </span>
                  </div>
                  <div className={"riven-hexagon hexagon " + (this.state.polarity === 'naramon' ? 'polarity-large' : '')} onClick={(e) => { this.setPolarity(e, 'naramon') }}>
                    <span>
                      <img className="hex-polarity" src={require('../../assets/general/naramonblack.png')} alt="naramon" />
                    </span>
                  </div>
                  <div className={"riven-hexagon hexagon " + (this.state.polarity === 'vazarin' ? 'polarity-large' : '')} onClick={(e) => { this.setPolarity(e, 'vazarin') }}>
                    <span>
                      <img className="hex-polarity" src={require('../../assets/general/vazarinblack.png')} alt="vazarin" />
                    </span>
                  </div>
                </div>
                <div className="hexa-wrapper hexa-second">
                  <div className={"riven-hexagon hexagon " + (this.state.polarity === 'zenurik' ? 'polarity-large' : '')} onClick={(e) => { this.setPolarity(e, 'zenurik') }}>
                    <span>
                      <img className="hex-polarity" src={require('../../assets/general/zenurikblack.png')} alt="zenurik" />
                    </span>
                  </div>
                  <div className={"riven-hexagon hexagon " + (this.state.polarity === 'unairu' ? 'polarity-large' : '')} onClick={(e) => { this.setPolarity(e, 'unairu') }}>
                    <span>
                      <img className="hex-polarity" src={require('../../assets/general/unairublack.png')} alt="unairu" />
                    </span>
                  </div>
                  <div className={"riven-hexagon hexagon " + (this.state.polarity === 'penjaga' ? 'polarity-large' : '')} onClick={(e) => { this.setPolarity(e, 'penjaga') }}>
                    <span>
                      <img className="hex-polarity" src={require('../../assets/general/penjagablack.png')} alt="penjaga" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="riven-effects">
                <div className="riven-window-title">Riven Effects</div>
                <div className="riven-effect-wrapper">
                  <div className="riven-effect" onClick={(e) => this.openEffect(e, 1)}>
                    <div className="chosen-stat"><p>{this.state.effectOne}</p></div>
                  </div>
                  <div className="riven-effect-amount">
                    <input className="riven-amount-input riven-input-one" type="tel" value={this.state.numOne} name="numOne" placeholder={0} onFocus={this.focusSoftInput} onChange={this.handleChange} />
                    {this.state.effectOne !== 'Punch Through'
                      ? <p className="percent">%</p>
                      : <p className="percent">m</p>
                    }
                  </div>
                </div>
                {this.state.effectOne !== 'None' &&
                  <div className="riven-effect-wrapper">
                    <div className="riven-effect" onClick={(e) => this.openEffect(e, 2)}>
                      <div className="chosen-stat"><p>{this.state.effectTwo}</p></div>
                    </div>
                    <div className="riven-effect-amount">
                      <input className="riven-amount-input riven-input-two" type="tel" value={this.state.numTwo} name="numTwo" placeholder={0} onFocus={this.focusSoftInput} onChange={this.handleChange} />
                      {this.state.effectTwo !== 'Punch Through'
                        ? <p className="percent">%</p>
                        : <p className="percent">m</p>
                      }
                    </div>
                  </div>
                }
                {this.state.effectTwo !== 'None' &&
                  <div className="riven-effect-wrapper">
                    <div className="riven-effect" onClick={(e) => this.openEffect(e, 3)}>
                      <div className="chosen-stat"><p>{this.state.effectThree}</p></div>
                    </div>
                    <div className="riven-effect-amount">
                      <input className="riven-amount-input riven-input-three" type="tel" value={this.state.numThree} name="numThree" placeholder={0} onFocus={this.focusSoftInput} onChange={this.handleChange} />
                      {this.state.effectThree !== 'Punch Through'
                        ? <p className="percent">%</p>
                        : <p className="percent">m</p>
                      }
                    </div>
                  </div>
                }
                {this.state.effectThree !== 'None' &&
                  <div className="riven-effect-wrapper">
                    <div className="riven-effect" onClick={(e) => this.openEffect(e, 4)}>
                      <div className="chosen-stat"><p>{this.state.effectFour}</p></div>
                    </div>
                    <div className="riven-effect-amount">
                      <input className="riven-amount-input riven-input-four" type="tel" value={this.state.numFour} name="numFour" placeholder={0} onFocus={this.focusSoftInput} onChange={this.handleChange} />
                      {this.state.effectFour !== 'Punch Through'
                        ? <p className="percent">%</p>
                        : <p className="percent">m</p>
                      }
                    </div>
                  </div>
                }
              </div>
              <div className="bottom-wrapper">
                <div className="interactable interactable-semi-inactive" onClick={this.updateRiven}><p className="interactable-p">Update</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="soft-input-wrapper">
          <input ref={this.softInputOne} type="tel" name="numOne" className="soft-input" placeholder={0} value={this.state.numOne} onChange={this.handleChange} onKeyUp={this.blurInput} />
          {this.state.effectOne !== 'Punch Through'
            ? <p className="soft-percent">%</p>
            : <p className="soft-percent">m</p>
          }
        </div>
        <div className="soft-input-wrapper">
          <input ref={this.softInputTwo} type="tel" name="numTwo" className="soft-input" placeholder={0} value={this.state.numTwo} onChange={this.handleChange} onKeyUp={this.blurInput} />
          {this.state.effectTwo !== 'Punch Through'
            ? <p className="soft-percent">%</p>
            : <p className="soft-percent">m</p>
          }
        </div>
        <div className="soft-input-wrapper">
          <input ref={this.softInputThree} type="tel" name="numThree" className="soft-input" placeholder={0} value={this.state.numThree} onChange={this.handleChange} onKeyUp={this.blurInput} />
          {this.state.effectThree !== 'Punch Through'
            ? <p className="soft-percent">%</p>
            : <p className="soft-percent">m</p>
          }
        </div>
        <div className="soft-input-wrapper">
          <input ref={this.softInputFour} type="tel" name="numFour" className="soft-input" placeholder={0} value={this.state.numFour} onChange={this.handleChange} onKeyUp={this.blurInput} />
          {this.state.effectFour !== 'Punch Through'
            ? <p className="soft-percent">%</p>
            : <p className="soft-percent">m</p>
          }
        </div>
        <div className={"popup " + (this.state.openEffect !== null ? "popup-active" : "popup-inactive")}>
          <div className="popup-content stat-choices-wrapper">
            <div className="stat-choices">
              {displayOptions}
            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default RangedRivenEditor;