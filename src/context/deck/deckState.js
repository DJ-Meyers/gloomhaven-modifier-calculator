import React, { useReducer, useEffect } from 'react';
import DeckContext from './deckContext';
import DeckReducer from './deckReducer';

import { DISCARD, UNDISCARD, UPDATE_UNIQUES, MODIFY_DECK, RESET_DECK } from '../Types';
import startingDeck from './startingDeck';
import uniques from './uniques';
import { bless, curse } from '../cards/base';



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
      type: MODIFY_DECK,
      payload: {
        cardsToAdd,
        cardsToRemove
      }
    });

    updateUniques();
  };

  const applyPerk = (perk) => {

    dispatch({
      type: MODIFY_DECK,
      payload: {
        cardsToAdd: perk.changes.add,
        cardsToRemove: perk.changes.remove
      }
    });
  };

  const undoPerk = (perk) => {

    dispatch({
      type: MODIFY_DECK,
      payload: {
        cardsToAdd: perk.changes.remove,
        cardsToRemove: perk.changes.add
      }
    });
  }

  const addCard = (card) => {
    dispatch({
      type: MODIFY_DECK,
      payload: {
        cardsToAdd: [card,],
        cardsToRemove: []
      }
    });
  };

  const updateUniques = () => {
    dispatch({
      type: UPDATE_UNIQUES,
      payload: null
    })    
  };

  const resetDeck = () => {
    dispatch({
      type: RESET_DECK,
      payload: null
    })
  };

  

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
        applyPerk,
        undoPerk,
        updateUniques,
        addCard,
        resetDeck
      }}>
        {props.children}
    </DeckContext.Provider>
  );
};

export default DeckState;