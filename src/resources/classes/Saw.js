import RollingPlus2 from '../images/attack-modifiers/Saw/RollingPlus2.png';
import Plus1Immobilize from '../images/attack-modifiers/Saw/Plus1Immobilize.png';
import RollingWound from '../images/attack-modifiers/Saw/RollingWound.png';
import RollingStun from '../images/attack-modifiers/Saw/RollingStun.png';
import RollingHeal3Self from '../images/attack-modifiers/Saw/RollingHeal3Self.png';
import Plus0RefreshItem from '../images/attack-modifiers/Saw/Plus0RefreshItem.png';
import Plus2 from '../images/attack-modifiers/Saw/Plus2.png';

import SawIcon from '../images/icons/characters/Saw.png';

import { none, immobilize, wound, healSelf, stun, refreshItem  } from '../general/effects';
import { minus1Base, plus0Base } from './Base';

const plus2SB = { modifier: '+2', effect: none, rolling: false, source: 'sb', img: Plus2 };
const plus1ImmobilizeSB = { modifier: '+1', effect: immobilize, rolling: false, source: 'sb', img: Plus1Immobilize };
const rollingPlus2SB = { modifier: '+2', effect: none, rolling: true, source: 'sb', img: RollingPlus2 };
const rollingWoundSB = { modifier: '+0', effect: wound, rolling: true, source: 'sb', img: RollingWound };
const rollingStunSB = { modifier: '+0', effect: stun, rolling: true, source: 'sb', img: RollingStun };
const rollingHeal3SelfSB = { modifier: '+0', effect: healSelf, rolling: true, source: 'sb', img: RollingHeal3Self };
const refreshItemSB = { modifier: '+0', effect: refreshItem, rolling: false, source: 'sb', img: Plus0RefreshItem };

const SawCards = [plus2SB, rollingPlus2SB, plus1ImmobilizeSB, rollingWoundSB, rollingStunSB, rollingHeal3SelfSB, refreshItemSB];

export default { 
  key: 'SB', 
  text: 'Saw', 
  value: 'Saw', 
  cards: SawCards, 
  image: { avatar: false, src: SawIcon },
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
    { text: 'Replace one (+0) card with one (+2) card',
      changes: { 
        add: [plus2SB], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Add one rolling (+2) card',
      changes: { 
        add: [rollingPlus2SB], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Immobilize] card',
      changes: { 
        add: [plus1ImmobilizeSB], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Wound] cards',
      changes: { 
        add: [rollingWoundSB, rollingWoundSB], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one rolling [Stun] card',
      changes: { 
        add: [rollingStunSB], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Heal 3 Self] card',
      changes: { 
        add: [rollingHeal3SelfSB], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+0) [Refresh an Item] card',
      changes: { 
        add: [refreshItemSB], 
        remove: []}, 
      checked: [false]
    }
  ]
}