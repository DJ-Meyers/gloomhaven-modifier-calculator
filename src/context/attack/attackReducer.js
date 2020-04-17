import { TOGGLE_ADV, TOGGLE_DISADV } from '../Types';

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
    default:
      return state;
  }
};
