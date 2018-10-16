import React, { Component } from 'react';
import './ModCardGenerator.css';

export class ModCardGenerator extends Component {
  determineFontColor = () => {
    switch (this.props.mod.rarity) {
      case 'rare':
        return { color: '#fff9a0' }
      case 'uncommon':
        return { color: '#cccccc' }
      case 'common':
        return { color: '#c79989' }
      case 'prime':
        return { color: '#e6e6e6' }
      case 'riven':
        return { color: '#be87d4' }
      default:
        break;
    }
  }

  determineMatch = () => {
    if (!this.props.slotPolarity) {
      return this.props.mod.rarity;
    } else if (this.props.slotPolarity === this.props.mod.polarity) {
      return 'green';
    } else {
      return 'red';
    }
  }

  determineRank = () => {
    let key = 0;
    let currRanks = [];
    let leftOver = this.props.mod.maxRank - this.props.mod.currRank;
    for (let i = this.props.mod.currRank; i > 0; i--) {
      currRanks.push(<img key={key} className="rank-light" src={require('../../assets/rankon.png')} alt={''} />);
      key++;
    }
    for (let i = leftOver; i > 0; i--) {
      currRanks.push(<img key={key} className="rank-light" src={require('../../assets/rankoff.png')} alt={''} />)
      key++;
    }
    return currRanks;
  }

  generateSetBar = (color) => {
    let key = 0;
    let completeDescription = [];
    for (let j = this.props.mod.set.setCurr; j > 0; j--) {
      completeDescription.push(<div key={key} className="set-bar" style={{ backgroundColor: color, borderColor: color }}></div>)
      key++
    }
    for (let i = this.props.mod.set.setMax - this.props.mod.set.setCurr; i > 0; i--) {
      completeDescription.push(<div key={key} className="set-bar" style={{ borderColor: color }}></div>);
      key++;
    }
    return completeDescription;
  }

  render() {
    const { mod, handlerActive } = this.props;
    let match = this.determineMatch();
    let description = mod.description();
    let fontColor = this.determineFontColor();
    return (
      <div className="mod" style={fontColor}>
        <img className="mod-image" src={mod.img} alt="" />
        <div className="mod-info-wrapper">
          <div className="mod-name"><p>{mod.name}</p></div>
          {mod.set
            ? <div className="mod-desc">
              <p>{description[0]}</p>
              <div className="set-bar-wrapper">
                {this.generateSetBar(fontColor.color)}
              </div>
              <p className="set-desc">{description[1]}</p>
            </div>
            : <div className="mod-desc"><p>{description}</p></div>
          }
        </div>
        <img src={require(`../../assets/${mod.rarity}.png`)} alt={''} className={"rarity " + (mod.rarity === 'riven' ? "riven-border" : "")} />
        <div className="polarity-wrapper">
          {match === 'green'
            ? <p className="cost" style={{ color: '#15E610' }}>{Math.round((mod.baseCost + mod.currRank) / 2)}</p>
            : match === 'red'
              ? <p className="cost" style={{ color: 'red' }}>{Math.round((mod.baseCost + mod.currRank) * 1.25)}</p>
              : <p className="cost" style={fontColor}>{mod.baseCost + mod.currRank}</p>
          }
          <img className="polarity-icon" src={require(`../../assets/${mod.polarity}${match}.png`)} alt={''} />
        </div>
        <div className="mod-type"><p>{mod.type}</p></div>
        {mod.maxRank === mod.currRank &&
          <img className={"max-rank " + (handlerActive ? 'second-layer' : '')} src={require('../../assets/maxrank.png')} alt={''} />
        }
        <div className={"rank-wrapper " + (handlerActive ? 'third-layer' : '')}>
          {this.determineRank()}
        </div>
      </div>
    )
  }
}

export default ModCardGenerator;
