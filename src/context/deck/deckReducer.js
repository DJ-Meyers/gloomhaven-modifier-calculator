import { 
  DISCARD,
  ADD_CARD,
  UPDATE_UNIQUES
 } from '../Types';

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
        let key = `${card.modifier}-${card.source}-${card.effect}-${card.rolling}`;
        state.deckUniques.forEach(unique => {
          if (key === unique.key) {
            unique.count += 1;
          }
        });
      });

      // Recalculate unique discarded cards
      state.discardPile.forEach(card => {
        let key = `${card.modifier}-${card.source}-${card.effect}-${card.rolling}`;
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
      let index = state.deck.map(function(card) { return card.modifier }).indexOf(action.payload.modifier);

      let newDeck = state.deck.slice();
      let newDiscard = state.discardPile.slice();
      let cards = {};
      if (index > -1) {
        cards = newDeck.splice(index, 1);

        newDiscard.push(cards[0]);
      }

      return {
        ...state,
        deck: newDeck,
        discardPile: newDiscard
      }
    default:
      return state;
  }
};
