import React, { PureComponent } from 'react';
// import { CSSTransition } from "react-transition-group";
import './ModPicker.css';

import SimpleModCardGenerator from '../modcardgenerator/SimpleModCardGenerator.jsx';

export class ModPicker extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            mods: [],
            conclave: false,
            aura: false,
            exilus: false,
            filterToggle: false,
            sortToggle: false,
            sort: 'name'
        }
    }

    componentDidMount() {
        let mods = this.props.mods.filter(mod => {
            return !mod.conclaveOnly;
        });
        let sort = localStorage.getItem('sortby');
        if (sort === undefined || sort === 'name') {
            sort = 'name';
            localStorage.setItem('sortby', 'name');
        } else if (sort === 'drain') {
            mods = this.sortByDrain(mods);
        } else if (sort === 'rank') {
            mods = this.sortByRank(mods);
        }
        this.setState({
            mods: mods,
            sort: sort
        });
    }

    handlePick = (mod) => {
        if (this.props.viewWidth < 1203) {
            this.props.pickMod(mod);
            this.closeModPicker();
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
        if (this.state.aura || this.props.forSlot === 'aura') {
            filteredMods = this.state.mods.filter(mod => {
                return mod.aura;
            });
        } else if (this.state.exilus || this.props.forSlot === 'exilus') {
            filteredMods = this.state.mods.filter(mod => {
                return mod.exilus;
            });
        } else if (typeof this.props.forSlot === 'number') {
            filteredMods = this.state.mods.filter(mod => {
                return !mod.aura;
            });
        } else {
            filteredMods = this.state.mods;
        }
        if (this.state.polarity) {
            filteredMods = filteredMods.filter(mod => {
                return mod.polarity === this.state.polarity;
            })
        }
        if (this.state.search.length > 0) filteredMods = this.filterBySearch(filteredMods);
        filteredMods = filteredMods.filter(mod => !this.props.chosenIndexs.includes(mod.index));
        return filteredMods;
    }



    filterBySearch = (mods) => {
        let desc;
        let filteredMods = mods.filter(mod => {
            if (mod.name) {
                desc = mod.description();
                if (typeof desc === 'string') {
                    return (mod.name && (mod.name.toLowerCase().includes(this.state.search.toLowerCase()) || desc.toLowerCase().includes(this.state.search.toLowerCase()) || mod.type.toLowerCase().includes(this.state.search.toLowerCase())));
                } else {
                    return (mod.name && (mod.name.toLowerCase().includes(this.state.search.toLowerCase()) || desc[0].toLowerCase().includes(this.state.search.toLowerCase()) || desc[1].toLowerCase().includes(this.state.search.toLowerCase()) || mod.type.includes(this.state.search.toLowerCase())));
                }
            } else {
                return false;
            }
        });
        return filteredMods
    }

    toggleConclave = () => {
        let filtered;
        if (this.state.conclave) {
            filtered = this.props.mods.filter(mod => {
                return !mod.conclaveOnly;
            });
        } else {
            filtered = this.props.mods.filter(mod => {
                return mod.conclave;
            });
        }
        if (this.state.sort === 'name') {
            filtered = this.sortByName(filtered);
        } else if (this.state.sort === 'drain') {
            filtered = this.sortByDrain(filtered);
        } else if (this.state.sort === 'rank') {
            filtered = this.sortByRank(filtered);
        }
        console.log(filtered);
        this.setState(prevState => ({
            conclave: !prevState.conclave,
            mods: filtered,
            filterToggle: false
        }));
    }

    toggleAura = () => {
        this.setState(prevState => ({
            aura: !prevState.aura,
            exilus: false,
            filterToggle: false
        }));
    }

    toggleExilus = () => {
        this.setState(prevState => ({
            exilus: !prevState.exilus,
            aura: false,
            filterToggle: false
        }));
    }

    filterPolarity = (polarity) => {
        if (polarity === this.state.polarity) {
            this.setState({
                polarity: null,
                filterToggle: false
            });
        } else {
            this.setState({
                polarity: polarity,
                filterToggle: false
            });
        }
    }

    toggleFilter = () => {
        this.setState(prevState => ({
            filterToggle: !prevState.filterToggle,
            sortToggle: false
        }));
    }

    toggleSort = () => {
        this.setState(prevState => ({
            sortToggle: !prevState.sortToggle,
            filterToggle: false
        }));
    }

    clearFilter = () => {
        if (this.state.conclave) {
            let mods = this.props.mods.filter(mod => {
                return !mod.conclaveOnly;
            });
            if (this.state.sort === 'name') {
                mods = this.sortByName(mods);
            } else if (this.state.sort === 'drain') {
                mods = this.sortByDrain(mods);
            } else if (this.state.sort === 'rank') {
                mods = this.sortByRank(mods);
            }
            this.setState({
                mods: mods,
                aura: false,
                exilus: false,
                conclave: false,
                polarity: null,
                filterToggle: false
            });
        } else {
            this.setState({
                aura: false,
                exilus: false,
                polarity: null,
                filterToggle: false
            });
        }
    }

    sortName = () => {
        let sorted = this.sortByName(this.state.mods);
        localStorage.setItem('sortby', 'name');
        this.setState({
            mods: sorted,
            sort: 'name',
            sortToggle: false
        });
    }

    sortByName = (mods) => {
        let sorted = mods.slice(0).sort((a, b) => {
            return a.index - b.index;
        });
        return sorted;
    }

    sortDrain = () => {
        let sorted = this.sortByDrain(this.state.mods);
        localStorage.setItem('sortby', 'drain');
        this.setState({
            mods: sorted,
            sort: 'drain',
            sortToggle: false
        });
    }

    sortByDrain = (mods) => {
        let sorted = mods.slice(0).sort((a, b) => {
            return (b.maxRank + b.baseCost) - (a.maxRank + a.baseCost);
        });
        return sorted;
    }

    sortRank = () => {
        let sorted = this.sortByRank(this.state.mods);
        localStorage.setItem('sortby', 'rank');
        this.setState({
            mods: sorted,
            sort: 'rank',
            sortToggle: false
        });
    }

    sortByRank = (mods) => {
        let sorted = mods.slice(0).sort((a, b) => {
            return b.maxRank - a.maxRank;
        });
        return sorted;
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
                    <div className="mod-options-wrapper">
                        <div className={"mod-dropdown-trigger " + (this.state.conclave || this.state.aura || this.state.exilus || this.state.polarity || this.state.filterToggle ? 'active-option' : 'inactive-option')} onClick={this.toggleFilter}>Filter</div>
                        <div className={"mod-dropdown-trigger " + (this.state.sortToggle ? 'active-option' : 'inactive-option')} onClick={this.toggleSort}>Sort</div>
                    </div>
                    {/* <div className={"interactable topbar-filter " + (this.state.conclave ? "interactable-active" : "interactable-inactive")} onClick={this.toggleConclave}><div className={"conclave-placeholder " + (this.state.conclave ? "conclave-placeholder-active" : "conclave-placeholder-inactive")}></div></div>
                    {this.props.viewWidth > 1203 && this.props.type === 'warframe' &&
                    <div className={"interactable topbar-filter " + (this.state.aura ? "interactable-active" : "interactable-inactive")} onClick={this.toggleAura}><div className={"aura-placeholder " + (this.state.aura ? "aura-placeholder-active" : "aura-placeholder-inactive")}></div></div>
                }
                {this.props.viewWidth > 1203 && this.props.type === 'warframe' &&
                <div className={"interactable topbar-filter " + (this.state.exilus ? "interactable-active" : "interactable-inactive")} onClick={this.toggleExilus}><div className={"exilus-placeholder " + (this.state.exilus ? "exilus-placeholder-active" : "exilus-placeholder-inactive")}></div></div>
            } */}
                    <div className="search-wrapper mod-list-search-wrapper">
                        <input className="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.handleChange} onKeyUp={this.blurInput} />
                    </div>
                </div>
                <div className={"dropdown-block filter-block " + (this.state.filterToggle ? this.props.type === 'warframes' && this.props.viewWidth > 1202 ? 'filter-active-warframes' : 'filter-active' : 'filter-inactive')}>
                    <div className="dropdown-option" onClick={this.clearFilter}>Clear All</div>
                    {this.props.type === 'warframes' && this.props.viewWidth > 1202 &&
                        <React.Fragment>
                            <div className={"dropdown-option " + (this.state.aura ? 'active-option' : 'inactive-option')} onClick={this.toggleAura}>Aura</div>
                            <div className={"dropdown-option " + (this.state.exilus ? 'active-option' : 'inactive-option')} onClick={this.toggleExilus}>Exilus</div>
                        </React.Fragment>
                    }
                    <div className={"dropdown-option " + (this.state.polarity === 'madurai' ? 'active-option' : 'inactive-option')} onClick={() => { this.filterPolarity('madurai') }}>{this.state.polarity === 'madurai' ? <img className="filter-pol" src={require('../../assets/dynamic/polarities/madurairare.png')} alt="" /> : <img className="filter-pol" src={require('../../assets/dynamic/polarities/maduraiprime.png')} alt="" />}Madurai</div>
                    <div className={"dropdown-option " + (this.state.polarity === 'naramon' ? 'active-option' : 'inactive-option')} onClick={() => { this.filterPolarity('naramon') }}>{this.state.polarity === 'naramon' ? <img className="filter-pol" src={require('../../assets/dynamic/polarities/naramonrare.png')} alt="" /> : <img className="filter-pol" src={require('../../assets/dynamic/polarities/naramonprime.png')} alt="" />}Naramon</div>
                    <div className={"dropdown-option " + (this.state.polarity === 'vazarin' ? 'active-option' : 'inactive-option')} onClick={() => { this.filterPolarity('vazarin') }}>{this.state.polarity === 'vazarin' ? <img className="filter-pol" src={require('../../assets/dynamic/polarities/vazarinrare.png')} alt="" /> : <img className="filter-pol" src={require('../../assets/dynamic/polarities/vazarinprime.png')} alt="" />}Vazarin</div>
                    <div className={"dropdown-option " + (this.state.polarity === 'zenurik' ? 'active-option' : 'inactive-option')} onClick={() => { this.filterPolarity('zenurik') }}>{this.state.polarity === 'zenurik' ? <img className="filter-pol" src={require('../../assets/dynamic/polarities/zenurikrare.png')} alt="" /> : <img className="filter-pol" src={require('../../assets/dynamic/polarities/zenurikprime.png')} alt="" />}Zenurik</div>
                    <div className={"dropdown-option " + (this.state.polarity === 'umbra' ? 'active-option' : 'inactive-option')} onClick={() => { this.filterPolarity('umbra') }}>{this.state.polarity === 'umbra' ? <img className="filter-pol" src={require('../../assets/dynamic/polarities/umbrarare.png')} alt="" /> : <img className="filter-pol" src={require('../../assets/dynamic/polarities/umbraprime.png')} alt="" />}Umbra</div>
                    <div className={"dropdown-option " + (this.state.polarity === 'penjaga' ? 'active-option' : 'inactive-option')} onClick={() => { this.filterPolarity('penjaga') }}>{this.state.polarity === 'penjaga' ? <img className="filter-pol" src={require('../../assets/dynamic/polarities/penjagarare.png')} alt="" /> : <img className="filter-pol" src={require('../../assets/dynamic/polarities/penjagaprime.png')} alt="" />}Penjaga</div>
                    <div className={"dropdown-option " + (this.state.polarity === 'unairu' ? 'active-option' : 'inactive-option')} onClick={() => { this.filterPolarity('unairu') }}>{this.state.polarity === 'unairu' ? <img className="filter-pol" src={require('../../assets/dynamic/polarities/unairurare.png')} alt="" /> : <img className="filter-pol" src={require('../../assets/dynamic/polarities/unairuprime.png')} alt="" />}Unairu</div>
                    <div className={"dropdown-option " + (this.state.conclave ? 'active-option' : 'inactive-option')} onClick={this.toggleConclave}>Conclave</div>
                </div>
                <div className={"dropdown-block sort-block " + (this.state.sortToggle ? 'sort-active' : 'sort-inactive')}>
                    <div className={"dropdown-option " + (this.state.sort === 'name' ? 'active-option' : 'inactive-option')} onClick={this.sortName}>Name</div>
                    <div className={"dropdown-option " + (this.state.sort === 'drain' ? 'active-option' : 'inactive-option')} onClick={this.sortDrain}>Drain</div>
                    <div className={"dropdown-option " + (this.state.sort === 'rank' ? 'active-option' : 'inactive-option')} onClick={this.sortRank}>Rank</div>
                </div>
                <div className="popup-content mod-list">{this.generateModList(display)}</div>
            </div>
        )
    }
}

export default ModPicker
