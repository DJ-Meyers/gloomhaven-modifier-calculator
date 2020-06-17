import RollingPlus1 from '../../resources/images/attack-modifiers/Sun/RollingPlus1.png';
import RollingHeal1Self from '../../resources/images/attack-modifiers/Sun/RollingHeal1Self.png';
import RollingStun from '../../resources/images/attack-modifiers/Sun/RollingStun.png';
import RollingLight from '../../resources/images/attack-modifiers/Sun/RollingLight.png';
import RollingShield1Self from '../../resources/images/attack-modifiers/Sun/RollingShield1Self.png';
import Plus1 from '../../resources/images/attack-modifiers/Sun/Plus1.png';
import Plus0 from '../../resources/images/attack-modifiers/Sun/Plus0.png';
import Plus2 from '../../resources/images/attack-modifiers/Sun/Plus2.png';

import { none, healSelf, stun, light, shieldSelf } from '../../resources/general/effects';

export const rollingPlus1SK = { modifier: '+1', effect: none, rolling: true, source: 'sk', img: RollingPlus1 };
export const rollingHeal1SelfSK = { modifier: '+0', effect: healSelf, rolling: true, source: 'sk', img: RollingHeal1Self };
export const rollingStunSK = { modifier: '+0', effect: stun, rolling: true, source: 'sk', img: RollingStun };
export const rollingLightSK = { modifier: '+0', effect: light, rolling: true, source: 'sk', img: RollingLight };
export const rollingShield1SelfSK = { modifier: '+0', effect: shieldSelf, rolling: true, source: 'sk', img: RollingShield1Self };
export const plus1SK = { modifier: '+1', effect: none, rolling: false, source: 'sk', img: Plus1 };
export const plus0SK = { modifier: '+0', effect: none, rolling: false, source: 'sk', img: Plus0 };
export const plus2SK = { modifier: '+2', effect: none, rolling: false, source: 'sk', img: Plus2 };

export const SunCards = [rollingPlus1SK, rollingHeal1SelfSK, rollingStunSK, rollingLightSK, rollingShield1SelfSK, plus1SK, plus0SK, plus2SK];