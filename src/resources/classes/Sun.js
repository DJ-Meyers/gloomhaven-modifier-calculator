import RollingPlus1 from '../images/attack-modifiers/Sun/RollingPlus1.png';
import RollingHeal1Self from '../images/attack-modifiers/Sun/RollingHeal1Self.png';
import RollingStun from '../images/attack-modifiers/Sun/RollingStun.png';
import RollingLight from '../images/attack-modifiers/Sun/RollingLight.png';
import RollingShield1Self from '../images/attack-modifiers/Sun/RollingShield1Self.png';
import Plus1 from '../images/attack-modifiers/Sun/Plus1.png';
import Plus0 from '../images/attack-modifiers/Sun/Plus0.png';
import Plus2 from '../images/attack-modifiers/Sun/Plus2.png';

import SunIcon from '../images/icons/characters/Sun.png';

import { none, healSelf, stun, light, shieldSelf } from '../general/effects';
import { minus1Base, plus0Base, minus2Base } from './Base';

const rollingPlus1SK = { modifier: '+1', effect: none, rolling: true, source: 'sk', img: RollingPlus1 };
const rollingHeal1SelfSK = { modifier: '+0', effect: healSelf, rolling: true, source: 'sk', img: RollingHeal1Self };
const rollingStunSK = { modifier: '+0', effect: stun, rolling: true, source: 'sk', img: RollingStun };
const rollingLightSK = { modifier: '+0', effect: light, rolling: true, source: 'sk', img: RollingLight };
const rollingShield1SelfSK = { modifier: '+0', effect: shieldSelf, rolling: true, source: 'sk', img: RollingShield1Self };
const plus1SK = { modifier: '+1', effect: none, rolling: false, source: 'sk', img: Plus1 };
const plus0SK = { modifier: '+0', effect: none, rolling: false, source: 'sk', img: Plus0 };
const plus2SK = { modifier: '+2', effect: none, rolling: false, source: 'sk', img: Plus2 };

const SunCards = [plus0SK, plus2SK, rollingPlus1SK, rollingHeal1SelfSK, rollingStunSK, rollingLightSK, rollingShield1SelfSK, plus1SK];

export default { 
  key: 'SK', 
  text: 'Sun', 
  value: 'Sun',
  cards: SunCards, 
  image: { avatar: false, src: SunIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Remove four (+0) cards',
      changes: { 
        add: [], 
        remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-2) card with one (+0) card',
      changes: { 
        add: [plus0SK], 
        remove: [minus2Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+2) card',
      changes: { 
        add: [plus2SK], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Add two rolling (+1) cards',
      changes: { 
        add: [rollingPlus1SK, rollingPlus1SK], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Heal 1 Self] cards',
      changes: { 
        add: [rollingHeal1SelfSK, rollingHeal1SelfSK], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one rolling [Stun] card',
      changes: { 
        add: [rollingStunSK], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Light] cards',
      changes: { 
        add: [rollingLightSK, rollingLightSK], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Shield 1 Self] cards',
      changes: { 
        add: [rollingShield1SelfSK, rollingShield1SelfSK], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Ignore negative item effects and add two (+1) cards',
      changes: { 
        add: [plus1SK, plus1SK], 
        remove: []}, 
      checked: [false]
    }
  ]
}