import React, { useReducer } from 'react';
import DeckContext from './deckContext';
import DeckReducer from './deckReducer';
import { } from '../Types';

const DeckState = props => {

  // Default deck
  const initialState = {
    deck: [],
    discardPile: []
  };

  const [state, dispatch] = useReducer(DeckReducer, initialState);

  // Add a card for a perk or scenario effect
  const addCard = (card) => {

  }  
  
  const discard = (card) => {

  }

  const removeCard = (card) => {

  }

  return (
    <DeckContext.Provider
      value={{
        deck: state.deck,
        discardPile: state.discardPile,
        addCard,
        discard,
        removeCard,
      }}>
        {props.children}
    </DeckContext.Provider>
  );
};

export default DeckState;