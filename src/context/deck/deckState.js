import React, { useReducer } from 'react';
import DeckContext from './deckContext';
import DeckReducer from './deckReducer';
import { DISCARD, ADD_CARD, UPDATE_UNIQUES} from '../Types';
import Discard from '../../components/deck/Discard';
import startingDeck from './startingDeck';
import uniques from './uniques';

const DeckState = props => {

  // Default deck
  const initialState = {
    deck: startingDeck,
    deckUniques: uniques,
    discardPile: [],
    discardUniques: uniques
  };

  const [state, dispatch] = useReducer(DeckReducer, initialState);

  // Add a card for a perk or scenario effect
  const addCard = (card) => {

  }  
  
  const discard = (card) => {
    console.log('discard from state');
    dispatch({
      type: DISCARD,
      payload: card
    });

    updateUniques();
  }

  const removeCard = (card) => {

  }

  const updateUniques = () => {
    dispatch({
      type: UPDATE_UNIQUES,
      payload: null
    });
  }

  return (
    <DeckContext.Provider
      value={{
        deck: state.deck,
        deckUniques: state.deckUniques,
        discardPile: state.discardPile,
        discardUniques: state.discardUniques,
        addCard,
        discard,
        removeCard,
        updateUniques
      }}>
        {props.children}
    </DeckContext.Provider>
  );
};

export default DeckState;