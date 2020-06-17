import Plus2 from '../images/attack-modifiers/Two Minis/Plus2.png';
import Plus1Wound from '../images/attack-modifiers/Two Minis/Plus1Wound.png';
import Plus1Immobilize from '../images/attack-modifiers/Two Minis/Plus1Immobilize.png';
import RollingHeal1Self from '../images/attack-modifiers/Two Minis/RollingHeal1Self.png';
import RollingEarth from '../images/attack-modifiers/Two Minis/RollingEarth.png';
import Plus1 from '../images/attack-modifiers/Two Minis/Plus1.png';

import TwoMinisIcon from '../images/icons/characters/Two Minis.png';

import { none, wound, immobilize, healSelf, earth } from '../general/effects';
import { minus1Base, plus0Base } from './Base';

export const plus1BT = { modifier: '+1', effect: none, rolling: false, source: 'bt', img: Plus1 };
export const plus2BT = { modifier: '+2', effect: none, rolling: false, source: 'bt', img: Plus2 };
export const plus1ImmobilizeBT = { modifier: '+1', effect: immobilize, rolling: false, source: 'bt', img: Plus1Immobilize };
export const plus1WoundBT = { modifier: '+1', effect: wound, rolling: false, source: 'bt', img: Plus1Wound };
export const rollingHeal1SelfBT = { modifier: '+0', effect: healSelf, rolling: false, source: 'bt', img: RollingHeal1Self };
export const rollingEarthBT = { modifier: '+0', effect: earth, rolling: false, source: 'bt', img: RollingEarth };

export const TwoMinisCards = [plus1BT, plus2BT, plus1ImmobilizeBT, plus1WoundBT, rollingHeal1SelfBT, rollingEarthBT];

export default { 
  key: 'BT', 
  text: 'Two Minis', 
  value: 'Two Minis', 
  cards: TwoMinisCards, 
  image: { avatar: false, src: TwoMinisIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) cards with one (+1) card',
      changes: { 
        add: [plus1BT], 
        remove: [minus1Base]}, 
      checked: [false, false, false]
    },
    { text: 'Replace one (+0) card with one (+2) card',
      changes: { 
        add: [plus2BT], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Wound] card',
      changes: { 
        add: [plus1WoundBT], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Immobilize] card',
      changes: { 
        add: [plus1ImmobilizeBT], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Heal 1 Self] cards',
      changes: { 
        add: [rollingHeal1SelfBT, rollingHeal1SelfBT], 
        remove: []}, 
      checked: [false, false, false]
    },
    { text: 'Add two rolling [Earth] cards',
      changes: { 
        add: [rollingEarthBT, rollingEarthBT], 
        remove: []}, 
      checked: [false]
    }
  ]
}