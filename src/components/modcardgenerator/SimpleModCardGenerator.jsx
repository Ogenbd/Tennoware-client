import React, { PureComponent } from 'react';
import './ModCardGenerator.css';

export class SimpleModCardGenerator extends PureComponent {
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

    determineRank = () => {
        let key = 0;
        let currRanks = [];
        for (let i = this.props.mod.maxRank; i > 0; i--) {
            currRanks.push(<img key={key} className="rank-light" src={require('../../assets/general/rankon.png')} alt={''} />);
            key++;
        }
        return currRanks;
    }

    generateSetBar = (color) => {
        let completeDescription = [<div key={this.props.mod.set.setMax} className="set-bar" style={{ backgroundColor: color, borderColor: color }}></div>];
        for (let i = this.props.mod.set.setMax - 1; i > 0; i--) {
            completeDescription.push(<div key={i} className="set-bar" style={{ borderColor: color }}></div>);
        }
        return completeDescription;
    }

    onImageLoad = () => {
        this.props.onImageLoad();
    }

    render() {
        const { mod, viewWidth } = this.props;
        let description = mod.description();
        let fontColor = this.determineFontColor();
        return (
            <div draggable={viewWidth >= 1203} className="mod simple-mod" style={fontColor}>
                <img className="mod-image" onLoad={this.onImageLoad} src={mod.img} alt="" />
                {mod.aura &&
                    <img className="aura-topper" src={require('../../assets/general/auratopper.png')} alt="" />
                }
                {mod.stance &&
                    <img className="aura-topper" src={require('../../assets/general/stancetopper.png')} alt="" />
                }
                {mod.exilus &&
                    <img className="exilus-mod-icon" src={require(`../../assets/dynamic/modcards/exilus${mod.rarity}.png`)} alt="" />
                }
                <div className="mod-info-wrapper">
                    <div className="mod-name"><p>{mod.name}</p></div>
                    {mod.set
                        ? <div className="mod-desc">
                            <p>{description[0]}</p>
                            <div className="set-bar-wrapper simple-set-bar-wrapper">
                                {this.generateSetBar(fontColor.color)}
                            </div>
                            <p className="set-desc">{description[1]}</p>
                        </div>
                        : <div className="mod-desc"><p>{description}</p></div>
                    }
                    <div className="info-bottom"></div>
                </div>
                <img src={require(`../../assets/dynamic/modcards/${mod.rarity}.png`)} alt={''} className={"rarity " + (mod.rarity === 'riven' ? "riven-border" : "")} />
                <div className="polarity-wrapper">
                    <p className="cost" style={fontColor}>{mod.baseCost + mod.currRank}</p>
                    {mod.polarity !== '' &&
                        <img className="polarity-icon" src={require(`../../assets/dynamic/polarities/${mod.polarity}${mod.rarity}.png`)} alt={''} />
                    }
                </div>
                <div className="mod-type">
                    <p>
                        {mod.set &&
                            <span>SET: </span>
                        }
                        {mod.type}
                    </p>
                </div>
                <img className="max-rank" src={require('../../assets/general/maxrank.png')} alt={''} />
                <div className="rank-wrapper">
                    {this.determineRank()}
                </div>
            </div >
        )
    }
}

export default SimpleModCardGenerator;
