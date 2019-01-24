import React, { Component } from 'react';
import './ArcanePicker.css';

export class ArcanePicker extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.active !== this.props.active ? true : false;
    }
    
    hideArcanePicker = () => {
        this.props.hideArcanePicker();
    }

    pickArcane = (index) => {
        this.props.pickArcane(index);
    }

    render() {
        return (
            <div className={"popup " + (this.props.active ? "popup-active" : "popup-inactive")}>
                <div className={"popup-topbar " + (this.props.active ? "popup-active" : "popup-inactive")}>
                        <div className="popup-x" onClick={this.hideArcanePicker}>
                        <div className="popup-x-bar one-bar"></div>
                        <div className="popup-x-bar two-bar"></div>
                    </div>
                    <div className="topbar-title">
                        <p>Arcanes</p>
                    </div>
                </div>
                <div className="popup-content arcane-picker">
                {this.props.arcanes.map((item, index) => (
                    <div key={index} className="arcane-option" onClick={() => {this.pickArcane(index)}}>
                        <img className="arcane-option-image" src={item.img} alt={item.name}/>
                        <p className="arcane-option-name">{item.name}</p>
                        <p className="arcane-option-desc">{item.description()}</p>
                    </div>
                ))

                }
                </div>
            </div>
        )
    }
}

export default ArcanePicker
