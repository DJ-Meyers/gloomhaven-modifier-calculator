import Plus1 from '../../gloomhaven/images/attack-modifiers/SW/am-sw-01.png';
import Stun from '../../gloomhaven/images/attack-modifiers/SW/am-sw-07.png';
import Plus1Wound from '../../gloomhaven/images/attack-modifiers/SW/am-sw-08.png';
import Plus1Immobilize from '../../gloomhaven/images/attack-modifiers/SW/am-sw-09.png';
import Plus1Curse from '../../gloomhaven/images/attack-modifiers/SW/am-sw-10.png';
import Plus2Fire from '../../gloomhaven/images/attack-modifiers/SW/am-sw-11.png';
import Plus2Ice from '../../gloomhaven/images/attack-modifiers/SW/am-sw-13.png';
import RollingEarth from '../../gloomhaven/images/attack-modifiers/SW/am-sw-15.png';
import RollingAir from '../../gloomhaven/images/attack-modifiers/SW/am-sw-16.png';
import RollingLight from '../../gloomhaven/images/attack-modifiers/SW/am-sw-17.png';
import RollingDark from '../../gloomhaven/images/attack-modifiers/SW/am-sw-18.png';

import { none, stun, wound, immobilize, curse, fire, ice, earth, air, light, dark } from './effects';

export const plus1SW = { modifier: '+1', effect: none, rolling: false, source: 'sw', img: Plus1 };
export const plus0StunSW = { modifier: '+0', effect: stun, rolling: false, source: 'sw', img: Stun };
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