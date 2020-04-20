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
      console.log('Attack at Advantage');
    }
    else if (attack.disadvantage === true) {
      console.log('Attack at Disadvantage');
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

      let operation = card.modifier.charAt(0);
      let modifier = parseInt(card.modifier.charAt(1));

      if (operation === '+') {
        dmg = attack.attackDamage + modifier;
      }
      else if (operation === '-') {
        dmg = attack.attackDamage - modifier;
        
        negativeDraws++;
      }
      else if (operation === '*') {
        dmg = attack.attackDamage * modifier;
        
        if (modifier === 0) negativeDraws++;
      }

      totalDamage += dmg;
      if (dmg >= attack.enemyHP) kills++;

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