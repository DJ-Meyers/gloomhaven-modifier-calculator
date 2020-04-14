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
            console.log(`deck ${key}++`);
            unique.count += 1;
          }
        });
      });

      // Recalculate unique discarded cards
      state.discardPile.forEach(card => {
        console.log(`${JSON.stringify(card)}`);
        let key = `${card.modifier}-${card.source}-${card.effect}-${card.rolling}`;
        console.log(state.discardUniques);
        state.discardUniques.forEach(unique => {
          console.log(`${unique.key}`);
          if (key === unique.key) {
            console.log(`disc ${key}++`);
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

      let cards = {};
      if (index > -1) {
        cards = state.deck.splice(index, 1);

        state.discardPile.push(cards[0]);
        console.log(state.discardPile);
        console.log(state.deck);
      }

      return {
        ...state,
        deck: state.deck,
        discardPile: state.discardPile
      }
    default:
      return state;
  }
};
