import React, { useReducer } from 'react';
import CalculatorContext from './calculatorContext';
import CalculatorReducer from './calculatorReducer';
import { UPDATE_RESULTS, SET_TRIALS } from '../Types';

const CalculatorState = props => {

  // Default values for enemy/attack/scenario level etc
  const initialState = {
    averageDamage: null,
    killPct: null,
    negativeDrawPct: null,
    trials: 10000,
    dmgValues: [],
    maxDmg: 0
  };

  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  const shuffle = function(array) {
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

  const calculateNormal = (attack, deck) => {
    let totalDamage = 0;
    let negativeDraws = 0;
    let kills = 0;
    let dmg = attack.attackDamage;
    let dmgValues = [];
    let maxDmg = 0;

    for (let i = 0; i < state.trials; i++) {
      shuffle(deck);
      let currentIndex = 0;
      let card = deck[currentIndex];
      dmg = 0;

      // Draw another card if rolling
      do {
        card = deck[currentIndex];
        dmg += ApplyModifier(card, attack);
        if (card.rolling === true) dmg -= attack.attackDamage;
        currentIndex++;
      } while (card.rolling === true);

      totalDamage += dmg;
      dmgValues.push(dmg);
      maxDmg = Math.max(maxDmg, dmg);

      if (dmg >= attack.enemyHP) kills++;
      if (dmg < Math.max(attack.attackDamage - Math.max(attack.enemyShield - attack.attackPierce, 0), 0)) negativeDraws++;
    }
    const averageDamage = totalDamage / state.trials;
    const negativeDrawPct = 100 * negativeDraws / state.trials;
    const killPct = 100 * kills / state.trials;

    dispatch({
      type: UPDATE_RESULTS,
      payload: {
        averageDamage: averageDamage,
        negativeDrawPct: negativeDrawPct,
        killPct: killPct,
        dmgValues: dmgValues,
        maxDmg: maxDmg
      }
    });
  };

  const calculateAdvDis = (attack, deck, isAdv) => {
    let totalDamage = 0;
    let negativeDraws = 0;
    let kills = 0;
    let dmg = -1;
    let dmgValues = [];
    let maxDmg = 0;
    
    for (let i = 0; i < state.trials; i++){
      shuffle(deck);
      dmg = 0;
      let card1 = deck[0];
      let card2 = deck[1];
      let currentIndex = 2;
      let dmg1 = ApplyModifier(card1, attack);
      let dmg2 = ApplyModifier(card2, attack);

      if (card1.rolling === true && card2.rolling === true) {
        dmg += dmg1 + dmg2 - 2 * attack.attackDamage;
        let nextCard = null;
        do {
          nextCard = deck[currentIndex];
          dmg += ApplyModifier(nextCard, attack);
          if (nextCard.rolling === true) dmg -= attack.attackDamage;
          currentIndex++;
        } while (nextCard.rolling === true);
      }
      else if (card1.rolling === true) {
        dmg = isAdv ? dmg1 + dmg2 - attack.attackDamage : dmg2;
      }
      else if (card2.rolling === true) {
        dmg = isAdv ? dmg1 + dmg2 - attack.attackDamage : dmg1;
      }
      else {
        dmg = isAdv ? Math.max(dmg1, dmg2) : Math.min(dmg1, dmg2);
      }
      
      totalDamage += dmg; 
      dmgValues.push(dmg);
      maxDmg = Math.max(maxDmg, dmg);

      if (dmg >= attack.enemyHP) kills++;
      if (dmg < Math.max(attack.attackDamage - Math.max(attack.enemyShield - attack.attackPierce, 0), 0)) negativeDraws++;
    }

    const averageDamage = totalDamage / state.trials;
    const negativeDrawPct = 100 * negativeDraws / state.trials;
    const killPct = 100 * kills / state.trials;

    dispatch({
      type: UPDATE_RESULTS,
      payload: {
        averageDamage: averageDamage,
        negativeDrawPct: negativeDrawPct,
        killPct: killPct,
        dmgValues: dmgValues,
        maxDmg: maxDmg
      }
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        averageDamage: state.averageDamage,
        killPct: state.killPct,
        negativeDrawPct: state.negativeDrawPct,
        trials: state.trials,
        dmgValues: state.dmgValues,
        maxDmg: state.maxDmg,
        setTrials,
        calculateDamage
      }}>
        {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorState;

function ApplyModifier(card, attack) {
  let operation = card.modifier.charAt(0);
  let modifier = parseInt(card.modifier.charAt(1));
  
  switch (operation) {
    case '+':
      return Math.max(attack.attackDamage + modifier - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    case '-':
      return Math.max(attack.attackDamage - modifier - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    case '*':
      return Math.max(attack.attackDamage * modifier - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    default:
      return -1;
  }
}
