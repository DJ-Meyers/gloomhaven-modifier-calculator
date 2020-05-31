import React, { useReducer } from 'react';
import PerksContext from './perksContext';
import PerksReducer from './perksReducer';

import { SET_CLASS, TOGGLE_PERK, RESET_PERKS} from '../Types';
import Classes from './Classes';

const PerksState = props => {

  const initialState = {
    classes: Classes,
    selectedClass: Classes[0]
  };

  const [state, dispatch] = useReducer(PerksReducer, initialState);

  const setClass = (newClass) => {
    dispatch({
      type: SET_CLASS,
      payload: newClass
    });

    
  };

  const togglePerk = (perk, index) => {
    dispatch({
      type: TOGGLE_PERK,
      payload: {
        index: index,
        perk: perk,
        value: perk.checked[index]
      }
    });
  };

  const resetPerks = (selectedClass) => {
    dispatch({
      type: RESET_PERKS,
      payload: {
        selectedClass
      }
    });
  }

  return (
    <PerksContext.Provider
      value={{
        classes: state.classes,
        selectedClass: state.selectedClass,
        setClass,
        togglePerk,
        resetPerks
      }}>
      {props.children}
    </PerksContext.Provider>
  );
};

export default PerksState;