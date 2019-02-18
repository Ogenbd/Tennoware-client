import React, { Component } from 'react';
import { Spring, animated } from "react-spring/renderprops";
import cloneDeep from 'lodash/cloneDeep';
import './Modding.css'

import ModdingAd from '../adunits/ModdingAd';
import BuildDescription from '../builddescription/BuildDescription';
import Report from '../report/Report';
import Like from '../like/Like';
import BuildList from '../buildlist/BuildList';
import BuildSaver from '../buildsaver/BuildSaver';
import LinkGenerator from '../linkgenerator/LinkGenerator';
import ModStateHandler from '../modstatehandler/ModStateHandler';
import PolarityPicker from '../polaritypicker/PolarityPicker';
import ModPicker from '../modpicker/ModPicker';
import SentinelStats from '../stats/SentinelStats';
import BeastStats from '../stats/BeastStats';
import MoaStats from '../stats/MoaStats';

class TenSlotModding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orokin: true,
            forma: false,
            formaCount: 0,
            slotPolarities: this.props.slotPolarities,
            forSlot: null,
            chosenMods: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            chosenIndexs: [],
            totalModsCost: 0,
            polarityPicker: false,
            modPicker: false,
            errorBlinker: null,
            forSwap: null,
        }
    }

    componentDidMount() {
        document.body.classList.remove('noscroll');
        if (this.props.match.params.pre) {
            let build = this.props.match.params.pre;
            let orokin = build[0] === '0' ? false : true;
            let prePolarities = this.createPrePolarities(build.slice(1, 11).split(''));
            let preMods = this.createPreMods(build.slice(11, 51));
            let totalModsCost = this.calcCost(preMods.chosenMods, prePolarities);
            let formaCount = this.countForma(prePolarities);
            this.checkModSets(preMods.chosenMods);
            this.setState({
                orokin: orokin,
                slotPolarities: prePolarities,
                chosenIndexs: preMods.chosenIndexs,
                chosenMods: preMods.chosenMods,
                totalModsCost: totalModsCost,
                formaCount: formaCount,
            });
        }
    }

    convertBuildToString = () => {
        let buildStr = '';
        this.state.orokin ? buildStr += '1' : buildStr += '0';
        for (let i = 0; i < 10; i++) {
            let polNum = this.convertPolarityToNum(this.state.slotPolarities[i]);
            buildStr += polNum;
        }
        this.state.chosenMods.forEach(mod => {
            if (mod.name) {
                buildStr += mod.abrev
                if (mod.currRank < 10) {
                    buildStr += '0';
                    buildStr += mod.currRank;
                } else {
                    buildStr += mod.currRank;
                }
            } else {
                buildStr += '0000'
            }
        });
        return { buildStr: buildStr, riven: false };
    }

    convertPolarityToNum = (polarity) => {
        switch (polarity) {
            case 'madurai':
                return '1';
            case 'naramon':
                return '2';
            case 'vazarin':
                return '3';
            case 'zenurik':
                return '4';
            case 'unairu':
                return '5';
            case 'penjaga':
                return '6';
            case 'umbra':
                return '7';
            case undefined:
                return '0';
            default:
                return '0';
        }
    }

    createPreMods = (modsStr) => {
        let chosenMods = [];
        let chosenIndexs = [];
        let modsArr = modsStr.match(/.{1,4}/g);
        modsArr.forEach(modAbrev => {
            if (modAbrev === '0000') {
                chosenMods.push({});
            } else {
                let foundMod = this.props.mods.find(mod => {
                    return mod.abrev === `${modAbrev[0]}${modAbrev[1]}`
                });
                let rank = parseInt(`${modAbrev[2]}${modAbrev[3]}`, 10);
                if (foundMod === undefined || typeof rank !== 'number' || rank < 0 || rank > foundMod.maxRank) {
                    chosenMods.push({});
                    // this.props.redirectToVoid();
                } else {
                    foundMod.currRank = rank;
                    chosenMods.push(foundMod);
                    chosenIndexs.push(foundMod.index);
                }
            }
        });
        return { chosenMods: chosenMods, chosenIndexs: chosenIndexs };
    }

    createPrePolarities = (polarityArr) => {
        let slotPolarities = [];
        polarityArr.forEach(number => {
            let polarity = this.transPolarity(number);
            slotPolarities.push(polarity);
        });
        return slotPolarities;
    }

    transPolarity = (number) => {
        switch (number) {
            case '0':
                return undefined;
            case '1':
                return 'madurai';
            case '2':
                return 'naramon';
            case '3':
                return 'vazarin';
            case '4':
                return 'zenurik';
            case '5':
                return 'unairu';
            case '6':
                return 'penjaga';
            case '7':
                return 'umbra';
            default:
                this.props.redirectToVoid();
                break;
        }
    }

    toggleOrokin = () => {
        this.setState(prevState => ({
            orokin: !prevState.orokin,
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
            // errorBlinker: null
        })
        document.body.classList.remove('noscroll');
    }

    pickMod = (mod) => {
        let sameFamilySlot = -1;
        let legal = true;
        if (mod.type === 'MOA') {
            let count = 0;
            this.state.chosenMods.forEach(chosenMod => {
                if (chosenMod.type === 'MOA') count++;
            });
            if ((count === 2 && this.state.chosenMods[this.state.forSlot].type !== 'MOA') || count > 2) {
                legal = false;
            }
        }
        if (mod.family) {
            sameFamilySlot = this.state.chosenMods.findIndex(slottedMod => {
                return mod.family === slottedMod.family;
            });
        }
        if (sameFamilySlot === -1 && legal) {
            let pickedMod = cloneDeep(mod);
            let chosenMods = cloneDeep(this.state.chosenMods);
            let chosenIndexs = cloneDeep(this.state.chosenIndexs);
            chosenIndexs.push(pickedMod.index);
            chosenMods[this.state.forSlot] = pickedMod;
            let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
            let chosenModsSets = this.checkModSets(chosenMods)
            this.setState({
                chosenIndexs: chosenIndexs,
                chosenMods: chosenModsSets,
                forSlot: null,
                forSwap: null,
                totalModsCost: totalModsCost,
                errorBlinker: null
            });
        } else if (sameFamilySlot !== -1) {
            this.setState({
                forSlot: null,
                errorBlinker: sameFamilySlot
            });
        } else {
            this.setState({
                forSlot: null,
                errorBlinker: 'MOA'
            });
        }
    }

    dragInMod = (modIndex, targetSlot) => {
        let mod = cloneDeep(this.props.mods[modIndex]);
        let sameFamilySlot = -1;
        let legal = true;
        if (mod.type === 'MOA') {
            let count = 0;
            this.state.chosenMods.forEach(chosenMod => {
                if (chosenMod.type === 'MOA') count++;
            });
            if ((count === 2 && this.state.chosenMods[targetSlot].type !== 'MOA') || count > 2) {
                legal = false;
            }
        }
        if (mod.family) {
            sameFamilySlot = this.state.chosenMods.findIndex((slottedMod, index) => {
                return mod.family === slottedMod.family && index !== targetSlot;
            });
        }
        if (sameFamilySlot === -1 && legal) {
            let chosenMods = cloneDeep(this.state.chosenMods);
            let chosenIndexs = cloneDeep(this.state.chosenIndexs);
            if (chosenMods[targetSlot].name) {
                chosenIndexs = chosenIndexs.filter(idx => idx !== chosenMods[targetSlot].index);
            }
            chosenIndexs.push(mod.index);
            chosenMods[targetSlot] = mod;
            let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
            let chosenModsSets = this.checkModSets(chosenMods)
            this.setState({
                chosenIndexs: chosenIndexs,
                chosenMods: chosenModsSets,
                forSlot: null,
                forSwap: null,
                totalModsCost: totalModsCost,
                errorBlinker: null
            });
        } else if (sameFamilySlot !== -1) {
            this.setState({
                forSlot: null,
                errorBlinker: sameFamilySlot
            });
        } else {
            this.setState({
                forSlot: null,
                errorBlinker: 'MOA'
            });
        }
    }

    removeMod = (slot) => {
        let chosenMods = cloneDeep(this.state.chosenMods);
        let chosenIndexs = cloneDeep(this.state.chosenIndexs);
        chosenIndexs = chosenIndexs.filter(idx => idx !== chosenMods[slot].index);
        chosenMods[slot] = {};
        let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
        let chosenModsSets = this.checkModSets(chosenMods)
        this.setState({
            chosenIndexs: chosenIndexs,
            chosenMods: chosenModsSets,
            forSlot: null,
            forSwap: null,
            totalModsCost: totalModsCost,
            errorBlinker: null
        });
    }

    checkModSets = (newMods) => {
        let sets = { hunter: 0, vigilante: 0, augur: 0, gladiator: 0, umbral: 0, mecha: 0, tek: 0, synth: 0, sacrificial: 0, strain: 0 }
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
        let chosenMods = cloneDeep(this.state.chosenMods);
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
                    modsCostSum += Math.round((mod.currRank + mod.baseCost) * 1.25);
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

    hidePolarityPicker = () => {
        this.setState({
            forSlot: null,
            polarityPicker: false
        });
        document.body.classList.remove('noscroll');
    }

    polarizeSlot = (polarity) => {
        let slotPolarities = cloneDeep(this.state.slotPolarities);
        slotPolarities[this.state.forSlot] = polarity;
        let totalModsCost = this.calcCost(this.state.chosenMods, slotPolarities);
        let formaCount = this.countForma(slotPolarities);
        this.setState({
            slotPolarities: slotPolarities,
            totalModsCost: totalModsCost,
            formaCount: formaCount,
            forSlot: null,
            polarityPicker: false
        });
        document.body.classList.remove('noscroll');
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
        if (this.props.type === 'moas') formaCount--;
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
        if (startSlot !== targetSlot) {
            let mods = cloneDeep(this.state.chosenMods);
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
        if (this.state.errorBlinker === 'MOA') {
            return (
                <div className="message-wrapper show-error-message">
                    <p className="display-message">Can only slot in two MOA precepts at a time.</p>
                </div>
            )
        } else if (this.state.errorBlinker !== null) {
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
        const { chosenMods, chosenIndexs, modPicker, orokin, forma, totalModsCost, slotPolarities, errorBlinker, formaCount, forSwap, polarityPicker } = this.state;
        return (
            <Spring
                native
                config={{ tension: 120, friction: 14 }}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => (
                    <animated.div style={props} className="modding-screen">
                        <ModPicker mods={this.props.mods} chosenIndexs={chosenIndexs} type={this.props.type} active={modPicker} closeModPicker={this.closeModPicker} pickMod={this.pickMod} viewWidth={this.props.viewWidth} drop={this.drop} />
                        <div className="mod-stack">
                            <div className="interactable-wrapper">
                                {this.props.online &&
                                    <BuildList match={this.props.match} type={this.props.type} riven={this.props.riven} orokin={this.props.orokin} />
                                }
                                <LinkGenerator type={this.props.type} getBuildStr={this.convertBuildToString} match={this.props.match} />
                                {this.props.online && this.props.user &&
                                    <BuildSaver orokin={orokin} formaCount={formaCount} user={this.props.user} type={this.props.type} getBuildStr={this.convertBuildToString} metaInfo={this.props.metaInfo} slottedAmount={chosenIndexs.length} />
                                }
                                {this.props.online && this.props.match.params.build && !this.props.metaInfo.Owner &&
                                    <Report user={this.props.user} match={this.props.match} />
                                }
                                {this.props.online && this.props.user && this.props.match.params.build && !this.props.metaInfo.Owner &&
                                    <Like user={this.props.user} match={this.props.match} metaInfo={this.props.metaInfo} />
                                }
                                {this.props.metaInfo.BuildDesc && this.props.metaInfo.BuildDesc.length > 0 &&
                                    <BuildDescription metaInfo={this.props.metaInfo} />
                                }
                            </div>
                            <div className="special-modding">
                                <div className="aug-container">
                                    <div className="aug-wrapper">
                                        <div className="aug-info">
                                            <p className="aug-info-title">Capacity</p>
                                            {orokin
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
                                        <div className={"interactable interactable-aug " + (orokin ? "interactable-active" : "interactable-inactive")} onClick={this.toggleOrokin}>
                                            {orokin
                                                ? <img className="aug-image orokin" src={this.props.orokin} alt={'Remove Catalyst'} />
                                                : <img className="aug-image orokin" src={require('../../assets/general/nocatalyst.png')} alt={'Apply Catalyst'} />}
                                        </div>
                                        <div className={"interactable interactable-aug " + (forma ? "interactable-active" : "interactable-inactive")} onClick={this.toggleForma}>
                                            {forma
                                                ? <img className="aug-image forma" src={require('../../assets/general/forma.png')} alt={'Cancel Forma Application'} />
                                                : <img className="aug-image forma" src={require('../../assets/general/noforma.png')} alt={'Apply Forma'} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slots-wrapper">
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
                                    <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 8) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 8) }} >
                                        <ModStateHandler mod={chosenMods[8]} slot={8} slotPolarity={slotPolarities[8]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                        <div className={"error-blinker " + ((errorBlinker === 8) ? 'error-flash' : '')}></div>
                                    </div>
                                    <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 9) }} onDragOver={(e) => { e.preventDefault() }} onDrop={(e) => { this.drop(e, 9) }} >
                                        <ModStateHandler mod={chosenMods[9]} slot={9} slotPolarity={slotPolarities[9]} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeMod} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                        <div className={"error-blinker " + ((errorBlinker === 9) ? 'error-flash' : '')}></div>
                                    </div>
                                </div>
                            </div>
                            <ModdingAd />
                            {this.displayMessage()}
                        </div>
                        {this.props.type === 'sentinels' &&
                            <SentinelStats frame={this.props.item} mods={this.state.chosenMods} viewWidth={this.props.viewWidth} />
                        }
                        {this.props.type === 'beasts' &&
                            <BeastStats frame={this.props.item} mods={this.state.chosenMods} viewWidth={this.props.viewWidth} />
                        }
                        {this.props.type === 'moas' &&
                            <MoaStats frame={this.props.item} mods={this.state.chosenMods} viewWidth={this.props.viewWidth} />
                        }
                        <PolarityPicker polarityPicker={polarityPicker} polarizeSlot={this.polarizeSlot} hidePolarityPicker={this.hidePolarityPicker} />
                    </animated.div>
                )}
            </Spring>
        )
    }
}

export default TenSlotModding;
