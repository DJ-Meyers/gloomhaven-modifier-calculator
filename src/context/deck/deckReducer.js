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
        console.log(`discard ${card.key}: ${card.count}`);
      });

      // Recalculate unique discarded cards
      state.discardPile.forEach(card => {
        let key = `${card.modifier}-${card.source}-${card.effect}-${card.rolling}`;
        console.log(`discard ${key}`);
        state.discardUniques.forEach(unique => {
          if (key === unique.key) {
            console.log(true);
            unique.count += 1;
          }
          console.log(`discard ${unique.key} ${unique.count}`);
        });
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

      state.discardUniques.forEach(card => {
        console.log(`discard ${card.key}: ${card.count}`);
      })
      return {
        ...state,
        deckUniques: state.deckUniques,
        discardUniques: state.discardUniques
      }
    case DISCARD:
      // Remove card from deck, add it to discardPile
      let index = state.deck.indexOf(action.payload.modifier);

      if (index > -1) {
        state.deck.splice(index, 1);
      }
      state.discardPile.push(action.payload);

      return {
        ...state,
        deck: state.deck,
        discardPile: state.discardPile
      }
    default:
      return state;
  }
};
