import React, { PureComponent } from 'react';
// import { CSSTransition } from "react-transition-group";
import './ModPicker.css';

import { SimpleModCardGenerator } from '../modcardgenerator/SimpleModCardGenerator.jsx';

export class ModPicker extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // display: this.props.mods,
            search: '',
            conclave: false,
            aura: false,
            exilus: false,
            loader: false
        }
    }

    // static getDerivedStateFromProps(nextProps) {
    //     return { display: nextProps.mods }
    // }

    handlePick = (mod) => {
        if (this.props.viewWidth < 1203) {
            // this.setState({ loader: true })
            // setTimeout(() => {
            this.props.pickMod(mod);
            this.closeModPicker();
            // this.setState({ loader: false })
            // }, 50)
            // this.setState({ search: '' });
        }
    }

    handleDrag = (e, index) => {
        if (this.props.viewWidth >= 1203) {
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
                    // <div draggable={this.props.viewWidth >= 1203} className="mod-wrapper" key={mod.index} onClick={() => { this.handlePick(mod) }} onDragStart={(e) => { this.handleDrag(e, mod.index) }}>
                    <div draggable="false" className="mod-wrapper no-highlight" key={mod.index} onClick={() => { this.handlePick(mod) }} onDragStart={(e) => { this.handleDrag(e, mod.index) }}>
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
        filteredMods = filteredMods.filter(mod => !this.props.chosenIndexs.includes(mod.index));
        return filteredMods;
    }



    filterBySearch = (mods) => {
        let desc;
        // let regExp = new RegExp(this.state.search, 'i');
        let filteredMods = mods.filter(mod => {
            if (mod.name) {
                desc = mod.description();
                if (typeof desc === 'string') {
                    return (mod.name && (mod.name.toLowerCase().includes(this.state.search.toLowerCase()) || desc.toLowerCase().includes(this.state.search.toLowerCase()) || mod.type.toLowerCase().includes(this.state.search.toLowerCase())));
                    // return (mod.name && (mod.name.search(regExp) !== -1 || desc.search(regExp) !== -1 || mod.type.search(regExp) !== -1));
                } else {
                    return (mod.name && (mod.name.toLowerCase().includes(this.state.search.toLowerCase()) || desc[0].toLowerCase().includes(this.state.search.toLowerCase()) || desc[1].toLowerCase().includes(this.state.search.toLowerCase()) || mod.type.includes(this.state.search.toLowerCase())));
                    // return (mod.name && (mod.name.search(regExp) !== -1 || desc[0].search(regExp) !== -1 || desc[1].search(regExp) !== -1 || mod.type.search(regExp) !== -1));
                }
            } else {
                return false;
            }
        });
        return filteredMods
    }

    toggleConclave = () => {
        this.setState(prevState => ({
            conclave: !prevState.conclave
        }));
    }

    toggleAura = () => {
        this.setState(prevState => ({
            aura: !prevState.aura,
            exilus: false
        }));
    }

    toggleExilus = () => {
        this.setState(prevState => ({
            exilus: !prevState.exilus,
            aura: false
        }));
    }

    render() {
        let display = this.filterMods();
        return (
            <div className={this.props.viewWidth < 1203 ? "popup " + (this.props.active ? "popup-active" : "popup-inactive") : 'mod-picker'}>
                <div className={this.props.viewWidth < 1203 ? "mod-list-topbar popup-topbar " + (this.props.active ? "popup-active" : "popup-inactive") : "mod-list-topbar"}>
                    {this.props.viewWidth < 1203 &&
                        <div className="popup-x mod-list-x" onClick={this.closeModPicker}>
                            <div className="popup-x-bar one-bar"></div>
                            <div className="popup-x-bar two-bar"></div>
                        </div>
                    }
                    <div className={"interactable topbar-filter " + (this.state.conclave ? "interactable-active" : "interactable-inactive")} onClick={this.toggleConclave}><div className={"conclave-placeholder " + (this.state.conclave ? "conclave-placeholder-active" : "conclave-placeholder-inactive")}></div></div>
                    {this.props.viewWidth > 1203 && this.props.type === 'warframe' &&
                        <div className={"interactable topbar-filter " + (this.state.aura ? "interactable-active" : "interactable-inactive")} onClick={this.toggleAura}><div className={"aura-placeholder " + (this.state.aura ? "aura-placeholder-active" : "aura-placeholder-inactive")}></div></div>
                    }
                    {this.props.viewWidth > 1203 && this.props.type === 'warframe' &&
                        <div className={"interactable topbar-filter " + (this.state.exilus ? "interactable-active" : "interactable-inactive")} onClick={this.toggleExilus}><div className={"exilus-placeholder " + (this.state.exilus ? "exilus-placeholder-active" : "exilus-placeholder-inactive")}></div></div>
                    }
                    <div className="search-wrapper mod-list-search-wrapper">
                        <input className="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.handleChange} onKeyUp={this.blurInput} />
                    </div>
                </div>
                <div className="popup-content mod-list">{this.generateModList(display)}</div>
            </div>
        )
    }
}

export default ModPicker
