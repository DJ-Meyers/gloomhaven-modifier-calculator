import Plus2 from '../../resources/images/attack-modifiers/Two Minis/Plus2.png';
import Plus1Wound from '../../resources/images/attack-modifiers/Two Minis/Plus1Wound.png';
import Plus1Immobilize from '../../resources/images/attack-modifiers/Two Minis/Plus1Immobilize.png';
import RollingHeal1Self from '../../resources/images/attack-modifiers/Two Minis/RollingHeal1Self.png';
import RollingEarth from '../../resources/images/attack-modifiers/Two Minis/RollingEarth.png';
import Plus1 from '../../resources/images/attack-modifiers/Two Minis/Plus1.png';

import { none, wound, immobilize, healSelf, earth } from '../../resources/general/effects';

export const plus1BT = { modifier: '+1', effect: none, rolling: false, source: 'bt', img: Plus1 };
export const plus2BT = { modifier: '+2', effect: none, rolling: false, source: 'bt', img: Plus2 };
export const plus1ImmobilizeBT = { modifier: '+1', effect: immobilize, rolling: false, source: 'bt', img: Plus1Immobilize };
export const plus1WoundBT = { modifier: '+1', effect: wound, rolling: false, source: 'bt', img: Plus1Wound };
export const rollingHeal1SelfBT = { modifier: '+0', effect: healSelf, rolling: false, source: 'bt', img: RollingHeal1Self };
export const rollingEarthBT = { modifier: '+0', effect: earth, rolling: false, source: 'bt', img: RollingEarth };

export const TwoMinisCards = [plus1BT, plus2BT, plus1ImmobilizeBT, plus1WoundBT, rollingHeal1SelfBT, rollingEarthBT];