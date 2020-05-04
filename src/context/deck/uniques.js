import {plus0Base, plus1Base, plus2Base, minus1Base, minus2Base, times0Base, times2Base, baseCards } from '../cards/base';
import { DSCards } from '../cards/angry face';
import { BRCards } from '../cards/brute';
import { CHCards } from '../cards/cragheart';
import { PHCards } from '../cards/cthulu';
import { NSCards } from '../cards/eclipse';
import { BECards } from '../cards/lightning bolts';

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
  BRCards.forEach(card => {
    addCard(u, card);
  });
  CHCards.forEach(card => {
    addCard(u, card);
  });
  PHCards.forEach(card => {
    addCard(u, card);
  });
  NSCards.forEach(card => {
    addCard(u, card);
  });
  BECards.forEach(card => {
    addCard(u, card);
  });

  return u;
};

const uniques = addUniques();

export default uniques;