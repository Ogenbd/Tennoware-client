import React, { Component } from 'react';
import './ModStateHandler.css';

import ModCardGenerator from '../modcardgenerator/ModCardGenerator';

export class ModStateHandler extends Component {
  constructor(props) {
    super(props);
    this.handler = React.createRef();
    this.state = {
      mod: {},
      handlerActive: false,
      cardStyle: { transform: 'translate(0, 0)', zIndex: '1' },
      topButtons: {},
      bottomButtons: {}
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.mod.name !== prevState.mod.name || ((nextProps.mod.set || prevState.mod.set) && nextProps.mod.set.setCurr !== prevState.mod.set.setCurr) || (nextProps.mod.name === 'Riven Mod' && nextProps.mod.currRank === prevState.mod.currRank)) {
      return { mod: nextProps.mod };
    } else {
      return null;
    }
  }

  updateRank() {
    this.props.handleRankUpdate(this.props.slot, this.state.mod);
  }

  handleClick = (e) => {
    if (this.props.viewWidth < 1280) {
      if (this.props.forSwap !== null) {
        this.props.doSwap(this.props.slot);
      } else if (this.props.forma) {
        document.body.classList.add('noscroll');
        this.props.showPolarityPicker(this.props.slot);
      } else if (!this.state.mod.name) {
        this.props.openModPicker(this.props.slot);
      } else {
        document.body.classList.add('noscroll');
        this.activateHandler(e.target.closest('.mod-card-wrapper'));
      }
    } else if (this.props.forma) {
      this.props.showPolarityPicker(this.props.slot);
    }
  }

  activateHandler = (element) => {
    if (!this.state.handlerActive) {
      let coords = element.getBoundingClientRect()
      let style = {};
      let topButtons = {};
      let bottomButtons = {};
      style.transform = `translate(${this.props.viewWidth / 2 - coords.left - 75}px,${window.innerHeight / 2 - coords.top - 109}px) scale(1.3)`;
      style.zIndex = '9091';
      topButtons.top = `${window.innerHeight / 2 - coords.top - 189}px`
      topButtons.left = `${this.props.viewWidth / 2 - coords.left}px`
      bottomButtons.top = `${window.innerHeight / 2 - coords.top + 146}px`
      bottomButtons.left = `${this.props.viewWidth / 2 - coords.left}px`
      this.setState({
        handlerActive: true,
        cardStyle: style,
        topButtons: topButtons,
        bottomButtons: bottomButtons
      });
    }
  }

  backToBackground = () => {
    setTimeout(() => {
      this.setState({
        cardStyle: { transform: 'translate(0,0)', zIndex: '1' }
      });
    }, 200);
  }

  closeHandler = (e) => {
    e.stopPropagation();
    document.body.classList.remove('noscroll');
    this.setState({
      handlerActive: false,
      cardStyle: { transform: 'translate(0,0)', zIndex: '9091' }
    }, this.backToBackground);
  }

  decRank = (e) => {
    e.stopPropagation();
    if (this.state.mod.currRank > 0) {
      let newMod = { ...this.state.mod };
      newMod.currRank = newMod.currRank - 1;
      this.setState({ mod: newMod }, this.updateRank);
    }
  }

  minRank = (e) => {
    e.stopPropagation();
    let newMod = { ...this.state.mod };
    newMod.currRank = 0;
    this.setState({ mod: newMod }, this.updateRank);
  }

  incRank = (e) => {
    e.stopPropagation();
    if (this.state.mod.currRank < this.state.mod.maxRank) {
      let newMod = { ...this.state.mod };
      newMod.currRank = newMod.currRank + 1;
      this.setState({ mod: newMod }, this.updateRank);
    }
  }

  maxRank = (e) => {
    e.stopPropagation();
    e.target.blur();
    let newMod = { ...this.state.mod };
    newMod.currRank = newMod.maxRank;
    this.setState({ mod: newMod }, this.updateRank);
  }

  removeMod = (e) => {
    e.stopPropagation();
    this.props.removeMod(this.props.slot);
    this.closeHandler(e);
  }

  rightClickRemove = (e) => {
    if (this.props.mod.name) {
      e.preventDefault();
      this.removeMod(e);
    }
  }

  polarizeSlot = (e, polarity) => {
    this.props.polarizeSlot(this.props.slot, polarity);
    this.closeHandler(e);
  }

  startSwap = (e) => {
    e.stopPropagation();
    this.props.startSwap(this.props.slot);
    this.closeHandler(e);
  }

  render() {
    return (
      <div className="slot-wrapper no-highlight" onClick={this.handleClick} onContextMenu={this.rightClickRemove}>
        <div className={"handler-background " + (this.state.handlerActive ? "handler-active" : "handler-inactive")} onClick={this.closeHandler}></div>
        <div className={"handler-top-buttons " + (this.state.handlerActive ? "handler-active" : "handler-inactive")} style={this.state.topButtons}>
          {(!this.props.item || !this.props.item.exalted) &&
            <React.Fragment>
              <div className="interactable interactable-semi-inactive handler-remove" onClick={this.removeMod}><p className="interactable-p">Remove</p></div>
              {!this.props.mod.aura &&
                <div className="interactable interactable-semi-inactive handler-swap" onClick={this.startSwap}><p className="interactable-p">Swap</p></div>
              }
            </React.Fragment>
          }
        </div>
        <div className={"handler-bottom-buttons " + (this.state.handlerActive ? "handler-active" : "handler-inactive")} style={this.state.bottomButtons}>
          <div className="bottom-button-wrapper">
            <div className="interactable interactable-semi-inactive handler-rank" onClick={this.minRank}>
              <img className="handler-icon" src={require('../../assets/general/rankdownmax.png')} alt='--' />
            </div>
            <div className="interactable interactable-semi-inactive handler-rank" onClick={this.decRank}>
              <img className="handler-icon" src={require('../../assets/general/rankdownone.png')} alt='-' />
            </div>
            <div className="interactable interactable-semi-inactive handler-rank" onClick={this.incRank}>
              <img className="handler-icon" src={require('../../assets/general/rankupone.png')} alt='+' />
            </div>
            <div className="interactable interactable-semi-inactive handler-rank" onClick={this.maxRank}>
              <img className="handler-icon" src={require('../../assets/general/rankupmax.png')} alt='++' />
            </div>
          </div>
          <div className="bottom-button-wrapper">
            <div className="interactable interactable-semi-inactive handler-done" onClick={this.closeHandler}><p className="interactable-p">Done</p></div>
          </div>
        </div>
        <div className="empty-slot" draggable="false" style={this.props.forma ? { cursor: 'pointer' } : {}}>
          {this.props.slot === 'aura' && !this.props.mod.name &&
            <img className="top-type" src={require('../../assets/general/aura.png')} alt='' />
          }
          {this.props.slot === 'stance' && !this.props.mod.name &&
            <img className="top-type" src={require('../../assets/general/stance.png')} alt='' />
          }
          {this.props.slot === 'exilus' && !this.props.mod.name &&
            <img className="top-type top-type-exilus" src={require('../../assets/dynamic/modcards/exilusblack.png')} alt='' />
          }
          {this.props.slotPolarity && !this.props.mod.name &&
            <img className="slot-polarity" src={require(`../../assets/dynamic/polarities/${this.props.slotPolarity}black.png`)} alt='' />
          }
        </div>
        {this.props.mod.name &&
          <div draggable className="mod-card-wrapper" style={this.state.handlerActive || this.props.viewWidth < 1280 ? this.state.cardStyle : {}}>
            <ModCardGenerator mod={this.state.mod} slotPolarity={this.props.slotPolarity} handlerActive={this.state.showHandler} />
            {this.props.mod.name && this.props.viewWidth >= 1280 &&
              <div draggable="false" className="hover-buttons">
                <div className={`hover-button max-rank-button hover-${this.props.mod.rarity}`} onClick={this.maxRank}>???</div>
                <div className={`hover-button up-rank-button hover-${this.props.mod.rarity}`} onClick={this.incRank}>+</div>
                <div className={`hover-button down-rank-button hover-${this.props.mod.rarity}`} onClick={this.decRank}>???</div>
                <div className={`hover-button min-rank-button hover-${this.props.mod.rarity}`} onClick={this.minRank}>???</div>
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

export default ModStateHandler;
