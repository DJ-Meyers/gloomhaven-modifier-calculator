import React, { useReducer } from 'react';
import CalculatorContext from './calculatorContext';
import CalculatorReducer from './calculatorReducer';
import { UPDATE_RESULTS, SET_TRIALS } from '../Types';
import { effectsArray, none, attackEffects, anyAttackEffect, debuffEffects, anyDebuff, buffEffects, anyBuff, elementEffects, anyElement, anyEffect } from '../../resources/general/effects';

const CalculatorState = props => {

  // Default values for enemy/attack/scenario level etc
  const initialState = {
    averageDamage: null,
    stDev: null,
    negativeDrawPct: null,
    trials: 30000,
    dmgValues: [],
    maxDmg: 0,
    effects: [],
    dmgBins: [],
    effectBins: []
  };

  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  

  const setTrials = (newTrials) => {
    dispatch({
      type: SET_TRIALS,
      payload: newTrials
    });
  };

  const calculateDamage = (attack, deck) => {
    // Calculate the damage
    if (attack.advantage === true) {
      calculateAdvDis(attack, deck, true);
    }
    else if (attack.disadvantage === true) {
      calculateAdvDis(attack, deck, false);
    }
    else if (attack.advantage === false && attack.disadvantage === false) {
      calculateNormal(attack, deck);
    }
    else {
      console.log('How did you do that?');
    }
  };

  const countEffects = (thisEffects, effects) => {
    // Eliminate Duplicates
    thisEffects = [...new Set(thisEffects)];
    let anyAE = false, anyDE = false, anyBE = false, anyEE = false;

    if (thisEffects.length > 1 || (thisEffects.length === 1 && thisEffects[0] !== none )) effects.find(effect => effect.id === anyEffect).count++;
    thisEffects.forEach(thisEffect => {
      
      if (thisEffect === none && thisEffects.length > 1) return;
      else {
        effects.find(effect => effect.id === thisEffect).count++;

        if (attackEffects.find(e => e === thisEffect) && !anyAE)  { effects.find(effect => effect.id === anyAttackEffect).count++; anyAE = true; }
        if (debuffEffects.find(e => e === thisEffect) && !anyDE)  { effects.find(effect => effect.id === anyDebuff).count++; anyDE = true; }
        if (buffEffects.find(e => e === thisEffect) && !anyBE)    { effects.find(effect => effect.id === anyBuff).count++; anyBE = true; }
        if (elementEffects.find(e => e === thisEffect) && !anyEE) { effects.find(effect => effect.id === anyElement).count++; anyEE = true; }
      }
    });
  };  
  
  const convertToDmgHistogram = (data, max) => {
    let newBins = [];
    for (let i = 0; i <= max; i++) {
      newBins.push({x0: i, x: i + 1, y0: 0, y: 0});
    }

    data.forEach(dmg => {
      if (newBins[dmg]) newBins[dmg].y++;
    });

    newBins.forEach(bin => {
      bin.y = 100 * bin.y / state.trials;
    }); 

    return newBins;
  };

  const convertToEffectHistogram = (effects) => {
    let newBins = [];
    effects.forEach((effect) => {
      newBins.push({x: effect.id, y: 100 * effect.count/state.trials});
    });
    return newBins;
  };

  const calculateNormal = (attack, deck) => {
    let totalDamage = 0;
    let negativeDraws = 0;
    let dmg = attack.attackDamage;
    let dmgValues = [];
    let maxDmg = 0;
    let effects = effectsArray.slice();
    effects.forEach(e => e.count = 0);

    for (let i = 0; i < state.trials; i++) {
      shuffle(deck);
      let currentIndex = 0;
      let card = deck[currentIndex];
      dmg = 0;
      let thisEffects = [];

      // Draw another card if rolling
      do {
        card = deck[currentIndex];

        if (isCrit(card)) dmg *= 2;
        else if (isMiss(card)) dmg = 0;
        else dmg += applyModifier(card, attack);

        if (card.rolling === true) dmg -= attack.attackDamage;
        currentIndex++;
        card.effect.forEach(eff =>{
          thisEffects.push(eff);
        });
      } while (card.rolling === true);

      countEffects(thisEffects, effects);

      totalDamage += dmg;
      dmgValues.push(dmg);
      maxDmg = Math.max(maxDmg, dmg);

      if (dmg < Math.max(attack.attackDamage - Math.max(attack.enemyShield - attack.attackPierce, 0), 0)) negativeDraws++;
    }
    const averageDamage = totalDamage / state.trials;
    const negativeDrawPct = 100 * negativeDraws / state.trials;
    const stDev = getStandardDeviation(dmgValues, averageDamage, state.trials);

    const dmgBins = convertToDmgHistogram(dmgValues, maxDmg);
    const effectBins = convertToEffectHistogram(effects);

    dispatch({
      type: UPDATE_RESULTS,
      payload: {
        averageDamage: averageDamage,
        negativeDrawPct: negativeDrawPct,
        stDev: stDev,
        dmgValues: dmgValues,
        maxDmg: maxDmg,
        effects: effects,
        dmgBins: dmgBins,
        effectBins: effectBins
      }
    });
  };

  const calculateAdvDis = (attack, deck, isAdv) => {
    let totalDamage = 0;
    let negativeDraws = 0;
    let dmg = -1;
    let dmgValues = [];
    let maxDmg = 0;
    let effects = effectsArray.slice();
    effects.forEach(e => e.count = 0);
    
    for (let i = 0; i < state.trials; i++){
      shuffle(deck);
      dmg = 0;
      let card1 = deck[0];
      let card2 = deck[1];
      let currentIndex = 2;
      let dmg1 = applyModifier(card1, attack);
      let dmg2 = applyModifier(card2, attack);
      let thisEffects = [];
      
      // From the Rulebook: An attacker with Advantage will draw two modifier cards from their deck and use whichever one is better.
      // An attacker with Disadvantage will draw two modifier cards from their deck and use whichever one is worse. Rolling modifiers are disregarded.
      
      if (card1.rolling === true && card2.rolling === true) {
        // ADV: If two rolling modifier cards were drawn, continue to draw cards until a rolling modifier is not drawn and then add together all drawn effects
        if (isAdv) {
          dmg += dmg1 + dmg2 - 2 * attack.attackDamage;
          card1.effect.forEach(eff => {
            thisEffects.push(eff);
          });
          card2.effect.forEach(eff => {
            thisEffects.push(eff);
          });
        }
        // DIS: If two rolling modifier cards were drawn, continue to draw cards until a rolling modifier is not played and then only apply the effect of the last card drawn
        else {
          dmg = attack.attackDamage;
        }

        // Draw until a non-rolling modifier is drawn.
        let nextCard = null;
        do {
          nextCard = deck[currentIndex];
          
          if (nextCard.rolling === true) {
            // ADV: Add together all effects
            if (isAdv) {
              dmg += applyModifier(nextCard, attack) - attack.attackDamage;
              nextCard.effect.forEach(eff => {
                thisEffects.push(eff);
              });
            }
            // DIS: Only apply the effect of the last card drawn
            else {
            }
          }
          else {
            // Apply the effect of the last card drawn.
            if (isCrit(nextCard)) dmg *= 2;
            else if (isMiss(nextCard)) dmg = 0;
            else dmg += applyModifier(nextCard, attack);

            nextCard.effect.forEach(eff => {
              thisEffects.push(eff);
            });
          }

          currentIndex++;
        } while (nextCard.rolling === true);
      }
      else if (card1.rolling === true || card2.rolling === true) {
        // ADV: If one rolling modifier card was drawn, its effect is added to the other card played
        if (isAdv) {
          if (card1.rolling === true)
          {
            dmg += applyModifier(card1, attack) - attack.attackDamage;
            if (isCrit(card2)) dmg *= 2;
            else if (isMiss(card2)) dmg = 0;
            else dmg += applyModifier(card2, attack);
          }
          else {
            dmg += applyModifier(card2, attack) - attack.attackDamage;
            if (isCrit(card1)) dmg *= 2;
            else if (isMiss(card1)) dmg = 0;
            else dmg += applyModifier(card1, attack);
          }
          // The player receives both effects regardless of damage dealt
          card1.effect.forEach(eff => {
            thisEffects.push(eff);
          });
          card2.effect.forEach(eff => {
            thisEffects.push(eff);
          });
        }
        // DIS: Rolling modifiers are disregarded in the case of Disadvantage
        else {
          if (card1.rolling === true) {
            dmg = dmg2;
            card2.effect.forEach(eff => {
              thisEffects.push(eff);
            });
          }
          else {
            dmg = dmg1;
            card1.effect.forEach(eff => {
              thisEffects.push(eff);
            });
          }
        }
      }
      else {
        // ADV: Priority is highest damage, an effect, first drawn card
        if (isAdv) {
          // First choose highest damage
          if (dmg1 > dmg2) {
            dmg = dmg1;
            card1.effect.forEach(eff => {
              thisEffects.push(eff);
            });
          }
          else if (dmg2 > dmg1) {
            dmg = dmg2;
            card2.effect.forEach(eff => {
              thisEffects.push(eff);
            });
          }
          else if (dmg1 === dmg2) {
            // Then choose an effect over no effect
            if (card1.effect === none && card2.effect !== none) {
              dmg = dmg2;
              card2.effect.forEach(eff => {
                thisEffects.push(eff);
              });
            }
            else if (card1.effect !== none && card2.effect === none) {
              dmg = dmg1;
              card1.effect.forEach(eff => {
                thisEffects.push(eff);
              });
            }
            // Then choose whichever card was drawn first
            else {
              dmg = dmg1;
              card1.effect.forEach(eff => {
                thisEffects.push(eff);
              });
            }
          }
          else {
            console.log('You shouldn\'t be here');
          }
        }
        else {
          // First choose lowest damage
          if (dmg1 > dmg2) {
            dmg = dmg2;
            card2.effect.forEach(eff => {
              thisEffects.push(eff);
            });
          }
          else if (dmg2 > dmg1) {
            dmg = dmg1;
            card1.effect.forEach(eff => {
              thisEffects.push(eff);
            });
          }
          else if (dmg1 === dmg2) {
            // Then choose no effect over an effect
            if (card1.effect === none && card2.effect !== none) {
              dmg = dmg1;
              card1.effect.forEach(eff => {
                thisEffects.push(eff);
              });
            }
            else if (card1.effect !== none && card2.effect === none) {
              dmg = dmg2;
              card2.effect.forEach(eff => {
                thisEffects.push(eff);
              });
            }
            // Then choose whichever card was drawn first
            else {
              dmg = dmg1;
              card1.effect.forEach(eff => {
                thisEffects.push(eff);
              });
            }
          }
          else {
            console.log('You shouldn\'t be here');
          }
        }
      }
      
      totalDamage += dmg; 
      dmgValues.push(dmg);
      maxDmg = Math.max(maxDmg, dmg);
      countEffects(thisEffects, effects);

      if (dmg < Math.max(attack.attackDamage - Math.max(attack.enemyShield - attack.attackPierce, 0), 0)) negativeDraws++;
    }

    const averageDamage = totalDamage / state.trials;
    const negativeDrawPct = 100 * negativeDraws / state.trials;
    const stDev = getStandardDeviation(dmgValues, averageDamage, state.trials);

    const dmgBins = convertToDmgHistogram(dmgValues, maxDmg);
    const effectBins = convertToEffectHistogram(effects);

    dispatch({
      type: UPDATE_RESULTS,
      payload: {
        averageDamage: averageDamage,
        negativeDrawPct: negativeDrawPct,
        stDev: stDev,
        dmgValues: dmgValues,
        maxDmg: maxDmg,
        effects: effects,
        dmgBins: dmgBins,
        effectBins: effectBins
      }
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        averageDamage: state.averageDamage,
        stDev: state.stDev,
        negativeDrawPct: state.negativeDrawPct,
        trials: state.trials,
        dmgValues: state.dmgValues,
        maxDmg: state.maxDmg,
        effects: state.effects,
        dmgBins: state.dmgBins,
        effectBins: state.effectBins,
        setTrials,
        calculateDamage
      }}>
        {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorState;

function getStandardDeviation(dmgValues, averageDamage, trials) {
  let sumVariance = 0;
  dmgValues.forEach(val => sumVariance += Math.pow(val - averageDamage, 2));
  return  Math.sqrt(sumVariance / trials);
}

function shuffle(array) {
  let currIndex = array.length;
  let tempValue = {}, randIndex = 0;

  while (currIndex !== 0)
  {
      randIndex = Math.floor(Math.random() * currIndex);
      currIndex -= 1;

      tempValue = array[currIndex];
      array[currIndex] = array[randIndex];
      array[randIndex] = tempValue;
  }

  return array;
};

function isMiss(card) {
  return card.modifier === '*0';
}

function isCrit(card) {
  return card.modifier === '*2';
}

function applyModifier(card, attack) {
  let operation = card.modifier.charAt(0);
  let modifier = parseInt(card.modifier.charAt(1));
  
  switch (operation) {
    case '+':
      return Math.max(parseInt(attack.attackDamage) + parseInt(modifier) - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    case '-':
      return Math.max(attack.attackDamage - modifier - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    case '*':
      return Math.max(attack.attackDamage * modifier - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    default:
      return -1;
  }
}
