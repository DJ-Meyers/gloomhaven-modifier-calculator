import RollingPlus2 from '../images/attack-modifiers/Lightning Bolts/RollingPlus2.png';
import RollingWound from '../images/attack-modifiers/Lightning Bolts/RollingWound.png';
import RollingStun from '../images/attack-modifiers/Lightning Bolts/RollingStun.png';
import RollingPlus1Disarm from '../images/attack-modifiers/Lightning Bolts/RollingPlus1Disarm.png';
import RollingHeal1Self from '../images/attack-modifiers/Lightning Bolts/RollingHeal1Self.png';
import Plus2Fire from '../images/attack-modifiers/Lightning Bolts/Plus2Fire.png';
import Plus1 from '../images/attack-modifiers/Lightning Bolts/Plus1.png';

import LightningBoltsIcon from '../images/icons/characters/Lightning Bolts.png';

import { none, wound, stun, fire, disarm, healSelf } from '../general/effects';
import { minus1Base, plus0Base } from './Base';

const rollingPlus2BE = { modifier: '+2', effect: none, rolling: true, source: 'be', img: RollingPlus2 };
const rollingWoundBE = { modifier: '+0', effect: wound, rolling: true, source: 'be', img: RollingWound };
const rollingStunBE = { modifier: '+0', effect: stun, rolling: true, source: 'be', img: RollingStun };
const rollingPlus1DisarmBE = { modifier: '+1', effect: disarm, rolling: true, source: 'be', img: RollingPlus1Disarm };
const rollingHeal1SelfBE = { modifier: '+0', effect: healSelf, rolling: true, source: 'be', img: RollingHeal1Self };
const plus2FireBE = { modifier: '+2', effect: fire, rolling: false, source: 'be', img: Plus2Fire };
const plus1BE = { modifier: '+1', effect: none, rolling: false, source: 'be', img: Plus1 };

const LightningBoltsCards = [rollingPlus2BE, rollingWoundBE, rollingStunBE, rollingPlus1DisarmBE, rollingHeal1SelfBE, plus2FireBE, plus1BE];

export default { 
  key: 'BE', 
  text: 'Lightning Bolts', 
  value: 'Lightning Bolts', 
  cards: LightningBoltsCards, 
  image: { avatar: false, src: LightningBoltsIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false]
    },
    { text: 'Remove four (+0) cards',
      changes: { 
        add: [], 
        remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) card with one (+1) card',
      changes: { 
        add: [plus1BE], 
        remove: [minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+0) card with one rolling (+2) card',
      changes: { 
        add: [rollingPlus2BE], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Wound] cards',
      changes: { 
        add: [rollingWoundBE, rollingWoundBE], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one rolling [Stun] card',
      changes: { 
        add: [rollingStunBE], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one rolling (+1) [Disarm] card',
      changes: { 
        add: [rollingPlus1DisarmBE], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Heal 1 Self] cards',
      changes: { 
        add: [rollingHeal1SelfBE, rollingHeal1SelfBE], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+2) [Fire] cards',
      changes: { 
        add: [plus2FireBE], 
        remove: []}, 
      checked: [false, false]
    }
  ]
}