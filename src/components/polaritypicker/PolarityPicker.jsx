import React, { Component } from 'react';
import './PolarityPicker.css';

export class PolarityPicker extends Component {
    polarizeSlot = (e, polarity) => {
        e.stopPropagation();
        this.props.polarizeSlot(polarity);
    }

    hidePolarityPicker = (e) => {
        e.stopPropagation()
        this.props.hidePolarityPicker();
    }

    cancelClick = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            <div className={"popup " + (this.props.polarityPicker ? "popup-active" : "popup-inactive")}>
                <div className={"popup-topbar " + (this.props.polarityPicker ? "popup-active" : "popup-inactive")}>
                    <div className="popup-x" onClick={this.hidePolarityPicker}>
                        <div className="popup-x-bar one-bar"></div>
                        <div className="popup-x-bar two-bar"></div>
                    </div>
                </div>
                <div className="popup-content polarity-picker">
                    <div className="polarity-picker-window" onClick={this.cancelClick}>
                        <div className="hexa-wrapper first-row">
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'madurai') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/dynamic/polarities/maduraiblack.png')} alt="madurai" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'naramon') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/dynamic/polarities/naramonblack.png')} alt="naramon" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'vazarin') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/dynamic/polarities/vazarinblack.png')} alt="vazarin" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'zenurik') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/dynamic/polarities/zenurikblack.png')} alt="zenurik" />
                                </span>
                            </div>
                        </div>
                        <div className="hexa-wrapper second-row">
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'unairu') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/dynamic/polarities/unairublack.png')} alt="unairu" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'penjaga') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/dynamic/polarities/penjagablack.png')} alt="penjaga" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'umbra') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/dynamic/polarities/umbrablack.png')} alt="umbra" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, undefined) }}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PolarityPicker
