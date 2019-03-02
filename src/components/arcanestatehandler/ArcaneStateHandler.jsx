import React, { Component } from 'react';
import './ArcaneStateHandler.css';

export class ArcaneStateHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handlerActive: false,
            arcaneStyle: { transform: 'translate(0, 0)', zIndex: '1' },
            boxStyle: {},
        }
    }

    handleClick = (e) => {
        if (!this.props.arcane.name) {
            this.props.showArcanePicker(this.props.arcaneSlot);
        } else if (this.props.viewWidth > 1279 && this.props.arcane.name) {
            this.props.showArcanePicker(this.props.arcaneSlot);
        } else if (this.props.viewWidth < 1280 && this.props.arcane.name) {
            document.body.classList.add('noscroll');
            this.activateHandler(e.target);
        }
    }

    activateHandler = (element) => {
        if (!this.state.handlerActive) {
            let coords = element.getBoundingClientRect()
            let style = {};
            let boxStyle = {};
            style.transform = `translate(${this.props.viewWidth / 2 - coords.left - 40}px,${window.innerHeight / 2 - coords.top - 115}px) scale(1.3)`;
            style.zIndex = '9091';
            boxStyle.top = `${window.innerHeight / 2 - 200}px`
            boxStyle.left = `${this.props.viewWidth / 2 - 100}px`
            this.setState({
                handlerActive: true,
                arcaneStyle: style,
                boxStyle: boxStyle,
            });
        }
    }

    backToBackground = () => {
        setTimeout(() => {
            this.setState({
                arcaneStyle: { transform: 'translate(0,0)', zIndex: '1' }
            });
        }, 200);
    }

    closeHandler = (e) => {
        e.stopPropagation();
        document.body.classList.remove('noscroll');
        this.setState({
            handlerActive: false,
            arcaneStyle: { transform: 'translate(0,0)', zIndex: '9091' },
        }, this.backToBackground);
    }


    removeArcane = (e) => {
        if (this.props.arcane.name) {
            if (this.state.handlerActive) this.closeHandler(e);
            e.preventDefault();
            this.props.removeArcane(this.props.arcaneSlot);
        }
    }

    changeArcane = (e) => {
        this.closeHandler(e);
        this.props.showArcanePicker(this.props.arcaneSlot);
    }

    increaseRank = (e) => {
        e.stopPropagation()
        if (this.props.arcane.currRank < 3) this.props.increaseRank(this.props.arcaneSlot);
    }

    decreaseRank = (e) => {
        e.stopPropagation()
        if (this.props.arcane.currRank > 0) this.props.decreaseRank(this.props.arcaneSlot);
    }

    render() {
        return (
            <div className="arcane-handler-wrapper" onClick={this.handleClick} onContextMenu={this.removeArcane}>
                {this.props.viewWidth < 1280 &&
                    <React.Fragment>
                        <div className={"handler-background " + (this.state.handlerActive ? "handler-active" : "handler-inactive")} onClick={this.closeHandler}></div>
                        <div className={"arcane-handler-box " + (this.state.handlerActive ? "handler-active" : "handler-inactive")} style={this.state.boxStyle}>
                            <div className="arcane-handler-top-buttons">
                                <div className="interactable interactable-semi-inactive handler-remove" onClick={this.removeArcane}><p className="interactable-p">Remove</p></div>
                                <div className="interactable interactable-semi-inactive handler-swap" onClick={this.changeArcane}><p className="interactable-p">Change</p></div>
                            </div>
                            <div className="arcane-placeholder"></div>
                            <div className="arcane-handler-desc">{this.props.arcane.name ? this.props.arcane.description() : ''}</div>
                            <div className="arcane-handler-bottom-buttons">
                                <div className="interactable interactable-semi-inactive handler-rank" onClick={this.decreaseRank}>
                                    <img className="handler-icon" src={require('../../assets/general/rankdownone.png')} alt='-' />
                                </div>
                                <div className="interactable interactable-semi-inactive handler-rank" onClick={this.increaseRank}>
                                    <img className="handler-icon" src={require('../../assets/general/rankupone.png')} alt='+' />
                                </div>
                            </div>
                            <div className="interactable interactable-semi-inactive handler-done" onClick={this.closeHandler}><p className="interactable-p">Done</p></div>
                        </div>
                    </React.Fragment>
                }
                <div className="arcane-handler" style={this.state.handlerActive || this.props.viewWidth < 1280 ? this.state.arcaneStyle : {}}>
                    <p className="slotted-arcane-name">{this.props.arcane.name ? this.props.arcane.name : ''}</p>
                    <div className="arcane-slot-wrapper">
                        {this.props.arcane.name &&
                            <img className="slotted-arcane" src={this.props.arcane.img} alt={this.props.arcane.name} />
                        }
                    </div>
                    {this.props.arcane.name &&
                        <React.Fragment>
                            {this.props.viewWidth > 1279 &&
                                <div className="arcane-hover-wrapper">
                                    <div className="arcane-hover-buttons">
                                        <div className="arcane-hover-button" onClick={this.increaseRank}>+</div>
                                        <div className="arcane-hover-button" onClick={this.decreaseRank}>-</div>
                                    </div>
                                    <p className="arcane-hover-desc">{this.props.arcane.description()}</p>
                                </div>
                            }
                            <div className="arcane-ranks">
                                {this.props.arcane.currRank >= 1
                                    ? <img className="arcane-rank" src={require('../../assets/general/arcaneon.png')} alt="" />
                                    : <img className="arcane-rank" src={require('../../assets/general/arcaneoff.png')} alt="" />
                                }
                                {this.props.arcane.currRank >= 2
                                    ? <img className="arcane-rank" src={require('../../assets/general/arcaneon.png')} alt="" />
                                    : <img className="arcane-rank" src={require('../../assets/general/arcaneoff.png')} alt="" />
                                }
                                {this.props.arcane.currRank >= 3
                                    ? <img className="arcane-rank" src={require('../../assets/general/arcaneon.png')} alt="" />
                                    : <img className="arcane-rank" src={require('../../assets/general/arcaneoff.png')} alt="" />
                                }
                            </div>
                        </React.Fragment>
                    }
                </div>
                <div className="arcane-empty-wrapper">
                    <div className="arcane-empty-slot"></div>
                </div>
            </div>
        )
    }
}

export default ArcaneStateHandler;
