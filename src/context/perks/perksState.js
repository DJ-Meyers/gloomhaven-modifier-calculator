import React, { useReducer } from 'react';
import PerksContext from './perksContext';
import PerksReducer from './perksReducer';

import {} from '../Types';
import Classes from './Classes';

const PerksState = props => {

  const initialState = {
    classes: Classes
  };

  const [state, dispatch] = useReducer(PerksReducer, initialState);

  console.log(state.classes);

  return (
    <PerksContext.Provider
      value={{
        classes: state.classes
      }}>
        {props.children}
    </PerksContext.Provider>
  );
};

export default PerksState;