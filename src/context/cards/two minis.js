import Plus2 from '../../gloomhaven/images/attack-modifiers/BT/am-bt-01.png';
import Plus1Wound from '../../gloomhaven/images/attack-modifiers/BT/am-bt-02.png';
import Plus1Immobilize from '../../gloomhaven/images/attack-modifiers/BT/am-bt-03.png';
import RollingHeal1Self from '../../gloomhaven/images/attack-modifiers/BT/am-bt-06.png';
import RollingEarth from '../../gloomhaven/images/attack-modifiers/BT/am-bt-12.png';
import Plus1 from '../../gloomhaven/images/attack-modifiers/BT/am-bt-14.png';

import { none, wound, immobilize, healSelf, earth } from './effects';

export const plus1BT = { modifier: '+1', effect: none, rolling: false, source: 'bt', img: Plus1 };
export const plus2BT = { modifier: '+2', effect: none, rolling: false, source: 'bt', img: Plus2 };
export const plus1ImmobilizeBT = { modifier: '+1', effect: immobilize, rolling: false, source: 'bt', img: Plus1Immobilize };
export const plus1WoundBT = { modifier: '+1', effect: wound, rolling: false, source: 'bt', img: Plus1Wound };
export const rollingHeal1SelfBT = { modifier: '+0', effect: none, rolling: false, source: 'bt', img: RollingHeal1Self };
export const rollingEarthBT = { modifier: '+0', effect: earth, rolling: false, source: 'bt', img: RollingEarth };

export const TwoMinisCards = [plus1BT, plus2BT, plus1ImmobilizeBT, plus1WoundBT, rollingHeal1SelfBT, rollingEarthBT];