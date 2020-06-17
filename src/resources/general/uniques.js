
import ClassList from '../../resources/classes/All Classes';

export const getKey = card => {
  return `${card.modifier}-${card.source}-${card.effect}-${card.rolling}`;
}
const addCard = (arr, card) => {
  arr.push({ key: getKey(card), card: card, count: 0});
};

const addCards = (u, cards) => {
  cards.forEach(card => {
    addCard(u, card);
  });
};

const addUniques = () => {
  const u = [];

  ClassList.forEach(c => {
    addCards(u, c.cards);
  });

  return u;
};

const uniques = addUniques();

export default uniques;