import {plus0Base, plus1Base, plus2Base, minus1Base, minus2Base, times0Base, times2Base, baseCards } from '../cards/base';
import { DSCards } from '../cards/ds';

export const getKey = card => {
  return `${card.modifier}-${card.source}-${card.effect}-${card.rolling}`;
}
const addCard = (arr, card) => {
  arr.push({ key: getKey(card), card: card, count: 0});
}
const addUniques = () => {
  const u = [];
  baseCards.forEach(card => {
    addCard(u, card);
  });
  DSCards.forEach(card => {
    addCard(u, card);
  });

  return u;
};

const uniques = addUniques();

export default uniques;