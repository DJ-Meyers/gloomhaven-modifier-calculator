import React, { useReducer } from 'react';
import AttackContext from './attackContext';
import attackReducer from './attackReducer';
import { SET_DAMAGE, SET_PIERCE, TOGGLE_ADV, TOGGLE_DISADV } from '../Types';

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

  const setDamage = (damage) => {
    dispatch({
      type: SET_DAMAGE,
      payload: damage
    });
  };

  const setPierce = (pierce) => {
    dispatch({
      type: SET_PIERCE,
      payload: pierce
    });
  }

  return (
    <AttackContext.Provider
      value={{
        attackDamage: state.attackDamage,
        attackPierce: state.attackPierce,
        enemyShield: state.enemyShield,
        advantage: state.advantage,
        disadvantage: state.disadvantage,
        toggle,
        setDamage,
        setPierce
      }}>
        {props.children}
    </AttackContext.Provider>
  );
};

export default AttackState;