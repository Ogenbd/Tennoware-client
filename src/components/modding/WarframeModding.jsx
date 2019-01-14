import React, { Component, lazy } from 'react';
import { CSSTransition } from "react-transition-group";
import cloneDeep from 'lodash/cloneDeep';
import './Modding.css'

const BuildDescription = lazy(() => import('../builddescription/BuildDescription'));
const Report = lazy(() => import('../report/Report'));
const Like = lazy(() => import('../like/Like'));
const BuildList = lazy(() => import('../buildlist/BuildList'));
const BuildSaver = lazy(() => import('../buildsaver/BuildSaver'));
const LinkGenerator = lazy(() => import('../linkgenerator/LinkGenerator'));
const ModStateHandler = lazy(() => import('../modstatehandler/ModStateHandler'));
const PolarityPicker = lazy(() => import('../polaritypicker/PolarityPicker'));
const ModPicker = lazy(() => import('../modpicker/ModPicker'));
const WarframeStats = lazy(() => import('../stats/WarframeStats'));

class WarframeModding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orokin: true,
            forma: false,
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
        }
    }

    componentDidMount() {
        document.body.classList.remove('noscroll');
        if (this.props.match.params.pre) {
            let build = this.props.match.params.pre;
            let orokin = build[0] === '0' ? false : true;
            let prePolarities = this.createPrePolarities(build.slice(1, 11).split(''));
            let preMods = this.createPreMods(build.slice(11, 51));
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
            });
        }
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
            // this.props.redirectToVoid();
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
            // errorBlinker: null
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
        const { chosenAuraMod, chosenIndexs, auraPolarity, chosenExilusMod, exilusPolarity, chosenMods, modPicker, orokin, forma, totalModsCost, slotPolarities, errorBlinker, formaCount, forSlot, forSwap, polarityPicker } = this.state;
        return (
            <CSSTransition classNames="fade" in={true} appear={true} timeout={200} >
                <div className="ranged-modding">
                    <ModPicker mods={this.props.mods} chosenIndexs={chosenIndexs} type={this.props.type} active={modPicker} closeModPicker={this.closeModPicker} pickMod={this.pickMod} viewWidth={this.props.viewWidth} drop={this.drop} forSlot={forSlot} />
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
                    <WarframeStats frame={this.props.frame} full={true} mods={chosenMods} chosenExilusMod={chosenExilusMod} chosenAuraMod={chosenAuraMod} viewWidth={this.props.viewWidth} />
                    <PolarityPicker polarityPicker={polarityPicker} polarizeSlot={this.polarizeSlot} hidePolarityPicker={this.hidePolarityPicker} />
                </div>
            </CSSTransition>
        )
    }
}

export default WarframeModding