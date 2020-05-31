import Plus0 from '../../gloomhaven/images/attack-modifiers/base/player/am-p-01.png';
import Plus1 from '../../gloomhaven/images/attack-modifiers/base/player/am-p-07.png';
import Minus1 from '../../gloomhaven/images/attack-modifiers/base/player/am-p-12.png';
import Minus2 from '../../gloomhaven/images/attack-modifiers/base/player/am-p-17.png';
import Plus2 from '../../gloomhaven/images/attack-modifiers/base/player/am-p-18.png';
import Times0 from '../../gloomhaven/images/attack-modifiers/base/player/am-p-19.png';
import Times2 from '../../gloomhaven/images/attack-modifiers/base/player/am-p-20.png';
import Bless from '../../gloomhaven/images/attack-modifiers/base/player-mod/am-pm-01.png';
import Curse from '../../gloomhaven/images/attack-modifiers/base/player-mod/am-pm-21.png';

import { none } from './effects';

export const plus0Base = { modifier: '+0', effect: none, rolling: false, source: 'base', img: Plus0 };
export const plus1Base = { modifier: '+1', effect: none, rolling: false, source: 'base', img: Plus1 };
export const minus1Base = { modifier: '-1', effect: none, rolling: false, source: 'base', img: Minus1 };
export const plus2Base = { modifier: '+2', effect: none, rolling: false, source: 'base', img: Plus2 };
export const minus2Base = { modifier: '-2', effect: none, rolling: false, source: 'base', img: Minus2 };
export const times2Base = { modifier: '*2', effect: none, rolling: false, source: 'base', img: Times2 };
export const times0Base = { modifier: '*0', effect: none, rolling: false, source: 'base', img: Times0 };
export const bless = { modifier: '*2', effect: none, rolling: false, source: 'special', img: Bless };
export const curse = { modifier: '*0', effect: none, rolling: false, source: 'special', img: Curse };

export const BaseCards = [plus0Base, plus1Base, minus1Base, plus2Base, minus2Base, times2Base, times0Base, bless, curse];