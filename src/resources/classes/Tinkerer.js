import Plus0 from '../images/attack-modifiers/Tinkerer/Plus0.png';
import Plus1 from '../images/attack-modifiers/Tinkerer/Plus1.png';
import Plus3 from '../images/attack-modifiers/Tinkerer/Plus3.png';
import RollingFire from '../images/attack-modifiers/Tinkerer/RollingFire.png';
import RollingMuddle from '../images/attack-modifiers/Tinkerer/RollingMuddle.png';
import Plus1Wound from '../images/attack-modifiers/Tinkerer/Plus1Wound.png';
import Plus1Immobilize from '../images/attack-modifiers/Tinkerer/Plus1Immobilize.png';
import Plus1Heal2Self from '../images/attack-modifiers/Tinkerer/Plus1Heal2Self.png';
import Plus0AddTarget from '../images/attack-modifiers/Tinkerer/Plus0AddTarget.png';

import TinkererIcon from '../images/icons/characters/Tinkerer.png';

import { none, fire, muddle, wound, immobilize, healSelf, addTarget } from '../general/effects';
import { minus1Base, minus2Base } from './Base';

export const plus0TI = { modifier: '+0', effect: none, rolling: false, source: 'ti', img: Plus0 };
export const plus1TI = { modifier: '+1', effect: none, rolling: false, source: 'ti', img: Plus1 };
export const plus3TI = { modifier: '+3', effect: none, rolling: false, source: 'ti', img: Plus3 };
export const plus1WoundTI = { modifier: '+1', effect: wound, rolling: false, source: 'ti', img: Plus1Wound };
export const plus1ImmobilizeTI = { modifier: '+1', effect: immobilize, rolling: false, source: 'ti', img: Plus1Immobilize };
export const plus1Heal2SelfTI = { modifier: '+1', effect: healSelf, rolling: false, source: 'ti', img: Plus1Heal2Self };
export const plus0AddTargetTI = { modifier: '+0', effect: addTarget, rolling: false, source: 'ti', img: Plus0AddTarget };
export const rollingFireTI = { modifier: '+0', effect: fire, rolling: true, source: 'ti', img: RollingFire };
export const rollingMuddleTI = { modifier: '+0', effect: muddle, rolling: true, source: 'ti', img: RollingMuddle };

export const TinkererCards = [plus0TI, plus1TI, plus3TI, rollingFireTI, rollingMuddleTI, plus1WoundTI, plus1ImmobilizeTI, plus1Heal2SelfTI, plus0AddTargetTI];

export default { 
  key: 'TI', 
  text: 'Tinkerer', 
  value: 'Tinkerer', 
  cards: TinkererCards, 
  image: { avatar: false, src: TinkererIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (-2) card with one (+0) card',
      changes: { 
        add: [plus0TI], 
        remove: [minus2Base]}, 
      checked: [false]
    },
    { text: 'Add two (+1) cards',
      changes: { 
        add: [plus1TI, plus1TI], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+3) card',
      changes: { 
        add: [plus3TI], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Fire] cards',
      changes: { 
        add: [rollingFireTI, rollingFireTI], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add three rolling [Muddle] card',
      changes: { 
        add: [rollingMuddleTI, rollingMuddleTI, rollingMuddleTI], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Wound] card',
      changes: { 
        add: [plus1WoundTI], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Immobilize] card',
      changes: { 
        add: [plus1ImmobilizeTI], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Heal 2 Self] card',
      changes: { 
        add: [plus1Heal2SelfTI], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+0) [Add Target] card',
      changes: { 
        add: [plus0AddTargetTI], 
        remove: []}, 
      checked: [false]
    }
  ],
}