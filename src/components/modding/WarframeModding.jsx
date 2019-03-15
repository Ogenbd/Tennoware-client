import React, { Component } from 'react';
import Switch from 'react-switch';
import cloneDeep from 'lodash/cloneDeep';
import './Modding.css';

import ModdingAd from '../adunits/ModdingAd';
import RightAd from '../adunits/RightAd';
import BuildDescription from '../builddescription/BuildDescription';
import Report from '../report/Report';
import Like from '../like/Like';
import BuildList from '../buildlist/BuildList';
import BuildSaver from '../buildsaver/BuildSaver';
import LinkGenerator from '../linkgenerator/LinkGenerator';
import ModStateHandler from '../modstatehandler/ModStateHandler';
import PolarityPicker from '../polaritypicker/PolarityPicker';
import ModPicker from '../modpicker/ModPicker';
import WarframeStats from '../stats/WarframeStats';
import ArcaneStateHandler from '../arcanestatehandler/ArcaneStateHandler';
import ArcanePicker from '../arcanepicker/ArcanePicker';
import Rating from '../rating/Rating';

class WarframeModding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orokin: true,
            forma: false,
            autoForma: false,
            forceNeutAura: false,
            forceNeutExilus: false,
            forceOriginalAura: false,
            forceOriginalExilus: false,
            forceCurrAura: false,
            forceCurrExilus: false,
            formaCount: 0,
            auraPolarity: this.props.frame.aura,
            exilusPolarity: this.props.frame.exilus,
            slotPolarities: this.props.slotPolarities,
            forSlot: null,
            chosenAuraMod: {},
            chosenExilusMod: {},
            chosenMods: [{}, {}, {}, {}, {}, {}, {}, {}],
            chosenIndexs: [],
            totalModsCost: 0,
            polarityPicker: false,
            modPicker: false,
            errorBlinker: null,
            forSwap: null,
            arcanePicker: false,
            arcaneSlot: null,
            arcanes: [{}, {}],
            readyToShow: false
        }
    }

    componentDidMount() {
        document.body.classList.remove('noscroll');
        if (this.props.match.params.pre) {
            let build = this.props.match.params.pre;
            let orokin = build[0] === '0' ? false : true;
            let prePolarities = this.createPrePolarities(build.slice(1, 11).split(''));
            let preMods = this.createPreMods(build.slice(11, 51));
            let preArcanes = this.createPreArcanes(build.slice(51, 59));
            let totalModsCost = this.calcCost(preMods.chosenMods, prePolarities.stack, preMods.auraMod, prePolarities.aura, preMods.exilusMod, prePolarities.exilus);
            let formaCount = this.countForma(prePolarities.stack, prePolarities.aura, prePolarities.exilus);
            let modSets = this.checkModSets(preMods.auraMod, preMods.exilusMod, preMods.chosenMods);
            this.setState({
                orokin: orokin,
                auraPolarity: prePolarities.aura,
                exilusPolarity: prePolarities.exilus,
                slotPolarities: prePolarities.stack,
                chosenIndexs: preMods.chosenIndexs,
                chosenAuraMod: modSets.auraMod,
                chosenExilusMod: modSets.exilusMod,
                chosenMods: modSets.chosenMods,
                totalModsCost: totalModsCost,
                formaCount: formaCount,
                arcanes: preArcanes
            });
        }
    }

    createPreArcanes = (arcanesStr) => {
        let arcanes = [];
        let arcanesArr = arcanesStr.match(/.{1,4}/g);
        if (!arcanesArr) return [{}, {}];
        arcanesArr.forEach(arcaneStr => {
            if (arcaneStr === '0000') {
                arcanes.push({})
            } else {
                let foundArcane = this.props.arcanes.find(arcane => {
                    return arcane.abrev === `${arcaneStr[0]}${arcaneStr[1]}`;
                });
                let rank = parseInt(`${arcaneStr[2]}${arcaneStr[3]}`, 10);
                if (foundArcane === undefined || typeof rank !== 'number' || rank < 0 || rank > 3) {
                    arcanes.push({})
                } else {
                    foundArcane.currRank = rank;
                    arcanes.push(foundArcane);
                }
            }
        });
        return arcanes;
    }

    createPreMods = (modsStr) => {
        let chosenIndexs = [];
        let auraMod;
        let exilusMod;
        let chosenMods = [];
        let modsArr = modsStr.match(/.{1,4}/g);
        modsArr.forEach((modAbrev, index) => {
            if (index === 0) {
                if (modAbrev === '0000') {
                    auraMod = {};
                } else {
                    auraMod = this.preSlotMod(chosenIndexs, modAbrev);
                }
            } else if (index === 1) {
                if (modAbrev === '0000') {
                    exilusMod = {};
                } else {
                    exilusMod = this.preSlotMod(chosenIndexs, modAbrev);
                }
            } else {
                if (modAbrev === '0000') {
                    chosenMods.push({});
                } else {
                    chosenMods.push(this.preSlotMod(chosenIndexs, modAbrev));
                }
            }
        });
        return { chosenMods: chosenMods, chosenIndexs: chosenIndexs, auraMod: auraMod, exilusMod: exilusMod };
    }

    preSlotMod = (chosenIndexs, modAbrev) => {
        let foundMod = this.props.mods.find(mod => {
            return mod.abrev === `${modAbrev[0]}${modAbrev[1]}`
        });
        let rank = parseInt(`${modAbrev[2]}${modAbrev[3]}`, 10);
        if (foundMod === undefined || typeof rank !== 'number' || rank < 0 || rank > foundMod.maxRank) {
            return {};
        } else {
            foundMod.currRank = rank;
            chosenIndexs.push(foundMod.index);
            return foundMod;
        }
    }

    createPrePolarities = (polarityArr) => {
        let slotPolarities = { aura: undefined, exilus: undefined, stack: [] };
        polarityArr.forEach((number, index) => {
            let polarity = this.transPolarity(number);
            if (index === 0) {
                slotPolarities.aura = polarity;
            } else if (index === 1) {
                slotPolarities.exilus = polarity;
            } else {
                slotPolarities.stack.push(polarity);
            }
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

    convertBuildToString = () => {
        let buildStr = '';
        this.state.orokin ? buildStr += '1' : buildStr += '0';
        buildStr += this.convertPolarityToNum(this.state.auraPolarity);
        buildStr += this.convertPolarityToNum(this.state.exilusPolarity);
        for (let i = 0; i < 8; i++) {
            let polNum = this.convertPolarityToNum(this.state.slotPolarities[i]);
            buildStr += polNum;
        }
        buildStr += this.convertModSlotToString(this.state.chosenAuraMod)
        buildStr += this.convertModSlotToString(this.state.chosenExilusMod)
        this.state.chosenMods.forEach(mod => {
            buildStr += this.convertModSlotToString(mod);
        });
        buildStr += this.convertModSlotToString(this.state.arcanes[0]);
        buildStr += this.convertModSlotToString(this.state.arcanes[1]);
        return { buildStr: buildStr, riven: false };
    }

    convertModSlotToString = (mod) => {
        if (mod.name) {
            let modStr = '';
            modStr += mod.abrev
            if (mod.currRank < 10) {
                modStr += '0';
                modStr += mod.currRank;
            } else {
                modStr += mod.currRank;
            }
            return modStr;
        } else {
            return '0000';
        }
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

    toggleOrokin = () => {
        this.setState(prevState => ({
            orokin: !prevState.orokin,
            forSwap: null,
            errorBlinker: null
        }));
    }

    toggleForma = () => {
        if (this.state.forma) {
            this.setState({
                forma: false,
                forSwap: null,
                errorBlinker: null
            });
        } else {
            let cap = this.state.orokin ? 60 - this.state.totalModsCost : 30 - this.state.totalModsCost;
            if (cap >= 0) {
                this.setState({
                    forma: true,
                    forSwap: null,
                    errorBlinker: null
                });
            } else {
                document.body.classList.add('noscroll');
                this.setState({
                    autoForma: true,
                    forSwap: null,
                    errorBlinker: null
                });
            }
        }
    }

    manualForma = () => {
        document.body.classList.remove('noscroll');
        this.setState({
            forma: true,
            autoForma: false,
        });
    }

    autoForma = () => {
        try {
            let cap = this.state.orokin ? 60 : 30;
            let arrangedOriginals = this.arrangeOriginals();
            let auraPolarity = this.state.forceNeutAura ? undefined : this.state.forceCurrAura ? this.state.auraPolarity : this.props.frame.aura;
            let exilusPolarity = this.state.forceNeutExilus ? undefined : this.state.forceCurrExilus ? this.state.exilusPolarity : this.props.frame.exilus;
            let totalModsCost = this.calcCost(this.state.chosenMods, arrangedOriginals, this.state.chosenAuraMod, auraPolarity, this.state.chosenExilusMod, exilusPolarity);
            if (cap - totalModsCost >= 0) {
                this.setAutoForma(auraPolarity, exilusPolarity, arrangedOriginals, totalModsCost);
            } else {
                let mismatch = this.formaMismatch(auraPolarity, exilusPolarity, arrangedOriginals, cap);
                totalModsCost = this.calcCost(this.state.chosenMods, mismatch.slots, this.state.chosenAuraMod, mismatch.aura, this.state.chosenExilusMod, mismatch.exilus);
                if (cap - totalModsCost >= 0) {
                    this.setAutoForma(mismatch.aura, mismatch.exilus, mismatch.slots, totalModsCost);
                } else {
                    let finalPolarities = this.calcAutoForma(mismatch.aura, mismatch.exilus, mismatch.slots, cap);
                    totalModsCost = this.calcCost(this.state.chosenMods, finalPolarities.slots, this.state.chosenAuraMod, finalPolarities.aura, this.state.chosenExilusMod, finalPolarities.exilus);
                    this.setAutoForma(finalPolarities.aura, finalPolarities.exilus, finalPolarities.slots, totalModsCost);
                }
            }
        } catch {
            this.props.redirectToVoid();
        }
    }

    arrangeOriginals = () => {
        let arrangedOriginals = [];
        this.props.slotPolarities.forEach(polarity => {
            let highest = {
                slot: undefined,
                drain: 0
            }
            this.state.chosenMods.forEach((mod, index) => {
                if (mod.name && mod.polarity === polarity && mod.baseCost + mod.currRank > highest.drain && !arrangedOriginals[index]) highest = { slot: index, drain: mod.baseCost + mod.currRank }
            });
            if (highest.slot === undefined) {
                let empty = this.state.chosenMods.findIndex((mod, index) => !mod.name && !arrangedOriginals[index]);
                if (empty !== -1) {
                    arrangedOriginals[empty] = polarity;
                } else {
                    let lowest = {
                        slot: undefined,
                        drain: 100
                    }
                    this.state.chosenMods.forEach((mod, index) => {
                        if (mod.name && mod.baseCost + mod.currRank < lowest.drain && !arrangedOriginals[index]) lowest = { slot: index, drain: mod.baseCost + mod.currRank }
                    });
                    arrangedOriginals[lowest.slot] = polarity;
                }
            } else {
                arrangedOriginals[highest.slot] = polarity;
            }
        });
        return arrangedOriginals;
    }

    formaMismatch = (auraPolarity, exilusPolarity, slotPolarities, cap) => {
        let postMismatch = {
            aura: auraPolarity,
            exilus: exilusPolarity,
            slots: slotPolarities
        }
        let leftoverCap;
        let withPolAura = 1000;
        let withPolExilus = 1000;
        let withNewSlot = 1000;
        let bestOption;
        let highest = {
            slot: undefined,
            drain: 0
        }
        let mismatches = [];
        let tempSlotPolarities = slotPolarities.slice(0);
        this.state.chosenMods.forEach((mod, index) => {
            if (mod.name && mod.polarity !== slotPolarities[index] && slotPolarities[index] !== undefined && slotPolarities[index] !== null) {
                mismatches.push({
                    slot: index,
                    drain: mod.baseCost + mod.currRank
                });
            }
        });
        if (mismatches.length > 0) {
            mismatches.sort((a, b) => {
                return b.drain - a.drain;
            });
            if (this.state.chosenAuraMod.name && this.state.chosenAuraMod.polarity !== auraPolarity && !this.state.forceNeutAura && !this.state.forceOriginalAura && !this.state.forceCurrAura) {
                withPolAura = this.calcCost(this.state.chosenMods, slotPolarities, this.state.chosenAuraMod, this.state.chosenAuraMod.polarity, this.state.chosenExilusMod, exilusPolarity);
            }
            if (this.state.chosenExilusMod.name && this.state.chosenExilusMod.polarity !== exilusPolarity && !this.state.forceNeutExilus && !this.state.forceOriginalExilus && !this.state.forceCurrExilus) {
                withPolExilus = this.calcCost(this.state.chosenMods, slotPolarities, this.state.chosenAuraMod, auraPolarity, this.state.chosenExilusMod, this.state.chosenExilusMod.polarity);
            }
            this.state.chosenMods.forEach((mod, index) => {
                if (mod.name && mod.polarity !== 'umbra' && mod.baseCost + mod.currRank > highest.drain && !tempSlotPolarities[index]) highest = { slot: index, drain: mod.baseCost + mod.currRank }
            });
            tempSlotPolarities[mismatches[0].slot] = undefined;
            tempSlotPolarities[highest.slot] = this.state.chosenMods[highest.slot].polarity;
            withNewSlot = this.calcCost(this.state.chosenMods, tempSlotPolarities, this.state.chosenAuraMod, auraPolarity, this.state.chosenExilusMod, exilusPolarity);
            bestOption = this.getBestOption([withNewSlot, withPolAura, withPolExilus]);
            if (bestOption === 0) {
                postMismatch.slots = tempSlotPolarities.slice(0);
                leftoverCap = cap - withNewSlot;
                mismatches.shift()
            } else if (bestOption === 1) {
                postMismatch.aura = this.state.chosenAuraMod.polarity;
                leftoverCap = cap - withPolAura;
            } else if (bestOption === 2) {
                postMismatch.exilus = this.state.chosenExilusMod.polarity;
                leftoverCap = cap - withPolExilus;
            }
            if (mismatches.length > 0 && leftoverCap < 0) {
                postMismatch = this.formaMismatch(postMismatch.aura, postMismatch.exilus, postMismatch.slots, cap);
            }
        }
        return postMismatch;
    }

    calcAutoForma = (auraPolarity, exilusPolarity, slotPolarities, cap) => {
        let finalPolarities = {
            aura: auraPolarity,
            exilus: exilusPolarity,
            slots: slotPolarities
        }
        let leftoverCap;
        let withPolAura = 1000;
        let withPolExilus = 1000;
        let withNewSlot = 1000;
        let available = false;
        let bestOption;
        let highest = {
            slot: undefined,
            drain: 0
        }
        let tempSlotPolarities = slotPolarities.slice(0);
        if (this.state.chosenAuraMod.name && this.state.chosenAuraMod.polarity !== auraPolarity && !this.state.forceNeutAura && !this.state.forceOriginalAura && !this.state.forceCurrAura) {
            withPolAura = this.calcCost(this.state.chosenMods, slotPolarities, this.state.chosenAuraMod, this.state.chosenAuraMod.polarity, this.state.chosenExilusMod, exilusPolarity);
        }
        if (this.state.chosenExilusMod.name && this.state.chosenExilusMod.polarity !== exilusPolarity && !this.state.forceNeutExilus && !this.state.forceOriginalExilus && !this.state.forceCurrExilus) {
            withPolExilus = this.calcCost(this.state.chosenMods, slotPolarities, this.state.chosenAuraMod, auraPolarity, this.state.chosenExilusMod, this.state.chosenExilusMod.polarity);
        }
        this.state.chosenMods.forEach((mod, index) => {
            if (mod.name && mod.polarity !== 'umbra' && mod.baseCost + mod.currRank > highest.drain && !tempSlotPolarities[index]) {
                highest = { slot: index, drain: mod.baseCost + mod.currRank }
            }
        });
        if (highest.slot !== undefined) {
            tempSlotPolarities[highest.slot] = this.state.chosenMods[highest.slot].polarity;
            withNewSlot = this.calcCost(this.state.chosenMods, tempSlotPolarities, this.state.chosenAuraMod, auraPolarity, this.state.chosenExilusMod, exilusPolarity);
        }
        bestOption = this.getBestOption([withNewSlot, withPolAura, withPolExilus]);
        if (bestOption === 0) {
            finalPolarities.slots = tempSlotPolarities.slice(0);
            leftoverCap = cap - withNewSlot;
        } else if (bestOption === 1) {
            finalPolarities.aura = this.state.chosenAuraMod.polarity;
            leftoverCap = cap - withPolAura;
        } else if (bestOption === 2) {
            finalPolarities.exilus = this.state.chosenExilusMod.polarity;
            leftoverCap = cap - withPolExilus;
        }
        if (leftoverCap < 0) {
            if (this.state.chosenAuraMod.name && this.state.chosenAuraMod.polarity !== finalPolarities.aura && !this.state.forceNeutAura && !this.state.forceOriginalAura && !this.state.forceCurrAura) {
                available = true;
            } else if (this.state.chosenExilusMod.name && this.state.chosenExilusMod.polarity !== finalPolarities.exilus && !this.state.forceNeutExilus && !this.state.forceOriginalExilus && !this.state.forceCurrExilus) {
                available = true;
            } else {
                this.state.chosenMods.forEach((mod, index) => {
                    if (mod.name && mod.polarity !== finalPolarities.slots[index] && mod.polarity !== 'umbra') {
                        available = true;
                    }
                });
            }
            if (available) {
                finalPolarities = this.calcAutoForma(finalPolarities.aura, finalPolarities.exilus, finalPolarities.slots, cap);
            }
        }
        return finalPolarities;
    }

    getBestOption = (arr) => {
        let lowest = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[lowest]) lowest = i;
        }
        return lowest;
    }

    setAutoForma = (auraPolarity, exilusPolarity, slotPolarities, totalModsCost) => {
        let formaCount = this.countForma(slotPolarities, auraPolarity, exilusPolarity);
        document.body.classList.remove('noscroll');
        this.setState({
            autoForma: false,
            auraPolarity: auraPolarity,
            exilusPolarity: exilusPolarity,
            slotPolarities: slotPolarities,
            totalModsCost: totalModsCost,
            formaCount: formaCount
        });
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
        })
        document.body.classList.remove('noscroll');
    }

    pickMod = (mod) => {
        let chosenIndexs = cloneDeep(this.state.chosenIndexs);
        if (typeof this.state.forSlot === 'number') {
            let sameFamilySlot = -1;
            if (mod.family) {
                sameFamilySlot = this.state.chosenMods.findIndex(slottedMod => {
                    return mod.family === slottedMod.family;
                });
            }
            if (sameFamilySlot === -1) {
                let chosenMods = cloneDeep(this.state.chosenMods);
                chosenIndexs.push(mod.index);
                chosenMods[this.state.forSlot] = mod;
                let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
                let modsSets = this.checkModSets(this.state.chosenAuraMod, this.state.chosenExilusMod, chosenMods)
                this.setState({
                    chosenIndexs: chosenIndexs,
                    chosenAuraMod: modsSets.auraMod,
                    chosenExilusMod: modsSets.exilusMod,
                    chosenMods: modsSets.chosenMods,
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
            chosenIndexs.push(mod.index);
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, auraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
            let modsSets = this.checkModSets(mod, this.state.chosenExilusMod, this.state.chosenMods)
            this.setState({
                chosenIndexs: chosenIndexs,
                forSlot: null,
                forSwap: null,
                totalModsCost: totalModsCost,
                errorBlinker: null,
                chosenAuraMod: modsSets.auraMod,
                chosenExilusMod: modsSets.exilusMod,
                chosenMods: modsSets.chosenMods
            });
        } else if (this.state.forSlot === 'exilus' && mod.exilus) {
            let exilusMod = mod;
            chosenIndexs.push(mod.index);
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, exilusMod, this.state.exilusPolarity);
            let modsSets = this.checkModSets(this.state.chosenAuraMod, mod, this.state.chosenMods)
            this.setState({
                chosenIndexs: chosenIndexs,
                forSlot: null,
                forSwap: null,
                totalModsCost: totalModsCost,
                errorBlinker: null,
                chosenAuraMod: modsSets.auraMod,
                chosenExilusMod: modsSets.exilusMod,
                chosenMods: modsSets.chosenMods,
            });
        }
    }

    dragInMod = (modIndex, targetSlot) => {
        let mod = this.props.mods[modIndex];
        let chosenIndexs = cloneDeep(this.state.chosenIndexs);
        if (mod.aura || targetSlot === 'aura') {
            if (mod.aura && targetSlot === 'aura') {
                if (this.state.chosenAuraMod.name) {
                    chosenIndexs = chosenIndexs.filter(idx => idx !== this.state.chosenAuraMod.index);
                }
                chosenIndexs.push(mod.index)
                let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, mod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
                let modsSets = this.checkModSets(mod, this.state.chosenExilusMod, this.state.chosenMods)
                this.setState({
                    chosenIndexs: chosenIndexs,
                    chosenAuraMod: modsSets.auraMod,
                    chosenExilusMod: modsSets.exilusMod,
                    chosenMods: modsSets.chosenMods,
                    totalModsCost: totalModsCost
                });
            }
        } else if (targetSlot === 'exilus') {
            if (mod.exilus) {
                if (this.state.chosenExilusMod.name) {
                    chosenIndexs = chosenIndexs.filter(idx => idx !== this.state.chosenExilusMod.index);
                }
                chosenIndexs.push(mod.index)
                let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, mod, this.state.exilusPolarity);
                let modsSets = this.checkModSets(this.state.chosenAuraMod, mod, this.state.chosenMods)
                this.setState({
                    chosenIndexs: chosenIndexs,
                    chosenAuraMod: modsSets.auraMod,
                    chosenExilusMod: modsSets.exilusMod,
                    chosenMods: modsSets.chosenMods,
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
                let chosenMods = cloneDeep(this.state.chosenMods);
                if (chosenMods[targetSlot].name) {
                    chosenIndexs = chosenIndexs.filter(idx => idx !== chosenMods[targetSlot].index);
                }
                chosenIndexs.push(mod.index)
                chosenMods[targetSlot] = mod;
                let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
                let modsSets = this.checkModSets(this.state.chosenAuraMod, this.state.chosenExilusMod, chosenMods)
                this.setState({
                    chosenIndexs: chosenIndexs,
                    chosenAuraMod: modsSets.auraMod,
                    chosenExilusMod: modsSets.exilusMod,
                    chosenMods: modsSets.chosenMods,
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
        let chosenIndexs = cloneDeep(this.state.chosenIndexs);
        chosenIndexs = chosenIndexs.filter(idx => idx !== this.state.chosenAuraMod.index);
        let auraMod = {}
        let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, auraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
        let modsSets = this.checkModSets(auraMod, this.state.chosenExilusMod, this.state.chosenMods)
        this.setState({
            chosenIndexs: chosenIndexs,
            chosenAuraMod: modsSets.auraMod,
            chosenExilusMod: modsSets.exilusMod,
            chosenMods: modsSets.chosenMods,
            totalModsCost: totalModsCost
        });
    }

    removeExilus = () => {
        let chosenIndexs = cloneDeep(this.state.chosenIndexs);
        chosenIndexs = chosenIndexs.filter(idx => idx !== this.state.chosenExilusMod.index);
        let exilusMod = {}
        let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, exilusMod, this.state.exilusPolarity);
        let modsSets = this.checkModSets(this.state.chosenAuraMod, exilusMod, this.state.chosenMods)
        this.setState({
            chosenIndexs: chosenIndexs,
            chosenAuraMod: modsSets.auraMod,
            chosenExilusMod: modsSets.exilusMod,
            chosenMods: modsSets.chosenMods,
            totalModsCost: totalModsCost
        });
    }

    removeMod = (slot) => {
        let chosenMods = cloneDeep(this.state.chosenMods);
        let chosenIndexs = cloneDeep(this.state.chosenIndexs);
        chosenIndexs = chosenIndexs.filter(idx => idx !== chosenMods[slot].index);
        chosenMods[slot] = {};
        let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenAuraMod, this.state.auraPolarity, this.state.chosenExilusMod, this.state.exilusPolarity);
        let modsSets = this.checkModSets(this.state.chosenAuraMod, this.state.chosenExilusMod, chosenMods)
        this.setState({
            chosenIndexs: chosenIndexs,
            chosenAuraMod: modsSets.auraMod,
            chosenExilusMod: modsSets.exilusMod,
            chosenMods: modsSets.chosenMods,
            forSlot: null,
            forSwap: null,
            totalModsCost: totalModsCost,
            errorBlinker: null
        });
    }

    checkModSets = (auraMod, exilusMod, chosenMods) => {
        let sets = { hunter: 0, vigilante: 0, augur: 0, gladiator: 0, umbral: 0, mecha: 0, tek: 0, synth: 0, sacrificial: 0, strain: 0 }
        if (auraMod.set) sets[auraMod.set.setName]++;
        if (exilusMod.set) sets[exilusMod.set.setName]++;
        chosenMods.forEach(mod => {
            if (mod.set) {
                sets[mod.set.setName]++;
            }
        });
        let chosen = cloneDeep(chosenMods);
        let aura = cloneDeep(auraMod);
        let exilus = cloneDeep(exilusMod)
        if (aura.set) aura.set.setCurr = sets[aura.set.setName];
        if (exilus.set) exilus.set.setCurr = sets[exilus.set.setName];
        chosen.forEach(mod => {
            if (mod.set) {
                mod.set.setCurr = sets[mod.set.setName]
            }
        });
        return {
            auraMod: aura,
            exilusMod: exilus,
            chosenMods: chosen
        }
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
                chosenExilusMod: chosenMod,
                totalModsCost: totalModsCost,
                errorBlinker: null
            });
        }
    }

    calcCost = (newMods, slotPolarities, auraMod, auraPolarity, exilusMod, exilusPolarity) => {
        let modsCostSum = 0;
        if (auraMod.name) {
            if (auraMod.polarity === auraPolarity) {
                modsCostSum -= (auraMod.baseCost + auraMod.currRank) * 2;
            } else if (!auraPolarity) {
                modsCostSum -= (auraMod.baseCost + auraMod.currRank);
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

    showArcanePicker = (slot) => {
        if (this.props.viewWidth < 1280) document.body.classList.add('noscroll');
        this.setState({
            arcanePicker: true,
            arcaneSlot: slot
        });
    }

    removeArcane = (slot) => {
        let arcanes = cloneDeep(this.state.arcanes);
        arcanes[slot] = {};
        this.setState({
            arcanes: arcanes
        });
    }

    hideArcanePicker = () => {
        document.body.classList.remove('noscroll');
        this.setState({
            arcanePicker: false,
            arcaneSlot: null
        })
    }

    pickArcane = (index) => {
        let arcanes = cloneDeep(this.state.arcanes);
        arcanes[this.state.arcaneSlot] = this.props.arcanes[index];
        this.setState({
            arcanes: arcanes,
            arcaneSlot: null,
            arcanePicker: false
        });
    }

    increaseArcaneRank = (slot) => {
        if (this.state.arcanes[slot].currRank < 3) {
            let arcanes = cloneDeep(this.state.arcanes);
            arcanes[slot].currRank++
            this.setState({
                arcanes: arcanes
            });
        }
    }

    decreaseArcaneRank = (slot) => {
        if (this.state.arcanes[slot].currRank > 0) {
            let arcanes = cloneDeep(this.state.arcanes);
            arcanes[slot].currRank--;
            this.setState({
                arcanes: arcanes
            });
        }
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

    forceNeutAura = () => {
        if (this.state.forceNeutAura) {
            this.setState({
                forceNeutAura: false
            });
        } else {
            this.setState({
                forceNeutAura: true,
                forceCurrAura: false,
                forceOriginalAura: false
            });
        }
    }

    forceCurrAura = () => {
        if (this.state.forceCurrAura) {
            this.setState({
                forceCurrAura: false
            });
        } else {
            this.setState({
                forceCurrAura: true,
                forceNeutAura: false,
                forceOriginalAura: false
            });
        }
    }

    forceOriginalAura = () => {
        if (this.state.forceOriginalAura) {
            this.setState({
                forceOriginalAura: false
            });
        } else {
            this.setState({
                forceOriginalAura: true,
                forceNeutAura: false,
                forceCurrAura: false
            });
        }
    }

    forceNeutExilus = () => {
        if (this.state.forceNeutExilus) {
            this.setState({
                forceNeutExilus: false
            });
        } else {
            this.setState({
                forceNeutExilus: true,
                forceCurrExilus: false,
                forceOriginalExilus: false
            });
        }
    }

    forceCurrExilus = () => {
        if (this.state.forceCurrExilus) {
            this.setState({
                forceCurrExilus: false
            });
        } else {
            this.setState({
                forceCurrExilus: true,
                forceNeutExilus: false,
                forceOriginalExilus: false
            });
        }
    }

    forceOriginalExilus = () => {
        if (this.state.forceOriginalExilus) {
            this.setState({
                forceOriginalExilus: false
            });
        } else {
            this.setState({
                forceOriginalExilus: true,
                forceNeutExilus: false,
                forceCurrExilus: false
            });
        }
    }

    readyToShow = () => {
        this.props.readyToShow();
        this.setState({
            readyToShow: true
        });
    }

    updateInfo = (buildName, buildDesc) => {
        let metaInfo = this.props.metaInfo;
        metaInfo.BuildName = buildName;
        metaInfo.BuildDesc = buildDesc;
        this.props.updateInfo(metaInfo);
    }

    render() {
        const { chosenAuraMod, chosenIndexs, auraPolarity, chosenExilusMod, exilusPolarity, chosenMods, modPicker, orokin, forma, autoForma, totalModsCost, slotPolarities, errorBlinker, formaCount, forSlot, forSwap, polarityPicker, arcanes, arcanePicker } = this.state;
        return (
            <div className="modding-screen" style={this.state.readyToShow ? { opacity: 1 } : { opacity: 0 }}>
                <div className="modding-left">
                    <div></div>
                    <ModPicker mods={this.props.mods} chosenIndexs={chosenIndexs} type={this.props.type} active={modPicker} closeModPicker={this.closeModPicker} pickMod={this.pickMod} viewWidth={this.props.viewWidth} drop={this.drop} forSlot={forSlot} readyToShow={this.readyToShow} />
                </div>
                <div className="mod-stack">
                    <div className="interactable-wrapper">
                        {this.props.online &&
                            <BuildList match={this.props.match} type={this.props.type} riven={this.props.riven} orokin={this.props.orokin} />
                        }
                        <LinkGenerator type={this.props.type} getBuildStr={this.convertBuildToString} match={this.props.match} />
                        {this.props.online &&
                            <BuildSaver updateInfo={this.updateInfo} orokin={orokin} formaCount={formaCount} user={this.props.user} type={this.props.type} getBuildStr={this.convertBuildToString} metaInfo={this.props.metaInfo} slottedAmount={chosenIndexs.length} />
                        }
                        {this.props.online && this.props.user && this.props.match.params.build && !this.props.metaInfo.Owner &&
                            <Report user={this.props.user} match={this.props.match} />
                        }
                        {this.props.online && this.props.user && this.props.match.params.build && !this.props.metaInfo.Owner &&
                            <Like user={this.props.user} match={this.props.match} metaInfo={this.props.metaInfo} />
                        }
                        {this.props.metaInfo.BuildDesc && this.props.metaInfo.BuildDesc.length > 0 &&
                            <BuildDescription buildName={this.props.metaInfo.BuildName} buildDesc={this.props.metaInfo.BuildDesc} />
                        }
                    </div>
                    <div className="special-modding">
                        <div className="aug-container frame-aug-container">
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
                                        ? <img className="aug-image orokin" src={this.props.orokin} alt={'Remove Reactor'} />
                                        : <img className="aug-image orokin" src={require('../../assets/general/nocatalyst.png')} alt={'Apply Reactor'} />}
                                </div>
                                <div className={"interactable interactable-aug " + (forma ? "interactable-active" : "interactable-inactive")} onClick={this.toggleForma}>
                                    {forma
                                        ? <img className="aug-image forma" src={require('../../assets/general/forma.png')} alt={'Cancel Forma Application'} />
                                        : <img className="aug-image forma" src={require('../../assets/general/noforma.png')} alt={'Apply Forma'} />}
                                </div>
                            </div>
                        </div>
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
                        <div className="arcane-slots-wrapper">
                            <div className="arcane-slots">
                                <ArcaneStateHandler arcane={arcanes[0]} arcaneSlot={0} showArcanePicker={this.showArcanePicker} removeArcane={this.removeArcane} increaseRank={this.increaseArcaneRank} decreaseRank={this.decreaseArcaneRank} viewWidth={this.props.viewWidth} />
                                <ArcaneStateHandler arcane={arcanes[1]} arcaneSlot={1} showArcanePicker={this.showArcanePicker} removeArcane={this.removeArcane} increaseRank={this.increaseArcaneRank} decreaseRank={this.decreaseArcaneRank} viewWidth={this.props.viewWidth} />
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
                        </div>
                    </div>
                    {(this.props.match.params.build && this.props.online && !this.props.metaInfo.Owner) &&
                        <div className="user-rating-set" style={{ opacity: this.props.user ? 1 : 0.3 }}>
                            <p>{this.props.user ? 'Rate this build' : 'Login to rate builds'}</p>
                            <Rating rating={this.props.metaInfo.Rating} starWidth='30px' readOnly={!this.props.user} match={this.props.match} />
                        </div>
                    }
                    {this.props.online &&
                      <ModdingAd />
                    }
                    {this.displayMessage()}
                </div>
                <div className="modding-right">
                    <WarframeStats frame={this.props.frame} full={true} mods={chosenMods} chosenExilusMod={chosenExilusMod} chosenAuraMod={chosenAuraMod} viewWidth={this.props.viewWidth} />
                    <div className="side-panel">
                        {(this.props.viewWidth > 1369 && this.props.online) &&
                            <div className="right-g">
                                <RightAd />
                            </div>
                        }
                    </div>
                </div>
                <div className={"autoforma-wrapper " + (autoForma ? 'autoforma-active' : 'autoforma-inactive')}>
                    <div className="autoforma-box">
                        <p className="autoforma-p">Manually apply Forma or let Tennoware handle it automatically?</p>
                        <div className="autoforma-options">
                            <p className="autoforma-options-p">Auto-Forma Options</p>
                            <div className="autoforma-option">
                                <p>Force neutral Aura slot</p>
                                <Switch onChange={this.forceNeutAura} checked={this.state.forceNeutAura} />
                            </div>
                            <div className="autoforma-option">
                                <p>Force current Aura slot</p>
                                <Switch onChange={this.forceCurrAura} checked={this.state.forceCurrAura} />
                            </div>
                            <div className="autoforma-option">
                                <p>Force original Aura slot</p>
                                <Switch onChange={this.forceOriginalAura} checked={this.state.forceOriginalAura} />
                            </div>
                            <div className="autoforma-option">
                                <p>Force neutral Exilus slot</p>
                                <Switch onChange={this.forceNeutExilus} checked={this.state.forceNeutExilus} />
                            </div>
                            <div className="autoforma-option">
                                <p>Force current Exilus slot</p>
                                <Switch onChange={this.forceCurrExilus} checked={this.state.forceCurrExilus} />
                            </div>
                            <div className="autoforma-option">
                                <p>Force original Exilus slot</p>
                                <Switch onChange={this.forceOriginalExilus} checked={this.state.forceOriginalExilus} />
                            </div>
                        </div>
                        <div className="autoforma-buttons">
                            <div className="interactable interactable-semi-inactive" onClick={this.manualForma}><p className="interactable-p">Manual</p></div>
                            <div className="interactable interactable-semi-inactive" onClick={this.autoForma}><p className="interactable-p">Auto</p></div>
                        </div>
                    </div>
                </div>
                <PolarityPicker polarityPicker={polarityPicker} polarizeSlot={this.polarizeSlot} hidePolarityPicker={this.hidePolarityPicker} />
                <ArcanePicker arcanes={this.props.arcanes} active={arcanePicker} hideArcanePicker={this.hideArcanePicker} pickArcane={this.pickArcane} />
            </div>
        )
    }
}

export default WarframeModding