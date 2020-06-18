import Plus1 from '../images/attack-modifiers/Circles/Plus1.png';
import Plus2 from '../images/attack-modifiers/Circles/Plus2.png';
import RollingWound from '../images/attack-modifiers/Circles/RollingWound.png';
import RollingPoison from '../images/attack-modifiers/Circles/RollingPoison.png';
import RollingHeal1Self from '../images/attack-modifiers/Circles/RollingHeal1Self.png';
import RollingFire from '../images/attack-modifiers/Circles/RollingFire.png';
import RollingAir from '../images/attack-modifiers/Circles/RollingAir.png';
import RollingDark from '../images/attack-modifiers/Circles/RollingDark.png';
import RollingEarth from '../images/attack-modifiers/Circles/RollingEarth.png';
import Plus0 from '../images/attack-modifiers/Circles/Plus0.png';

import CirclesIcon from '../images/icons/characters/Circles.png';

import { none, wound, poison, healSelf, fire, air, dark, earth } from '../general/effects';
import { minus1Base, minus2Base } from './Base';

const plus1SU = { modifier: '+1', effect: none, rolling: false, source: 'su', img: Plus1 };
const plus2SU = { modifier: '+2', effect: none, rolling: false, source: 'su', img: Plus2 };
const rollingWoundSU = { modifier: '+0', effect: wound, rolling: true, source: 'su', img: RollingWound };
const rollingPoisonSU = { modifier: '+0', effect: poison, rolling: true, source: 'su', img: RollingPoison };
const rollingHeal1SelfSU = { modifier: '+0', effect: healSelf, rolling: true, source: 'su', img: RollingHeal1Self };
const rollingFireSU = { modifier: '+0', effect: fire, rolling: true, source: 'su', img: RollingFire };
const rollingAirSU = { modifier: '+0', effect: air, rolling: true, source: 'su', img: RollingAir };
const rollingDarkSU = { modifier: '+0', effect: dark, rolling: true, source: 'su', img: RollingDark };
const rollingEarthSU = { modifier: '+0', effect: earth, rolling: true, source: 'su', img: RollingEarth };
const plus0SU = { modifier: '+0', effect: none, rolling: false, source: 'su', img: Plus0 };

const CirclesCards = [plus0SU, plus1SU, plus2SU, rollingWoundSU, rollingPoisonSU, rollingHeal1SelfSU, rollingFireSU, rollingAirSU, rollingDarkSU, rollingEarthSU];

export default { 
  key: 'SU', 
  text: 'Circles', 
  value: 'Circles', 
  cards: CirclesCards, 
  image: { avatar: false, src: CirclesIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-2) card with one (+0) card',
      changes: { 
        add: [plus0SU], 
        remove: [minus2Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) cards with one (+1) card',
      changes: { 
        add: [plus1SU], 
        remove: [minus1Base]}, 
      checked: [false, false, false]
    },
    { text: 'Add one (+2) card',
      changes: { 
        add: [plus2SU], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Wound] cards',
      changes: { 
        add: [rollingWoundSU, rollingWoundSU], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Poison] cards',
      changes: { 
        add: [rollingPoisonSU, rollingPoisonSU], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Heal 1 Self] cards',
      changes: { 
        add: [rollingHeal1SelfSU, rollingHeal1SelfSU], 
        remove: []}, 
      checked: [false, false, false]
    },
    { text: 'Add one rolling [Fire] card and one rolling [Air] card',
      changes: { 
        add: [rollingFireSU, rollingAirSU], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Dark] card and one rolling [Earth] card',
      changes: { 
        add: [rollingDarkSU, rollingEarthSU], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Ignore negative scenario effects and add two (+1) cards',
      changes: { 
        add: [plus1SU, plus1SU], 
        remove: []}, 
      checked: [false]
    }
  ]
}