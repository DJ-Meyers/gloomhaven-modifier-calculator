import {plus0Base, plus1Base, plus2Base, minus1Base, minus2Base, times0Base, times2Base, baseCards } from '../cards/base';
import { AngryFaceCards } from '../cards/angry face';
import { BruteCards } from '../cards/brute';
import { CragheartCards } from '../cards/cragheart';
import { CthuluCards } from '../cards/cthulu';
import { EclipseCards } from '../cards/eclipse';
import { LightningBoltsCards } from '../cards/lightning bolts';
import { MindthiefCards } from '../cards/mindthief';
import { MusicNotesCards } from '../cards/music notes';

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

  addCards(u, baseCards);
  addCards(u, AngryFaceCards);
  addCards(u, BruteCards);
  addCards(u, CragheartCards);
  addCards(u, CthuluCards);
  addCards(u, EclipseCards);
  addCards(u, LightningBoltsCards);
  addCards(u, MindthiefCards);
  addCards(u, MusicNotesCards);

  return u;
};

const uniques = addUniques();

export default uniques;