import Plus1 from '../../gloomhaven/images/attack-modifiers/PH/am-ph-01.png';
import Plus2 from '../../gloomhaven/images/attack-modifiers/PH/am-ph-02.png';
import Plus1Air from '../../gloomhaven/images/attack-modifiers/PH/am-ph-04.png';
import RollingPoison from '../../gloomhaven/images/attack-modifiers/PH/am-ph-07.png';
import RollingCurse from '../../gloomhaven/images/attack-modifiers/PH/am-ph-10.png';
import RollingImmobilize from '../../gloomhaven/images/attack-modifiers/PH/am-ph-12.png';
import RollingStun from '../../gloomhaven/images/attack-modifiers/PH/am-ph-14.png';
import Plus0 from '../../gloomhaven/images/attack-modifiers/PH/am-ph-16.png';

import { none, air, poison, curse, immobilize, stun } from './effects';

export const plus1PH = { modifier: '+1', effect: none, rolling: false, source: 'ph', img: Plus1 };
export const plus2PH = { modifier: '+2', effect: none, rolling: false, source: 'ph', img: Plus2 };
export const plus1AirPH = { modifier: '+1', effect: air, rolling: false, source: 'ph', img: Plus1Air };
export const rollingPoisonPH = { modifier: '+0', effect: poison, rolling: true, source: 'ph', img: RollingPoison };
export const rollingCursePH = { modifier: '+0', effect: curse, rolling: true, source: 'ph', img: RollingCurse };
export const rollingImmobilizePH = { modifier: '+0', effect: immobilize, rolling: true, source: 'ph', img: RollingImmobilize };
export const rollingStunPH = { modifier: '+0', effect: stun, rolling: true, source: 'ph', img: RollingStun };
export const plus0PH = { modifier: '+0', effect: none, rolling: false, source: 'ph', img: Plus0 };

export const CthuluCards = [plus1PH, plus2PH, plus1AirPH, rollingPoisonPH, rollingCursePH, rollingImmobilizePH, rollingStunPH, plus0PH];