import Plus1 from '../../assets/images/attack-modifiers/Circles/Plus1.png';
import Plus2 from '../../assets/images/attack-modifiers/Circles/Plus2.png';
import RollingWound from '../../assets/images/attack-modifiers/Circles/RollingWound.png';
import RollingPoison from '../../assets/images/attack-modifiers/Circles/RollingPoison.png';
import RollingHeal1Self from '../../assets/images/attack-modifiers/Circles/RollingHeal1Self.png';
import RollingFire from '../../assets/images/attack-modifiers/Circles/RollingFire.png';
import RollingAir from '../../assets/images/attack-modifiers/Circles/RollingAir.png';
import RollingDark from '../../assets/images/attack-modifiers/Circles/RollingDark.png';
import RollingEarth from '../../assets/images/attack-modifiers/Circles/RollingEarth.png';
import Plus0 from '../../assets/images/attack-modifiers/Circles/Plus0.png';

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