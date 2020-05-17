import RollingPlus1 from '../../gloomhaven/images/attack-modifiers/SK/am-sk-01.png';
import RollingHeal1Self from '../../gloomhaven/images/attack-modifiers/SK/am-sk-03.png';
import RollingStun from '../../gloomhaven/images/attack-modifiers/SK/am-sk-07.png';
import RollingLight from '../../gloomhaven/images/attack-modifiers/SK/am-sk-08.png';
import RollingShield1Self from '../../gloomhaven/images/attack-modifiers/SK/am-sk-12.png';
import Plus1 from '../../gloomhaven/images/attack-modifiers/SK/am-sk-14.png';
import Plus0 from '../../gloomhaven/images/attack-modifiers/SK/am-sk-16.png';
import Plus2 from '../../gloomhaven/images/attack-modifiers/SK/am-sk-17.png';

import { none, healSelf, stun, light, shieldSelf } from './effects';

export const rollingPlus1SK = { modifier: '+1', effect: none, rolling: true, source: 'sk', img: RollingPlus1 };
export const rollingHeal1SelfSK = { modifier: '+0', effect: healSelf, rolling: true, source: 'sk', img: RollingHeal1Self };
export const rollingStunSK = { modifier: '+0', effect: stun, rolling: true, source: 'sk', img: RollingStun };
export const rollingLightSK = { modifier: '+0', effect: light, rolling: true, source: 'sk', img: RollingLight };
export const rollingShield1SelfSK = { modifier: '+0', effect: shieldSelf, rolling: true, source: 'sk', img: RollingShield1Self };
export const plus1SK = { modifier: '+1', effect: none, rolling: false, source: 'sk', img: Plus1 };
export const plus0SK = { modifier: '+0', effect: none, rolling: false, source: 'sk', img: Plus0 };
export const plus2SK = { modifier: '+2', effect: none, rolling: false, source: 'sk', img: Plus2 };

export const SunCards = [rollingPlus1SK, rollingHeal1SelfSK, rollingStunSK, rollingLightSK, rollingShield1SelfSK, plus1SK, plus0SK, plus2SK];