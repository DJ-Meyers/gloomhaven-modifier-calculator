import { SET_CLASS, APPLY_PERK, TOGGLE_PERK } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case SET_CLASS:
      return {
        ...state,
        selectedClass: action.payload
      }
    case TOGGLE_PERK:
      return {
        ...state,
        selectedClass: 
        {
          ...state.selectedClass,
          perks: state.selectedClass.perks.map((perk) => perk.text === action.payload.perk.text ? 
          {...perk, checked: perk.checked.map((check, index) => index === action.payload.index ? 
            !action.payload.value 
            : check) }
          : perk)
        }
          
      }
    default:
      return state;
  }
};
