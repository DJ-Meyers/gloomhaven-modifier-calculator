import { 
  DISCARD,
  UNDISCARD,
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
      console.log(action.payload);
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
    default:
      return state;
  }
};
