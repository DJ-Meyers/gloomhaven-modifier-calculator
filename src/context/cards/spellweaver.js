import Plus1 from '../../assets/images/attack-modifiers/Spellweaver/Plus1.png';
import Plus0Stun from '../../assets/images/attack-modifiers/Spellweaver/Plus0Stun.png';
import Plus1Wound from '../../assets/images/attack-modifiers/Spellweaver/Plus1Wound.png';
import Plus1Immobilize from '../../assets/images/attack-modifiers/Spellweaver/Plus1Immobilize.png';
import Plus1Curse from '../../assets/images/attack-modifiers/Spellweaver/Plus1Curse.png';
import Plus2Fire from '../../assets/images/attack-modifiers/Spellweaver/Plus2Fire.png';
import Plus2Ice from '../../assets/images/attack-modifiers/Spellweaver/Plus2Ice.png';
import RollingEarth from '../../assets/images/attack-modifiers/Spellweaver/RollingEarth.png';
import RollingAir from '../../assets/images/attack-modifiers/Spellweaver/RollingAir.png';
import RollingLight from '../../assets/images/attack-modifiers/Spellweaver/RollingLight.png';
import RollingDark from '../../assets/images/attack-modifiers/Spellweaver/RollingDark.png';

import { none, stun, wound, immobilize, curse, fire, ice, earth, air, light, dark } from './effects';

export const plus1SW = { modifier: '+1', effect: none, rolling: false, source: 'sw', img: Plus1 };
export const plus0StunSW = { modifier: '+0', effect: stun, rolling: false, source: 'sw', img: Plus0Stun };
export const plus1WoundSW = { modifier: '+1', effect: wound, rolling: false, source: 'sw', img: Plus1Wound };
export const plus1ImmobilizeSW = { modifier: '+1', effect: immobilize, rolling: false, source: 'sw', img: Plus1Immobilize };
export const plus1CurseSW = { modifier: '+1', effect: curse, rolling: false, source: 'sw', img: Plus1Curse };
export const plus2FireSW = { modifier: '+2', effect: fire, rolling: false, source: 'sw', img: Plus2Fire };
export const plus2IceSW = { modifier: '+2', effect: ice, rolling: false, source: 'sw', img: Plus2Ice };
export const rollingEarthSW = { modifier: '+0', effect: earth, rolling: true, source: 'sw', img: RollingEarth };
export const rollingAirSW = { modifier: '+0', effect: air, rolling: true, source: 'sw', img: RollingAir };
export const rollingLightSW = { modifier: '+0', effect: light, rolling: true, source: 'sw', img: RollingLight };
export const rollingDarkSW = { modifier: '+0', effect: dark, rolling: true, source: 'sw', img: RollingDark };

export const SpellweaverCards = [plus1SW, plus0StunSW, plus1WoundSW, plus1ImmobilizeSW, plus1CurseSW, plus2FireSW, plus2IceSW, rollingEarthSW, rollingAirSW, rollingLightSW, rollingDarkSW];