import Plus1Dark from '../../assets/images/attack-modifiers/Eclipse/Plus1Dark.png';
import Plus1Invisible from '../../assets/images/attack-modifiers/Eclipse/Plus1Invisible.png';
import RollingMuddle from '../../assets/images/attack-modifiers/Eclipse/RollingMuddle.png';
import RollingHeal1Self from '../../assets/images/attack-modifiers/Eclipse/RollingHeal1Self.png';
import RollingCurse from '../../assets/images/attack-modifiers/Eclipse/RollingCurse.png';
import RollingAddTarget from '../../assets/images/attack-modifiers/Eclipse/RollingAddTarget.png';
import Plus1 from '../../assets/images/attack-modifiers/Eclipse/Plus1.png';
import Minus1Dark from '../../assets/images/attack-modifiers/Eclipse/Minus1Dark.png';

import { none, dark, invisible, muddle, healSelf, curse, addTarget } from './effects';

export const plus1DarkNS = { modifier: '+1', effect: dark, rolling: false, source: 'ns', img: Plus1Dark };
export const plus1InvisibleNS = { modifier: '+1', effect: invisible, rolling: false, source: 'ns', img: Plus1Invisible };
export const rollingMuddleNS = { modifier: '+0', effect: muddle, rolling: true, source: 'ns', img: RollingMuddle };
export const rollingHeal1SelfNS = { modifier: '+0', effect: healSelf, rolling: true, source: 'ns', img: RollingHeal1Self };
export const rollingCurseNS = { modifier: '+0', effect: curse, rolling: true, source: 'ns', img: RollingCurse };
export const rollingAddTargetNS = { modifier: '+0', effect: addTarget, rolling: true, source: 'ns', img: RollingAddTarget };
export const plus1NS = { modifier: '+1', effect: none, rolling: false, source: 'ns', img: Plus1 };
export const minus1DarkNS = { modifier: '-1', effect: dark, rolling: false, source: 'ns', img: Minus1Dark };

export const EclipseCards = [plus1DarkNS, plus1InvisibleNS, rollingMuddleNS, rollingHeal1SelfNS, rollingCurseNS, rollingAddTargetNS, plus1NS, minus1DarkNS];