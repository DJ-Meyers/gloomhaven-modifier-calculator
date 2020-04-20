import { UPDATE_RESULTS } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_RESULTS:
      return {
        ...state,
        averageDamage: action.payload.averageDamage,
        killPct: action.payload.killPct,
        negativeDrawPct: action.payload.negativeDrawPct
      };
    default:
      return state;
  }
};
