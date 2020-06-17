import Plus1 from '../../resources/images/attack-modifiers/Spellweaver/Plus1.png';
import Plus0Stun from '../../resources/images/attack-modifiers/Spellweaver/Plus0Stun.png';
import Plus1Wound from '../../resources/images/attack-modifiers/Spellweaver/Plus1Wound.png';
import Plus1Immobilize from '../../resources/images/attack-modifiers/Spellweaver/Plus1Immobilize.png';
import Plus1Curse from '../../resources/images/attack-modifiers/Spellweaver/Plus1Curse.png';
import Plus2Fire from '../../resources/images/attack-modifiers/Spellweaver/Plus2Fire.png';
import Plus2Ice from '../../resources/images/attack-modifiers/Spellweaver/Plus2Ice.png';
import RollingEarth from '../../resources/images/attack-modifiers/Spellweaver/RollingEarth.png';
import RollingAir from '../../resources/images/attack-modifiers/Spellweaver/RollingAir.png';
import RollingLight from '../../resources/images/attack-modifiers/Spellweaver/RollingLight.png';
import RollingDark from '../../resources/images/attack-modifiers/Spellweaver/RollingDark.png';

import SpellweaverIcon from '../images/icons/characters/Spellweaver.png';

import { none, stun, wound, immobilize, curse, fire, ice, earth, air, light, dark } from '../../resources/general/effects';
import { plus0Base, minus1Base } from './Base';

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

export default { 
  key: 'SW', 
  text: 'Spellweaver', 
  value: 'Spellweaver', 
  cards: SpellweaverCards, 
  image: { avatar: false, src: SpellweaverIcon },
  perks: [
    { text: 'Remove four (+0) cards', 
      changes: { 
        add: [], 
        remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) card with one (+1) card',
      changes: { 
        add: [plus1SW], 
        remove: [minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Add two (+1) cards',
      changes: { 
        add: [plus1SW, plus1SW], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+0) [Stun] card',
      changes: { 
        add: [plus0StunSW], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Replace one (+1) [Wound] card',
      changes: { 
        add: [plus1WoundSW], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Immobilize] card',
      changes: { 
        add: [plus1ImmobilizeSW], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Curse] card',
      changes: { 
        add: [plus1CurseSW], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+2) [Fire] card',
      changes: { 
        add: [plus2FireSW], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+2) [Ice] card',
      changes: { 
        add: [plus2IceSW], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one rolling [Earth] card and one rolling [Air] card',
      changes: { 
        add: [rollingEarthSW, rollingAirSW], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Light] card and one rolling [Dark] card',
      changes: { 
        add: [rollingLightSW, rollingDarkSW], 
        remove: []}, 
      checked: [false]
    },
  ]
}