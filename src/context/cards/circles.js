import Plus1 from '../../gloomhaven/images/attack-modifiers/SU/am-su-01.png';
import Plus2 from '../../gloomhaven/images/attack-modifiers/SU/am-su-03.png';
import RollingWound from '../../gloomhaven/images/attack-modifiers/SU/am-su-05.png';
import RollingPoison from '../../gloomhaven/images/attack-modifiers/SU/am-su-07.png';
import RollingHeal1Self from '../../gloomhaven/images/attack-modifiers/SU/am-su-09.png';
import RollingFire from '../../gloomhaven/images/attack-modifiers/SU/am-su-15.png';
import RollingAir from '../../gloomhaven/images/attack-modifiers/SU/am-su-16.png';
import RollingDark from '../../gloomhaven/images/attack-modifiers/SU/am-su-17.png';
import RollingEarth from '../../gloomhaven/images/attack-modifiers/SU/am-su-18.png';
import Plus0 from '../../gloomhaven/images/attack-modifiers/SU/am-su-19.png';

import { none, wound, poison, healSelf, fire, air, dark, earth } from './effects';

export const plus1SU = { modifier: '+1', effect: none, rolling: false, source: 'su', img: Plus1 };
export const plus2SU = { modifier: '+2', effect: none, rolling: false, source: 'su', img: Plus2 };
export const rollingWoundSU = { modifier: '+0', effect: wound, rolling: true, source: 'su', img: RollingWound };
export const rollingPoisonSU = { modifier: '+0', effect: poison, rolling: true, source: 'su', img: RollingPoison };
export const rollingHeal1SelfSU = { modifier: '+0', effect: healSelf, rolling: true, source: 'su', img: RollingHeal1Self };
export const rollingFireSU = { modifier: '+0', effect: fire, rolling: true, source: 'su', img: RollingFire };
export const rollingAirSU = { modifier: '+0', effect: air, rolling: true, source: 'su', img: RollingAir };
export const rollingDarkSU = { modifier: '+0', effect: dark, rolling: true, source: 'su', img: RollingDark };
export const rollingEarthSU = { modifier: '+0', effect: earth, rolling: true, source: 'su', img: RollingEarth };
export const plus0SU = { modifier: '+0', effect: none, rolling: false, source: 'su', img: Plus0 };

export const CirclesCards = [plus1SU, plus2SU, rollingWoundSU, rollingPoisonSU, rollingHeal1SelfSU, rollingFireSU, rollingAirSU, rollingDarkSU, rollingEarthSU, plus0SU];