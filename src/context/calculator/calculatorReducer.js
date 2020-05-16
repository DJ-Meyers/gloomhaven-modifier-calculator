import { UPDATE_RESULTS, SET_TRIALS } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_RESULTS:
      return {
        ...state,
        averageDamage: action.payload.averageDamage,
        killPct: action.payload.killPct,
        negativeDrawPct: action.payload.negativeDrawPct,
        dmgValues: action.payload.dmgValues,
        maxDmg: action.payload.maxDmg,
        effects: action.payload.effects,
        dmgBins: action.payload.dmgBins,
        effectBins: action.payload.effectBins
      };
    case SET_TRIALS:
      return {
        ...state,
        trials: action.payload
      };
    default:
      return state;
  }
};
