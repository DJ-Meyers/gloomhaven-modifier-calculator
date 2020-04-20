import { TOGGLE_ADV, TOGGLE_DISADV, SET_DAMAGE, SET_PIERCE } from '../Types';

export default (state, action) => {
  switch (action.type) {
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
    case SET_DAMAGE:
      console.log(action.payload);
      return {
        ...state,
        attackDamage: action.payload
      };
    case SET_PIERCE:
      console.log(action.payload);
      return {
        ...state,
        attackPierce: action.payload
      };
    default:
      return state;
  }
};
