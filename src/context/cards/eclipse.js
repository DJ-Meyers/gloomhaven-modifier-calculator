import Plus1Dark from '../../gloomhaven/images/attack-modifiers/NS/am-ns-01.png';
import Plus1Invisible from '../../gloomhaven/images/attack-modifiers/NS/am-ns-03.png';
import RollingMuddle from '../../gloomhaven/images/attack-modifiers/NS/am-ns-05.png';
import RollingHeal1Self from '../../gloomhaven/images/attack-modifiers/NS/am-ns-11.png';
import RollingCurse from '../../gloomhaven/images/attack-modifiers/NS/am-ns-13.png';
import RollingAddTarget from '../../gloomhaven/images/attack-modifiers/NS/am-ns-15.png';
import Plus1 from '../../gloomhaven/images/attack-modifiers/NS/am-ns-16.png';
import Minus1Dark from '../../gloomhaven/images/attack-modifiers/NS/am-ns-18.png';

import { none, dark, invisible, muddle, heal1Self, curse, addTarget } from './effects';

export const plus1DarkNS = { modifier: '+1', effect: dark, rolling: false, source: 'ns', img: Plus1Dark };
export const plus1InvisibleNS = { modifier: '+1', effect: invisible, rolling: false, source: 'ns', img: Plus1Invisible };
export const rollingMuddleNS = { modifier: '+0', effect: muddle, rolling: true, source: 'ns', img: RollingMuddle };
export const rollingHeal1SelfNS = { modifier: '+0', effect: heal1Self, rolling: true, source: 'ns', img: RollingHeal1Self };
export const rollingCurseNS = { modifier: '+0', effect: curse, rolling: true, source: 'ns', img: RollingCurse };
export const rollingAddTargetNS = { modifier: '+0', effect: addTarget, rolling: true, source: 'ns', img: RollingAddTarget };
export const plus1NS = { modifier: '+1', effect: none, rolling: false, source: 'ns', img: Plus1 };
export const minus1DarkNS = { modifier: '-1', effect: dark, rolling: false, source: 'ns', img: Minus1Dark };

export const NSCards = [plus1DarkNS, plus1InvisibleNS, rollingMuddleNS, rollingHeal1SelfNS, rollingCurseNS, rollingAddTargetNS, plus1NS, minus1DarkNS];