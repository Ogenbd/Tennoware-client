import React, { Component } from 'react';
import './ModPicker.css';

import { SimpleModCardGenerator } from '../modcardgenerator/SimpleModCardGenerator.jsx';

export class ModPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // display: this.props.mods,
            search: '',
            conclave: false
        }
    }

    // static getDerivedStateFromProps(nextProps) {
    //     return { display: nextProps.mods }
    // }

    handlePick = (mod) => {
        if (this.props.viewWidth < 1223) {
            this.closeModPicker();
            this.props.pickMod(mod);
            this.setState({ search: '' });
        }
    }

    handleDrag = (e, index) => {
        if (this.props.viewWidth >= 1223) {
            e.dataTransfer.setData('payload', JSON.stringify({ from: 'picker', index: index }));
        }
    }

    closeModPicker = () => {
        this.props.closeModPicker();
    }

    handleChange = ({ target }) => {
        this.setState({ search: target.value })
    }

    blurInput = ({ key, target }) => {
        if (key === 'Enter') {
            target.blur();
        }
    }

    generateModList = (display) => {
        let modList = [];
        display.forEach(mod => {
            if (mod.name) {
                modList.push(
                    // <div draggable={this.props.viewWidth >= 1223} className="mod-wrapper" key={mod.index} onClick={() => { this.handlePick(mod) }} onDragStart={(e) => { this.handleDrag(e, mod.index) }}>
                    <div draggable="false" className="mod-wrapper" key={mod.index} onClick={() => { this.handlePick(mod) }} onDragStart={(e) => { this.handleDrag(e, mod.index) }}>
                        <SimpleModCardGenerator mod={mod} viewWidth={this.props.viewWidth} />
                    </div>
                );
            }
        });
        return modList;
    }

    filterMods = () => {
        if (!this.state.conclave) {
            let results;
            if (this.state.search.length < 1) {
                results = this.props.mods.filter(mod => {
                    return !mod.conclaveOnly;
                });
            } else {
                let desc;
                let regExp = new RegExp(this.state.search, 'i')
                results = this.props.mods.filter(mod => {
                    if (mod.name) {
                        desc = mod.description();
                        if (typeof desc === 'string') {
                            return (mod.name && !mod.conclaveOnly && (mod.name.search(regExp) !== -1 || desc.search(regExp) !== -1 || mod.type.search(regExp) !== -1));
                        } else {
                            return (mod.name && !mod.conclaveOnly && (mod.name.search(regExp) !== -1 || desc[0].search(regExp) !== -1 || desc[1].search(regExp) !== -1 || mod.type.search(regExp) !== -1));
                        }
                    } else {
                        return false;
                    }
                })
            }
            return results;
        } else {
            let conclaveMods;
            if (this.state.search.length < 1) {
                conclaveMods = this.props.mods.filter(mod => {
                    return mod.conclave;
                });
            } else {
                let desc;
                let regExp = new RegExp(this.state.search, 'i')
                conclaveMods = this.props.mods.filter(mod => {
                    if (mod.name) {
                        desc = mod.description();
                        if (typeof desc === 'string') {
                            return (mod.name && mod.conclave && (mod.name.search(regExp) !== -1 || desc.search(regExp) !== -1 || mod.type.search(regExp) !== -1));
                        } else {
                            return (mod.name && mod.conclave && (mod.name.search(regExp) !== -1 || desc[0].search(regExp) !== -1 || desc[1].search(regExp) !== -1 || mod.type.search(regExp) !== -1));
                        }
                    } else {
                        return false;
                    }
                })
            }
            return conclaveMods;
        }
    }

    toggleConclave = () => {
        this.setState(prevState => ({
            conclave: !prevState.conclave
        }));
    }

    render() {
        let display = this.filterMods();
        return (
            <div className={this.props.viewWidth < 1223 ? "popup " + (this.props.active ? "popup-active" : "popup-inactive") : 'mod-picker'}>
                <div className={this.props.viewWidth < 1223 ? "mod-list-topbar popup-topbar " + (this.props.active ? "popup-active" : "popup-inactive") : "mod-list-topbar"}>
                    {this.props.viewWidth < 1223 &&
                        <div className="popup-x" onClick={this.closeModPicker}>
                            <div className="popup-x-bar one-bar"></div>
                            <div className="popup-x-bar two-bar"></div>
                        </div>
                    }
                    <div className={"interactable conclave " + (this.state.conclave ? "interactable-active" : "interactable-inactive")} onClick={this.toggleConclave}><div className="conclave-placeholder"></div></div>
                    <div className="search-wrapper mod-list-search-wrapper">
                        <input className="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.handleChange} onKeyUp={this.blurInput} />
                    </div>
                </div>
                <div className="popup-content mod-list">
                    {this.generateModList(display)}
                </div>
            </div>
        )
    }
}

export default ModPicker
