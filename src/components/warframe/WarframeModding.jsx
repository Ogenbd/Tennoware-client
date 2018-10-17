import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import '../rangedweapon/RangedWeaponModding.css'

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
            slotPolarities: this.props.slotPolarities,
            forSlot: null,
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
            errorBlinker: null
        })
        document.body.classList.remove('noscroll');
    }

    pickMod = (mod) => {
        let sameFamilySlot = -1;
        if (mod.family) {
            sameFamilySlot = this.state.chosenMods.findIndex(slottedMod => {
                return mod.family === slottedMod.family;
            });
        }
        if (sameFamilySlot === -1) {
            let mods = this.state.mods.slice(0);
            let chosenMods = this.state.chosenMods.slice(0);
            mods[mod.index] = {};
            chosenMods[this.state.forSlot] = mod;
            let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
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

    dragInMod = (modIndex, targetSlot) => {
        let mod = this.state.mods[modIndex];
        let sameFamilySlot = -1;
        if (mod.family) {
            sameFamilySlot = this.state.chosenMods.findIndex((slottedMod, index) => {
                return mod.family === slottedMod.family && index !== targetSlot;
            });
        }
        if (sameFamilySlot === -1) {
            let mods = this.state.mods.slice(0);
            let chosenMods = this.state.chosenMods.slice(0);
            mods[modIndex] = {};
            if (chosenMods[targetSlot].name) {
                mods[chosenMods[targetSlot].index] = chosenMods[targetSlot];
            }
            chosenMods[targetSlot] = mod;
            let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
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

    removeMod = (slot, mod) => {
        let chosenMods = this.state.chosenMods.slice(0);
        let mods = this.state.mods.slice(0);
        mods[mod.index] = mod;
        mods[mod.index].currRank = mod.maxRank;
        chosenMods[slot] = {};
        let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
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
        let chosenMods = this.state.chosenMods.slice(0);
        chosenMods[slot].currRank = mod.currRank;
        let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
        this.setState({
            chosenMods: chosenMods,
            totalModsCost: totalModsCost,
            errorBlinker: null
        });
    }

    calcCost = (newMods, slotPolarities) => {
        let modsCostSum = 0;
        newMods.forEach((mod, index) => {
            if (mod.name) {
                if (!slotPolarities[index]) {
                    modsCostSum += mod.currRank + mod.baseCost;
                } else if (mod.polarity === slotPolarities[index]) {
                    modsCostSum += Math.ceil((mod.currRank + mod.baseCost) / 2);
                } else {
                    modsCostSum += Math.floor((mod.currRank + mod.baseCost) * 1.25);
                }
            }
        });
        return modsCostSum;
    }

    showPolarityPicker = (slot) => {
        this.setState({
            forSlot: slot,
            polarityPicker: true
        });
    }

    countForma = (slotPolarities) => {
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
        return formaCount
    }

    dragStart = (e, slot) => {
        if (this.state.chosenMods[slot].name) {
            e.dataTransfer.setData('payload', JSON.stringify({ from: 'stack', index: slot }));
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
        let mods = this.state.chosenMods.slice(0);
        let temp = this.state.chosenMods[startSlot];
        mods[startSlot] = mods[targetSlot];
        mods[targetSlot] = temp;
        let totalModsCost = this.calcCost(mods, this.state.slotPolarities);
        this.setState({
            chosenMods: mods,
            totalModsCost: totalModsCost,
            forSwap: null,
        });
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
                    <p className="display-message">Choose a mod slot to swap with {this.state.chosenMods[this.state.forSwap].name}.</p>
                </div>
            )
        }
    }

    render() {
        console.log(this.props);
        let onLine = navigator.onLine;
        const { mods, chosenMods, modPicker, reactor, forma, totalModsCost, slotPolarities, errorBlinker, formaCount, forSwap, polarityPicker } = this.state
        return (
            <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
                <div className="ranged-modding">
                    <ModPicker mods={mods} chosenMods={chosenMods} active={modPicker} closeModPicker={this.closeModPicker} pickMod={this.pickMod} viewWidth={this.props.viewWidth} drop={this.drop} />
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
                        <div className="aug-container">
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
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 0) }} onDragOver={this.dragOver} onDrop={(e) => { this.drop(e, 0) }} >
                                    <ModStateHandler mod={chosenMods[0]} slot={0} slotPolarity={slotPolarities[0]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 0) ? 'error-flash' : '')}></div>
                                </div>
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 0) }} onDragOver={this.dragOver} onDrop={(e) => { this.drop(e, 0) }} >
                                    <ModStateHandler mod={chosenMods[0]} slot={0} slotPolarity={slotPolarities[0]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
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
                    <PolarityPicker polarityPicker={polarityPicker} polarizeSlot={this.polarizeSlot} hidePolarityPicker={this.hidePolarityPicker} />
                </div>
            </CSSTransition>
        )
    }
}

export default RangedWeaponModding