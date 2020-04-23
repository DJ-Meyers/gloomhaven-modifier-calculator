import {plus0Base, plus1Base, plus2Base, minus1Base, minus2Base, times0Base, times2Base } from '../cards/base';

export const getKey = card => {
  return `${card.modifier}-${card.source}-${card.effect}-${card.rolling}`;
}

const uniques = [
  { key: getKey(times0Base), card: times0Base, count: 0},
  { key: getKey(minus2Base), card: minus2Base, count: 0},
  { key: getKey(minus1Base), card: minus1Base, count: 0},
  { key: getKey(plus0Base), card: plus0Base, count: 0},
  { key: getKey(plus1Base), card: plus1Base, count: 0},
  { key: getKey(plus2Base), card: plus2Base, count: 0},
  { key: getKey(times2Base), card: times2Base, count: 0},
];

export default uniques;