import React, { Component } from 'react';
// import { CSSTransition } from "react-transition-group";
import './ModPicker.css';

import { SimpleModCardGenerator } from '../modcardgenerator/SimpleModCardGenerator.jsx';

export class ModPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // display: this.props.mods,
            search: '',
            conclave: false,
            aura: false,
            exilus: false
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
        let filteredMods;
        let initial;
        if (this.state.conclave) {
            initial = this.props.mods.filter(mod => {
                return mod.conclave;
            });
        } else {
            initial = this.props.mods.filter(mod => {
                return !mod.conclaveOnly;
            });
        }
        if (this.state.aura || this.props.forSlot === 'aura') {
            initial = initial.filter(mod => {
                return mod.aura;
            });
        } else if (this.state.exilus || this.props.forSlot === 'exilus') {
            initial = initial.filter(mod => {
                return mod.exilus;
            });
        } else if (typeof this.props.forSlot === 'number') {
            initial = initial.filter(mod => {
                return !mod.aura;
            });
        }
        this.state.search.length > 0 ? filteredMods = this.filterBySearch(initial) : filteredMods = initial;
        return filteredMods;
    }



    filterBySearch = () => {
        let desc;
        let regExp = new RegExp(this.state.search, 'i');
        let filteredMods = this.props.mods.filter(mod => {
            if (mod.name) {
                desc = mod.description();
                if (typeof desc === 'string') {
                    return (mod.name && (mod.name.search(regExp) !== -1 || desc.search(regExp) !== -1 || mod.type.search(regExp) !== -1));
                } else {
                    return (mod.name && (mod.name.search(regExp) !== -1 || desc[0].search(regExp) !== -1 || desc[1].search(regExp) !== -1 || mod.type.search(regExp) !== -1));
                }
            } else {
                return false;
            }
        });
        return filteredMods
    }

    toggleConclave = () => {
        if (this.state.conclave) {
            this.setState({
                conclave: false
            })
        } else {
            this.setState({
                conclave: true,
                aura: false,
                exilus: false
            });
        }
    }

    toggleAura = () => {
        if (this.state.aura) {
            this.setState({
                aura: false
            })
        } else {
            this.setState({
                conclave: false,
                aura: true,
                exilus: false
            });
        }
    }

    toggleExilus = () => {
        if (this.state.exilus) {
            this.setState({
                exilus: false
            })
        } else {
            this.setState({
                conclave: false,
                aura: false,
                exilus: true
            });
        }
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
                    <div className={"interactable topbar-filter " + (this.state.conclave ? "interactable-active" : "interactable-inactive")} onClick={this.toggleConclave}><div className="conclave-placeholder"></div></div>
                    {this.props.viewWidth > 1223 && this.props.type === 'warframe' &&
                        <div className={"interactable topbar-filter " + (this.state.aura ? "interactable-active" : "interactable-inactive")} onClick={this.toggleAura}><div className="aura-placeholder"></div></div>
                    }
                    {this.props.viewWidth > 1223 && this.props.type === 'warframe' &&
                        <div className={"interactable topbar-filter " + (this.state.exilus ? "interactable-active" : "interactable-inactive")} onClick={this.toggleExilus}><div className="exilus-placeholder"></div></div>
                    }
                    <div className="search-wrapper mod-list-search-wrapper">
                        <input className="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.handleChange} onKeyUp={this.blurInput} />
                    </div>
                </div>
                {/* <CSSTransition classNames="fade" in={true} appear={true} timeout={200}> */}
                <div className="popup-content mod-list">
                    {this.generateModList(display)}
                </div>
                {/* </CSSTransition> */}
            </div>
        )
    }
}

export default ModPicker
