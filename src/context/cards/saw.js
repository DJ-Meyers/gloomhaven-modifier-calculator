import RollingPlus2 from '../../gloomhaven/images/attack-modifiers/SB/am-sb-01.png';
import Plus1Immobilize from '../../gloomhaven/images/attack-modifiers/SB/am-sb-03.png';
import RollingWound from '../../gloomhaven/images/attack-modifiers/SB/am-sb-05.png';
import RollingStun from '../../gloomhaven/images/attack-modifiers/SB/am-sb-09.png';
import RollingHeal3Self from '../../gloomhaven/images/attack-modifiers/SB/am-sb-10.png';
import RefreshItem from '../../gloomhaven/images/attack-modifiers/SB/am-sb-12.png';
import Plus2 from '../../gloomhaven/images/attack-modifiers/SB/am-sb-13.png';

import { none, immobilize, wound, heal3Self, stun, refreshItem  } from './effects';

export const plus2SB = { modifier: '+2', effect: none, rolling: false, source: 'sb', img: Plus2 };
export const plus1ImmobilizeSB = { modifier: '+1', effect: immobilize, rolling: false, source: 'sb', img: Plus1Immobilize };
export const rollingPlus2SB = { modifier: '+2', effect: none, rolling: true, source: 'sb', img: RollingPlus2 };
export const rollingWoundSB = { modifier: '+0', effect: wound, rolling: true, source: 'sb', img: RollingWound };
export const rollingStunSB = { modifier: '+0', effect: stun, rolling: true, source: 'sb', img: RollingStun };
export const rollingHeal3SelfSB = { modifier: '+0', effect: heal3Self, rolling: true, source: 'sb', img: RollingHeal3Self };
export const refreshItemSB = { modifier: '+0', effect: refreshItem, rolling: false, source: 'sb', img: RefreshItem };

export const SawCards = [plus2SB, plus1ImmobilizeSB, rollingPlus2SB, rollingWoundSB, rollingStunSB, rollingHeal3SelfSB, refreshItemSB];