import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import cloneDeep from 'lodash/cloneDeep';
import '../rangedweapon/RangedWeaponModding.css'
import './WarframeModding.css';

import WarframeStats from './WarframeStats';
import ModStateHandler from '../modstatehandler/ModStateHandler';
import PolarityPicker from '../polaritypicker/PolarityPicker';
import LinkGenerator from '../linkgenerator/LinkGenerator';
import BuildSaver from '../buildsaver/BuildSaver';
import BuildList from '../buildlist/BuildList';
import Like from '../like/Like';
import BuildDescription from '../builddescription/BuildDescription';
import ModPicker from '../modpicker/ModPicker';

export class RangedWeaponModding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reactor: true,
            forma: false,
            formaCount: 0,
            mods: this.props.mods,
            auraPolarity: this.props.frame.aura,
            exilusPolarity: this.props.frame.exilus,
            slotPolarities: this.props.slotPolarities,
            forSlot: null,
            chosenAuraMod: {},
            chosenExilusMod: {},
            chosenMods: [{}, {}, {}, {}, {}, {}, {}, {}],
            totalModsCost: 0,
            polarityPicker: false,
            modPicker: false,
            errorBlinker: null,
            forSwap: null,
        }
    }

    toggleReactor = () => {
        this.setState(prevState => ({
            reactor: !prevState.reactor,
            forSwap: null,
            errorBlinker: null
        }));
    }

    toggleForma = () => {
        this.setState(prevState => ({
            forma: !prevState.forma,
            forSwap: null,
            errorBlinker: null
        }));
    }

    openModPicker = (slot) => {
        document.body.classList.add('noscroll');
        this.setState({
            forSlot: slot,
            modPicker: true,
            errorBlinker: null
        })
    }

    closeModPicker = () => {
        this.setState({
            modPicker: false,
            forSlot: null,
            errorBlinker: null
        })
        document.body.classList.remove('noscroll');
    }

    pickMod = (mod) => {
        let mods = cloneDeep(this.state.mods);
        if (typeof this.state.forSlot === 'number') {
            let sameFamilySlot = -1;
            if (mod.family) {
                sameFamilySlot = this.state.chosenMods.findIndex(slottedMod => {
                    return mod.family === slottedMod.family;
                });
            }
            if (sameFamilySlot === -1) {
                let chosenMods = cloneDeep(this.state.chosenMods);
                mods[mod.index] = {};
                chosenMods[this.state.forSlot] = mod;
                let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
                let chosenModsSets = this.checkModSets(chosenMods)
                this.setState({
                    mods: mods,
                    chosenMods: chosenModsSets,
                    forSlot: null,
                    forSwap: null,
                    totalModsCost: totalModsCost,
                    errorBlinker: null
                });
            } else {
                this.setState({
                    forSlot: null,
                    errorBlinker: sameFamilySlot
                });
            }
        } else if (this.state.forSlot === 'aura' && mod.aura) {
            let auraMod = mod;
            mods[mod.index] = {};
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, auraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
            this.setState({
                mods: mods,
                forSlot: null,
                forSwap: null,
                totalModsCost: totalModsCost,
                errorBlinker: null,
                chosenAuraMod: auraMod
            });
        } else if (this.state.forSlot === 'exilus' && mod.exilus) {
            let exilusMod = mod;
            mods[mod.index] = {};
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, exilusMod, this.state.exilusPolarity);
            this.setState({
                mods: mods,
                forSlot: null,
                forSwap: null,
                totalModsCost: totalModsCost,
                errorBlinker: null,
                chosenExilusMod: exilusMod
            });
        }
    }

    dragInMod = (modIndex, targetSlot) => {
        let mod = this.state.mods[modIndex];
        if (mod.aura || targetSlot === 'aura') {
            if (mod.aura && targetSlot === 'aura') {
                let mods = cloneDeep(this.state.mods);
                if (this.state.chosenAuraMod.name) {
                    mods[this.state.chosenAuraMod.index] = cloneDeep(this.state.chosenAuraMod);
                    mods[this.state.chosenAuraMod.index].currRank = mods[this.state.chosenAuraMod.index].maxRank;
                }
                mods[mod.index] = {};
                let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, mod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
                this.setState({
                    mods: mods,
                    chosenAuraMod: mod,
                    totalModsCost: totalModsCost
                });
            }
        } else if (targetSlot === 'exilus') {
            if (mod.exilus) {
                let mods = cloneDeep(this.state.mods);
                if (this.state.chosenExilusMod.name) {
                    mods[this.state.chosenExilusMod.index] = cloneDeep(this.state.chosenExilusMod);
                    mods[this.state.chosenExilusMod.index].currRank = mods[this.state.chosenExilusMod.index].maxRank;
                }
                mods[mod.index] = {};
                let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, mod, this.state.exilusPolarity);
                this.setState({
                    mods: mods,
                    chosenExilusMod: mod,
                    totalModsCost: totalModsCost
                });
            }
        } else {
            let sameFamilySlot = -1;
            if (mod.family) {
                sameFamilySlot = this.state.chosenMods.findIndex((slottedMod, index) => {
                    return mod.family === slottedMod.family && index !== targetSlot;
                });
            }
            if (sameFamilySlot === -1) {
                let mods = cloneDeep(this.state.mods);
                let chosenMods = cloneDeep(this.state.chosenMods);
                mods[modIndex] = {};
                if (chosenMods[targetSlot].name) {
                    mods[chosenMods[targetSlot].index] = chosenMods[targetSlot];
                }
                chosenMods[targetSlot] = mod;
                let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
                let chosenModsSets = this.checkModSets(chosenMods)
                this.setState({
                    mods: mods,
                    chosenMods: chosenModsSets,
                    forSlot: null,
                    forSwap: null,
                    totalModsCost: totalModsCost,
                    errorBlinker: null
                });
            } else {
                this.setState({
                    forSlot: null,
                    errorBlinker: sameFamilySlot
                });
            }
        }
    }

    removeAura = () => {
        let mods = cloneDeep(this.state.mods);
        mods[this.state.chosenAuraMod.index] = this.state.chosenAuraMod;
        mods[this.state.chosenAuraMod.index].currRank = mods[this.state.chosenAuraMod.index].maxRank;
        let auraMod = {}
        let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, auraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
        this.setState({
            mods: mods,
            chosenAuraMod: auraMod,
            totalModsCost: totalModsCost
        });
    }

    removeExilus = () => {
        let mods = cloneDeep(this.state.mods);
        mods[this.state.chosenExilusMod.index] = this.state.chosenExilusMod;
        mods[this.state.chosenExilusMod.index].currRank = mods[this.state.chosenExilusMod.index].maxRank;
        let exilusMod = {}
        let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, exilusMod, this.state.exilusPolarity);
        this.setState({
            mods: mods,
            chosenExilusMod: exilusMod,
            totalModsCost: totalModsCost
        });
    }

    removeMod = (slot, mod) => {
        let chosenMods = cloneDeep(this.state.chosenMods);
        let mods = cloneDeep(this.state.mods);
        mods[mod.index] = mod;
        mods[mod.index].currRank = mod.maxRank;
        chosenMods[slot] = {};
        let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
        let chosenModsSets = this.checkModSets(chosenMods)
        this.setState({
            mods: mods,
            chosenMods: chosenModsSets,
            forSlot: null,
            forSwap: null,
            totalModsCost: totalModsCost,
            errorBlinker: null
        });
    }

    checkModSets = (newMods) => {
        let sets = { hunter: 0, vigilante: 0, augur: 0 }
        newMods.forEach(mod => {
            if (mod.set) {
                sets[mod.set.setName]++;
            }
        });
        newMods.forEach(mod => {
            if (mod.set) {
                mod.set.setCurr = sets[mod.set.setName]
            }
        });
        return newMods;
    }

    handleRankUpdate = (slot, mod) => {
        if (typeof slot === 'number') {
            let chosenMods = cloneDeep(this.state.chosenMods);
            chosenMods[slot].currRank = mod.currRank;
            let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
            this.setState({
                chosenMods: chosenMods,
                totalModsCost: totalModsCost,
                errorBlinker: null
            });
        } else if (slot === 'aura') {
            let chosenMod = cloneDeep(this.state.chosenAuraMod);
            chosenMod.currRank = mod.currRank;
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, chosenMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
            this.setState({
                chosenAuraMod: chosenMod,
                totalModsCost: totalModsCost,
                errorBlinker: null
            });
        } else if (slot === 'exilus') {
            let chosenMod = cloneDeep(this.state.chosenExilusMod);
            chosenMod.currRank = mod.currRank;
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, chosenMod, this.state.exilusPolarity);
            this.setState({
                chosenAuraMod: chosenMod,
                totalModsCost: totalModsCost,
                errorBlinker: null
            });
        }
    }

    calcCost = (newMods, slotPolarities, auraMod, auraPolarity, exilusMod, exilusPolarity) => {
        let modsCostSum = 0;
        if (auraMod.name) {
            if (!auraPolarity) {
                modsCostSum += auraMod.baseCost - auraMod.currRank;
            } else if (auraMod.polarity === auraPolarity) {
                modsCostSum -= (auraMod.baseCost + auraMod.currRank) * 2;
            } else {
                modsCostSum -= Math.round((auraMod.baseCost + auraMod.currRank) * 0.725);
            }
        }
        if (exilusMod.name) {
            let modCost = this.calcModCost(exilusMod, exilusPolarity)
            modsCostSum += modCost;
        }
        newMods.forEach((mod, index) => {
            if (mod.name) {
                let modCost = this.calcModCost(mod, slotPolarities[index]);
                modsCostSum += modCost;
            }
        });
        return modsCostSum;
    }

    calcModCost = (mod, polarity) => {
        if (!polarity) {
            return mod.currRank + mod.baseCost;
        } else if (mod.polarity === polarity) {
            return Math.ceil((mod.currRank + mod.baseCost) / 2);
        } else {
            return Math.round((mod.currRank + mod.baseCost) * 1.25);
        }
    }

    showPolarityPicker = (slot) => {
        this.setState({
            forSlot: slot,
            polarityPicker: true
        });
    }

    hidePolarityPicker = () => {
        this.setState({
            forSlot: null,
            polarityPicker: false
        });
        document.body.classList.remove('noscroll');
    }

    polarizeSlot = (polarity) => {
        if (typeof this.state.forSlot === 'number') {
            let slotPolarities = cloneDeep(this.state.slotPolarities);
            slotPolarities[this.state.forSlot] = polarity;
            let totalModsCost = this.calcCost(this.state.chosenMods, slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
            let formaCount = this.countForma(slotPolarities, this.state.auraPolarity, this.state.exilusPolarity);
            this.setState({
                slotPolarities: slotPolarities,
                totalModsCost: totalModsCost,
                formaCount: formaCount,
                forSlot: null,
                polarityPicker: false
            });
        } else if (this.state.forSlot === 'aura') {
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, polarity, this.state.chosenExilusMod, this.state.exilusPolarity);
            let formaCount = this.countForma(this.state.slotPolarities, polarity, this.state.exilusPolarity);
            this.setState({
                auraPolarity: polarity,
                totalModsCost: totalModsCost,
                formaCount: formaCount,
                forSlot: null,
                polarityPicker: false
            });
        } else if (this.state.forSlot === 'exilus') {
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, polarity);
            let formaCount = this.countForma(this.state.slotPolarities, this.state.auraPolarity, polarity);
            this.setState({
                exilusPolarity: polarity,
                totalModsCost: totalModsCost,
                formaCount: formaCount,
                forSlot: null,
                polarityPicker: false
            });
        }
        document.body.classList.remove('noscroll');
    }


    countForma = (slotPolarities, auraPolarity, exilusPolarity) => {
        let formaCount = 0;
        let currPolarityCount = { madurai: 0, naramon: 0, vazarin: 0, zenurik: 0, unairu: 0, penjaga: 0, umbra: 0 };
        slotPolarities.forEach(slot => {
            if (slot) {
                currPolarityCount[slot]++;
            }
        });
        let missing = 0;
        let extra = 0;
        for (let polarity in currPolarityCount) {
            if (currPolarityCount[polarity] > this.props.originalPolarityCount[polarity]) {
                extra += currPolarityCount[polarity] - this.props.originalPolarityCount[polarity]
            } else if (currPolarityCount[polarity] < this.props.originalPolarityCount[polarity]) {
                missing += this.props.originalPolarityCount[polarity] - currPolarityCount[polarity]
            }
        }
        if (extra > missing) {
            formaCount = extra;
        } else {
            formaCount = missing;
        }
        if (auraPolarity !== this.props.frame.aura) formaCount++
        if (exilusPolarity !== this.props.frame.exilus) formaCount++
        return formaCount
    }

    dragStart = (e, slot) => {
        if (typeof slot === 'number') {
            if (this.state.chosenMods[slot].name) {
                e.dataTransfer.setData('payload', JSON.stringify({ from: 'stack', index: slot }));
            }
        } else if (slot === 'aura') {
            if (this.state.chosenAuraMod.name) {
                e.dataTransfer.setData('payload', JSON.stringify({ from: 'stack', index: slot }));
            }
        } else if (slot === 'exilus') {
            if (this.state.chosenExilusMod.name) {
                e.dataTransfer.setData('payload', JSON.stringify({ from: 'stack', index: slot }));
            }
        }
    }

    drop = (e, targetSlot) => {
        let payload = JSON.parse(e.dataTransfer.getData('payload'));
        if (payload.from === 'stack') {
            this.swapMods(payload.index, targetSlot);
        } else if (payload.from === 'picker') {
            this.dragInMod(payload.index, targetSlot);
        }
    }

    dragOver = (e) => {
        e.preventDefault();
    }

    swapMods = (startSlot, targetSlot) => {
        if (startSlot !== targetSlot && startSlot !== 'aura' && targetSlot !== 'aura') {
            if (typeof startSlot === 'number' && typeof targetSlot === 'number') {
                let mods = cloneDeep(this.state.chosenMods);
                let temp = this.state.chosenMods[startSlot];
                mods[startSlot] = mods[targetSlot];
                mods[targetSlot] = temp;
                let totalModsCost = this.calcCost(mods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
                this.setState({
                    chosenMods: mods,
                    totalModsCost: totalModsCost,
                    forSwap: null,
                });
            } else if ((targetSlot === 'exilus') && this.state.chosenMods[startSlot].exilus) {
                let mods = cloneDeep(this.state.chosenMods);
                let temp = this.state.chosenMods[startSlot];
                let exilus = cloneDeep(this.state.chosenExilusMod);
                mods[startSlot] = exilus;
                exilus = temp;
                let totalModsCost = this.calcCost(mods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, exilus, this.state.exilusPolarity);
                this.setState({
                    chosenMods: mods,
                    chosenExilusMod: exilus,
                    totalModsCost: totalModsCost,
                    forSwap: null,
                });
            } else if (startSlot === 'exilus' && (this.state.chosenMods[targetSlot].exilus || !this.state.chosenMods[targetSlot].name)) {
                let mods = cloneDeep(this.state.chosenMods);
                let temp = this.state.chosenExilusMod;
                let exilus = this.state.chosenMods[targetSlot];
                mods[targetSlot] = temp;
                let totalModsCost = this.calcCost(mods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, exilus, this.state.exilusPolarity);
                this.setState({
                    chosenMods: mods,
                    chosenExilusMod: exilus,
                    totalModsCost: totalModsCost,
                    forSwap: null,
                });
            } else {
                this.setState({
                    forSwap: null
                });
            }
        } else {
            this.setState({
                forSwap: null
            });
        }
    }


    startSwap = (slot) => {
        this.setState({
            forSwap: slot
        });
    }

    buttonSwap = (slot) => {
        this.swapMods(this.state.forSwap, slot);
    }

    displayMessage = () => {
        if (this.state.errorBlinker !== null) {
            return (
                <div className="message-wrapper show-error-message">
                    <p className="display-message">This mod cannot be use with {this.state.chosenMods[this.state.errorBlinker].name}.</p>
                </div>
            );
        } else if (this.state.forSwap !== null) {
            return (
                <div className="message-wrapper always-on">
                    {this.state.forSwap !== 'exilus'
                        ? <p className="display-message">Choose a mod slot to swap with {this.state.chosenMods[this.state.forSwap].name}.</p>
                        : <p className="display-message">Choose a mod slot to swap with {this.state.chosenExilusMod.name}.</p>
                    }
                </div>
            )
        }
    }

    render() {
        let onLine = navigator.onLine;
        const { mods, chosenAuraMod, auraPolarity, chosenExilusMod, exilusPolarity, chosenMods, modPicker, reactor, forma, totalModsCost, slotPolarities, errorBlinker, formaCount, forSlot, forSwap, polarityPicker } = this.state
        return (
            <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
                <div className="ranged-modding">
                    <ModPicker type={'warframe'} mods={mods} chosenMods={chosenMods} active={modPicker} closeModPicker={this.closeModPicker} pickMod={this.pickMod} viewWidth={this.props.viewWidth} drop={this.drop} forSlot={forSlot} />
                    <div className="mod-stack">
                        <div className="interactable-wrapper">
                            {onLine &&
                                <BuildList itemName={this.props.match.params.id} />
                            }
                            {this.props.metaInfo.BuildDesc && this.props.metaInfo.BuildDesc.length > 0 &&
                                <BuildDescription metaInfo={this.props.metaInfo} />
                            }
                            {onLine && this.props.user &&
                                <BuildSaver orokin={reactor} formaCount={formaCount} user={this.props.user} match={this.props.match} getBuildStr={this.convertBuildToString} metaInfo={this.props.metaInfo} />
                            }
                            <LinkGenerator getBuildStr={this.convertBuildToString} match={this.props.match} />
                            {onLine && this.props.user && this.props.match.params.build && !this.props.metaInfo.Owner &&
                                <Like />
                            }
                            {/* {onLine && this.props.match.params.build && !this.props.metaInfo.UserID &&
                            <div className="interactable interactable-semi-inactive"><p className="interactable-p">Report</p></div>
                        } */}
                        </div>
                        <div className="aug-container frame-aug-container">
                            <div className="aug-wrapper">
                                <div className="aug-info">
                                    <p className="aug-info-title">Capacity</p>
                                    {reactor
                                        ? <p className="aug-info-content" style={60 - totalModsCost >= 0 ? { color: '#15E610' } : { color: 'red' }}>{60 - totalModsCost}</p>
                                        : <p className="aug-info-content" style={30 - totalModsCost >= 0 ? { color: '#15E610' } : { color: 'red' }}>{30 - totalModsCost}</p>
                                    }
                                </div>
                                <div className="aug-info">
                                    <p className="aug-info-title">Forma</p>
                                    <p className="aug-info-content">{formaCount}</p>
                                </div>
                            </div>
                            <div className="aug-wrapper">
                                <div className={"interactable " + (reactor ? "interactable-active" : "interactable-inactive")} onClick={this.toggleReactor}>
                                    {reactor
                                        ? <img className="aug-image catalyst" src={require('../../assets/reactor.png')} alt={'Remove Reactor'} />
                                        : <img className="aug-image catalyst" src={require('../../assets/nocatalyst.png')} alt={'Apply Reactor'} />}
                                </div>
                                <div className={"interactable " + (forma ? "interactable-active" : "interactable-inactive")} onClick={this.toggleForma}>
                                    {forma
                                        ? <img className="aug-image forma" src={require('../../assets/forma.png')} alt={'Cancel Forma Application'} />
                                        : <img className="aug-image forma" src={require('../../assets/noforma.png')} alt={'Apply Forma'} />}
                                </div>
                            </div>
                        </div>
                        <div className="slots-wrapper">
                            <div className="special-slots">
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 'aura') }} onDragOver={this.dragOver} onDrop={(e) => { this.drop(e, 'aura') }} >
                                    <ModStateHandler mod={chosenAuraMod} slot={'aura'} slotPolarity={auraPolarity} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeAura} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 0) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 'exilus') }} onDragOver={this.dragOver} onDrop={(e) => { this.drop(e, 'exilus') }} >
                                    <ModStateHandler mod={chosenExilusMod} slot={'exilus'} slotPolarity={exilusPolarity} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeExilus} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 0) ? 'error-flash' : '')}></div>
                                </div>
                            </div>
                            <div className="slots">
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 0) }} onDragOver={this.dragOver} onDrop={(e) => { this.drop(e, 0) }} >
                                    <ModStateHandler mod={chosenMods[0]} slot={0} slotPolarity={slotPolarities[0]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 0) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 1) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 1) }} >
                                    <ModStateHandler mod={chosenMods[1]} slot={1} slotPolarity={slotPolarities[1]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 1) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 2) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 2) }} >
                                    <ModStateHandler mod={chosenMods[2]} slot={2} slotPolarity={slotPolarities[2]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 2) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 3) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 3) }} >
                                    <ModStateHandler mod={chosenMods[3]} slot={3} slotPolarity={slotPolarities[3]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 3) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 4) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 4) }} >
                                    <ModStateHandler mod={chosenMods[4]} slot={4} slotPolarity={slotPolarities[4]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 4) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 5) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 5) }} >
                                    <ModStateHandler mod={chosenMods[5]} slot={5} slotPolarity={slotPolarities[5]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 5) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 6) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 6) }} >
                                    <ModStateHandler mod={chosenMods[6]} slot={6} slotPolarity={slotPolarities[6]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 6) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 7) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 7) }} >
                                    <ModStateHandler mod={chosenMods[7]} slot={7} slotPolarity={slotPolarities[7]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 7) ? 'error-flash' : '')}></div>
                                </div>
                            </div>
                        </div>
                        {this.displayMessage()}
                    </div>
                    <WarframeStats frame={this.props.frame} mods={this.state.chosenMods} viewWidth={this.props.viewWidth} />
                    <PolarityPicker polarityPicker={polarityPicker} polarizeSlot={this.polarizeSlot} hidePolarityPicker={this.hidePolarityPicker} />
                </div>
            </CSSTransition>
        )
    }
}

export default RangedWeaponModding