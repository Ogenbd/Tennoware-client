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
import MeleeRivenEditor from '../riveneditor/MeleeRivenEditor';
import ModStateHandler from '../modstatehandler/ModStateHandler';
import PolarityPicker from '../polaritypicker/PolarityPicker';
import ModPicker from '../modpicker/ModPicker';
import MeleeStats from '../stats/MeleeStats';
import ArcaneStateHandler from '../arcanestatehandler/ArcaneStateHandler';
import ArcanePicker from '../arcanepicker/ArcanePicker';
import Rating from '../rating/Rating';

class MeleeModding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orokin: true,
            forma: false,
            autoForma: false,
            forceNeutStance: false,
            forceOriginalStance: false,
            forceCurrStance: false,
            formaCount: 0,
            stancePolarity: this.props.item.stance,
            slotPolarities: this.props.slotPolarities,
            forSlot: null,
            chosenStanceMod: {},
            chosenMods: [{}, {}, {}, {}, {}, {}, {}, {}],
            chosenIndexs: [],
            totalModsCost: 0,
            polarityPicker: false,
            modPicker: false,
            errorBlinker: null,
            forSwap: null,
            rivenMod: {
                polarity: 'madurai',
                effects: [],
                effectOne: 'None',
                numOne: '',
                effectTwo: 'None',
                numTwo: '',
                effectThree: 'None',
                numThree: '',
                effectFour: 'None',
                numFour: '',
                desc: ''
            },
            arcanePicker: false,
            arcaneSlot: null,
            arcanes: [{}],
            readyToShow: false
        }
    }

    componentDidMount() {
        document.body.classList.remove('noscroll');
        if (this.props.match.params.pre) {
            let build = this.props.match.params.pre;
            let orokin = build[0] === '0' ? false : true;
            let prePolarities = this.createPrePolarities(build.slice(1, 10).split(''));
            let preMods = this.createPreMods(build.slice(10, 46));
            let preArcanes = this.props.type === 'zaws' ? build[46] === 'x' ? this.createPreArcanes(build.slice(80, 84)) : this.createPreArcanes(build.slice(47, 51)) : [{}];
            let totalModsCost = this.calcCost(preMods.chosenMods, prePolarities.stack, preMods.stanceMod, prePolarities.stance);
            let formaCount = this.countForma(prePolarities.stack, prePolarities.stance);
            let modSets = this.checkModSets(preMods.stanceMod, preMods.chosenMods);
            this.setState({
                orokin: orokin,
                stancePolarity: prePolarities.stance,
                slotPolarities: prePolarities.stack,
                chosenIndexs: preMods.chosenIndexs,
                chosenStanceMod: modSets.stanceMod,
                chosenMods: modSets.chosenMods,
                totalModsCost: totalModsCost,
                formaCount: formaCount,
                arcanes: preArcanes
            });
        } else if (this.props.item.exalted && this.props.item.name !== 'DIWATA') {
            let exaltedStance = this.props.mods[this.props.mods.findIndex(mod => {
                return mod.name.toLowerCase() === this.props.item.type[0].toLowerCase()
            })];
            let chosenIndexs = [exaltedStance.index];
            this.setState({
                chosenStanceMod: exaltedStance,
                chosenIndexs: chosenIndexs
            });
        }
    }

    createPreArcanes = (arcanesStr) => {
        let arcanes = [];
        let arcanesArr = arcanesStr.match(/.{1,4}/g);
        if (!arcanesArr) return [{}];
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
        let stanceMod;
        let chosenMods = [];
        let modsArr = modsStr.match(/.{1,4}/g);
        modsArr.forEach((modAbrev, index) => {
            if (index === 0) {
                if (modAbrev === '0000') {
                    stanceMod = {};
                } else {
                    stanceMod = this.preSlotMod(chosenIndexs, modAbrev, true);
                }
            } else {
                if (modAbrev === '0000') {
                    chosenMods.push({});
                } else {
                    chosenMods.push(this.preSlotMod(chosenIndexs, modAbrev));
                }
            }
        });
        return { chosenMods: chosenMods, chosenIndexs: chosenIndexs, stanceMod: stanceMod };
    }

    preSlotMod = (chosenIndexs, modAbrev, stance) => {
        let foundMod = this.props.mods.find(mod => {
            return mod.abrev === `${modAbrev[0]}${modAbrev[1]}`
        });
        let rank = parseInt(`${modAbrev[2]}${modAbrev[3]}`, 10);
        if ((foundMod.stance && !stance) || (!foundMod.stance && stance)) {
            return {};
        }
        if (foundMod === undefined || typeof rank !== 'number' || rank < 0 || rank > foundMod.maxRank) {
            return {};
        } else {
            foundMod.currRank = rank;
            chosenIndexs.push(foundMod.index);
            return foundMod;
        }
    }

    createPrePolarities = (polarityArr) => {
        let slotPolarities = { stance: undefined, stack: [] };
        polarityArr.forEach((number, index) => {
            let polarity = this.transPolarity(number);
            if (index === 0) {
                slotPolarities.stance = polarity;
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
        let riven = false;
        this.state.orokin ? buildStr += '1' : buildStr += '0';
        buildStr += this.convertPolarityToNum(this.state.stancePolarity);
        for (let i = 0; i < 8; i++) {
            let polNum = this.convertPolarityToNum(this.state.slotPolarities[i]);
            buildStr += polNum;
        }
        this.state.chosenStanceMod.name ? buildStr += this.convertModSlotToString(this.state.chosenStanceMod) : buildStr += '0000';
        this.state.chosenMods.forEach(mod => {
            if (mod.name) {
                if (mod.abrev === 'ri') riven = true;
                buildStr += this.convertModSlotToString(mod);
            } else {
                buildStr += '0000';
            }
        });
        if (riven) {
            buildStr += 'x';
            buildStr += this.convertPolarityToNum(this.state.rivenMod.polarity);
            buildStr += this.convertEffectToNum(this.state.rivenMod.effectOne, this.state.rivenMod.numOne);
            buildStr += this.convertEffectToNum(this.state.rivenMod.effectTwo, this.state.rivenMod.numTwo);
            buildStr += this.convertEffectToNum(this.state.rivenMod.effectThree, this.state.rivenMod.numThree);
            buildStr += this.convertEffectToNum(this.state.rivenMod.effectFour, this.state.rivenMod.numFour);
        } else {
            buildStr += 'v';
        }
        if (this.props.type === 'zaws' && this.state.arcanes[0].name) buildStr += this.convertModSlotToString(this.state.arcanes[0]);
        return { buildStr: buildStr, riven: riven };
    }

    convertModSlotToString = (mod) => {
        let modStr = '';
        modStr += mod.abrev
        if (mod.currRank < 10) {
            modStr += '0';
            modStr += mod.currRank;
        } else {
            modStr += mod.currRank;
        }
        return modStr;
    }

    convertEffectToNum = (effect, num) => {
        let effects = ['None', 'Attack Speed', 'Cold Damage', 'Channeling Damage', 'Channeling Efficiency', 'Combo Duration', 'Critical Chance', 'Critical Chance on Slide Attack', 'Critical Damage', 'Damage', 'Damage vs. Corpus', 'Damage vs. Grineer', 'Damage vs. Infested', 'Electricity Damage', 'Finisher Damage', 'Heat Damage', 'Impact Damage', 'Range', 'Toxin Damage', 'Puncture Damage', 'Slash Damage', 'Status Chance', 'Status Duration'];
        let effectStr = '';
        let effectIndex = effects.findIndex(rivenEffect => {
            return effect === rivenEffect;
        });
        if (effectIndex < 10) {
            effectStr += '0';
            effectStr += effectIndex;
        } else {
            effectStr += effectIndex;
        }
        if (num < 0) {
            effectStr += 'n';
        } else {
            effectStr += 'p';
        }
        let absNum = Math.abs(num);
        if (absNum < 10) {
            effectStr += '00';
            effectStr += absNum.toFixed(1);
        } else if (absNum < 100) {
            effectStr += '0';
            effectStr += absNum.toFixed(1);
        } else {
            effectStr += absNum.toFixed(1);
        }
        return effectStr;
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
            let cap;
            if (this.props.item.name === 'PARACESIS') {
                cap = this.state.orokin ? this.state.formaCount < 6 ? 60 + 4 * this.state.formaCount : 80 : this.state.formaCount < 6 ? 30 + 2 * this.state.formaCount : 40;
                cap -= this.state.totalModsCost;
            } else {
                cap = this.state.orokin ? 60 - this.state.totalModsCost : 30 - this.state.totalModsCost;
            }
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
            let stancePolarity = this.state.forceNeutStance ? undefined : this.state.forceCurrStance ? this.state.stancePolarity : this.props.item.stance;
            let totalModsCost = this.calcCost(this.state.chosenMods, arrangedOriginals, this.state.chosenStanceMod, stancePolarity);
            if (cap - totalModsCost >= 0) {
                this.setAutoForma(stancePolarity, arrangedOriginals, totalModsCost);
            } else {
                let mismatch = this.formaMismatch(stancePolarity, arrangedOriginals, cap);
                totalModsCost = this.calcCost(this.state.chosenMods, mismatch.slots, this.state.chosenStanceMod, mismatch.stance);
                if (cap - totalModsCost >= 0) {
                    this.setAutoForma(mismatch.stance, mismatch.slots, totalModsCost);
                } else {
                    let finalPolarities = this.calcAutoForma(mismatch.stance, mismatch.slots, cap);
                    totalModsCost = this.calcCost(this.state.chosenMods, finalPolarities.slots, this.state.chosenStanceMod, finalPolarities.stance);
                    this.setAutoForma(finalPolarities.stance, finalPolarities.slots, totalModsCost);
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

    formaMismatch = (stancePolarity, slotPolarities, cap) => {
        if (this.props.item.name === 'PARACESIS') {
            let formaCount = this.countForma(slotPolarities, stancePolarity);
            cap = this.state.orokin ? formaCount < 6 ? 60 + 4 * formaCount : 80 : formaCount < 6 ? 30 + 2 * formaCount : 40;
        }
        let postMismatch = {
            stance: stancePolarity,
            slots: slotPolarities
        }
        let leftoverCap;
        let withPolStance = 1000;
        let withNewSlot = 1000;
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
            if (this.state.chosenStanceMod.name && this.state.chosenStanceMod.polarity !== stancePolarity && !this.state.forceNeutStance && !this.state.forceOriginalStance && !this.state.forceCurrStance) {
                withPolStance = this.calcCost(this.state.chosenMods, slotPolarities, this.state.chosenStanceMod, this.state.chosenStanceMod.polarity);
            }
            this.state.chosenMods.forEach((mod, index) => {
                if (mod.name && mod.polarity !== 'umbra' && mod.baseCost + mod.currRank > highest.drain && !tempSlotPolarities[index]) highest = { slot: index, drain: mod.baseCost + mod.currRank }
            });
            tempSlotPolarities[mismatches[0].slot] = undefined;
            tempSlotPolarities[highest.slot] = this.state.chosenMods[highest.slot].polarity;
            withNewSlot = this.calcCost(this.state.chosenMods, tempSlotPolarities, this.state.chosenStanceMod, stancePolarity);
            if (withNewSlot <= withPolStance) {
                postMismatch.slots = tempSlotPolarities.slice(0);
                leftoverCap = cap - withNewSlot;
                mismatches.shift()
            } else {
                postMismatch.stance = this.state.chosenStanceMod.polarity;
                leftoverCap = cap - withPolStance;
            }
            if (mismatches.length > 0 && leftoverCap < 0) {
                postMismatch = this.formaMismatch(postMismatch.stance, postMismatch.slots, cap);
            }
        }
        return postMismatch;
    }

    calcAutoForma = (stancePolarity, slotPolarities, cap) => {
        if (this.props.item.name === 'PARACESIS') {
            let formaCount = this.countForma(slotPolarities, stancePolarity);
            cap = this.state.orokin ? formaCount < 6 ? 60 + 4 * formaCount : 80 : formaCount < 6 ? 30 + 2 * formaCount : 40;
        }
        let finalPolarities = {
            stance: stancePolarity,
            slots: slotPolarities
        }
        let leftoverCap;
        let withPolStance = 1000;
        let withNewSlot = 1000;
        let available = false;
        let highest = {
            slot: undefined,
            drain: 0
        }
        let tempSlotPolarities = slotPolarities.slice(0);
        if (this.state.chosenStanceMod.name && this.state.chosenStanceMod.polarity !== stancePolarity && !this.state.forceNeutStance && !this.state.forceOriginalStance && !this.state.forceCurrStance) {
            withPolStance = this.calcCost(this.state.chosenMods, slotPolarities, this.state.chosenStanceMod, this.state.chosenStanceMod.polarity);
        }
        this.state.chosenMods.forEach((mod, index) => {
            if (mod.name && mod.polarity !== 'umbra' && mod.baseCost + mod.currRank > highest.drain && !tempSlotPolarities[index]) highest = { slot: index, drain: mod.baseCost + mod.currRank }
        });
        if (highest.slot !== undefined) {
            tempSlotPolarities[highest.slot] = this.state.chosenMods[highest.slot].polarity;
            withNewSlot = this.calcCost(this.state.chosenMods, tempSlotPolarities, this.state.chosenStanceMod, stancePolarity);
        }
        if (withNewSlot <= withPolStance) {
            finalPolarities.slots = tempSlotPolarities.slice(0);
            leftoverCap = cap - withNewSlot;
        } else {
            finalPolarities.stance = this.state.chosenStanceMod.polarity;
            leftoverCap = cap - withPolStance;
        }
        if (leftoverCap < 0) {
            if (this.state.chosenStanceMod.name && this.state.chosenStanceMod.polarity !== finalPolarities.stance && !this.state.forceNeutStance && !this.state.forceOriginalStance && !this.state.forceCurrStance) {
                available = true;
            } else {
                this.state.chosenMods.forEach((mod, index) => {
                    if (mod.name && mod.polarity !== finalPolarities.slots[index] && mod.polarity !== 'umbra') {
                        available = true;
                    }
                });
            }
            if (available) {
                finalPolarities = this.calcAutoForma(finalPolarities.stance, finalPolarities.slots, cap);
            }
        }
        return finalPolarities;
    }

    setAutoForma = (stancePolarity, slotPolarities, totalModsCost) => {
        let formaCount = this.countForma(slotPolarities, stancePolarity);
        document.body.classList.remove('noscroll');
        this.setState({
            autoForma: false,
            stancePolarity: stancePolarity,
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
        })
        document.body.classList.remove('noscroll');
    }

    handleRiven = (rivenUpdate) => {
        let findRivenInChosenMods = this.state.chosenMods.findIndex(mod => {
            return mod.name === 'Riven Mod';
        });
        if (findRivenInChosenMods !== -1) {
            let chosenMods = cloneDeep(this.state.chosenMods);
            for (let key in rivenUpdate) {
                chosenMods[findRivenInChosenMods][key] = rivenUpdate[key];
            }
            let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenStanceMod, this.state.stancePolarity);
            this.setState({
                rivenEditor: false,
                chosenMods: chosenMods,
                totalModsCost: totalModsCost,
                rivenMod: rivenUpdate
            });
        } else {
            this.setState({
                rivenEditor: false,
                rivenMod: rivenUpdate
            });
        }
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
                let pickedMod = cloneDeep(mod);
                let chosenMods = cloneDeep(this.state.chosenMods);
                if (pickedMod.abrev === 'ri') {
                    for (let key in this.state.rivenMod) {
                        pickedMod[key] = this.state.rivenMod[key]
                    }
                }
                chosenIndexs.push(pickedMod.index);
                chosenMods[this.state.forSlot] = pickedMod;
                let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenStanceMod, this.state.stancePolarity);
                let modsSets = this.checkModSets(this.state.chosenStanceMod, chosenMods)
                this.setState({
                    chosenIndexs: chosenIndexs,
                    chosenStanceMod: modsSets.stanceMod,
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
        } else if (this.state.forSlot === 'stance' && mod.stance) {
            let stanceMod = mod;
            chosenIndexs.push(mod.index);
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, stanceMod, this.state.stancePolarity);
            let modsSets = this.checkModSets(stanceMod, this.state.chosenMods)
            this.setState({
                chosenIndexs: chosenIndexs,
                forSlot: null,
                forSwap: null,
                totalModsCost: totalModsCost,
                errorBlinker: null,
                chosenStanceMod: modsSets.stanceMod,
                chosenMods: modsSets.chosenMods
            });
        }
    }

    dragInMod = (modIndex, targetSlot) => {
        let mod = cloneDeep(this.props.mods[modIndex]);
        let chosenIndexs = cloneDeep(this.state.chosenIndexs);
        if (mod.stance || targetSlot === 'stance') {
            if (mod.stance && targetSlot === 'stance') {
                if (this.state.chosenStanceMod.name) {
                    chosenIndexs = chosenIndexs.filter(idx => idx !== this.state.chosenStanceMod.index);
                }
                chosenIndexs.push(mod.index)
                let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, mod, this.state.stancePolarity);
                let modsSets = this.checkModSets(mod, this.state.chosenMods)
                this.setState({
                    chosenIndexs: chosenIndexs,
                    chosenStanceMod: modsSets.stanceMod,
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
                if (mod.abrev === 'ri') {
                    for (let key in this.state.rivenMod) {
                        mod[key] = this.state.rivenMod[key]
                    }
                }
                chosenIndexs.push(mod.index)
                chosenMods[targetSlot] = mod;
                let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenStanceMod, this.state.stancePolarity);
                let modsSets = this.checkModSets(this.state.chosenStanceMod, chosenMods)
                this.setState({
                    chosenIndexs: chosenIndexs,
                    chosenStanceMod: modsSets.stanceMod,
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

    removeStance = () => {
        if (!this.props.item.exalted) {
            let chosenIndexs = cloneDeep(this.state.chosenIndexs);
            chosenIndexs = chosenIndexs.filter(idx => idx !== this.state.chosenStanceMod.index);
            let stanceMod = {}
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, stanceMod, this.state.stancePolarity);
            let modsSets = this.checkModSets(stanceMod, this.state.chosenMods)
            this.setState({
                chosenIndexs: chosenIndexs,
                chosenStanceMod: modsSets.stanceMod,
                chosenMods: modsSets.chosenMods,
                totalModsCost: totalModsCost
            });
        }
    }

    removeMod = (slot) => {
        let chosenMods = cloneDeep(this.state.chosenMods);
        let chosenIndexs = cloneDeep(this.state.chosenIndexs);
        chosenIndexs = chosenIndexs.filter(idx => idx !== chosenMods[slot].index);
        chosenMods[slot] = {};
        let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenStanceMod, this.state.stancePolarity);
        let modsSets = this.checkModSets(this.state.chosenStanceMod, chosenMods)
        this.setState({
            chosenIndexs: chosenIndexs,
            chosenStanceMod: modsSets.stanceMod,
            chosenMods: modsSets.chosenMods,
            forSlot: null,
            forSwap: null,
            totalModsCost: totalModsCost,
            errorBlinker: null
        });
    }

    checkModSets = (stanceMod, chosenMods) => {
        let sets = { hunter: 0, vigilante: 0, augur: 0, gladiator: 0, umbral: 0, mecha: 0, tek: 0, synth: 0, sacrificial: 0, strain: 0 }
        if (stanceMod.set) sets[stanceMod.set.setName]++;
        chosenMods.forEach(mod => {
            if (mod.set) {
                sets[mod.set.setName]++;
            }
        });
        let chosen = cloneDeep(chosenMods);
        let stance = cloneDeep(stanceMod);
        if (stance.set) stance.set.setCurr = sets[stance.set.setName];
        chosen.forEach(mod => {
            if (mod.set) {
                mod.set.setCurr = sets[mod.set.setName]
            }
        });
        return {
            stanceMod: stance,
            chosenMods: chosen
        }
    }

    handleRankUpdate = (slot, mod) => {
        if (typeof slot === 'number') {
            let chosenMods = cloneDeep(this.state.chosenMods);
            chosenMods[slot].currRank = mod.currRank;
            let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities, this.state.chosenStanceMod, this.state.stancePolarity);
            this.setState({
                chosenMods: chosenMods,
                totalModsCost: totalModsCost,
                errorBlinker: null
            });
        } else if (slot === 'stance') {
            let chosenMod = cloneDeep(this.state.chosenStanceMod);
            chosenMod.currRank = mod.currRank;
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, chosenMod, this.state.stancePolarity);
            this.setState({
                chosenStanceMod: chosenMod,
                totalModsCost: totalModsCost,
                errorBlinker: null
            });
        }
    }

    calcCost = (newMods, slotPolarities, stanceMod, stancePolarity) => {
        let modsCostSum = 0;
        if (stanceMod.name) {
            if (stanceMod.polarity === stancePolarity) {
                modsCostSum -= (stanceMod.baseCost + stanceMod.currRank) * 2;
            } else if (!stancePolarity) {
                modsCostSum -= (stanceMod.baseCost + stanceMod.currRank);
            } else {
                modsCostSum -= Math.round((stanceMod.baseCost + stanceMod.currRank) * 0.725);
            }
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
            let totalModsCost = this.calcCost(this.state.chosenMods, slotPolarities, this.state.chosenStanceMod, this.state.stancePolarity);
            let formaCount = this.countForma(slotPolarities, this.state.stancePolarity);
            this.setState({
                slotPolarities: slotPolarities,
                totalModsCost: totalModsCost,
                formaCount: formaCount,
                forSlot: null,
                polarityPicker: false
            });
        } else if (this.state.forSlot === 'stance') {
            let totalModsCost = this.calcCost(this.state.chosenMods, this.state.slotPolarities, this.state.chosenStanceMod, polarity);
            let formaCount = this.countForma(this.state.slotPolarities, polarity);
            this.setState({
                stancePolarity: polarity,
                totalModsCost: totalModsCost,
                formaCount: formaCount,
                forSlot: null,
                polarityPicker: false
            });
        }
        document.body.classList.remove('noscroll');
    }


    countForma = (slotPolarities, stancePolarity) => {
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
        if (stancePolarity !== this.props.item.stance) formaCount++
        if (this.props.type === 'zaws') formaCount--;
        return formaCount
    }

    dragStart = (e, slot) => {
        if (typeof slot === 'number') {
            if (this.state.chosenMods[slot].name) {
                e.dataTransfer.setData('payload', JSON.stringify({ from: 'stack', index: slot }));
            }
        } else if (slot === 'stance') {
            if (this.state.chosenStanceMod.name) {
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
        if (startSlot !== targetSlot && startSlot !== 'stance' && targetSlot !== 'stance') {
            if (typeof startSlot === 'number' && typeof targetSlot === 'number') {
                let mods = cloneDeep(this.state.chosenMods);
                let temp = this.state.chosenMods[startSlot];
                mods[startSlot] = mods[targetSlot];
                mods[targetSlot] = temp;
                let totalModsCost = this.calcCost(mods, this.state.slotPolarities, this.state.chosenStanceMod, this.state.stancePolarity);
                this.setState({
                    chosenMods: mods,
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
                    <p className="display-message">Choose a mod slot to swap with {this.state.chosenMods[this.state.forSwap].name}.</p>
                </div>
            )
        }
    }

    forceNeutStance = () => {
        if (this.state.forceNeutStance) {
            this.setState({
                forceNeutStance: false
            });
        } else {
            this.setState({
                forceNeutStance: true,
                forceCurrStance: false,
                forceOriginalStance: false
            });
        }
    }

    forceCurrStance = () => {
        if (this.state.forceCurrStance) {
            this.setState({
                forceCurrStance: false
            });
        } else {
            this.setState({
                forceCurrStance: true,
                forceNeutStance: false,
                forceOriginalStance: false
            });
        }
    }

    forceOriginalStance = () => {
        if (this.state.forceOriginalStance) {
            this.setState({
                forceOriginalStance: false
            });
        } else {
            this.setState({
                forceOriginalStance: true,
                forceNeutStance: false,
                forceCurrStance: false
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
        const { chosenStanceMod, chosenIndexs, stancePolarity, chosenMods, modPicker, orokin, forma, autoForma, totalModsCost, slotPolarities, errorBlinker, formaCount, forSlot, forSwap, polarityPicker, arcanes, arcanePicker } = this.state;
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
                    <div className="special-modding special-melee">
                        <div className="aug-container melee-aug-container">
                            <div className="aug-wrapper">
                                {!this.props.item.exalted && this.props.riven &&
                                    <div className="aug-info">
                                        <p className="aug-info-title riven-title">Disposition</p>
                                        <p className="aug-info-content">{this.props.item.disposition}/5</p>
                                    </div>
                                }
                                <div className="aug-info">
                                    <p className="aug-info-title">Capacity</p>
                                    {this.props.item.name === 'PARACESIS'
                                        ? <React.Fragment>
                                            {orokin
                                                ? <p className="aug-info-content" style={formaCount < 6 ? 60 + 4 * formaCount - totalModsCost >= 0 ? { color: '#15E610' } : { color: 'red' } : 80 - totalModsCost >= 0 ? { color: '#15E610' } : { color: 'red' }}>{formaCount < 6 ? 60 + 4 * formaCount - totalModsCost : 80 - totalModsCost}</p>
                                                : <p className="aug-info-content" style={formaCount < 6 ? 30 + 2 * formaCount - totalModsCost >= 0 ? { color: '#15E610' } : { color: 'red' } : 40 - totalModsCost >= 0 ? { color: '#15E610' } : { color: 'red' }}>{formaCount < 6 ? 30 + 2 * formaCount - totalModsCost : 40 - totalModsCost}</p>
                                            }
                                        </React.Fragment>
                                        : <React.Fragment>
                                            {orokin
                                                ? <p className="aug-info-content" style={60 - totalModsCost >= 0 ? { color: '#15E610' } : { color: 'red' }}>{60 - totalModsCost}</p>
                                                : <p className="aug-info-content" style={30 - totalModsCost >= 0 ? { color: '#15E610' } : { color: 'red' }}>{30 - totalModsCost}</p>
                                            }
                                        </React.Fragment>
                                    }
                                </div>
                                <div className="aug-info">
                                    <p className="aug-info-title">Forma</p>
                                    <p className="aug-info-content">{formaCount}</p>
                                </div>
                            </div>
                            <div className="aug-wrapper">
                                {!this.props.item.exalted && this.props.riven === 'melee' &&
                                    <MeleeRivenEditor viewWidth={this.props.viewWidth} chosenMods={chosenMods} handleRiven={this.handleRiven} buildStr={this.props.match.params.pre} transPolarity={this.transPolarity} redirectToVoid={this.props.redirectToVoid} />
                                }
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
                        {this.props.item.name !== 'DIWATA' &&
                            <div className="special-slots">
                                <div className="handler-wrapper" draggable="false" onDragStart={(e) => { this.dragStart(e, 'stance') }} onDragOver={this.dragOver} onDrop={(e) => { this.drop(e, 'stance') }} >
                                    <ModStateHandler mod={chosenStanceMod} slot={'stance'} slotPolarity={stancePolarity} item={this.props.item} forma={forma} openModPicker={this.openModPicker} removeMod={this.removeStance} handleRankUpdate={this.handleRankUpdate} showPolarityPicker={this.showPolarityPicker} forSwap={forSwap} startSwap={this.startSwap} doSwap={this.buttonSwap} viewWidth={this.props.viewWidth} />
                                    <div className={"error-blinker " + ((errorBlinker === 0) ? 'error-flash' : '')}></div>
                                </div>
                            </div>
                        }
                        {this.props.type === 'zaws'
                            ? <div className="arcane-slots-wrapper">
                                <div className="arcane-slots">
                                    <ArcaneStateHandler arcane={arcanes[0]} arcaneSlot={0} showArcanePicker={this.showArcanePicker} removeArcane={this.removeArcane} increaseRank={this.increaseArcaneRank} decreaseRank={this.decreaseArcaneRank} viewWidth={this.props.viewWidth} />
                                </div>
                            </div>
                            : <div className="special-melee-placeholder"></div>
                        }
                    </div>
                    <div className="slots-wrapper slots-wrapper-space">
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
                    <ModdingAd />
                    {this.displayMessage()}
                </div>
                <div className="modding-right">
                    <MeleeStats weapon={this.props.item} mods={chosenMods} viewWidth={this.props.viewWidth} />
                    <div className="side-panel">
                        {this.props.viewWidth > 1369 &&
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
                                <p>Force neutral Stance slot</p>
                                <Switch onChange={this.forceNeutStance} checked={this.state.forceNeutStance} />
                            </div>
                            <div className="autoforma-option">
                                <p>Force current Stance slot</p>
                                <Switch onChange={this.forceCurrStance} checked={this.state.forceCurrStance} />
                            </div>
                            <div className="autoforma-option">
                                <p>Force original Stance slot</p>
                                <Switch onChange={this.forceOriginalStance} checked={this.state.forceOriginalStance} />
                            </div>
                        </div>
                        <div className="autoforma-buttons">
                            <div className="interactable interactable-semi-inactive" onClick={this.manualForma}><p className="interactable-p">Manual</p></div>
                            <div className="interactable interactable-semi-inactive" onClick={this.autoForma}><p className="interactable-p">Auto</p></div>
                        </div>
                    </div>
                </div>
                <PolarityPicker polarityPicker={polarityPicker} polarizeSlot={this.polarizeSlot} hidePolarityPicker={this.hidePolarityPicker} />
                {this.props.type === 'zaws' &&
                    <ArcanePicker arcanes={this.props.arcanes} active={arcanePicker} hideArcanePicker={this.hideArcanePicker} pickArcane={this.pickArcane} />
                }
            </div>
        )
    }
}

export default MeleeModding;