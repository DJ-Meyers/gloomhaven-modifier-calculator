import React, { useReducer } from 'react';
import AttackContext from './attackContext';
import attackReducer from './attackReducer';
import { SET_DAMAGE, SET_PIERCE, TOGGLE_ADV, TOGGLE_DISADV, SET_HP, SET_SHIELD } from '../Types';

const AttackState = props => {

  // Default values for enemy/attack/scenario level etc
  const initialState = {
    attackDamage: 3,
    attackPierce: 0,
    enemyHP: 4,
    enemyShield: 0,
    advantage: false,
    disadvantage: false
  };

  const [state, dispatch] = useReducer(attackReducer, initialState);

  // ==== Advantage ================================
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

  // ==== Attack ===================================
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
  };

  // ==== Enemy ====================================
  const setEnemyHP = (hp) => {
    dispatch({
      type: SET_HP,
      payload: hp
    });
  };

  const setEnemyShield = (shield) => {
    dispatch({
      type: SET_SHIELD,
      payload: shield
    });
  };

  return (
    <AttackContext.Provider
      value={{
        advantage: state.advantage,
        disadvantage: state.disadvantage,
        attackDamage: state.attackDamage,
        attackPierce: state.attackPierce,
        enemyHP: state.enemyHP,
        enemyShield: state.enemyShield,
        toggle,
        setDamage,
        setPierce,
        setEnemyHP,
        setEnemyShield
      }}>
        {props.children}
    </AttackContext.Provider>
  );
};

export default AttackState;