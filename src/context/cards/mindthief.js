import Plus2 from '../../assets/images/attack-modifiers/Mindthief/Plus2.png';
import Plus0 from '../../assets/images/attack-modifiers/Mindthief/Plus0.png';
import Plus2Ice from '../../assets/images/attack-modifiers/Mindthief/Plus2Ice.png';
import RollingPlus1 from '../../assets/images/attack-modifiers/Mindthief/RollingPlus1.png';
import RollingPull1 from '../../assets/images/attack-modifiers/Mindthief/RollingPull1.png';
import RollingMuddle from '../../assets/images/attack-modifiers/Mindthief/RollingMuddle.png';
import RollingImmobilize from '../../assets/images/attack-modifiers/Mindthief/RollingImmobilize.png';
import RollingStun from '../../assets/images/attack-modifiers/Mindthief/RollingStun.png';
import RollingDisarm from '../../assets/images/attack-modifiers/Mindthief/RollingDisarm.png';

import { none, stun, ice, muddle, immobilize, pull, disarm } from './effects';

export const plus2MT = { modifier: '+2', effect: none, rolling: false, source: 'mt', img: Plus2 };
export const plus0MT = { modifier: '+0', effect: none, rolling: false, source: 'mt', img: Plus0 };
export const plus2IceMT = { modifier: '+2', effect: ice, rolling: false, source: 'mt', img: Plus2Ice };
export const rollingPlus1MT = { modifier: '+1', effect: none, rolling: true, source: 'mt', img: RollingPlus1 };
export const rollingPull1MT = { modifier: '+0', effect: pull, rolling: true, source: 'mt', img: RollingPull1 };
export const rollingMuddleMT = { modifier: '+0', effect: muddle, rolling: true, source: 'mt', img: RollingMuddle };
export const rollingImmobilizeMT = { modifier: '+0', effect: immobilize, rolling: true, source: 'mt', img: RollingImmobilize };
export const rollingStunMT = { modifier: '+0', effect: stun, rolling: true, source: 'mt', img: RollingStun };
export const rollingDisarmMT = { modifier: '+0', effect: disarm, rolling: true, source: 'mt', img: RollingDisarm };

export const MindthiefCards = [plus2MT, plus0MT, plus2IceMT, rollingPlus1MT, rollingPull1MT, rollingMuddleMT, rollingImmobilizeMT, rollingStunMT, rollingDisarmMT];