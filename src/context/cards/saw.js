import RollingPlus2 from '../../resources/images/attack-modifiers/Saw/RollingPlus2.png';
import Plus1Immobilize from '../../resources/images/attack-modifiers/Saw/Plus1Immobilize.png';
import RollingWound from '../../resources/images/attack-modifiers/Saw/RollingWound.png';
import RollingStun from '../../resources/images/attack-modifiers/Saw/RollingStun.png';
import RollingHeal3Self from '../../resources/images/attack-modifiers/Saw/RollingHeal3Self.png';
import Plus0RefreshItem from '../../resources/images/attack-modifiers/Saw/Plus0RefreshItem.png';
import Plus2 from '../../resources/images/attack-modifiers/Saw/Plus2.png';

import { none, immobilize, wound, healSelf, stun, refreshItem  } from '../../resources/general/effects';

export const plus2SB = { modifier: '+2', effect: none, rolling: false, source: 'sb', img: Plus2 };
export const plus1ImmobilizeSB = { modifier: '+1', effect: immobilize, rolling: false, source: 'sb', img: Plus1Immobilize };
export const rollingPlus2SB = { modifier: '+2', effect: none, rolling: true, source: 'sb', img: RollingPlus2 };
export const rollingWoundSB = { modifier: '+0', effect: wound, rolling: true, source: 'sb', img: RollingWound };
export const rollingStunSB = { modifier: '+0', effect: stun, rolling: true, source: 'sb', img: RollingStun };
export const rollingHeal3SelfSB = { modifier: '+0', effect: healSelf, rolling: true, source: 'sb', img: RollingHeal3Self };
export const refreshItemSB = { modifier: '+0', effect: refreshItem, rolling: false, source: 'sb', img: Plus0RefreshItem };

export const SawCards = [plus2SB, plus1ImmobilizeSB, rollingPlus2SB, rollingWoundSB, rollingStunSB, rollingHeal3SelfSB, refreshItemSB];