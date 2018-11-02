import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { CSSTransition } from "react-transition-group";
import cloneDeep from 'lodash/cloneDeep';
import './Modding.css'

// import RangedWeaponStats from '../rangedweaponstats/RangedWeaponStats';
import ModStateHandler from '../modstatehandler/ModStateHandler';
import PolarityPicker from '../polaritypicker/PolarityPicker';
import RangedRivenEditor from '../rangedriveneditor/RangedRivenEditor';
import LinkGenerator from '../linkgenerator/LinkGenerator';
import BuildSaver from '../buildsaver/BuildSaver';
import BuildList from '../buildlist/BuildList';
import Like from '../like/Like';
import BuildDescription from '../builddescription/BuildDescription';
import ModPicker from '../modpicker/ModPicker';

const StatsPlaceholder = () => <React.Fragment><div className={"pull-tab closed-pull-tab"}>
    <img src={require('../../assets/arrowicong.png')} alt=">>" className={"pull-tab-arrow point-right"} />
    <p>STATS</p>
</div><div className="stats-placeholder"></div></React.Fragment>

const RangedWeaponStats = Loadable({
    loader: () => import('../stats/RangedWeaponStats'),
    loading: StatsPlaceholder,
});

const WarframeStats = Loadable({
    loader: () => import('../stats/WarframeStats'),
    loading: StatsPlaceholder,
});

export class EightSlotModding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orokin: true,
            forma: false,
            formaCount: 0,
            slotPolarities: this.props.slotPolarities,
            forSlot: null,
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
            }
        }
    }

    componentDidMount() {
        if (this.props.match.params.pre) {
            let build = this.props.match.params.pre;
            let orokin = build[0] === '0' ? false : true;
            let prePolarities = this.createPrePolarities(build.slice(1, 9).split(''));
            let preMods = this.createPreMods(build.slice(9, 41));
            let totalModsCost = this.calcCost(preMods.chosenMods, prePolarities);
            let formaCount = this.countForma(prePolarities);
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
        for (let i = 0; i < 8; i++) {
            let polNum = this.convertPolarityToNum(this.state.slotPolarities[i]);
            buildStr += polNum;
        }
        let riven = false;
        this.state.chosenMods.forEach(mod => {
            if (mod.name) {
                if (mod.abrev === 'ri') riven = true;
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
        return { buildStr: buildStr, riven: riven };
    }

    convertEffectToNum = (effect, num) => {
        let effects = ['None', 'Ammo Maximum', 'Cold Damage', 'Critical Chance', 'Critical Damage', 'Damage', 'Damage vs. Corpus', 'Damage vs. Grineer', 'Damage vs. Infested', 'Electricity Damage', 'Heat Damage', 'Fire Rate', 'Flight Speed', 'Impact Damage', 'Mag Capacity', 'Multishot', 'Toxin Damage', 'Punch Through', 'Puncture Damage', 'Reload Speed', 'Slash Damage', 'Status Chance', 'Status Duration', 'Recoil', 'Zoom']
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
            effectStr += absNum;
        } else if (absNum < 100) {
            effectStr += '0';
            effectStr += absNum;
        } else {
            effectStr += absNum;
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
                    this.props.redirectToVoid();
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
            let pickedMod = cloneDeep(mod);
            let chosenMods = cloneDeep(this.state.chosenMods);
            let chosenIndexs = cloneDeep(this.state.chosenIndexs);
            if (pickedMod.abrev === 'ri') {
                for (let key in this.state.rivenMod) {
                    pickedMod[key] = this.state.rivenMod[key]
                }
            }
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
        } else {
            this.setState({
                forSlot: null,
                errorBlinker: sameFamilySlot
            });
        }
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
            this.setState({
                rivenEditor: false,
                chosenMods: chosenMods,
                rivenMod: rivenUpdate
            });
        } else {
            this.setState({
                rivenEditor: false,
                rivenMod: rivenUpdate
            });
        }
    }

    dragInMod = (modIndex, targetSlot) => {
        let mod = cloneDeep(this.props.mods[modIndex]);
        let sameFamilySlot = -1;
        if (mod.family) {
            sameFamilySlot = this.state.chosenMods.findIndex((slottedMod, index) => {
                return mod.family === slottedMod.family && index !== targetSlot;
            });
        }
        if (sameFamilySlot === -1) {
            let chosenMods = cloneDeep(this.state.chosenMods);
            let chosenIndexs = cloneDeep(this.state.chosenIndexs);
            if (chosenMods[targetSlot].name) {
                chosenIndexs = chosenIndexs.filter(idx => idx !== chosenMods[targetSlot].index);
            }
            if (mod.abrev === 'ri') {
                for (let key in this.state.rivenMod) {
                    mod[key] = this.state.rivenMod[key]
                }
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
        } else {
            this.setState({
                forSlot: null,
                errorBlinker: sameFamilySlot
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
        let onLine = navigator.onLine;
        const { chosenMods, chosenIndexs, modPicker, orokin, forma, totalModsCost, slotPolarities, errorBlinker, formaCount, forSwap, polarityPicker } = this.state;
        return (
            <CSSTransition classNames="fade" in={true} appear={true} timeout={200}>
                <div className="ranged-modding">
                    <ModPicker mods={this.props.mods} chosenIndexs={chosenIndexs} active={modPicker} closeModPicker={this.closeModPicker} pickMod={this.pickMod} viewWidth={this.props.viewWidth} drop={this.drop} />
                    <div className="mod-stack">
                        <div className="interactable-wrapper">
                            {onLine &&
                                <BuildList itemName={this.props.match.params.id} />
                            }
                            {this.props.metaInfo.BuildDesc && this.props.metaInfo.BuildDesc.length > 0 &&
                                <BuildDescription metaInfo={this.props.metaInfo} />
                            }
                            {onLine && this.props.user &&
                                <BuildSaver orokin={orokin} formaCount={formaCount} user={this.props.user} type={this.props.type} getBuildStr={this.convertBuildToString} metaInfo={this.props.metaInfo} />
                            }
                            <LinkGenerator type={this.props.type} getBuildStr={this.convertBuildToString} match={this.props.match} />
                            {onLine && this.props.user && this.props.match.params.build && !this.props.metaInfo.Owner &&
                                <Like />
                            }
                            {/* {onLine && this.props.match.params.build && !this.props.metaInfo.UserID &&
                            <div className="interactable interactable-semi-inactive"><p className="interactable-p">Report</p></div>
                        } */}
                        </div>
                        <div className="aug-container">
                            <div className="aug-wrapper">
                                {!this.props.item.exalted && this.props.riven &&
                                    <div className="aug-info">
                                        <p className="aug-info-title riven-title">Disposition</p>
                                        <p className="aug-info-content">{this.props.item.disposition}/5</p>
                                    </div>
                                }
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
                                {!this.props.item.exalted && this.props.riven === 'ranged' &&
                                    <RangedRivenEditor viewWidth={this.props.viewWidth} chosenMods={chosenMods} handleRiven={this.handleRiven} buildStr={this.props.match.params.pre} transPolarity={this.transPolarity} />
                                }
                                {/* {!this.props.item.exalted && this.props.riven === 'melee' &&
                                    <RangedRivenEditor viewWidth={this.props.viewWidth} chosenMods={chosenMods} handleRiven={this.handleRiven} buildStr={this.props.match.params.pre} transPolarity={this.transPolarity} />
                                } */}
                                <div className={"interactable " + (orokin ? "interactable-active" : "interactable-inactive")} onClick={this.toggleOrokin}>
                                    {orokin
                                        ? <img className="aug-image orokin" src={require(`../../assets/${this.props.orokin}.png`)} alt={'Remove Catalyst'} />
                                        : <img className="aug-image orokin" src={require('../../assets/nocatalyst.png')} alt={'Apply Catalyst'} />}
                                </div>
                                <div className={"interactable " + (forma ? "interactable-active" : "interactable-inactive")} onClick={this.toggleForma}>
                                    {forma
                                        ? <img className="aug-image forma" src={require('../../assets/forma.png')} alt={'Cancel Forma Application'} />
                                        : <img className="aug-image forma" src={require('../../assets/noforma.png')} alt={'Apply Forma'} />}
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
                        {this.displayMessage()}
                    </div>
                    {(this.props.type === 'archguns' || this.props.riven === 'ranged') &&
                        <RangedWeaponStats weapon={this.props.item} mods={this.state.chosenMods} viewWidth={this.props.viewWidth} />
                    }
                    {(this.props.type === 'archwings') &&
                        <WarframeStats frame={this.props.item} mods={this.state.chosenMods} viewWidth={this.props.viewWidth} />
                    }
                    <PolarityPicker polarityPicker={polarityPicker} polarizeSlot={this.polarizeSlot} hidePolarityPicker={this.hidePolarityPicker} />
                </div>
            </CSSTransition>
        )
    }
}

export default EightSlotModding
