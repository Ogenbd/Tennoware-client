import React, { Component } from "react";
import Slider from "rc-slider/lib/Slider";
import Switch from "react-switch";
import "rc-slider/assets/index.css";
import "./Stats.css";

export class RangedWeaponStats extends Component {
  constructor(props) {
    super(props);
    this.softInput = React.createRef();
    this.state = {
      effects: {},
      elemental: [],
      conditionalEffects: [],
      mode: 0,
      zoom: 0,
      combo: 1,
      powerStr: 100,
      razorwingBlitz: 0,
      open: false,
      aiming: false,
      kill: false,
      headshot: false,
      reload: false,
      cast: false,
      first: false,
      harpoon: false,
      headshotKill: false,
      landSpecialJump: false,
      duringWallLatch: false,
      aimingToggle: false,
      killToggle: false,
      headshotToggle: false,
      reloadToggle: false,
      castToggle: false,
      firstToggle: false,
      harpoonToggle: false,
      headshotKillToggle: false,
      landSpecialJumpToggle: false,
      duringWallLatchToggle: false,
      baseStatsToggle: false,
      arbitrations: false,
      augment: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    let effects = {};
    let elemental = [];
    let conditionalEffects = [];
    let conditional = {
      aiming: false,
      kill: false,
      headshot: false,
      reload: false,
      cast: false,
      first: false,
      headshotKill: false,
      landSpecialJump: false,
      duringWallLatch: false,
      harpoon: false
    };
    let fireMode = state.mode;
    if (state.baseStatsToggle) {
      return {
        effects: effects,
        elemental: elemental,
        conditionalEffects: conditionalEffects
      };
    }
    if (state.arbitrations) effects.baseDamage = 3;
    props.mods.forEach(mod => {
      if (mod.name) {
        if (mod.effects.alterMode) fireMode = mod.effects.alterMode;
        if (mod.name !== "Riven Mod") {
          if (mod.conditional) {
            for (let condition in mod.conditional) {
              conditional[condition] = mod.conditional[condition];
            }
            let modEffects = JSON.parse(JSON.stringify(mod.effects));
            for (let effect in modEffects) {
              modEffects[effect] = Array.isArray(modEffects[effect]) ? modEffects[effect][mod.currRank] : modEffects[effect] * (mod.currRank + 1);
            }
            conditionalEffects.push({
              effects: modEffects,
              conditions: mod.conditional
            });
          } else {
            for (let effect in mod.effects) {
              if (effect !== "none") {
                if (effect === "elemental") {
                  let exists = elemental.findIndex(element => {
                    return element.type === mod.effects.elemental.type;
                  });
                  if (exists === -1) {
                    let damageObj = {
                      type: mod.effects.elemental.type,
                      damage:
                        Math.round(
                          mod.effects.elemental.damage *
                          (mod.currRank + 1) *
                          100
                        ) / 100
                    };
                    elemental.push(damageObj);
                  } else {
                    elemental[exists].damage =
                      Math.round(
                        (elemental[exists].damage +
                          mod.effects.elemental.damage * (mod.currRank + 1)) *
                        100
                      ) / 100;
                  }
                } else if (effect === "augmentFireRate") {
                  effects.augmentFireRate =
                    mod.effects.augmentFireRate[mod.currRank];
                } else if (effect === "totalDamage") {
                  effects.totalDamage = mod.effects.totalDamage[mod.currRank];
                } else if (effects[effect]) {
                  effects[effect] =
                    effects[effect] + mod.effects[effect] * (mod.currRank + 1);
                } else {
                  effects[effect] = mod.effects[effect] * (mod.currRank + 1);
                }
              }
            }
          }
        } else {
          mod.effects
            .slice()
            .reverse()
            .forEach(rivenEffect => {
              if (rivenEffect.elemental) {
                let exists = elemental.findIndex(element => {
                  return element.type === rivenEffect.elemental.type;
                });
                if (exists === -1) {
                  let damageObj = {
                    type: rivenEffect.elemental.type,
                    damage: Math.round(rivenEffect.elemental.damage * 100) / 100
                  };
                  elemental.push(damageObj);
                } else {
                  elemental[exists].damage =
                    Math.round(
                      (elemental[exists].damage +
                        rivenEffect.elemental.damage) *
                      100
                    ) / 100;
                }
              } else {
                for (let effect in rivenEffect) {
                  if (effects[effect]) {
                    effects[effect] =
                      Math.round(
                        (effects[effect] + rivenEffect[effect]) * 100
                      ) / 100;
                  } else {
                    effects[effect] = rivenEffect[effect];
                  }
                }
              }
            });
        }
      }
    });
    if (props.weapon.modes[fireMode].augment && !effects.alterMode) fireMode = 0;
    return {
      effects: effects,
      elemental: elemental,
      conditionalEffects: conditionalEffects,
      mode: fireMode,
      ...conditional
    };
  }

  toggleStats = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  toggleAiming = () => {
    this.setState(prevState => ({ aimingToggle: !prevState.aimingToggle }));
  };

  toggleHeadshot = () => {
    this.setState(prevState => ({ headshotToggle: !prevState.headshotToggle }));
  };

  toggleKill = () => {
    this.setState(prevState => ({ killToggle: !prevState.killToggle }));
  };

  toggleReload = () => {
    this.setState(prevState => ({ reloadToggle: !prevState.reloadToggle }));
  };

  toggleCast = () => {
    this.setState(prevState => ({ castToggle: !prevState.castToggle }));
  };

  toggleFirst = () => {
    this.setState(prevState => ({ firstToggle: !prevState.firstToggle }));
  };

  toggleHarpoon = () => {
    this.setState(prevState => ({ harpoonToggle: !prevState.harpoonToggle }));
  }

  toggleHeadshotKill = () => {
    this.setState(prevState => ({
      headshotKillToggle: !prevState.headshotKillToggle
    }));
  };

  toggleLandSpecialJump = () => {
    this.setState(prevState => ({
      landSpecialJumpToggle: !prevState.landSpecialJumpToggle
    }));
  };

  toggleDuringWallLatch = () => {
    this.setState(prevState => ({
      duringWallLatchToggle: !prevState.duringWallLatchToggle
    }));
  };

  toggleArbitrations = () => {
    this.setState(prevState => ({ arbitrations: !prevState.arbitrations }));
  };

  toggleBaseStats = () => {
    this.setState(prevState => ({
      baseStatsToggle: !prevState.baseStatsToggle
    }));
  };

  setZoom = value => {
    // if (this.props.weapon.headshotDamage && value > 0) {
    //     let effects = cloneDeep(this.state.effects);
    //     effects.headshotMult ? effects.headshotMult += this.props.weapon.zoom[value].effect / 100 : effects.headshotMult = this.props.weapon.zoom[value].effect / 100;
    //     this.setState({
    //         zoom: value,
    //         effects: effects
    //     })
    // } else {
    this.setState({
      zoom: value
    });
    // }
  };

  setCombo = value => {
    this.setState({
      combo: value
    });
  };

  setRazorwingBlitz = value => {
    this.setState({
      razorwingBlitz: value
    });
  };

  calcStatus = () => {
    let status = {};
    let statusMult = 1;
    let multishotMult = 1;
    let baseStatus = 0;
    let conditionalStatusEffects = this.state.conditionalEffects.filter(
      conditional => conditional.effects.status
    );
    if (conditionalStatusEffects.length > 0) {
      conditionalStatusEffects.forEach(conditional => {
        let conditionsToMeet = Object.keys(conditional.conditions).length;
        let conditionsMet = 0;
        for (let condition in conditional.conditions) {
          if (this.state[`${condition}Toggle`]) conditionsMet++;
        }
        if (conditionsToMeet === conditionsMet)
          statusMult += conditional.effects.status;
      });
    }
    if (this.state.effects.status) {
      statusMult += this.state.effects.status;
    }

    // let conditionalStatusEffects = this.state.conditionalEffects.filter(conditional => {
    //     return conditional.effects.status;
    // });
    // conditionalStatusEffects.forEach(conditionalEffect => {
    //     if (this.state.aimingToggle === conditionalEffect.conditions.aiming && this.state.castToggle === conditionalEffect.conditions.cast) {
    //         statusMult += conditionalEffect.effects.status;
    //     }
    // });
    if (
      this.state.effects.multishot &&
      this.props.weapon.modes[this.state.mode].trigger !== "Held" &&
      !this.props.weapon.modes[this.state.mode].singleProjectile
    ) {
      multishotMult += this.state.effects.multishot;
    }
    if (this.state.effects.baseStatus) {
      baseStatus += this.state.effects.baseStatus;
    }
    if (
      this.props.weapon.modes[this.state.mode].status * statusMult +
      baseStatus / 100 >=
      1
    ) {
      status.chance = 100;
      status.chancePerPellet = 100;
    } else {
      status.chance =
        Math.round(
          (1 -
            Math.pow(
              1 - this.props.weapon.modes[this.state.mode].status * statusMult,
              multishotMult
            )) *
          100 *
          10
        ) /
        10 +
        baseStatus;
      if (status.chance > 100) status.chance = 100;
      if (this.props.weapon.modes[this.state.mode].pellets) {
        if (
          (1 -
            (1 -
              this.props.weapon.modes[this.state.mode].status * statusMult)) *
          100 +
          baseStatus >=
          100
        ) {
          status.chancePerPellet = 100;
        } else {
          status.chancePerPellet =
            Math.round(
              (1 -
                Math.pow(
                  1 -
                  this.props.weapon.modes[this.state.mode].status *
                  statusMult +
                  baseStatus,
                  1 / this.props.weapon.modes[this.state.mode].pellets
                )) *
              100 *
              10
            ) / 10;
        }
      }
    }
    return status;
  };

  // theres probably a better way to do this
  combineElements(first, second) {
    if (
      (first.type === "Toxin" && second.type === "Electricity") ||
      (second.type === "Toxin" && first.type === "Electricity")
    ) {
      return { type: "Corrosive", damage: first.damage + second.damage };
    } else if (
      (first.type === "Toxin" && second.type === "Cold") ||
      (second.type === "Toxin" && first.type === "Cold")
    ) {
      return { type: "Viral", damage: first.damage + second.damage };
    } else if (
      (first.type === "Toxin" && second.type === "Heat") ||
      (second.type === "Toxin" && first.type === "Heat")
    ) {
      return { type: "Gas", damage: first.damage + second.damage };
    } else if (
      (first.type === "Electricity" && second.type === "Heat") ||
      (second.type === "Electricity" && first.type === "Heat")
    ) {
      return { type: "Radiation", damage: first.damage + second.damage };
    } else if (
      (first.type === "Electricity" && second.type === "Cold") ||
      (second.type === "Electricity" && first.type === "Cold")
    ) {
      return { type: "Magnetic", damage: first.damage + second.damage };
    } else if (
      (first.type === "Heat" && second.type === "Cold") ||
      (second.type === "Heat" && first.type === "Cold")
    ) {
      return { type: "Blast", damage: first.damage + second.damage };
    }
  }

  // refactor sometime.... its a giant mess
  calcDamage = () => {
    let finalDamageArray = [];
    let calcedElementalEffects = [];
    let totalElementalDamageArr = [];
    let damageSplit = [];
    let baseDamageMult = 1;
    let multishotMult = 1;
    let weaponDamage;
    let combinedElement;
    let secondCombinedElement;
    let typeIndex;
    let nativeElementPosition;
    let nativeElementType;
    let conditionalBaseDamageEffects = this.state.conditionalEffects.filter(
      conditional => conditional.effects.baseDamage
    );
    if (this.props.weapon.name === 'REGULATORS') {
      baseDamageMult += 1.5 * this.state.powerStr / 100
    }
    if (conditionalBaseDamageEffects.length > 0) {
      conditionalBaseDamageEffects.forEach(conditional => {
        let conditionsToMeet = Object.keys(conditional.conditions).length;
        let conditionsMet = 0;
        for (let condition in conditional.conditions) {
          if (this.state[`${condition}Toggle`]) conditionsMet++;
        }
        if (conditionsToMeet === conditionsMet)
          baseDamageMult += conditional.effects.baseDamage;
      });
    }
    if (this.state.effects.baseDamage) {
      baseDamageMult += this.state.effects.baseDamage;
    }
    if (
      this.state.effects.multishot &&
      !this.props.weapon.modes[this.state.mode].singleProjectile
    ) {
      multishotMult += this.state.effects.multishot;
    }
    weaponDamage =
      Math.floor(
        this.props.weapon.modes[this.state.mode].damage * baseDamageMult
      ) * multishotMult;
    this.state.elemental.forEach(element => {
      calcedElementalEffects.push({
        type: element.type,
        damage: weaponDamage * element.damage
      });
    });
    this.props.weapon.modes[this.state.mode].split.forEach(type => {
      damageSplit.push({
        type: type.type,
        damage: weaponDamage * type.percent
      });
    });
    nativeElementPosition = damageSplit.findIndex(type => {
      return (
        type.type !== "Impact" &&
        type.type !== "Slash" &&
        type.type !== "Puncture"
      );
    });
    if (nativeElementPosition !== -1) {
      nativeElementType = damageSplit[nativeElementPosition].type;
      calcedElementalEffects.forEach(element => {
        if (element.type === nativeElementType) {
          element.damage += damageSplit[nativeElementPosition].damage;
          damageSplit.splice(nativeElementPosition, 1);
          nativeElementPosition = -1;
        }
      });
    }
    if (
      nativeElementPosition !== -1 &&
      (nativeElementType === "Toxin" ||
        nativeElementType === "Electricity" ||
        nativeElementType === "Heat" ||
        nativeElementType === "Cold")
    ) {
      calcedElementalEffects.push(damageSplit[nativeElementPosition]);
      damageSplit.splice(nativeElementPosition, 1);
      nativeElementPosition = -1;
    }
    switch (calcedElementalEffects.length) {
      case 1:
        totalElementalDamageArr.push(calcedElementalEffects[0]);
        break;
      case 2:
        combinedElement = this.combineElements(
          calcedElementalEffects[0],
          calcedElementalEffects[1]
        );
        totalElementalDamageArr.push(combinedElement);
        break;
      case 3:
        combinedElement = this.combineElements(
          calcedElementalEffects[0],
          calcedElementalEffects[1]
        );
        totalElementalDamageArr.push(
          combinedElement,
          calcedElementalEffects[2]
        );
        break;
      case 4:
        combinedElement = this.combineElements(
          calcedElementalEffects[0],
          calcedElementalEffects[1]
        );
        secondCombinedElement = this.combineElements(
          calcedElementalEffects[2],
          calcedElementalEffects[3]
        );
        totalElementalDamageArr.push(combinedElement, secondCombinedElement);
        break;
      default:
        break;
    }
    if (this.state.effects.impact) {
      typeIndex = damageSplit.findIndex(type => {
        return type.type === "Impact";
      });
      if (typeIndex !== -1) {
        damageSplit[typeIndex].damage +=
          damageSplit[typeIndex].damage * this.state.effects.impact;
        if (damageSplit[typeIndex].damage < 0) damageSplit[typeIndex].damage = 0
      }
    }
    if (this.state.effects.slash) {
      typeIndex = damageSplit.findIndex(type => {
        return type.type === "Slash";
      });
      if (typeIndex !== -1) {
        damageSplit[typeIndex].damage +=
          damageSplit[typeIndex].damage * this.state.effects.slash;
        if (damageSplit[typeIndex].damage < 0) damageSplit[typeIndex].damage = 0
      }
    }
    if (this.state.effects.puncture) {
      typeIndex = damageSplit.findIndex(type => {
        return type.type === "Puncture";
      });
      if (typeIndex !== -1) {
        damageSplit[typeIndex].damage +=
          damageSplit[typeIndex].damage * this.state.effects.puncture;
        if (damageSplit[typeIndex].damage < 0) damageSplit[typeIndex].damage = 0
      }
    }
    if (nativeElementPosition !== -1) {
      if (
        nativeElementType === "Corrosive" ||
        nativeElementType === "Viral" ||
        nativeElementType === "Radiation" ||
        nativeElementType === "Blast" ||
        nativeElementType === "Gas" ||
        nativeElementType === "Magnetic"
      ) {
        let nativeInCalcCheck = totalElementalDamageArr.findIndex(
          calcedElement => {
            return calcedElement.type === nativeElementType;
          }
        );
        if (nativeInCalcCheck !== -1) {
          totalElementalDamageArr[nativeInCalcCheck].damage +=
            damageSplit[nativeElementPosition].damage;
          damageSplit.splice(nativeElementPosition, 1);
        }
      }
    }
    damageSplit.forEach(instance => {
      finalDamageArray.push(instance);
    });
    totalElementalDamageArr.forEach(element => {
      finalDamageArray.push(element);
    });
    if (this.props.weapon.zoom) {
      finalDamageArray.forEach(damageType => {
        damageType.damage = damageType.damage * this.state.combo;
      });
    }
    if (this.props.weapon.exalted && this.props.weapon.name !== 'REGULATORS') {
      finalDamageArray.forEach(damageType => {
        damageType.damage = damageType.damage * (this.state.powerStr / 100);
      });
    }
    if (this.state.effects.totalDamage) {
      finalDamageArray.forEach(damageType => {
        damageType.damage =
          damageType.damage * (1 + this.state.effects.totalDamage);
      });
    }
    finalDamageArray.forEach(damageType => {
      damageType.icon = require(`../../assets/dynamic/damage/${
        damageType.type
        }.png`);
    });
    return finalDamageArray;
  };

  calcCritChance = () => {
    let critChanceMult = 1;
    let conditionalCritChanceEffects = this.state.conditionalEffects.filter(
      conditional => conditional.effects.critChance
    );
    if (conditionalCritChanceEffects.length > 0) {
      conditionalCritChanceEffects.forEach(conditional => {
        let conditionsToMeet = Object.keys(conditional.conditions).length;
        let conditionsMet = 0;
        for (let condition in conditional.conditions) {
          if (this.state[`${condition}Toggle`]) conditionsMet++;
        }
        if (conditionsToMeet === conditionsMet)
          critChanceMult += conditional.effects.critChance;
      });
    }
    if (this.state.effects.critChance) {
      critChanceMult += this.state.effects.critChance;
    }
    // lanka zoom
    if (this.props.weapon.name === "LANKA" && this.state.zoom > 0) {
      return {
        display:
          this.props.weapon.modes[this.state.mode].critChance * critChanceMult +
          this.props.weapon.zoom[this.state.zoom].effect / 100,
        mult: critChanceMult
      };
    }
    // Artemis bow concentrated arrow headshot
    if (this.props.weapon.name === "ARTEMIS BOW" && this.state.mode === 1) {
      return {
        display:
          this.props.weapon.modes[this.state.mode].critChance * critChanceMult + 0.5,
        mult: critChanceMult
      };
    }
    return {
      display:
        this.props.weapon.modes[this.state.mode].critChance * critChanceMult,
      mult: critChanceMult
    };
  };

  calcCritMult = () => {
    let critMultMult = 1;
    let conditionalCritMultEffects = this.state.conditionalEffects.filter(
      conditional => conditional.effects.critMult
    );
    if (conditionalCritMultEffects.length > 0) {
      conditionalCritMultEffects.forEach(conditional => {
        let conditionsToMeet = Object.keys(conditional.conditions).length;
        let conditionsMet = 0;
        for (let condition in conditional.conditions) {
          if (this.state[`${condition}Toggle`]) conditionsMet++;
        }
        if (conditionsToMeet === conditionsMet)
          critMultMult += conditional.effects.critMult;
      });
    }
    if (this.state.effects.critMult) {
      critMultMult += this.state.effects.critMult;
    }
    // rubico (prime) zoom
    if (
      (this.props.weapon.name === "RUBICO" ||
        this.props.weapon.name === "RUBICO PRIME") &&
      this.state.zoom > 0
    ) {
      critMultMult += this.props.weapon.zoom[this.state.zoom].effect;
    }
    return {
      display: this.props.weapon.modes[this.state.mode].critMult * critMultMult,
      mult: critMultMult
    };
  };

  calcFireRate = () => {
    let fireRateMult = 1;
    // Wild Frenzy augment
    if (this.state.augment && this.state.effects.augmentFireRate) {
      fireRateMult += this.state.effects.augmentFireRate;
    } else {
      let conditionalFireRateMultEffects = this.state.conditionalEffects.filter(
        conditional => conditional.effects.fireRate
      );
      if (conditionalFireRateMultEffects.length > 0) {
        conditionalFireRateMultEffects.forEach(conditional => {
          let conditionsToMeet = Object.keys(conditional.conditions).length;
          let conditionsMet = 0;
          for (let condition in conditional.conditions) {
            if (this.state[`${condition}Toggle`]) conditionsMet++;
          }
          if (conditionsToMeet === conditionsMet)
            fireRateMult += conditional.effects.fireRate;
        });
      }
      if (this.state.effects.fireRate) {
        if (this.props.weapon.type.includes("BOW")) {
          fireRateMult += this.state.effects.fireRate * 2;
        } else {
          fireRateMult += this.state.effects.fireRate;
        }
      }
      if (this.props.weapon.name === "DEX PIXIA")
        fireRateMult +=
          0.25 * (this.state.powerStr / 100) * this.state.razorwingBlitz;
    }
    return {
      display: this.props.weapon.modes[this.state.mode].fireRate * fireRateMult,
      mult: fireRateMult
    };
  };

  calcChargeRate = () => {
    if (this.props.type.includes("archguns")) {
      let chargeRateMult = 1;
      let conditionalChargeRateMultEffects = this.state.conditionalEffects.filter(
        conditional => conditional.effects.chargeRate
      );
      if (conditionalChargeRateMultEffects.length > 0) {
        conditionalChargeRateMultEffects.forEach(conditional => {
          let conditionsToMeet = Object.keys(conditional.conditions).length;
          let conditionsMet = 0;
          for (let condition in conditional.conditions) {
            if (this.state[`${condition}Toggle`]) conditionsMet++;
          }
          if (conditionsToMeet === conditionsMet)
            chargeRateMult += conditional.effects.chargeRate;
        });
      }
      if (this.state.effects.chargeRate) {
        chargeRateMult += this.state.effects.chargeRate;
      }
      return {
        display:
          this.props.weapon.modes[this.state.mode].chargeRate / chargeRateMult,
        mult: chargeRateMult
      };
    } else {
      return null;
    }
  };

  calcReload = () => {
    let reloadMult = 1;
    let conditionalReloadEffects = this.state.conditionalEffects.filter(
      conditional => conditional.effects.reload
    );
    if (conditionalReloadEffects.length > 0) {
      conditionalReloadEffects.forEach(conditional => {
        let conditionsToMeet = Object.keys(conditional.conditions).length;
        let conditionsMet = 0;
        for (let condition in conditional.conditions) {
          if (this.state[`${condition}Toggle`]) conditionsMet++;
        }
        if (conditionsToMeet === conditionsMet)
          reloadMult += conditional.effects.reload;
      });
    }
    if (this.state.effects.reload) {
      reloadMult += this.state.effects.reload;
    }
    return {
      display: this.props.weapon.reload / reloadMult,
      mult: reloadMult
    };
  };

  calcDPS = (damage, fireRate, critChance, critMult) => {
    let magSize = this.state.effects.magSize
      ? this.props.weapon.magSize * (1 + this.state.effects.magSize)
      : this.props.weapon.magSize;
    let reload = this.state.effects.reload
      ? this.props.weapon.reload / (1 + this.state.effects.reload)
      : this.props.weapon.reload;
    let averageShotDamage;
    let burstDPS;
    let sustainedDPS;
    let totalDamage = 0;
    if (this.props.weapon.modes[this.state.mode].ammoCost)
      magSize = magSize / this.props.weapon.modes[this.state.mode].ammoCost;
    damage.forEach(type => {
      totalDamage += type.damage;
    });
    averageShotDamage = totalDamage * (1 + critChance * (critMult - 1));
    if (this.props.weapon.modes[this.state.mode].chargeRate) {
      burstDPS =
        averageShotDamage *
        (1 /
          (this.props.weapon.modes[this.state.mode].chargeRate /
            fireRate.mult));
    } else if (this.props.weapon.modes[this.state.mode].fireRate) {
      burstDPS = averageShotDamage * fireRate.display;
    } else {
      burstDPS = averageShotDamage;
    }
    if (this.props.weapon.modes[this.state.mode].chargeRate) {
      sustainedDPS =
        (burstDPS *
          (magSize /
            (1 /
              (this.props.weapon.modes[this.state.mode].chargeRate /
                fireRate.mult)))) /
        (magSize /
          (1 /
            (this.props.weapon.modes[this.state.mode].chargeRate /
              fireRate.mult)) +
          reload);
    } else if (this.props.weapon.modes[this.state.mode].fireRate) {
      sustainedDPS =
        (burstDPS * (magSize / fireRate.display)) /
        (magSize / fireRate.display + reload);
    } else {
      sustainedDPS = burstDPS * (magSize + reload);
    }
    if (this.props.weapon.modes[this.state.mode].burst) {
      averageShotDamage =
        averageShotDamage * this.props.weapon.modes[this.state.mode].burst;
    }
    return {
      averageShotDamage: averageShotDamage,
      burst: burstDPS,
      sustained: sustainedDPS
    };
  };

  calcProcWeights = (damage, status) => {
    let totalDamage = damage.reduce((acc, damage) => {
      if (
        damage.type === "Impact" ||
        damage.type === "Puncture" ||
        damage.type === "Slash"
      ) {
        return acc + damage.damage * 4;
      } else {
        return acc + damage.damage;
      }
    }, 0);
    let statusChance = status.chancePerPellet
      ? status.chancePerPellet / 100
      : status.chance / 100;
    let procBreakdown = damage.map(instance => {
      if (
        instance.type === "Impact" ||
        instance.type === "Puncture" ||
        instance.type === "Slash"
      ) {
        return {
          type: instance.type,
          chance:
            Math.round(
              ((instance.damage * 4) / totalDamage) * statusChance * 1000
            ) / 10
        };
      } else {
        return {
          type: instance.type,
          chance:
            Math.round((instance.damage / totalDamage) * statusChance * 1000) /
            10
        };
      }
    });
    return procBreakdown;
  };

  calcHeadshotDamage = (damage, critChance, critMult) => {
    if (
      (this.props.weapon.headshotDamage && this.state.zoom > 0) ||
      this.state.effects.headshotMult
    ) {
      let headshotDamage;
      let totalDamage = damage.reduce((acc, damage) => {
        return acc + damage.damage;
      }, 0);
      let headshotMult = 1;
      if (this.state.effects.headshotMult)
        headshotMult += this.state.effects.headshotMult;
      if (this.props.weapon.headshotDamage && this.state.zoom > 0)
        headshotMult += this.props.weapon.zoom[this.state.zoom].effect;
      headshotDamage = totalDamage * 2 * headshotMult;
      return {
        damage: headshotDamage,
        crit: headshotDamage * critMult,
        average: headshotDamage * (1 + critChance * (critMult - 1))
      };
    }
  };

  handleChange = ({ target }) => {
    let value = parseInt(target.value, 10);
    if (value > 999) value = 999;
    if (value < 0) value = "";
    if (isNaN(value)) value = "";
    this.setState({ powerStr: value });
  };

  focusSoftInput = () => {
    if (this.props.viewWidth < 1280) {
      this.softInput.current.focus();
    }
  };

  blurInput = ({ target, key }) => {
    if (key === "Enter") {
      target.blur();
    }
  };

  zoomMarks = () => {
    let marks = {};
    this.props.weapon.zoom.forEach((level, index) => {
      marks[index] = {};
      marks[index].label = level.name;
      index === this.state.zoom
        ? (marks[index].style = {
          color: "#fff9a0",
          textShadow: "0px 0px 8px rgba(255, 249, 160, 1)"
        })
        : (marks[index].style = { color: "white" });
    });
    return marks;
  };

  comboMarks = () => {
    let marks = {};
    for (let i = 1; i < 4.5; i = i + 0.5) {
      marks[i] = {};
      marks[i].label = `${i}x`;
      i === this.state.combo
        ? (marks[i].style = {
          color: "#fff9a0",
          textShadow: "0px 0px 8px rgba(255, 249, 160, 1)"
        })
        : (marks[i].style = { color: "white" });
    }
    return marks;
  };

  razorwingBlitzMarks = () => {
    let marks = {};
    for (let i = 0; i < 5; i++) {
      marks[i] = {};
      marks[i].label = `${i}`;
      i === this.state.razorwingBlitz
        ? (marks[i].style = {
          color: "#fff9a0",
          textShadow: "0px 0px 8px rgba(255, 249, 160, 1)"
        })
        : (marks[i].style = { color: "white" });
    }
    return marks;
  };

  buildModeList = () => {
    const modes = this.props.weapon.modes.filter(mode => this.state.effects.alterMode ? mode.augment : !mode.augment);
    return modes;
  }

  render() {
    const { weapon } = this.props;
    const { mode, effects, zoom, combo, razorwingBlitz, augment } = this.state;
    const modeList = this.buildModeList()
    const critChance = this.calcCritChance();
    const critMult = this.calcCritMult();
    const fireRate = this.calcFireRate();
    const chargeRate = this.calcChargeRate();
    const status = this.calcStatus();
    const damage = this.calcDamage();
    const reload = this.calcReload();
    const DPS = this.calcDPS(
      damage,
      fireRate,
      critChance.display,
      critMult.display
    );
    const procBreakdown = this.calcProcWeights(damage, status);
    const headshot = this.calcHeadshotDamage(
      damage,
      critChance.display,
      critMult.display
    );
    return (
      <React.Fragment>
        <div
          className={
            "pull-tab " +
            (this.state.open ? "open-pull-tab" : "closed-pull-tab")
          }
          onClick={this.toggleStats}
        >
          <img
            src={require("../../assets/general/arrowicong.png")}
            alt=">>"
            className={
              "pull-tab-arrow " +
              (this.state.open ? "point-left" : "point-right")
            }
          />
          <p>STATS</p>
        </div>
        <div
          className={
            "ranged-stats " +
            (this.state.open ? "open-ranged-stats" : "closed-ranged-stats")
          }
        >
          <div className="ranged-stats-inner-wrapper">
            <div className="modes">
              {modeList.length > 1 && (
                <React.Fragment>
                  {modeList.map((instance, index) => (
                    <div
                      key={index}
                      className={
                        "activatable " +
                        (mode === index
                          ? "interactable-active"
                          : "interactable-inactive")
                      }
                      onClick={() => this.setState({ mode: index })}
                    >
                      <p className="interactable-p">{instance.name}</p>
                    </div>
                  ))}
                </React.Fragment>
              )}
              {(weapon.name === "GRAKATA" ||
                weapon.name === "PRISMA GRAKATA") &&
                effects.augmentFireRate && (
                  <React.Fragment>
                    <div
                      className={
                        "activatable " +
                        (augment
                          ? "interactable-inactive"
                          : "interactable-active")
                      }
                      onClick={() => this.setState({ augment: false })}
                    >
                      <p className="interactable-p">Primary</p>
                    </div>
                    <div
                      className={
                        "activatable " +
                        (augment
                          ? "interactable-active"
                          : "interactable-inactive")
                      }
                      onClick={() => this.setState({ augment: true })}
                    >
                      <p className="interactable-p">Wild Frenzy</p>
                    </div>
                  </React.Fragment>
                )}
            </div>
            <div className="stats-wrapper">
              <div className="stats-item damage">
                <div className="stats-switch">
                  <p className="stat-name">Show Base Stats</p>
                  <Switch
                    className="stat"
                    onChange={this.toggleBaseStats}
                    checked={this.state.baseStatsToggle}
                  />
                </div>
              </div>
              <div className="stats-item">
                <p className="stat-name">Sustained DPS: </p>
                <div className="stat">
                  <p>{(Math.round(DPS.sustained * 10) / 10).toFixed(1)}</p>
                </div>
                <p className="stat-name">Burst DPS: </p>
                <div className="stat">
                  <p>{(Math.round(DPS.burst * 10) / 10).toFixed(1)}</p>
                </div>
                <p className="stat-name">Shot Average: </p>
                <div className="stat">
                  <p>
                    {(Math.round(DPS.averageShotDamage * 10) / 10).toFixed(1)}
                  </p>
                </div>
              </div>
              <div className="stats-item damage">
                <p className="stat-name">Damage: </p>
                <div className="damage">
                  {damage.map(instance => (
                    <div key={instance.type} className="stat">
                      <p>{instance.type}: </p>
                      <p className="stat-frag">
                        {(Math.round(instance.damage * 10) / 10).toFixed(1)}
                      </p>
                      <img className="damage-icon" src={instance.icon} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              {((weapon.headshotDamage && zoom > 0) ||
                effects.headshotMult) && (
                  <div className="stats-item">
                    <p className="stat-name">Headshot Damage: </p>
                    <div className="stat">
                      <p>{headshot.damage.toFixed(1)}</p>
                    </div>
                    <p className="stat-name">Headshot Crit: </p>
                    <div className="stat">
                      <p>{headshot.crit.toFixed(1)}</p>
                    </div>
                    <p className="stat-name">Headshot Average: </p>
                    <div className="stat">
                      <p>{headshot.average.toFixed(1)}</p>
                    </div>
                  </div>
                )}
              <div className="stats-item">
                <p className="stat-name">Mastery: </p>
                <div className="stat">
                  <p>{weapon.mastery}</p>
                </div>
              </div>
              <div className="stats-item">
                <p className="stat-name">Trigger: </p>
                <div className="stat">
                  <p>{weapon.modes[mode].trigger}</p>
                </div>
              </div>
              <div className="stats-item">
                <p className="stat-name">Noise: </p>
                <div className="stat">
                  <p>{weapon.noise}</p>
                </div>
              </div>
              <div className="stats-item">
                <p className="stat-name">Base Accuracy: </p>
                <div className="stat">
                  <p>{weapon.modes[mode].accuracy}</p>
                </div>
              </div>
              {weapon.modes[mode].fireRate && (
                <div className="stats-item">
                  <p className="stat-name">Fire Rate: </p>
                  <div
                    className={
                      "stat " +
                      (fireRate.mult > 1
                        ? "increased-stat"
                        : fireRate.mult === 1
                          ? ""
                          : "decreased-stat")
                    }
                  >
                    <p>{Math.round(fireRate.display * 100) / 100}</p>
                  </div>
                </div>
              )}
              {weapon.modes[mode].chargeRate && (
                <React.Fragment>
                  {!this.props.type.includes("archguns") ? (
                    <div className="stats-item">
                      <p className="stat-name">Charge Rate: </p>
                      <div
                        className={
                          "stat " +
                          (fireRate.mult > 1
                            ? "increased-stat"
                            : fireRate.mult === 1
                              ? ""
                              : "decreased-stat")
                        }
                      >
                        <p>
                          {Math.round(
                            (weapon.modes[mode].chargeRate / fireRate.mult) *
                            100
                          ) / 100}
                        </p>
                      </div>
                    </div>
                  ) : (
                      <div className="stats-item">
                        <p className="stat-name">Charge Rate: </p>
                        <div
                          className={
                            "stat " +
                            (chargeRate.mult > 1
                              ? "increased-stat"
                              : chargeRate.mult === 1
                                ? ""
                                : "decreased-stat")
                          }
                        >
                          <p>{Math.round(chargeRate.display * 100) / 100}</p>
                        </div>
                      </div>
                    )}
                </React.Fragment>
              )}
              {weapon.modes[mode].burst && (
                <div className="stats-item">
                  <p className="stat-name">Rounds Per Burst: </p>
                  <div className="stat">
                    <p>{weapon.modes[mode].burst}</p>
                  </div>
                </div>
              )}
              {weapon.modes[mode].rangeLimit && (
                <div className="stats-item">
                  <p className="stat-name">Range Limit: </p>
                  {effects.rangeLimit ? (
                    <div
                      className={
                        "stat " +
                        (effects.rangeLimit > 0
                          ? "increased-stat"
                          : "decreased-stat")
                      }
                    >
                      <p>
                        {effects.rangeLimit + weapon.modes[mode].rangeLimit}m
                      </p>
                    </div>
                  ) : (
                      <div className="stat">
                        <p>{weapon.modes[mode].rangeLimit}m</p>
                      </div>
                    )}
                </div>
              )}
              {weapon.modes[mode].pellets && (
                <div className="stats-item">
                  <p className="stat-name">Pellets: </p>
                  {effects.multishot ? (
                    <div
                      className={
                        "stat " +
                        (effects.multishot > 0
                          ? "increased-stat"
                          : "decreased-stat")
                      }
                    >
                      <p>
                        {Math.round(
                          weapon.modes[mode].pellets *
                          (1 + effects.multishot) *
                          10
                        ) / 10}
                      </p>
                    </div>
                  ) : (
                      <div className="stat">
                        <p>{weapon.modes[mode].pellets}</p>
                      </div>
                    )}
                </div>
              )}
              {weapon.modes[mode].falloffMin && (
                <div className="stats-item">
                  <p className="stat-name">Falloff: </p>
                  {effects.flightSpeed ? (
                    <div
                      className={
                        "stat " +
                        (effects.flightSpeed > 0
                          ? "increased-stat"
                          : "decreased-stat")
                      }
                    >
                      <p>
                        {weapon.modes[mode].falloffMin *
                          (1 + effects.flightSpeed)}
                        -
                        {weapon.modes[mode].falloffMax *
                          (1 + effects.flightSpeed)}
                        m
                      </p>
                    </div>
                  ) : (
                      <div className="stat">
                        <p>
                          {weapon.modes[mode].falloffMin}-
                        {weapon.modes[mode].falloffMax}m
                      </p>
                      </div>
                    )}
                </div>
              )}
              {weapon.modes[mode].ammoCost && (
                <div className="stats-item">
                  <p className="stat-name">Ammo Cost: </p>
                  <div className="stat">
                    <p>{weapon.modes[mode].ammoCost}</p>
                  </div>
                </div>
              )}
              <div className="stats-item">
                <p className="stat-name">Magazine Size: </p>
                {effects.magSize ? (
                  <div
                    className={
                      "stat " +
                      (effects.magSize > 0
                        ? "increased-stat"
                        : "decreased-stat")
                    }
                  >
                    <p>{Math.round(weapon.magSize * (1 + effects.magSize))}</p>
                  </div>
                ) : (
                    <div className="stat">
                      <p>{weapon.magSize}</p>
                    </div>
                  )}
              </div>
              {weapon.maxAmmo && (
                <div className="stats-item">
                  <p className="stat-name">Max Ammo: </p>
                  {effects.maxAmmo ? (
                    <div
                      className={
                        "stat " +
                        (effects.maxAmmo > 0
                          ? "increased-stat"
                          : "decreased-stat")
                      }
                    >
                      <p>
                        {Math.round(weapon.maxAmmo * (1 + effects.maxAmmo))}
                      </p>
                    </div>
                  ) : (
                      <div className="stat">
                        <p>{weapon.maxAmmo}</p>
                      </div>
                    )}
                </div>
              )}
              <div className="stats-item">
                <p className="stat-name">Reload: </p>
                <div
                  className={
                    "stat " +
                    (reload.mult > 1
                      ? "increased-stat"
                      : reload.mult === 1
                        ? ""
                        : "decreased-stat")
                  }
                >
                  <p>{Math.round(reload.display * 10) / 10}</p>
                </div>
              </div>
              {(weapon.modes[mode].punchThrough > 0 ||
                effects.punchThrough) && (
                  <div className="stats-item">
                    <p className="stat-name">Punch Through: </p>
                    {effects.punchThrough ? (
                      <div
                        className={
                          "stat " +
                          (effects.punchThrough > 0
                            ? "increased-stat"
                            : "decreased-stat")
                        }
                      >
                        <p>
                          {Math.round(
                            (weapon.modes[mode].punchThrough +
                              effects.punchThrough) *
                            10
                          ) / 10}
                          m
                      </p>
                      </div>
                    ) : (
                        <div className="stat">
                          <p>
                            {Math.round(weapon.modes[mode].punchThrough * 10) / 10}m
                      </p>
                        </div>
                      )}
                  </div>
                )}
              <div className="stats-item">
                <p className="stat-name">Critical Chance: </p>
                <div
                  className={
                    "stat " +
                    (critChance.mult > 1
                      ? "increased-stat"
                      : critChance.mult === 1
                        ? ""
                        : "decreased-stat")
                  }
                >
                  <p>{Math.round(critChance.display * 1000) / 10}%</p>
                </div>
              </div>
              <div className="stats-item">
                <p className="stat-name">Critical Multiplier: </p>
                <div
                  className={
                    "stat " +
                    (critMult.mult > 1
                      ? "increased-stat"
                      : critMult.mult === 1
                        ? ""
                        : "decreased-stat")
                  }
                >
                  <p>{Math.round(critMult.display * 10) / 10}x</p>
                </div>
              </div>
              <div className="stats-item">
                <p className="stat-name">Status: </p>
                <div
                  className={
                    "stat " +
                    (status.chance >
                      Math.round(weapon.modes[mode].status * 1000) / 10
                      ? "increased-stat"
                      : status.chance ===
                        Math.round(weapon.modes[mode].status * 1000) / 10
                        ? ""
                        : "decreased-stat")
                  }
                >
                  <p>{status.chance}%</p>
                </div>
              </div>
              {weapon.modes[mode].pellets && (
                <div className="stats-item">
                  <p className="stat-name">Status Per Pellet: </p>
                  <div
                    className={
                      "stat " +
                      (status.chance >
                        Math.round(weapon.modes[mode].status * 1000) / 10
                        ? "increased-stat"
                        : status.chance ===
                          Math.round(weapon.modes[mode].status * 1000) / 10
                          ? ""
                          : "decreased-stat")
                    }
                  >
                    <p>{status.chancePerPellet}%</p>
                  </div>
                </div>
              )}
              <div className="stats-item damage">
                <p className="status-breakdown">
                  Chance For Specific Status Effect
                  {weapon.modes[mode].pellets ? " Per Pellet" : ""}:{" "}
                </p>
                <div className="damage">
                  {procBreakdown.map(instance => (
                    <div key={instance.type} className="stat">
                      <p>{instance.type}: </p>
                      <p className="stat-frag">{instance.chance.toFixed(1)}%</p>
                    </div>
                  ))}
                </div>
              </div>
              {effects.hunterMunitions && (
                <div className="stats-item">
                  <p className="stat-name">Hunter Munitions Proc Chance: </p>
                  <div className="stat">
                    <p>
                      {critChance.display < 1
                        ? (
                          effects.hunterMunitions *
                          critChance.display *
                          100
                        ).toFixed(1)
                        : 30.0}
                      %
                    </p>
                  </div>
                </div>
              )}
              {/* headshot damage on sniper zoom */}
              {/* str mod for exalted weapons */}
              {weapon.exalted && (
                <div className="stats-item">
                  <p className="stat-name">Power Strength: </p>
                  <div className="str-stat">
                    <input
                      className="str-input"
                      type="number"
                      value={this.state.powerStr}
                      onFocus={this.focusSoftInput}
                      onChange={this.handleChange}
                    />
                    <span className="stat">%</span>
                  </div>
                </div>
              )}
            </div>
            <div className="modes">
              {weapon.name === "DEX PIXIA" && (
                <div className="slider-box">
                  <p className="slider-title">Razorwing Blitz Stacks</p>
                  <div className="slider-wrapper">
                    <Slider
                      min={0}
                      max={4}
                      value={razorwingBlitz}
                      onChange={this.setRazorwingBlitz}
                      dots={true}
                      handleStyle={{ backgroundColor: "#96dbfa" }}
                      marks={this.razorwingBlitzMarks()}
                    />
                  </div>
                </div>
              )}
              {weapon.zoom && (
                <React.Fragment>
                  <div className="slider-box">
                    <p className="slider-title">Zoom</p>
                    <div className="slider-wrapper">
                      <Slider
                        min={0}
                        max={weapon.zoom.length - 1}
                        value={zoom}
                        onChange={this.setZoom}
                        dots={true}
                        handleStyle={{ backgroundColor: "#96dbfa" }}
                        marks={this.zoomMarks()}
                      />
                    </div>
                  </div>
                  <div className="slider-box">
                    <p className="slider-title">Combo</p>
                    <div className="slider-wrapper">
                      <Slider
                        min={1}
                        max={4}
                        value={combo}
                        step={0.5}
                        onChange={this.setCombo}
                        dots={true}
                        handleStyle={{ backgroundColor: "#96dbfa" }}
                        marks={this.comboMarks()}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
              <div className="stats-item damage">
                {this.state.aiming && (
                  <div className="stats-switch">
                    <p className="stat-name">While Aiming</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleAiming}
                      checked={this.state.aimingToggle}
                    />
                  </div>
                )}
                {this.state.headshot && (
                  <div className="stats-switch">
                    <p className="stat-name">After Headshot</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleHeadshot}
                      checked={this.state.headshotToggle}
                    />
                  </div>
                )}
                {this.state.kill && (
                  <div className="stats-switch">
                    <p className="stat-name">After Kill</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleKill}
                      checked={this.state.killToggle}
                    />
                  </div>
                )}
                {this.state.reload && (
                  <div className="stats-switch">
                    <p className="stat-name">After Reload</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleReload}
                      checked={this.state.reloadToggle}
                    />
                  </div>
                )}
                {this.state.cast && (
                  <div className="stats-switch">
                    <p className="stat-name">After Cast</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleCast}
                      checked={this.state.castToggle}
                    />
                  </div>
                )}
                {this.state.first && (
                  <div className="stats-switch">
                    <p className="stat-name">First Shot</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleFirst}
                      checked={this.state.firstToggle}
                    />
                  </div>
                )}
                {this.state.headshotKill && (
                  <div className="stats-switch">
                    <p className="stat-name">After Headshot Kill</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleHeadshotKill}
                      checked={this.state.headshotKillToggle}
                    />
                  </div>
                )}
                {this.state.landSpecialJump && (
                  <div className="stats-switch">
                    <p className="stat-name">After landing double or bullet jump</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleLandSpecialJump}
                      checked={this.state.landSpecialJumpToggle}
                    />
                  </div>
                )}
                {this.state.duringWallLatch && (
                  <div className="stats-switch">
                    <p className="stat-name">During wall latch</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleDuringWallLatch}
                      checked={this.state.duringWallLatchToggle}
                    />
                  </div>
                )}
                {this.state.harpoon && (
                  <div className="stats-switch">
                    <p className="stat-name">After harpoon pull</p>
                    <Switch
                      className="stat"
                      onChange={this.toggleHarpoon}
                      checked={this.state.harpoonToggle}
                    />
                  </div>
                )}
                <div className="stats-switch">
                  <p className="stat-name">Arbitrations Bonus</p>
                  <Switch
                    className="stat"
                    onChange={this.toggleArbitrations}
                    checked={this.state.arbitrations}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="soft-input-wrapper">
          <input
            ref={this.softInput}
            type="number"
            className="soft-input"
            value={this.state.powerStr}
            onChange={this.handleChange}
            onKeyUp={this.blurInput}
          />
          <p className="soft-percent">%</p>
        </div>
      </React.Fragment>
    );
  }
}

export default RangedWeaponStats;
