import { TOGGLE_ADV, TOGGLE_DISADV, SET_DAMAGE, SET_PIERCE, SET_HP, SET_SHIELD } from '../Types';

export default (state, action) => {
  switch (action.type) {
    // ==== Advantage ================================
    case TOGGLE_ADV:
      const newAdv = !state.advantage;
      return {
        ...state,
        advantage: newAdv,
        disadvantage: state.disadvantage && newAdv === true ? false : state.disadvantage
      };
    case TOGGLE_DISADV:
      const newDisadv = !state.disadvantage;
      return {
        ...state,
        advantage: state.advantage && newDisadv === true ? false : state.advantage,
        disadvantage: newDisadv
      };
    // ==== Attack ===================================
    case SET_DAMAGE:
      return {
        ...state,
        attackDamage: action.payload
      };
    case SET_PIERCE:
      return {
        ...state,
        attackPierce: action.payload
      };
    // ==== Enemy ====================================
    case SET_HP:
      return {
        ...state,
        enemyHP: action.payload
      };
    case SET_SHIELD:
      return {
        ...state,
        enemyShield: action.payload
      };
    default:
      return state;
  }
};
