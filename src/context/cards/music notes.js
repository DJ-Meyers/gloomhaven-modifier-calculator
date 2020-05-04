import Plus1Immobilize from '../../gloomhaven/images/attack-modifiers/SS/am-ss-01.png';
import Plus1Disarm from '../../gloomhaven/images/attack-modifiers/SS/am-ss-02.png';
import Plus2Wound from '../../gloomhaven/images/attack-modifiers/SS/am-ss-03.png';
import Plus2Poison from '../../gloomhaven/images/attack-modifiers/SS/am-ss-04.png';
import Plus2Curse from '../../gloomhaven/images/attack-modifiers/SS/am-ss-05.png';
import Plus3Muddle from '../../gloomhaven/images/attack-modifiers/SS/am-ss-06.png';
import Stun from '../../gloomhaven/images/attack-modifiers/SS/am-ss-07.png';
import RollingPlus1 from '../../gloomhaven/images/attack-modifiers/SS/am-ss-08.png';
import RollingCurse from '../../gloomhaven/images/attack-modifiers/SS/am-ss-11.png';
import Plus4 from '../../gloomhaven/images/attack-modifiers/SS/am-ss-15.png';

import { none, immobilize, disarm, wound, poison, curse, muddle, stun  } from './effects';

export const plus1ImmobilizeSS = { modifier: '+1', effect: immobilize, rolling: false, source: 'ss', img: Plus1Immobilize };
export const plus1DisarmSS = { modifier: '+1', effect: disarm, rolling: false, source: 'ss', img: Plus1Disarm };
export const plus2WoundSS = { modifier: '+2', effect: wound, rolling: false, source: 'ss', img: Plus2Wound };
export const plus2PoisonSS = { modifier: '+2', effect: poison, rolling: false, source: 'ss', img: Plus2Poison };
export const plus2CurseSS = { modifier: '+2', effect: curse, rolling: false, source: 'ss', img: Plus2Curse };
export const plus3MuddleSS = { modifier: '+3', effect: muddle, rolling: false, source: 'ss', img: Plus3Muddle };
export const stunSS = { modifier: '+0', effect: stun, rolling: false, source: 'ss', img: Stun };
export const plus4SS = { modifier: '+4', effect: none, rolling: false, source: 'ss', img: Plus4 };
export const rollingPlus1SS = { modifier: '+1', effect: none, rolling: true, source: 'ss', img: RollingPlus1 };
export const rollingCurseSS = { modifier: '+0', effect: curse, rolling: true, source: 'ss', img: RollingCurse };

export const MusicNotesCards = [plus1ImmobilizeSS, plus1DisarmSS, plus2WoundSS, plus2PoisonSS, plus2CurseSS, plus3MuddleSS, stunSS, plus4SS, rollingPlus1SS, rollingCurseSS];