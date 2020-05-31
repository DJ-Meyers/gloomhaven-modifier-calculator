import { SET_CLASS, TOGGLE_PERK, RESET_PERKS } from '../Types';

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
    case RESET_PERKS:
      console.log('resetting perks');
      return {
        ...state,
        selectedClass: 
        {
          ...state.selectedClass,
          perks: state.selectedClass.perks.map((perk) => perk = {...perk, checked: perk.checked.map((check, index) => false)}
         )
        }          
      };
    default:
      return state;
  }
};
