import Plus1 from '../images/attack-modifiers/Cthulu/Plus1.png';
import Plus2 from '../images/attack-modifiers/Cthulu/Plus2.png';
import Plus1Air from '../images/attack-modifiers/Cthulu/Plus1Air.png';
import RollingPoison from '../images/attack-modifiers/Cthulu/RollingPoison.png';
import RollingCurse from '../images/attack-modifiers/Cthulu/RollingCurse.png';
import RollingImmobilize from '../images/attack-modifiers/Cthulu/RollingImmobilize.png';
import RollingStun from '../images/attack-modifiers/Cthulu/RollingStun.png';
import Plus0 from '../images/attack-modifiers/Cthulu/Plus0.png';

import CthuluIcon from '../images/icons/characters/Cthulu.png';

import { none, air, poison, curse, immobilize, stun } from '../general/effects';
import { minus2Base, minus1Base, plus0Base } from './Base';

const plus1PH = { modifier: '+1', effect: [none], rolling: false, source: 'ph', img: Plus1 };
const plus2PH = { modifier: '+2', effect: [none], rolling: false, source: 'ph', img: Plus2 };
const plus1AirPH = { modifier: '+1', effect: [air], rolling: false, source: 'ph', img: Plus1Air };
const rollingPoisonPH = { modifier: '+0', effect: [poison], rolling: true, source: 'ph', img: RollingPoison };
const rollingCursePH = { modifier: '+0', effect: [curse], rolling: true, source: 'ph', img: RollingCurse };
const rollingImmobilizePH = { modifier: '+0', effect: [immobilize], rolling: true, source: 'ph', img: RollingImmobilize };
const rollingStunPH = { modifier: '+0', effect: [stun], rolling: true, source: 'ph', img: RollingStun };
const plus0PH = { modifier: '+0', effect: [none], rolling: false, source: 'ph', img: Plus0 };

const CthuluCards = [plus0PH, plus1PH, plus2PH, plus1AirPH, rollingPoisonPH, rollingCursePH, rollingImmobilizePH, rollingStunPH];

export default   { 
  key: 'PH', 
  text: 'Cthulu', 
  value: 'Cthulu', 
  cards: CthuluCards, 
  image: { avatar: false, src: CthuluIcon },
  perks: [
    { text: 'Replace one (-2) card with one (+0) card', 
      changes: { 
        add: [plus0PH], 
        remove: [minus2Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) card with one (+1) card', 
      changes: { 
        add: [plus1PH], 
        remove: [minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+0) card with one (+2) card', 
      changes: { 
        add: [plus2PH], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Add two (+1) cards', 
      changes: { 
        add: [plus1PH, plus1PH], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Air] card', 
      changes: { 
        add: [plus1AirPH], 
        remove: []}, 
      checked: [false, false, false]
    },
    { text: 'Add three rolling [Poison] cards', 
      changes: { 
        add: [rollingPoisonPH, rollingPoisonPH, rollingPoisonPH], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Curse] cards', 
      changes: { 
        add: [rollingCursePH, rollingCursePH], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Immobilize] cards', 
      changes: { 
        add: [rollingImmobilizePH, rollingImmobilizePH], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Stun] card', 
      changes: { 
        add: [rollingStunPH], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Ignore negative scenario effects and add one (+1) card', 
      changes: { 
        add: [plus1PH], 
        remove: []}, 
      checked: [false]
    }
  ]
}