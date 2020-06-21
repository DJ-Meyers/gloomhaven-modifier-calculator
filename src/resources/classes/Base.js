import Plus0 from '../images/attack-modifiers/Base/Plus0.png';
import Plus1 from '../images/attack-modifiers/Base/Plus1.png';
import Minus1 from '../images/attack-modifiers/Base/Minus1.png';
import Minus2 from '../images/attack-modifiers/Base/Minus2.png';
import Plus2 from '../images/attack-modifiers/Base/Plus2.png';
import Times0 from '../images/attack-modifiers/Base/Times0.png';
import Times2 from '../images/attack-modifiers/Base/Times2.png';
import Bless from '../images/attack-modifiers/Base/Bless.png';
import Curse from '../images/attack-modifiers/Base/Curse.png';
import PlayerMinus1 from '../images/attack-modifiers/Base/PlayerMinus1.png';

import BaseIcon from '../images/icons/characters/Base.png';

import { none } from '../general/effects';

export const plus0Base = { modifier: '+0', effect: [none], rolling: false, source: 'base', img: Plus0 };
export const plus1Base = { modifier: '+1', effect: [none], rolling: false, source: 'base', img: Plus1 };
export const minus1Base = { modifier: '-1', effect: [none], rolling: false, source: 'base', img: Minus1 };
export const plus2Base = { modifier: '+2', effect: [none], rolling: false, source: 'base', img: Plus2 };
export const minus2Base = { modifier: '-2', effect: [none], rolling: false, source: 'base', img: Minus2 };
export const times2Base = { modifier: '*2', effect: [none], rolling: false, source: 'base', img: Times2 };
export const times0Base = { modifier: '*0', effect: [none], rolling: false, source: 'base', img: Times0 };
export const bless = { modifier: '*2', effect: [none], rolling: false, source: 'special', img: Bless };
export const curse = { modifier: '*0', effect: [none], rolling: false, source: 'special', img: Curse };
export const playerMinus1 = { modifier: '-1', effect: [none], rolling: false, source: 'special', img: PlayerMinus1 };

const BaseCards = [times0Base, minus2Base, minus1Base, plus0Base, plus1Base, plus2Base, times2Base, bless, curse, playerMinus1];

export default { 
  key: 'base', 
  text: 'Base', 
  value: 'Base', 
  cards: BaseCards, 
  image: { avatar: false, src: BaseIcon},
  perks: [],
};