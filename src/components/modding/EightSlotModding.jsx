import React, { Component } from "react";
import cloneDeep from "lodash/cloneDeep";
import "./Modding.css";
import "../buildsaver/BuildSaver.css";

import ModdingAd from "../adunits/ModdingAd";
import RightAd from "../adunits/RightAd";
import BuildDescription from "../builddescription/BuildDescription";
import Report from "../report/Report";
import Like from "../like/Like";
import BuildList from "../buildlist/BuildList";
import BuildSaver from "../buildsaver/BuildSaver";
import BuildUpdater from "../buildupdater/BuildUpdater";
import LinkGenerator from "../linkgenerator/LinkGenerator";
import RangedRivenEditor from "../riveneditor/RangedRivenEditor";
import MeleeRivenEditor from "../riveneditor/MeleeRivenEditor";
import ModStateHandler from "../modstatehandler/ModStateHandler";
import PolarityPicker from "../polaritypicker/PolarityPicker";
import ModPicker from "../modpicker/ModPicker";
import RangedWeaponStats from "../stats/RangedWeaponStats";
import WarframeStats from "../stats/WarframeStats";
import MeleeStats from "../stats/MeleeStats";
import ArcaneStateHandler from "../arcanestatehandler/ArcaneStateHandler";
import ArcanePicker from "../arcanepicker/ArcanePicker";
import Rating from "../rating/Rating";

import {modSets} from "../../utils";

class EightSlotModding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orokin: true,
      forma: false,
      autoForma: false,
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
        polarity: "madurai",
        effects: [],
        effectOne: "None",
        numOne: "",
        effectTwo: "None",
        numTwo: "",
        effectThree: "None",
        numThree: "",
        effectFour: "None",
        numFour: "",
        desc: ""
      },
      arcanePicker: false,
      arcaneSlot: null,
      arcanes: [{}],
      readyToShow: false
    };
  }

  componentDidMount() {
    document.body.classList.remove("noscroll");
    if (this.props.match.params.pre) {
      this.decryptPre();
    }
  }

  decryptPre = () => {
    let build = this.props.match.params.pre;
    let orokin = build[0] === "0" ? false : true;
    let prePolarities = this.createPrePolarities(build.slice(1, 9).split(""));
    let preMods = this.createPreMods(build.slice(9, 41));
    let preArcanes =
      this.props.type === "kitguns"
        ? build[41] === "x"
          ? this.createPreArcanes(build.slice(75, 79))
          : this.createPreArcanes(build.slice(42, 46))
        : [{}];
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
      arcanes: preArcanes
    });
  };

  createPreArcanes = arcanesStr => {
    let arcanes = [];
    let arcanesArr = arcanesStr.match(/.{1,4}/g);
    if (!arcanesArr) return [{}];
    arcanesArr.forEach(arcaneStr => {
      if (arcaneStr === "0000") {
        arcanes.push({});
      } else {
        let foundArcane = this.props.arcanes.find(arcane => {
          return arcane.abrev === `${arcaneStr[0]}${arcaneStr[1]}`;
        });
        let rank = parseInt(`${arcaneStr[2]}${arcaneStr[3]}`, 10);
        if (
          foundArcane === undefined ||
          typeof rank !== "number" ||
          rank < 0 ||
          rank > 3
        ) {
          arcanes.push({});
        } else {
          foundArcane.currRank = rank;
          arcanes.push(foundArcane);
        }
      }
    });
    return arcanes;
  };

  convertBuildToString = (
    orokin,
    slotPolarities,
    chosenMods,
    rivenMod,
    arcanes
  ) => {
    let buildStr = "";
    let riven = false;
    orokin ? (buildStr += "1") : (buildStr += "0");
    for (let i = 0; i < 8; i++) {
      let polNum = this.convertPolarityToNum(slotPolarities[i]);
      buildStr += polNum;
    }
    chosenMods.forEach(mod => {
      if (mod.name) {
        if (mod.abrev === "ri") riven = true;
        buildStr += this.convertModSlotToString(mod);
      } else {
        buildStr += "0000";
      }
    });
    if (riven) {
      buildStr += "x";
      buildStr += this.convertPolarityToNum(rivenMod.polarity);
      buildStr += this.convertEffectToNum(rivenMod.effectOne, rivenMod.numOne);
      buildStr += this.convertEffectToNum(rivenMod.effectTwo, rivenMod.numTwo);
      buildStr += this.convertEffectToNum(
        rivenMod.effectThree,
        rivenMod.numThree
      );
      buildStr += this.convertEffectToNum(
        rivenMod.effectFour,
        rivenMod.numFour
      );
    } else {
      buildStr += "v";
    }
    if (this.props.type === "kitguns" && arcanes[0].name)
      buildStr += this.convertModSlotToString(arcanes[0]);
    return { buildStr: buildStr, riven: riven };
  };

  convertModSlotToString = mod => {
    let modStr = "";
    modStr += mod.abrev;
    if (mod.currRank < 10) {
      modStr += "0";
      modStr += mod.currRank;
    } else {
      modStr += mod.currRank;
    }
    return modStr;
  };

  convertEffectToNum = (effect, num) => {
    let effects = [
      "None",
      "Ammo Maximum",
      "Cold Damage",
      "Critical Chance",
      "Critical Damage",
      "Damage",
      "Damage vs. Corpus",
      "Damage vs. Grineer",
      "Damage vs. Infested",
      "Electricity Damage",
      "Heat Damage",
      "Fire Rate",
      "Flight Speed",
      "Impact Damage",
      "Mag Capacity",
      "Multishot",
      "Toxin Damage",
      "Punch Through",
      "Puncture Damage",
      "Reload Speed",
      "Slash Damage",
      "Status Chance",
      "Status Duration",
      "Recoil",
      "Zoom"
    ];
    let effectStr = "";
    let effectIndex = effects.findIndex(rivenEffect => {
      return effect === rivenEffect;
    });
    if (effectIndex < 10) {
      effectStr += "0";
      effectStr += effectIndex;
    } else {
      effectStr += effectIndex;
    }
    if (num < 0) {
      effectStr += "n";
    } else {
      effectStr += "p";
    }
    let absNum = Math.abs(num);
    if (absNum < 10) {
      effectStr += "00";
      effectStr += absNum.toFixed(1);
    } else if (absNum < 100) {
      effectStr += "0";
      effectStr += absNum.toFixed(1);
    } else {
      effectStr += absNum.toFixed(1);
    }
    return effectStr;
  };

  convertPolarityToNum = polarity => {
    switch (polarity) {
      case "madurai":
        return "1";
      case "naramon":
        return "2";
      case "vazarin":
        return "3";
      case "zenurik":
        return "4";
      case "unairu":
        return "5";
      case "penjaga":
        return "6";
      case "umbra":
        return "7";
      case undefined:
        return "0";
      default:
        return "0";
    }
  };

  createPreMods = modsStr => {
    let chosenMods = [];
    let chosenIndexs = [];
    let modsArr = modsStr.match(/.{1,4}/g);
    modsArr.forEach(modAbrev => {
      if (modAbrev === "0000") {
        chosenMods.push({});
      } else {
        let foundMod = this.props.mods.find(mod => {
          return mod.abrev === `${modAbrev[0]}${modAbrev[1]}`;
        });
        let rank = parseInt(`${modAbrev[2]}${modAbrev[3]}`, 10);
        if (
          foundMod === undefined ||
          typeof rank !== "number" ||
          rank < 0 ||
          rank > foundMod.maxRank
        ) {
          chosenMods.push({});
        } else {
          foundMod.currRank = rank;
          chosenMods.push(foundMod);
          chosenIndexs.push(foundMod.index);
        }
      }
    });
    return { chosenMods: chosenMods, chosenIndexs: chosenIndexs };
  };

  createPrePolarities = polarityArr => {
    let slotPolarities = [];
    polarityArr.forEach(number => {
      let polarity = this.transPolarity(number);
      slotPolarities.push(polarity);
    });
    return slotPolarities;
  };

  transPolarity = number => {
    switch (number) {
      case "0":
        return undefined;
      case "1":
        return "madurai";
      case "2":
        return "naramon";
      case "3":
        return "vazarin";
      case "4":
        return "zenurik";
      case "5":
        return "unairu";
      case "6":
        return "penjaga";
      case "7":
        return "umbra";
      default:
        this.props.redirectToVoid();
        break;
    }
  };

  toggleOrokin = () => {
    this.setState(prevState => ({
      orokin: !prevState.orokin,
      forSwap: null,
      errorBlinker: null
    }));
  };

  toggleForma = () => {
    if (this.state.forma) {
      this.setState({
        forma: false,
        forSwap: null,
        errorBlinker: null
      });
    } else {
      let cap = this.state.orokin
        ? 60 - this.state.totalModsCost
        : 30 - this.state.totalModsCost;
      if (cap >= 0) {
        this.setState({
          forma: true,
          forSwap: null,
          errorBlinker: null
        });
      } else {
        document.body.classList.add("noscroll");
        this.setState({
          autoForma: true,
          forSwap: null,
          errorBlinker: null
        });
      }
    }
  };

  resetBuild = () => {
    if (this.props.match.params.pre) {
      this.decryptPre();
    } else {
      this.setState({
        orokin: true,
        forma: false,
        autoForma: false,
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
        arcanePicker: false,
        arcaneSlot: null,
        arcanes: [{}]
      });
    }
  };

  manualForma = () => {
    document.body.classList.remove("noscroll");
    this.setState({
      forma: true,
      autoForma: false
    });
  };

  autoForma = () => {
    try {
      let cap = this.state.orokin ? 60 : 30;
      let arrangedOriginals = this.arrangeOriginals();
      let totalModsCost = this.calcCost(
        this.state.chosenMods,
        arrangedOriginals
      );
      if (cap - totalModsCost >= 0) {
        this.setAutoForma(arrangedOriginals, totalModsCost);
      } else {
        let mismatch = this.formaMismatch(arrangedOriginals, cap);
        totalModsCost = this.calcCost(this.state.chosenMods, mismatch);
        if (cap - totalModsCost >= 0) {
          this.setAutoForma(mismatch, totalModsCost);
        } else {
          let finalPolarities = this.calcAutoForma(mismatch, cap);
          totalModsCost = this.calcCost(this.state.chosenMods, finalPolarities);
          this.setAutoForma(finalPolarities, totalModsCost);
        }
      }
    } catch {
      this.props.redirectToVoid();
    }
  };

  arrangeOriginals = () => {
    let arrangedOriginals = [];
    this.props.slotPolarities.forEach(polarity => {
      let highest = {
        slot: undefined,
        drain: 0
      };
      this.state.chosenMods.forEach((mod, index) => {
        if (
          mod.name &&
          mod.polarity === polarity &&
          mod.baseCost + mod.currRank > highest.drain &&
          !arrangedOriginals[index]
        )
          highest = { slot: index, drain: mod.baseCost + mod.currRank };
      });
      if (highest.slot === undefined) {
        let empty = this.state.chosenMods.findIndex(
          (mod, index) => !mod.name && !arrangedOriginals[index]
        );
        if (empty !== -1) {
          arrangedOriginals[empty] = polarity;
        } else {
          let lowest = {
            slot: undefined,
            drain: 100
          };
          this.state.chosenMods.forEach((mod, index) => {
            if (
              mod.name &&
              mod.baseCost + mod.currRank < lowest.drain &&
              !arrangedOriginals[index]
            )
              lowest = { slot: index, drain: mod.baseCost + mod.currRank };
          });
          arrangedOriginals[lowest.slot] = polarity;
        }
      } else {
        arrangedOriginals[highest.slot] = polarity;
      }
    });
    return arrangedOriginals;
  };

  formaMismatch = (slotPolarities, cap) => {
    let postMismatch = slotPolarities.slice(0);
    let leftoverCap;
    let withNewSlot;
    let highest = {
      slot: undefined,
      drain: 0
    };
    let mismatches = [];
    let tempSlotPolarities = slotPolarities.slice(0);
    this.state.chosenMods.forEach((mod, index) => {
      if (
        mod.name &&
        mod.polarity !== slotPolarities[index] &&
        slotPolarities[index] !== undefined &&
        slotPolarities[index] !== null
      ) {
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
      this.state.chosenMods.forEach((mod, index) => {
        if (
          mod.name &&
          mod.polarity !== "umbra" &&
          mod.baseCost + mod.currRank > highest.drain &&
          !tempSlotPolarities[index]
        )
          highest = { slot: index, drain: mod.baseCost + mod.currRank };
      });
      tempSlotPolarities[mismatches[0].slot] = undefined;
      tempSlotPolarities[highest.slot] = this.state.chosenMods[
        highest.slot
      ].polarity;
      withNewSlot = this.calcCost(this.state.chosenMods, tempSlotPolarities);
      postMismatch = tempSlotPolarities.slice(0);
      leftoverCap = cap - withNewSlot;
      mismatches.shift();
      if (mismatches.length > 0 && leftoverCap < 0) {
        postMismatch = this.formaMismatch(postMismatch, cap);
      }
    }
    return postMismatch;
  };

  calcAutoForma = (slotPolarities, cap) => {
    let finalPolarities = slotPolarities.slice(0);
    let leftoverCap;
    let withNewSlot;
    let available = false;
    let highest = {
      slot: undefined,
      drain: 0
    };
    let tempSlotPolarities = slotPolarities.slice(0);
    this.state.chosenMods.forEach((mod, index) => {
      if (
        mod.name &&
        mod.polarity !== "umbra" &&
        mod.baseCost + mod.currRank > highest.drain &&
        !tempSlotPolarities[index]
      )
        highest = { slot: index, drain: mod.baseCost + mod.currRank };
    });
    tempSlotPolarities[highest.slot] = this.state.chosenMods[
      highest.slot
    ].polarity;
    withNewSlot = this.calcCost(this.state.chosenMods, tempSlotPolarities);
    finalPolarities = tempSlotPolarities.slice(0);
    leftoverCap = cap - withNewSlot;
    if (leftoverCap < 0) {
      this.state.chosenMods.forEach((mod, index) => {
        if (
          mod.name &&
          mod.polarity !== finalPolarities[index] &&
          mod.polarity !== "umbra"
        ) {
          available = true;
        }
      });
      if (available) {
        finalPolarities = this.calcAutoForma(finalPolarities, cap);
      }
    }
    return finalPolarities;
  };

  setAutoForma = (slotPolarities, totalModsCost) => {
    let formaCount = this.countForma(slotPolarities);
    document.body.classList.remove("noscroll");
    this.setState({
      autoForma: false,
      slotPolarities: slotPolarities,
      totalModsCost: totalModsCost,
      formaCount: formaCount
    });
  };

  openModPicker = slot => {
    document.body.classList.add("noscroll");
    this.setState({
      forSlot: slot,
      modPicker: true,
      errorBlinker: null
    });
  };

  closeModPicker = () => {
    this.setState({
      modPicker: false
    });
    document.body.classList.remove("noscroll");
  };

  handleRiven = rivenUpdate => {
    let findRivenInChosenMods = this.state.chosenMods.findIndex(mod => {
      return mod.name === "Riven Mod";
    });
    if (findRivenInChosenMods !== -1) {
      let chosenMods = cloneDeep(this.state.chosenMods);
      for (let key in rivenUpdate) {
        chosenMods[findRivenInChosenMods][key] = rivenUpdate[key];
      }
      let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
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
  };

  pickMod = mod => {
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
      if (pickedMod.abrev === "ri") {
        for (let key in this.state.rivenMod) {
          pickedMod[key] = this.state.rivenMod[key];
        }
      }
      chosenIndexs.push(pickedMod.index);
      chosenMods[this.state.forSlot] = pickedMod;
      let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
      let chosenModsSets = this.checkModSets(chosenMods);
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
  };

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
        chosenIndexs = chosenIndexs.filter(
          idx => idx !== chosenMods[targetSlot].index
        );
      }
      if (mod.abrev === "ri") {
        for (let key in this.state.rivenMod) {
          mod[key] = this.state.rivenMod[key];
        }
      }
      chosenIndexs.push(mod.index);
      chosenMods[targetSlot] = mod;
      let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
      let chosenModsSets = this.checkModSets(chosenMods);
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
  };

  removeMod = slot => {
    let chosenMods = cloneDeep(this.state.chosenMods);
    let chosenIndexs = cloneDeep(this.state.chosenIndexs);
    chosenIndexs = chosenIndexs.filter(idx => idx !== chosenMods[slot].index);
    chosenMods[slot] = {};
    let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
    let chosenModsSets = this.checkModSets(chosenMods);
    this.setState({
      chosenIndexs: chosenIndexs,
      chosenMods: chosenModsSets,
      forSlot: null,
      forSwap: null,
      totalModsCost: totalModsCost,
      errorBlinker: null
    });
  };

  checkModSets = newMods => {
    const sets = JSON.parse(JSON.stringify(modSets));
    newMods.forEach(mod => {
      if (mod.set) {
        sets[mod.set.setName]++;
      }
    });
    newMods.forEach(mod => {
      if (mod.set) {
        mod.set.setCurr = sets[mod.set.setName];
      }
    });
    return newMods;
  };

  handleRankUpdate = (slot, mod) => {
    let chosenMods = cloneDeep(this.state.chosenMods);
    chosenMods[slot].currRank = mod.currRank;
    let totalModsCost = this.calcCost(chosenMods, this.state.slotPolarities);
    this.setState({
      chosenMods: chosenMods,
      totalModsCost: totalModsCost,
      errorBlinker: null
    });
  };

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
  };

  showPolarityPicker = slot => {
    this.setState({
      forSlot: slot,
      polarityPicker: true
    });
  };

  hidePolarityPicker = () => {
    this.setState({
      forSlot: null,
      polarityPicker: false
    });
    document.body.classList.remove("noscroll");
  };

  polarizeSlot = polarity => {
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
    document.body.classList.remove("noscroll");
  };

  countForma = slotPolarities => {
    let formaCount = 0;
    let currPolarityCount = {
      madurai: 0,
      naramon: 0,
      vazarin: 0,
      zenurik: 0,
      unairu: 0,
      penjaga: 0,
      umbra: 0
    };
    slotPolarities.forEach(slot => {
      if (slot) {
        currPolarityCount[slot]++;
      }
    });
    let missing = 0;
    let extra = 0;
    for (let polarity in currPolarityCount) {
      if (
        currPolarityCount[polarity] > this.props.originalPolarityCount[polarity]
      ) {
        extra +=
          currPolarityCount[polarity] -
          this.props.originalPolarityCount[polarity];
      } else if (
        currPolarityCount[polarity] < this.props.originalPolarityCount[polarity]
      ) {
        missing +=
          this.props.originalPolarityCount[polarity] -
          currPolarityCount[polarity];
      }
    }
    if (extra > missing) {
      formaCount = extra;
    } else {
      formaCount = missing;
    }
    if (this.props.type === "kitguns" || this.props.type === "archguns-land")
      formaCount--;
    return formaCount;
  };

  dragStart = (e, slot) => {
    if (this.state.chosenMods[slot].name) {
      e.dataTransfer.setData(
        "payload",
        JSON.stringify({ from: "stack", index: slot })
      );
    }
  };

  drop = (e, targetSlot) => {
    let payload = JSON.parse(e.dataTransfer.getData("payload"));
    if (payload.from === "stack") {
      this.swapMods(payload.index, targetSlot);
    } else if (payload.from === "picker") {
      this.dragInMod(payload.index, targetSlot);
    }
  };

  dragOver = e => {
    e.preventDefault();
  };

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
        forSwap: null
      });
    }
  };

  startSwap = slot => {
    this.setState({
      forSwap: slot
    });
  };

  buttonSwap = slot => {
    this.swapMods(this.state.forSwap, slot);
  };

  showArcanePicker = slot => {
    if (this.props.viewWidth < 1280) document.body.classList.add("noscroll");
    this.setState({
      arcanePicker: true,
      arcaneSlot: slot
    });
  };

  removeArcane = slot => {
    let arcanes = cloneDeep(this.state.arcanes);
    arcanes[slot] = {};
    this.setState({
      arcanes: arcanes
    });
  };

  hideArcanePicker = () => {
    document.body.classList.remove("noscroll");
    this.setState({
      arcanePicker: false,
      arcaneSlot: null
    });
  };

  pickArcane = index => {
    let arcanes = cloneDeep(this.state.arcanes);
    arcanes[this.state.arcaneSlot] = this.props.arcanes[index];
    this.setState({
      arcanes: arcanes,
      arcaneSlot: null,
      arcanePicker: false
    });
  };

  increaseArcaneRank = slot => {
    if (this.state.arcanes[slot].currRank < 3) {
      let arcanes = cloneDeep(this.state.arcanes);
      arcanes[slot].currRank++;
      this.setState({
        arcanes: arcanes
      });
    }
  };

  decreaseArcaneRank = slot => {
    if (this.state.arcanes[slot].currRank > 0) {
      let arcanes = cloneDeep(this.state.arcanes);
      arcanes[slot].currRank--;
      this.setState({
        arcanes: arcanes
      });
    }
  };

  displayMessage = () => {
    if (this.state.errorBlinker !== null) {
      return (
        <div className="message-wrapper show-error-message">
          <p className="display-message">
            This mod cannot be use with{" "}
            {this.state.chosenMods[this.state.errorBlinker].name}.
          </p>
        </div>
      );
    } else if (this.state.forSwap !== null) {
      return (
        <div className="message-wrapper always-on">
          <p className="display-message">
            Choose a mod slot to swap with{" "}
            {this.state.chosenMods[this.state.forSwap].name}.
          </p>
        </div>
      );
    }
  };

  readyToShow = () => {
    this.props.readyToShow();
    this.setState({
      readyToShow: true
    });
  };

  updateInfo = (buildName, buildDesc, buildPrivate) => {
    let metaInfo = this.props.metaInfo;
    metaInfo.BuildName = buildName;
    metaInfo.BuildDesc = buildDesc;
    metaInfo.Private = buildPrivate;
    this.props.updateInfo(metaInfo);
  };

  hasChanged = currStr => {
    if (this.props.match.params.pre) {
      return this.props.match.params.pre === currStr ? false : true;
    } else {
      let untouched = this.convertBuildToString(
        true,
        this.props.slotPolarities,
        [{}, {}, {}, {}, {}, {}, {}, {}],
        {},
        [{}]
      );
      return untouched.buildStr === currStr ? false : true;
    }
  };

  render() {
    const {
      chosenMods,
      chosenIndexs,
      modPicker,
      orokin,
      forma,
      autoForma,
      totalModsCost,
      slotPolarities,
      errorBlinker,
      formaCount,
      forSwap,
      polarityPicker,
      arcanes,
      arcanePicker
    } = this.state;
    const build = this.convertBuildToString(
      orokin,
      slotPolarities,
      chosenMods,
      this.state.rivenMod,
      arcanes
    );
    const hasChanged = this.hasChanged(build.buildStr);
    return (
      <div
        className="modding-screen"
        style={this.state.readyToShow ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="modding-left">
          <div />
          <ModPicker
            mods={this.props.mods}
            chosenIndexs={chosenIndexs}
            type={this.props.type}
            active={modPicker}
            closeModPicker={this.closeModPicker}
            pickMod={this.pickMod}
            viewWidth={this.props.viewWidth}
            drop={this.drop}
            readyToShow={this.readyToShow}
          />
        </div>
        <div className="mod-stack">
          {this.props.match.params.build && (
            <div className="modding-build-title">
              {this.props.metaInfo.BuildName}
            </div>
          )}
          <div className="interactable-wrapper">
            {this.props.online && (
              <BuildList
                match={this.props.match}
                type={this.props.type}
                riven={this.props.riven}
                orokin={this.props.orokin}
              />
            )}
            <LinkGenerator
              type={this.props.type}
              build={build}
              match={this.props.match}
            />
            {this.props.online &&
              this.props.match.params.build &&
              this.props.metaInfo.Owner && (
                <BuildUpdater
                  updateInfo={this.updateInfo}
                  orokin={orokin}
                  formaCount={formaCount}
                  user={this.props.user}
                  type={this.props.type}
                  build={build}
                  hasChanged={hasChanged}
                  metaInfo={this.props.metaInfo}
                />
              )}
            {this.props.online && (
              <BuildSaver
                orokin={orokin}
                formaCount={formaCount}
                user={this.props.user}
                type={this.props.type}
                build={build}
                hasChanged={hasChanged}
                metaInfo={this.props.metaInfo}
              />
            )}
            {this.props.online &&
              this.props.user &&
              this.props.match.params.build &&
              !this.props.metaInfo.Owner && (
                <Report user={this.props.user} match={this.props.match} />
              )}
            {this.props.online &&
              this.props.user &&
              this.props.match.params.build &&
              !this.props.metaInfo.Owner && (
                <Like
                  user={this.props.user}
                  match={this.props.match}
                  metaInfo={this.props.metaInfo}
                />
              )}
            {this.props.metaInfo.BuildDesc &&
              this.props.metaInfo.BuildDesc.length > 0 && (
                <BuildDescription
                  buildName={this.props.metaInfo.BuildName}
                  buildDesc={this.props.metaInfo.BuildDesc}
                />
              )}
            <div
              className={
                hasChanged
                  ? "interactable interactable-semi-inactive"
                  : "uninteractable interactable-inactive"
              }
              onClick={this.resetBuild}
            >
              <p className="interactable-p">Reset</p>
            </div>
          </div>
          <div className="special-modding">
            <div className="aug-container">
              <div className="aug-wrapper">
                {!this.props.item.exalted && this.props.riven && (
                  <div className="aug-info">
                    <p className="aug-info-title riven-title">Disposition</p>
                    <p className="aug-info-content">
                      {this.props.item.disposition}/5
                    </p>
                  </div>
                )}
                <div className="aug-info">
                  <p className="aug-info-title">Capacity</p>
                  {orokin ? (
                    <p
                      className="aug-info-content"
                      style={
                        60 - totalModsCost >= 0
                          ? { color: "#15E610" }
                          : { color: "red" }
                      }
                    >
                      {60 - totalModsCost}
                    </p>
                  ) : (
                    <p
                      className="aug-info-content"
                      style={
                        30 - totalModsCost >= 0
                          ? { color: "#15E610" }
                          : { color: "red" }
                      }
                    >
                      {30 - totalModsCost}
                    </p>
                  )}
                </div>
                <div className="aug-info">
                  <p className="aug-info-title">Forma</p>
                  <p className="aug-info-content">{formaCount}</p>
                </div>
              </div>
              <div className="aug-wrapper">
                {!this.props.item.exalted && this.props.riven === "ranged" && (
                  <RangedRivenEditor
                    viewWidth={this.props.viewWidth}
                    chosenMods={chosenMods}
                    handleRiven={this.handleRiven}
                    buildStr={this.props.match.params.pre}
                    transPolarity={this.transPolarity}
                    redirectToVoid={this.props.redirectToVoid}
                  />
                )}
                {!this.props.item.exalted && this.props.riven === "melee" && (
                  <MeleeRivenEditor
                    viewWidth={this.props.viewWidth}
                    chosenMods={chosenMods}
                    handleRiven={this.handleRiven}
                    buildStr={this.props.match.params.pre}
                    transPolarity={this.transPolarity}
                    redirectToVoid={this.props.redirectToVoid}
                  />
                )}
                <div
                  className={
                    "interactable interactable-aug " +
                    (orokin ? "interactable-active" : "interactable-inactive")
                  }
                  onClick={this.toggleOrokin}
                >
                  {orokin ? (
                    <img
                      className="aug-image orokin"
                      src={this.props.orokin}
                      alt={"Remove Catalyst"}
                    />
                  ) : (
                    <img
                      className="aug-image orokin"
                      src={require("../../assets/general/nocatalyst.png")}
                      alt={"Apply Catalyst"}
                    />
                  )}
                </div>
                <div
                  className={
                    "interactable interactable-aug " +
                    (forma ? "interactable-active" : "interactable-inactive")
                  }
                  onClick={this.toggleForma}
                >
                  {forma ? (
                    <img
                      className="aug-image forma"
                      src={require("../../assets/general/forma.png")}
                      alt={"Cancel Forma Application"}
                    />
                  ) : (
                    <img
                      className="aug-image forma"
                      src={require("../../assets/general/noforma.png")}
                      alt={"Apply Forma"}
                    />
                  )}
                </div>
              </div>
            </div>
            {this.props.type === "kitguns" ? (
              <div className="arcane-slots-wrapper kitgun-arcane">
                <div className="arcane-slots">
                  <ArcaneStateHandler
                    arcane={arcanes[0]}
                    arcaneSlot={0}
                    showArcanePicker={this.showArcanePicker}
                    removeArcane={this.removeArcane}
                    increaseRank={this.increaseArcaneRank}
                    decreaseRank={this.decreaseArcaneRank}
                    viewWidth={this.props.viewWidth}
                  />
                </div>
              </div>
            ) : (
              <div className="special-melee-placeholder" />
            )}
          </div>
          <div className="slots-wrapper">
            <div className="slots">
              <div
                className="handler-wrapper"
                draggable="false"
                onDragStart={e => {
                  this.dragStart(e, 0);
                }}
                onDragOver={this.dragOver}
                onDrop={e => {
                  this.drop(e, 0);
                }}
              >
                <ModStateHandler
                  mod={chosenMods[0]}
                  slot={0}
                  slotPolarity={slotPolarities[0]}
                  forma={forma}
                  openModPicker={this.openModPicker}
                  removeMod={this.removeMod}
                  handleRankUpdate={this.handleRankUpdate}
                  showPolarityPicker={this.showPolarityPicker}
                  forSwap={forSwap}
                  startSwap={this.startSwap}
                  doSwap={this.buttonSwap}
                  viewWidth={this.props.viewWidth}
                />
                <div
                  className={
                    "error-blinker " + (errorBlinker === 0 ? "error-flash" : "")
                  }
                />
              </div>
              <div
                className="handler-wrapper"
                draggable="false"
                onDragStart={e => {
                  this.dragStart(e, 1);
                }}
                onDragOver={e => {
                  e.preventDefault();
                }}
                onDrop={e => {
                  this.drop(e, 1);
                }}
              >
                <ModStateHandler
                  mod={chosenMods[1]}
                  slot={1}
                  slotPolarity={slotPolarities[1]}
                  forma={forma}
                  openModPicker={this.openModPicker}
                  removeMod={this.removeMod}
                  handleRankUpdate={this.handleRankUpdate}
                  showPolarityPicker={this.showPolarityPicker}
                  forSwap={forSwap}
                  startSwap={this.startSwap}
                  doSwap={this.buttonSwap}
                  viewWidth={this.props.viewWidth}
                />
                <div
                  className={
                    "error-blinker " + (errorBlinker === 1 ? "error-flash" : "")
                  }
                />
              </div>
              <div
                className="handler-wrapper"
                draggable="false"
                onDragStart={e => {
                  this.dragStart(e, 2);
                }}
                onDragOver={e => {
                  e.preventDefault();
                }}
                onDrop={e => {
                  this.drop(e, 2);
                }}
              >
                <ModStateHandler
                  mod={chosenMods[2]}
                  slot={2}
                  slotPolarity={slotPolarities[2]}
                  forma={forma}
                  openModPicker={this.openModPicker}
                  removeMod={this.removeMod}
                  handleRankUpdate={this.handleRankUpdate}
                  showPolarityPicker={this.showPolarityPicker}
                  forSwap={forSwap}
                  startSwap={this.startSwap}
                  doSwap={this.buttonSwap}
                  viewWidth={this.props.viewWidth}
                />
                <div
                  className={
                    "error-blinker " + (errorBlinker === 2 ? "error-flash" : "")
                  }
                />
              </div>
              <div
                className="handler-wrapper"
                draggable="false"
                onDragStart={e => {
                  this.dragStart(e, 3);
                }}
                onDragOver={e => {
                  e.preventDefault();
                }}
                onDrop={e => {
                  this.drop(e, 3);
                }}
              >
                <ModStateHandler
                  mod={chosenMods[3]}
                  slot={3}
                  slotPolarity={slotPolarities[3]}
                  forma={forma}
                  openModPicker={this.openModPicker}
                  removeMod={this.removeMod}
                  handleRankUpdate={this.handleRankUpdate}
                  showPolarityPicker={this.showPolarityPicker}
                  forSwap={forSwap}
                  startSwap={this.startSwap}
                  doSwap={this.buttonSwap}
                  viewWidth={this.props.viewWidth}
                />
                <div
                  className={
                    "error-blinker " + (errorBlinker === 3 ? "error-flash" : "")
                  }
                />
              </div>
              <div
                className="handler-wrapper"
                draggable="false"
                onDragStart={e => {
                  this.dragStart(e, 4);
                }}
                onDragOver={e => {
                  e.preventDefault();
                }}
                onDrop={e => {
                  this.drop(e, 4);
                }}
              >
                <ModStateHandler
                  mod={chosenMods[4]}
                  slot={4}
                  slotPolarity={slotPolarities[4]}
                  forma={forma}
                  openModPicker={this.openModPicker}
                  removeMod={this.removeMod}
                  handleRankUpdate={this.handleRankUpdate}
                  showPolarityPicker={this.showPolarityPicker}
                  forSwap={forSwap}
                  startSwap={this.startSwap}
                  doSwap={this.buttonSwap}
                  viewWidth={this.props.viewWidth}
                />
                <div
                  className={
                    "error-blinker " + (errorBlinker === 4 ? "error-flash" : "")
                  }
                />
              </div>
              <div
                className="handler-wrapper"
                draggable="false"
                onDragStart={e => {
                  this.dragStart(e, 5);
                }}
                onDragOver={e => {
                  e.preventDefault();
                }}
                onDrop={e => {
                  this.drop(e, 5);
                }}
              >
                <ModStateHandler
                  mod={chosenMods[5]}
                  slot={5}
                  slotPolarity={slotPolarities[5]}
                  forma={forma}
                  openModPicker={this.openModPicker}
                  removeMod={this.removeMod}
                  handleRankUpdate={this.handleRankUpdate}
                  showPolarityPicker={this.showPolarityPicker}
                  forSwap={forSwap}
                  startSwap={this.startSwap}
                  doSwap={this.buttonSwap}
                  viewWidth={this.props.viewWidth}
                />
                <div
                  className={
                    "error-blinker " + (errorBlinker === 5 ? "error-flash" : "")
                  }
                />
              </div>
              <div
                className="handler-wrapper"
                draggable="false"
                onDragStart={e => {
                  this.dragStart(e, 6);
                }}
                onDragOver={e => {
                  e.preventDefault();
                }}
                onDrop={e => {
                  this.drop(e, 6);
                }}
              >
                <ModStateHandler
                  mod={chosenMods[6]}
                  slot={6}
                  slotPolarity={slotPolarities[6]}
                  forma={forma}
                  openModPicker={this.openModPicker}
                  removeMod={this.removeMod}
                  handleRankUpdate={this.handleRankUpdate}
                  showPolarityPicker={this.showPolarityPicker}
                  forSwap={forSwap}
                  startSwap={this.startSwap}
                  doSwap={this.buttonSwap}
                  viewWidth={this.props.viewWidth}
                />
                <div
                  className={
                    "error-blinker " + (errorBlinker === 6 ? "error-flash" : "")
                  }
                />
              </div>
              <div
                className="handler-wrapper"
                draggable="false"
                onDragStart={e => {
                  this.dragStart(e, 7);
                }}
                onDragOver={e => {
                  e.preventDefault();
                }}
                onDrop={e => {
                  this.drop(e, 7);
                }}
              >
                <ModStateHandler
                  mod={chosenMods[7]}
                  slot={7}
                  slotPolarity={slotPolarities[7]}
                  forma={forma}
                  openModPicker={this.openModPicker}
                  removeMod={this.removeMod}
                  handleRankUpdate={this.handleRankUpdate}
                  showPolarityPicker={this.showPolarityPicker}
                  forSwap={forSwap}
                  startSwap={this.startSwap}
                  doSwap={this.buttonSwap}
                  viewWidth={this.props.viewWidth}
                />
                <div
                  className={
                    "error-blinker " + (errorBlinker === 7 ? "error-flash" : "")
                  }
                />
              </div>
            </div>
          </div>
          {this.props.match.params.build &&
            this.props.online &&
            !this.props.metaInfo.Owner && (
              <div
                className="user-rating-set"
                style={{ opacity: this.props.user ? 1 : 0.3 }}
              >
                <p>
                  {this.props.user ? "Rate this build" : "Login to rate builds"}
                </p>
                <Rating
                  rating={this.props.metaInfo.Rating}
                  starWidth="30px"
                  readOnly={!this.props.user}
                  match={this.props.match}
                />
              </div>
            )}
          {this.props.online && <ModdingAd />}
          {this.displayMessage()}
        </div>
        <div className="modding-right">
          {(this.props.type === "archguns-space" ||
            this.props.type === "archguns-land" ||
            this.props.riven === "ranged") && (
            <RangedWeaponStats
              weapon={this.props.item}
              mods={this.state.chosenMods}
              viewWidth={this.props.viewWidth}
              type={this.props.type}
            />
          )}
          {this.props.type === "archwings" && (
            <WarframeStats
              frame={this.props.item}
              mods={this.state.chosenMods}
              viewWidth={this.props.viewWidth}
            />
          )}
          {(this.props.type === "archmelee" ||
            this.props.riven === "melee") && (
            <MeleeStats
              weapon={this.props.item}
              mods={this.state.chosenMods}
              viewWidth={this.props.viewWidth}
            />
          )}
          <div className="side-panel">
            {this.props.viewWidth > 1369 && this.props.online && (
              <div className="right-g">
                <RightAd />
              </div>
            )}
          </div>
        </div>
        <div
          className={
            "autoforma-wrapper " +
            (autoForma ? "autoforma-active" : "autoforma-inactive")
          }
        >
          <div className="autoforma-box">
            <p className="autoforma-p">
              Manually apply Forma or let Tennoware handle it automatically?
            </p>
            <div className="autoforma-buttons">
              <div
                className="interactable interactable-semi-inactive"
                onClick={this.manualForma}
              >
                <p className="interactable-p">Manual</p>
              </div>
              <div
                className="interactable interactable-semi-inactive"
                onClick={this.autoForma}
              >
                <p className="interactable-p">Auto</p>
              </div>
            </div>
          </div>
        </div>
        <PolarityPicker
          polarityPicker={polarityPicker}
          polarizeSlot={this.polarizeSlot}
          hidePolarityPicker={this.hidePolarityPicker}
        />
        {this.props.type === "kitguns" && (
          <ArcanePicker
            arcanes={this.props.arcanes}
            active={arcanePicker}
            hideArcanePicker={this.hideArcanePicker}
            pickArcane={this.pickArcane}
          />
        )}
      </div>
    );
  }
}

export default EightSlotModding;
