import Plus1Immobilize from '../../assets/images/attack-modifiers/Music Notes/Plus1Immobilize.png';
import Plus1Disarm from '../../assets/images/attack-modifiers/Music Notes/Plus1Disarm.png';
import Plus2Wound from '../../assets/images/attack-modifiers/Music Notes/Plus2Wound.png';
import Plus2Poison from '../../assets/images/attack-modifiers/Music Notes/Plus2Poison.png';
import Plus2Curse from '../../assets/images/attack-modifiers/Music Notes/Plus2Curse.png';
import Plus3Muddle from '../../assets/images/attack-modifiers/Music Notes/Plus3Muddle.png';
import Plus0Stun from '../../assets/images/attack-modifiers/Music Notes/Plus0Stun.png';
import RollingPlus1 from '../../assets/images/attack-modifiers/Music Notes/RollingPlus1.png';
import RollingCurse from '../../assets/images/attack-modifiers/Music Notes/RollingCurse.png';
import Plus4 from '../../assets/images/attack-modifiers/Music Notes/Plus4.png';

import { none, immobilize, disarm, wound, poison, curse, muddle, stun  } from './effects';

export const plus1ImmobilizeSS = { modifier: '+1', effect: immobilize, rolling: false, source: 'ss', img: Plus1Immobilize };
export const plus1DisarmSS = { modifier: '+1', effect: disarm, rolling: false, source: 'ss', img: Plus1Disarm };
export const plus2WoundSS = { modifier: '+2', effect: wound, rolling: false, source: 'ss', img: Plus2Wound };
export const plus2PoisonSS = { modifier: '+2', effect: poison, rolling: false, source: 'ss', img: Plus2Poison };
export const plus2CurseSS = { modifier: '+2', effect: curse, rolling: false, source: 'ss', img: Plus2Curse };
export const plus3MuddleSS = { modifier: '+3', effect: muddle, rolling: false, source: 'ss', img: Plus3Muddle };
export const plus0StunSS = { modifier: '+0', effect: stun, rolling: false, source: 'ss', img: Plus0Stun };
export const plus4SS = { modifier: '+4', effect: none, rolling: false, source: 'ss', img: Plus4 };
export const rollingPlus1SS = { modifier: '+1', effect: none, rolling: true, source: 'ss', img: RollingPlus1 };
export const rollingCurseSS = { modifier: '+0', effect: curse, rolling: true, source: 'ss', img: RollingCurse };

export const MusicNotesCards = [plus1ImmobilizeSS, plus1DisarmSS, plus2WoundSS, plus2PoisonSS, plus2CurseSS, plus3MuddleSS, plus0StunSS, plus4SS, rollingPlus1SS, rollingCurseSS];