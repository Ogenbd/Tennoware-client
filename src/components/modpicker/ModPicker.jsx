import React, { Component } from 'react';
import './ModPicker.css';

import SimpleModCardGenerator from '../modcardgenerator/SimpleModCardGenerator.jsx';

function imagesLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll(".mod-image")];
    for (let i = 0; i < imgElements.length; i += 1) {
        const img = imgElements[i];
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

export class ModPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            mods: [],
            conclave: false,
            stance: false,
            aura: false,
            exilus: false,
            polarity: null,
            filterToggle: false,
            sortToggle: false,
            sort: 'name',
            ready: false
        }
    }

    componentDidMount() {
        let mods = this.props.mods.filter(mod => {
            return !mod.conclaveOnly;
        });
        let sort = localStorage.getItem('sortby');
        if (sort === null || sort === 'name') {
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
        if (this.props.viewWidth < 1280) {
            this.props.pickMod(mod);
            this.closeModPicker();
        }
    }

    handleDrag = (e, index) => {
        if (this.props.viewWidth >= 1280) {
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

    generateModList = () => {
        let modList = [];
        this.state.mods.forEach(mod => {
            if (mod.name) {
                let visible = this.determineVisibility(mod);
                if (visible) {
                    modList.push(
                        <div draggable="false" className="mod-wrapper no-highlight" key={mod.index} onClick={() => { this.handlePick(mod) }} onDragStart={(e) => { this.handleDrag(e, mod.index) }}>
                            <SimpleModCardGenerator mod={mod} onImageLoad={this.onImageLoad} viewWidth={this.props.viewWidth} />
                        </div>
                    );
                } else {
                    modList.push(
                        <div draggable="false" className="mod-wrapper no-highlight hidden-mod" key={mod.index} onClick={() => { this.handlePick(mod) }} onDragStart={(e) => { this.handleDrag(e, mod.index) }}>
                            <SimpleModCardGenerator mod={mod} onImageLoad={this.onImageLoad} viewWidth={this.props.viewWidth} />
                        </div>
                    );
                }
            }
        });
        return modList;
    }

    onImageLoad = () => {
        if (!this.state.ready) {
            let loaded = imagesLoaded(this.modList);
            if (loaded) {
                this.setState({ ready: loaded });
                this.props.readyToShow();
            }
        }
    }

    determineVisibility = (mod) => {
        if (this.props.type === 'warframes') {
            if ((this.state.aura || this.props.forSlot === 'aura') && !mod.aura) {
                return false;
            } else if ((this.state.exilus || this.props.forSlot === 'exilus') && !mod.exilus) {
                return false;
            } else if (typeof this.props.forSlot === 'number' && mod.aura) {
                return false;
            }
        }
        if ((this.props.type === 'meleeweapons' || this.props.type === 'zaws') && (this.state.stance || this.props.forSlot === 'stance') && !mod.stance) {
            return false;
        }
        if (this.state.polarity !== null) {
            if (this.state.polarity !== mod.polarity) return false;
        }
        if (this.props.chosenIndexs.includes(mod.index)) return false;
        if (this.state.search.length > 0) {
            let found;
            let desc = mod.description();
            if (typeof desc === 'string') {
                found = (mod.name && (mod.name.toLowerCase().includes(this.state.search.toLowerCase()) || desc.toLowerCase().includes(this.state.search.toLowerCase()) || mod.type.toLowerCase().includes(this.state.search.toLowerCase())));
            } else {
                found = (mod.name && (mod.name.toLowerCase().includes(this.state.search.toLowerCase()) || desc[0].toLowerCase().includes(this.state.search.toLowerCase()) || desc[1].toLowerCase().includes(this.state.search.toLowerCase()) || mod.type.includes(this.state.search.toLowerCase())));
            }
            if (mod.keywords) {
                for (let i = 0; (i < mod.keywords.length && !found); i++) {
                    if (mod.keywords[i].includes(this.state.search.toLowerCase())) found = true;
                }
            }
            if (!found) return false;
        }
        return true;
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
        if (this.props.viewWidth < 1280) {
            this.setState(prevState => ({
                conclave: !prevState.conclave,
                mods: filtered,
                filterToggle: false
            }));
        } else {
            this.setState(prevState => ({
                conclave: !prevState.conclave,
                mods: filtered,
            }));
        }
    }

    toggleStance = () => {
        if (this.props.viewWidth < 1280) {
            this.setState(prevState => ({
                stance: !prevState.stance,
                filterToggle: false
            }));
        } else {
            this.setState(prevState => ({
                stance: !prevState.stance,
            }));
        }
    }

    toggleAura = () => {
        if (this.props.viewWidth < 1280) {
            this.setState(prevState => ({
                aura: !prevState.aura,
                exilus: false,
                filterToggle: false
            }));
        } else {
            this.setState(prevState => ({
                aura: !prevState.aura,
                exilus: false,
            }));
        }
    }

    toggleExilus = () => {
        if (this.props.viewWidth < 1280) {
            this.setState(prevState => ({
                exilus: !prevState.exilus,
                aura: false,
                filterToggle: false
            }));
        } else {
            this.setState(prevState => ({
                exilus: !prevState.exilus,
                aura: false,
            }));
        }
    }

    filterPolarity = (polarity) => {
        if (this.props.viewWidth < 1280) {
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
        } else {
            if (polarity === this.state.polarity) {
                this.setState({
                    polarity: null,
                });
            } else {
                this.setState({
                    polarity: polarity,
                });
            }
        }
    }

    toggleFilter = () => {
        if (this.props.viewWidth < 1280) {
            this.setState(prevState => ({
                filterToggle: !prevState.filterToggle,
                sortToggle: false
            }));
        }
    }

    showFilter = () => {
        if (this.props.viewWidth > 1279) {
            this.setState({
                filterToggle: true
            });
        }
    }

    hideFilter = () => {
        if (this.props.viewWidth > 1279) {
            this.setState({
                filterToggle: false
            });
        }
    }

    toggleSort = () => {
        if (this.props.viewWidth < 1280) {
            this.setState(prevState => ({
                sortToggle: !prevState.sortToggle,
                filterToggle: false
            }));
        }
    }

    showSort = () => {
        if (this.props.viewWidth > 1279) {
            this.setState({
                sortToggle: true
            });
        }
    }

    hideSort = () => {
        if (this.props.viewWidth > 1279) {
            this.setState({
                sortToggle: false
            });
        }
    }

    clearFilter = () => {
        if (this.props.viewWidth < 1280) {
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
                    stance: false,
                    aura: false,
                    exilus: false,
                    conclave: false,
                    polarity: null,
                    filterToggle: false
                });
            } else {
                this.setState({
                    stance: false,
                    aura: false,
                    exilus: false,
                    polarity: null,
                    filterToggle: false
                });
            }
        } else {
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
                    stance: false,
                    aura: false,
                    exilus: false,
                    conclave: false,
                    polarity: null,
                });
            } else {
                this.setState({
                    stance: false,
                    aura: false,
                    exilus: false,
                    polarity: null,
                });
            }
        }
    }

    sortName = () => {
        if (this.props.viewWidth < 1280) {
            if (this.state.sort === 'name') {
                this.setState({
                    sortToggle: false
                });
            } else {
                let sorted = this.sortByName(this.state.mods);
                localStorage.setItem('sortby', 'name');
                this.setState({
                    mods: sorted,
                    sort: 'name',
                    sortToggle: false
                });
            }
        } else {
            if (this.state.sort !== 'name') {
                let sorted = this.sortByName(this.state.mods);
                localStorage.setItem('sortby', 'name');
                this.setState({
                    mods: sorted,
                    sort: 'name',
                });
            }
        }
    }

    sortByName = (mods) => {
        let sorted = mods.slice(0).sort((a, b) => {
            return a.index - b.index;
        });
        return sorted;
    }

    sortDrain = () => {
        if (this.props.viewWidth < 1280) {
            if (this.state.sort === 'drain') {
                this.setState({
                    sortToggle: false
                });
            } else {
                let sorted = this.sortByDrain(this.state.mods);
                localStorage.setItem('sortby', 'drain');
                this.setState({
                    mods: sorted,
                    sort: 'drain',
                    sortToggle: false
                });
            }
        } else {
            if (this.state.sort !== 'drain') {
                let sorted = this.sortByDrain(this.state.mods);
                localStorage.setItem('sortby', 'drain');
                this.setState({
                    mods: sorted,
                    sort: 'drain',
                });
            }
        }
    }

    sortByDrain = (mods) => {
        let sorted = mods.slice(0).sort((a, b) => {
            return (b.maxRank + b.baseCost) - (a.maxRank + a.baseCost);
        });
        return sorted;
    }

    sortRank = () => {
        if (this.props.viewWidth < 1280) {
            if (this.state.sort === 'rank') {
                this.setState({
                    sortToggle: false
                });
            } else {
                let sorted = this.sortByRank(this.state.mods);
                localStorage.setItem('sortby', 'rank');
                this.setState({
                    mods: sorted,
                    sort: 'rank',
                    sortToggle: false
                });
            }
        } else {
            if (this.state.sort !== 'rank') {
                let sorted = this.sortByRank(this.state.mods);
                localStorage.setItem('sortby', 'rank');
                this.setState({
                    mods: sorted,
                    sort: 'rank',
                });
            }
        }
    }

    sortByRank = (mods) => {
        let sorted = mods.slice(0).sort((a, b) => {
            return b.maxRank - a.maxRank;
        });
        return sorted;
    }

    render() {
        return (
            <div className={this.props.viewWidth < 1280 ? "popup " + (this.props.active ? "popup-active" : "popup-inactive") : 'mod-picker'}>
                <div className={this.props.viewWidth < 1280 ? "popup-topbar " + (this.props.active ? "popup-active mod-list-topbar" : "popup-inactive mod-list-topbar") : "mod-list-topbar"}>
                    {this.props.viewWidth < 1280 &&
                        <div className="popup-x mod-list-x" onClick={this.closeModPicker}>
                            <div className="popup-x-bar one-bar"></div>
                            <div className="popup-x-bar two-bar"></div>
                        </div>
                    }
                    <div className="mod-options-wrapper">
                        <div className="mod-dropdown-trigger" onMouseLeave={this.hideFilter}>
                            <p className={"mod-dropdown-trigger-fill " + (this.state.conclave || this.state.aura || this.state.exilus || this.state.polarity || this.state.filterToggle ? 'active-option' : 'inactive-option')} onMouseEnter={this.showFilter} onClick={this.toggleFilter}>Filter <span className="chev-down">›</span></p>
                            <div className={"dropdown-block filter-block " + (this.state.filterToggle ? 'active-block' : 'inactive-block')}>
                                <div className="dropdown-option" onClick={this.clearFilter}>Clear All</div>
                                {this.props.type === 'warframes' && this.props.viewWidth > 1279 &&
                                    <React.Fragment>
                                        <div className={"dropdown-option " + (this.state.aura ? 'active-option' : 'inactive-option')} onClick={this.toggleAura}>Aura</div>
                                        <div className={"dropdown-option " + (this.state.exilus ? 'active-option' : 'inactive-option')} onClick={this.toggleExilus}>Exilus</div>
                                    </React.Fragment>
                                }
                                {(this.props.type === 'meleeweapons' || this.props.type === 'zaws') && this.props.viewWidth > 1279 &&
                                    <div className={"dropdown-option " + (this.state.stance ? 'active-option' : 'inactive-option')} onClick={this.toggleStance}>Stance</div>
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
                        </div>
                        <div className="mod-dropdown-trigger" onMouseLeave={this.hideSort}>
                            <p className={"mod-dropdown-trigger-fill " + (this.state.sortToggle ? 'active-option' : 'inactive-option')} onMouseEnter={this.showSort} onClick={this.toggleSort}>Sort <span className="chev-down">›</span></p>
                            <div className={"dropdown-block sort-block " + (this.state.sortToggle ? 'active-block' : 'inactive-block')}>
                                <div className={"dropdown-option " + (this.state.sort === 'name' ? 'active-option' : 'inactive-option')} onClick={this.sortName}>Name</div>
                                <div className={"dropdown-option " + (this.state.sort === 'drain' ? 'active-option' : 'inactive-option')} onClick={this.sortDrain}>Drain</div>
                                <div className={"dropdown-option " + (this.state.sort === 'rank' ? 'active-option' : 'inactive-option')} onClick={this.sortRank}>Rank</div>
                            </div>
                        </div>
                    </div>
                    <div className="search-wrapper mod-list-search-wrapper">
                        <input className="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.handleChange} onKeyUp={this.blurInput} />
                    </div>
                </div>
                <div className={this.props.viewWidth < 1280 ? "popup-content mod-list-wrapper" : "mod-list-wrapper"}>
                    <div
                        className="mod-list"
                        ref={element => {
                            this.modList = element;
                        }}
                    >
                        {this.generateModList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ModPicker
