import React, { useReducer } from 'react';
import CalculatorContext from './calculatorContext';
import CalculatorReducer from './calculatorReducer';
import { UPDATE_RESULTS } from '../Types';

const CalculatorState = props => {

  // Default values for enemy/attack/scenario level etc
  const initialState = {
    averageDamage: null,
    killPct: null,
    negativeDrawPct: null
  };

  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

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
  }

  const calculateNormal = (attack, deck) => {
    let totalDamage = 0;
    let negativeDraws = 0;
    let kills = 0;
    let dmg = attack.attackDamage;
    deck.forEach(card => {

      dmg = ApplyModifier(card, attack.attackDamage);

      totalDamage += dmg;
      if (dmg >= attack.enemyHP) kills++;
      if (dmg < attack.attackDamage) negativeDraws++;

    });
    const averageDamage = totalDamage / deck.length;
    const negativeDrawPct = 100 * negativeDraws / deck.length;
    const killPct = 100 * kills / deck.length;

    dispatch({
      type: UPDATE_RESULTS,
      payload: {
        averageDamage: averageDamage,
        negativeDrawPct: negativeDrawPct,
        killPct: killPct
      }
    });
  };

  const calculateAdvDis = (attack, deck, isAdv) => {
    let totalDamage = 0;
    let negativeDraws = 0;
    let kills = 0;
    let dmg = -1;
    let newDeck = Array.from(deck);
    deck.forEach(card1 => { 
      let cardsDrawn = 2;
      let dmg1 = ApplyModifier(card1, attack.attackDamage);
      newDeck.shift();     

      newDeck.forEach(card2 => {
        let dmg2 = ApplyModifier(card2, attack.attackDamage);

        dmg = isAdv ? Math.max(dmg1, dmg2) : Math.min(dmg1, dmg2);
        totalDamage += dmg;
        if (dmg >= attack.enemyHP) kills++;
        if (dmg < attack.attackDamage) negativeDraws++;
      });
    });

    const combinations = deck.length * (deck.length - 1) / 2;
    const averageDamage = totalDamage / combinations;
    const negativeDrawPct = 100 * negativeDraws / combinations;
    const killPct = 100 * kills / combinations;

    dispatch({
      type: UPDATE_RESULTS,
      payload: {
        averageDamage: averageDamage,
        negativeDrawPct: negativeDrawPct,
        killPct: killPct
      }
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        averageDamage: state.averageDamage,
        killPct: state.killPct,
        negativeDrawPct: state.negativeDrawPct,
        calculateDamage
      }}>
        {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorState;

function ApplyModifier(card, attackDamage) {
  let operation = card.modifier.charAt(0);
  let modifier = parseInt(card.modifier.charAt(1));
  
  switch (operation) {
    case '+':
      return attackDamage + modifier;
    case '-':
      return attackDamage - modifier;
    case '*':
      return attackDamage * modifier;
    default:
      return -1;
  }
}
