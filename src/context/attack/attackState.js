import React, { useReducer } from 'react';
import AttackContext from './attackContext';
import attackReducer from './attackReducer';
import { UPDATE_DAMAGE, TOGGLE_ADV, TOGGLE_DISADV } from '../Types';

const AttackState = props => {

  // Default values for enemy/attack/scenario level etc
  const initialState = {
    attackDamage: 3,
    attackPierce: 0,
    enemyShield: 0,
    advantage: false,
    disadvantage: false
  };

  const [state, dispatch] = useReducer(attackReducer, initialState);

  const updateDamage = (damage) => {
    dispatch({
      type: UPDATE_DAMAGE,
      payload: damage
    });
  };

  const toggle = (value, name) => {
    if (name === 'advantage') {
      dispatch({
        type: TOGGLE_ADV,
        payload: value
      });
    }
    else if (name === 'disadvantage') {
      dispatch({
        type: TOGGLE_DISADV,
        payload: value
      });
    }
  };

  return (
    <AttackContext.Provider
      value={{
        attackDamage: state.attackDamage,
        attackPierce: state.attackPierce,
        enemyShield: state.enemyShield,
        advantage: state.advantage,
        disadvantage: state.disadvantage,
        updateDamage,
        toggle
      }}>
        {props.children}
    </AttackContext.Provider>
  );
};

export default AttackState;