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
            // <div className={"polarity-picker " + (this.props.polarityPicker ? "show-polarity-picker" : "hide-polarity-picker")} onClick={this.hidePolarityPicker}>
            // <div className={"dark-bg " + (this.props.polarityPicker ? "show-dark-bg" : "hide-dark-bg")} onClick={this.hidePolarityPicker}>
            <div className={"popup " + (this.props.polarityPicker ? "popup-active" : "popup-inactive")}>
                <div className={"popup-topbar " + (this.props.polarityPicker ? "popup-active" : "popup-inactive")}>
                    <div className="popup-x" onClick={this.hidePolarityPicker}>
                        <div className="popup-x-bar one-bar"></div>
                        <div className="popup-x-bar two-bar"></div>
                    </div>
                </div>
                <div className="popup-content polarity-picker">
                    <div className="polarity-picker-window" onClick={this.cancelClick}>
                        <div className="hexa-wrapper">
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'madurai') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/maduraiblack.png')} alt="madurai" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'naramon') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/naramonblack.png')} alt="naramon" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'vazarin') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/vazarinblack.png')} alt="vazarin" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'zenurik') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/zenurikblack.png')} alt="zenurik" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'unairu') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/unairublack.png')} alt="unairu" />
                                </span>
                            </div>
                            <div className="hexagon" onClick={(e) => { this.polarizeSlot(e, 'penjaga') }}>
                                <span>
                                    <img className="hex-polarity" src={require('../../assets/penjagablack.png')} alt="penjaga" />
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
