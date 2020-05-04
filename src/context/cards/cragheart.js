import Plus1 from '../../gloomhaven/images/attack-modifiers/CH/am-ch-01.png';
import Minus2 from '../../gloomhaven/images/attack-modifiers/CH/am-ch-04.png';
import Plus2 from '../../gloomhaven/images/attack-modifiers/CH/am-ch-05.png';
import Plus1Immobilize from '../../gloomhaven/images/attack-modifiers/CH/am-ch-07.png';
import Plus2Muddle from '../../gloomhaven/images/attack-modifiers/CH/am-ch-09.png';
import RollingPush2 from '../../gloomhaven/images/attack-modifiers/CH/am-ch-11.png';
import RollingEarth from '../../gloomhaven/images/attack-modifiers/CH/am-ch-13.png';
import RollingAir from '../../gloomhaven/images/attack-modifiers/CH/am-ch-17.png';

import { none, immobilize, muddle, push2, earth, air } from './effects';

export const plus1CH = { modifier: '+1', effect: none, rolling: false, source: 'ch', img: Plus1 };
export const minus2CH = { modifier: '-2', effect: none, rolling: false, source: 'ch', img: Minus2 };
export const plus2CH = { modifier: '+2', effect: none, rolling: false, source: 'ch', img: Plus2 };
export const plus1ImmobilizeCH = { modifier: '+1', effect: immobilize, rolling: false, source: 'ch', img: Plus1Immobilize };
export const plus2MuddleCH = { modifier: '+2', effect: muddle, rolling: false, source: 'ch', img: Plus2Muddle };
export const rollingPush2CH = { modifier: '+0', effect: push2, rolling: true, source: 'ch', img: RollingPush2 };
export const rollingEarthCH = { modifier: '+0', effect: earth, rolling: true, source: 'ch', img: RollingEarth };
export const rollingAirCH = { modifier: '+0', effect: air, rolling: true, source: 'ch', img: RollingAir };

export const CragheartCards = [plus1CH, minus2CH, plus2CH, plus1ImmobilizeCH, plus2MuddleCH, rollingPush2CH, rollingEarthCH, rollingAirCH];