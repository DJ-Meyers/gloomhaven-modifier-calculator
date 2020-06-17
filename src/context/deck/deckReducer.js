import { 
  DISCARD,
  UNDISCARD,
  UPDATE_UNIQUES,
  MODIFY_DECK,
  RESET_DECK
 } from '../Types';

 import { getKey } from '../../resources/general/uniques';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_UNIQUES:

      let uniqueDeck = state.deckUniques.slice();
      let uniqueDiscardPile = state.discardUniques.slice();
      // Reset Counts
      uniqueDeck.forEach(card => {
        card.count = 0;
      });
      uniqueDiscardPile.forEach(card => {
        card.count = 0;
      });

      // Recalculate unique deck cards
      state.deck.forEach(card => {
        let key = getKey(card);
        uniqueDeck.forEach(unique => {
          if (key === unique.key) {
            unique.count += 1;
          }
        });
      });

      // Recalculate unique discarded cards
      state.discardPile.forEach(card => {
        let key = getKey(card);
        uniqueDiscardPile.forEach(unique => {
          if (key === unique.key) {
            unique.count += 1;
          }
        });
      });     

      return {
        ...state,
        deckUniques: uniqueDeck,
        discardUniques: uniqueDiscardPile
      }
    case DISCARD:
      // Remove card from deck, add it to discardPile
      let discardIndex = state.deck.map(c => c).indexOf(action.payload);

      let discardDeck = state.deck.slice();
      let discardDiscard = state.discardPile.slice();

      if (discardIndex > -1) {
        const card = discardDeck.splice(discardIndex, 1)[0];
        discardDiscard.push(card);
      }

      return {
        ...state,
        deck: discardDeck,
        discardPile: discardDiscard
      }
    case UNDISCARD:
      let undiscardIndex = state.discardPile.map(c => c).indexOf(action.payload);

      let undiscardDeck = state.deck.slice();
      let undiscardDiscard = state.discardPile.slice();

      if (undiscardIndex > -1) {
        const card = undiscardDiscard.splice(undiscardIndex, 1)[0];
        undiscardDeck.push(card);
      }

      return {
        ...state,
        deck: undiscardDeck,
        discardPile: undiscardDiscard
      }
    case MODIFY_DECK:
      let perksCopy = state.deck.slice();

      action.payload.cardsToAdd.forEach(card => {
        perksCopy.splice(0, 0, card);
      });
      
      // remove
      action.payload.cardsToRemove.forEach(card => {
        let index = perksCopy.findIndex(c => c.modifier === card.modifier && c.effect === card.effect && c.rolling === card.rolling && c.source === card.source);
        perksCopy.splice(index, 1);
      });

      return {
        ...state,
        deck: perksCopy
      };
    case RESET_DECK:
      return {
        ...state,
        deck: state.startingDeck,
        discardPile: []
      }
    default:
      return state;
  }
};
