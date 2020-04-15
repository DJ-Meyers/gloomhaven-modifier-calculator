import React, { useReducer } from 'react';
import DeckContext from './deckContext';
import DeckReducer from './deckReducer';
import { DISCARD, UNDISCARD, ADD_CARD, UPDATE_UNIQUES} from '../Types';
import Discard from '../../components/deck/Discard';
import startingDeck from './startingDeck';
import uniques from './uniques';

// Card Images
import Plus0 from 'gloomhaven/images/attack-modifiers/base/player/am-p-01.png';
import Plus1 from 'gloomhaven/images/attack-modifiers/base/player/am-p-07.png';
import Minus1 from 'gloomhaven/images/attack-modifiers/base/player/am-p-12.png';
import Minus2 from 'gloomhaven/images/attack-modifiers/base/player/am-p-17.png';
import Plus2 from 'gloomhaven/images/attack-modifiers/base/player/am-p-18.png';
import Miss from 'gloomhaven/images/attack-modifiers/base/player/am-p-19.png';
import Times2 from 'gloomhaven/images/attack-modifiers/base/player/am-p-20.png';

const DeckState = props => {

  // Default deck
  const initialState = {
    deck: startingDeck,
    deckUniques: [],
    discardPile: [],
    discardUniques: []
  };

  //Initialize
  uniques.forEach((u) => { 
    initialState.deckUniques.push({ key: u.key, modifier: u.modifier, effect: u.effect, rolling: u.rolling, source: u.source, count: 0});
    initialState.discardUniques.push({ key: u.key, modifier: u.modifier, effect: u.effect, rolling: u.rolling, source: u.source, count: 0});
  });

  const [state, dispatch] = useReducer(DeckReducer, initialState);

  // Add a card for a perk or scenario effect
  const addCard = (card) => {

  }  
  
  const discard = (card) => {
    dispatch({
      type: DISCARD,
      payload: card
    });

    updateUniques();
  }

  const undiscard = (card) => {
    dispatch({
      type: UNDISCARD,
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
    })    
  }

  const getUrl = (card) => {
    if (card.source == 'base') {
      switch (card.modifier) {
        case '+0':
          return Plus0;
        case '+1':
          return Plus1;
        case '-1':
          return Minus1;
        case '+2':
          return Plus2;
        case '-2':
          return Minus2;
        case '*0':
          return Miss;
        case '*2':
          return Times2;
        default:
          return Plus0;
      }
    }
  };

  return (
    <DeckContext.Provider
      value={{
        deck: state.deck,
        deckUniques: state.deckUniques,
        discardPile: state.discardPile,
        discardUniques: state.discardUniques,
        addCard,
        discard,
        undiscard,
        removeCard,
        updateUniques,
        getUrl
      }}>
        {props.children}
    </DeckContext.Provider>
  );
};

export default DeckState;