import { 
  DISCARD,
  UNDISCARD,
  UPDATE_UNIQUES,
  APPLY_PERKS
 } from '../Types';

 import { getKey } from './uniques';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_UNIQUES:

      // Reset Counts
      state.deckUniques.forEach(card => {
        card.count = 0;
      });
      state.discardUniques.forEach(card => {
        card.count = 0;
      });

      // Recalculate unique deck cards
      state.deck.forEach(card => {
        let key = getKey(card);
        state.deckUniques.forEach(unique => {
          if (key === unique.key) {
            unique.count += 1;
          }
        });
      });

      // Recalculate unique discarded cards
      state.discardPile.forEach(card => {
        let key = getKey(card);
        state.discardUniques.forEach(unique => {
          if (key === unique.key) {
            unique.count += 1;
          }
        });
      });     

      return {
        ...state,
        deckUniques: state.deckUniques,
        discardUniques: state.discardUniques
      }
    case DISCARD:
      // Remove card from deck, add it to discardPile
      let discardIndex = state.deck.map(function(card) { return card.modifier }).indexOf(action.payload.modifier);

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
      let undiscardIndex = state.discardPile.map(function(card) { return card.modifier }).indexOf(action.payload.modifier);

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
    case APPLY_PERKS:
      let deckCopy = state.startingDeck.slice();

      action.payload.cardsToAdd.forEach(card => {
        deckCopy.splice(0, 0, card);
      });
      // remove
      action.payload.cardsToRemove.forEach(card => {
        let index = deckCopy.findIndex(c => c.modifier === card.modifier && c.effect === card.effect && c.rolling === card.rolling && c.source === card.source);
        deckCopy.splice(index, 1);
      });

      return {
        ...state,
        deck: deckCopy
      }
    default:
      return state;
  }
};
