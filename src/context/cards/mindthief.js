import Plus2 from '../../gloomhaven/images/attack-modifiers/MT/am-mt-01.png';
import Plus0 from '../../gloomhaven/images/attack-modifiers/MT/am-mt-03.png';
import Plus2Ice from '../../gloomhaven/images/attack-modifiers/MT/am-mt-04.png';
import RollingPlus1 from '../../gloomhaven/images/attack-modifiers/MT/am-mt-06.png';
import RollingPull1 from '../../gloomhaven/images/attack-modifiers/MT/am-mt-10.png';
import RollingMuddle from '../../gloomhaven/images/attack-modifiers/MT/am-mt-13.png';
import RollingImmobilize from '../../gloomhaven/images/attack-modifiers/MT/am-mt-17.png';
import RollingStun from '../../gloomhaven/images/attack-modifiers/MT/am-mt-19.png';
import RollingDisarm from '../../gloomhaven/images/attack-modifiers/MT/am-mt-20.png';

import { none, stun, ice, muddle, immobilize, pull1, disarm } from './effects';

export const plus2MT = { modifier: '+2', effect: none, rolling: false, source: 'mt', img: Plus2 };
export const plus0MT = { modifier: '+0', effect: none, rolling: false, source: 'mt', img: Plus0 };
export const plus2IceMT = { modifier: '+2', effect: ice, rolling: false, source: 'mt', img: Plus2Ice };
export const rollingPlus1MT = { modifier: '+1', effect: none, rolling: true, source: 'mt', img: RollingPlus1 };
export const rollingPull1MT = { modifier: '+0', effect: pull1, rolling: true, source: 'mt', img: RollingPull1 };
export const rollingMuddleMT = { modifier: '+0', effect: muddle, rolling: true, source: 'mt', img: RollingMuddle };
export const rollingImmobilizeMT = { modifier: '+0', effect: immobilize, rolling: true, source: 'mt', img: RollingImmobilize };
export const rollingStunMT = { modifier: '+0', effect: stun, rolling: true, source: 'mt', img: RollingStun };
export const rollingDisarmMT = { modifier: '+0', effect: disarm, rolling: true, source: 'mt', img: RollingDisarm };

export const MindthiefCards = [plus2MT, plus0MT, plus2IceMT, rollingPlus1MT, rollingPull1MT, rollingMuddleMT, rollingImmobilizeMT, rollingStunMT, rollingDisarmMT];