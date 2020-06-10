import Plus1 from '../../assets/images/attack-modifiers/Angry Face/Plus1.png';
import RollingPlus1 from '../../assets/images/attack-modifiers/Angry Face/RollingPlus1.png';
import Plus2Muddle from '../../assets/images/attack-modifiers/Angry Face/Plus2Muddle.png';
import Plus1Poison from '../../assets/images/attack-modifiers/Angry Face/Plus1Poison.png';
import Plus1Wound from '../../assets/images/attack-modifiers/Angry Face/Plus1Wound.png';
import Plus1Immobilize from '../../assets/images/attack-modifiers/Angry Face/Plus1Immobilize.png';
import Stun from '../../assets/images/attack-modifiers/Angry Face/Plus0Stun.png';
import RollingAddTarget from '../../assets/images/attack-modifiers/Angry Face/RollingAddTarget.png';

import { none, muddle, poison, wound, immobilize, stun, addTarget } from './effects';

export const plus1DS = { modifier: '+1', effect: none, rolling: false, source: 'ds', img: Plus1 };
export const rollingPlus1DS = { modifier: '+1', effect: none, rolling: true, source: 'ds', img: RollingPlus1 };
export const plus2MuddleDS = { modifier: '+2', effect: muddle, rolling: false, source: 'ds', img: Plus2Muddle };
export const plus1PoisonDS = { modifier: '+1', effect: poison, rolling: false, source: 'ds', img: Plus1Poison };
export const plus1WoundDS = { modifier: '+1', effect: wound, rolling: false, source: 'ds', img: Plus1Wound };
export const plus1ImmobilizeDS = { modifier: '+1', effect: immobilize, rolling: false, source: 'ds', img: Plus1Immobilize };
export const plus0StunDS = { modifier: '+0', effect: stun, rolling: false, source: 'ds', img: Stun };
export const rollingAddTargetDS = { modifier: '+0', effect: addTarget, rolling: false, source: 'ds', img: RollingAddTarget };

export const AngryFaceCards = [plus1DS, rollingPlus1DS, plus2MuddleDS, plus1PoisonDS, plus1WoundDS, plus1ImmobilizeDS, plus0StunDS, rollingAddTargetDS];