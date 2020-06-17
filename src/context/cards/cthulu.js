import Plus1 from '../../resources/images/attack-modifiers/Cthulu/Plus1.png';
import Plus2 from '../../resources/images/attack-modifiers/Cthulu/Plus2.png';
import Plus1Air from '../../resources/images/attack-modifiers/Cthulu/Plus1Air.png';
import RollingPoison from '../../resources/images/attack-modifiers/Cthulu/RollingPoison.png';
import RollingCurse from '../../resources/images/attack-modifiers/Cthulu/RollingCurse.png';
import RollingImmobilize from '../../resources/images/attack-modifiers/Cthulu/RollingImmobilize.png';
import RollingStun from '../../resources/images/attack-modifiers/Cthulu/RollingStun.png';
import Plus0 from '../../resources/images/attack-modifiers/Cthulu/Plus0.png';

import { none, air, poison, curse, immobilize, stun } from '../../resources/general/effects';

export const plus1PH = { modifier: '+1', effect: none, rolling: false, source: 'ph', img: Plus1 };
export const plus2PH = { modifier: '+2', effect: none, rolling: false, source: 'ph', img: Plus2 };
export const plus1AirPH = { modifier: '+1', effect: air, rolling: false, source: 'ph', img: Plus1Air };
export const rollingPoisonPH = { modifier: '+0', effect: poison, rolling: true, source: 'ph', img: RollingPoison };
export const rollingCursePH = { modifier: '+0', effect: curse, rolling: true, source: 'ph', img: RollingCurse };
export const rollingImmobilizePH = { modifier: '+0', effect: immobilize, rolling: true, source: 'ph', img: RollingImmobilize };
export const rollingStunPH = { modifier: '+0', effect: stun, rolling: true, source: 'ph', img: RollingStun };
export const plus0PH = { modifier: '+0', effect: none, rolling: false, source: 'ph', img: Plus0 };

export const CthuluCards = [plus1PH, plus2PH, plus1AirPH, rollingPoisonPH, rollingCursePH, rollingImmobilizePH, rollingStunPH, plus0PH];