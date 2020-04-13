import React, { useReducer } from 'react';
import CalculatorContext from './calculatorContext';
import CalculatorReducer from './calculatorReducer';
import { } from '../Types';

const CalculatorState = props => {

  // Default values for enemy/attack/scenario level etc
  const initialState = {

  };

  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  const calculateDamage = (attack, enemy, deck, adv) => {
    // Calculate the damage
  }

  return (
    <CalculatorState.Provider
      value={{
        attack
      }}>
        {props.children}
    </CalculatorState.Provider>
  );
};