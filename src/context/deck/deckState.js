import React, { useReducer, useContext, useEffect } from 'react';
import DeckContext from './deckContext';
import DeckReducer from './deckReducer';

import { DISCARD, UNDISCARD, UPDATE_UNIQUES, APPLY_PERKS } from '../Types';
import startingDeck from './startingDeck';
import uniques from './uniques';



const DeckState = props => {

  // Default deck
  const initialState = {
    deck: startingDeck.slice(),
    startingDeck: startingDeck,
    deckUniques: [],
    discardPile: [],
    discardUniques: []
  };

  const [state, dispatch] = useReducer(DeckReducer, initialState);
  
  //Initialize
  uniques.forEach((u) => { 
    initialState.deckUniques.push({ key: u.key, card: u.card, count: 0});
    initialState.discardUniques.push({ key: u.key, card: u.card, count: 0});
  });
  
  useEffect(() => {
    updateUniques()
  }, [state.deck, state.discardPile]);

  const discard = (unique) => {
    dispatch({
      type: DISCARD,
      payload: unique.card
    });
  }

  const undiscard = (unique) => {
    dispatch({
      type: UNDISCARD,
      payload: unique.card
    });
  }

  const applyPerks = (selectedClass) => {
    let cardsToAdd = [];
    let cardsToRemove = [];

    selectedClass.perks.forEach(perk => {
      perk.checked.forEach(check => {
        if (check === true)
        {
          perk.changes.add.forEach(card => {
            cardsToAdd.push(card);
          });
          perk.changes.remove.forEach(card => {
            cardsToRemove.push(card);
          });
        }
      });
    });

    dispatch({
      type: APPLY_PERKS,
      payload: {
        cardsToAdd,
        cardsToRemove
      }
    })

    updateUniques();
  };

  const updateUniques = () => {
    dispatch({
      type: UPDATE_UNIQUES,
      payload: null
    })    
  }

  

  return (
    <DeckContext.Provider
      value={{
        deck: state.deck,
        deckUniques: state.deckUniques,
        discardPile: state.discardPile,
        discardUniques: state.discardUniques,
        discard,
        undiscard,
        applyPerks,
        updateUniques,
      }}>
        {props.children}
    </DeckContext.Provider>
  );
};

export default DeckState;