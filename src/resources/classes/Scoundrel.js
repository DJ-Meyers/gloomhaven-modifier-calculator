import Plus0 from '../images/attack-modifiers/Scoundrel/Plus0.png';
import Plus1 from '../images/attack-modifiers/Scoundrel/Plus1.png';
import Plus2 from '../images/attack-modifiers/Scoundrel/Plus2.png';
import RollingPlus1 from '../images/attack-modifiers/Scoundrel/RollingPlus1.png';
import RollingPierce3 from '../images/attack-modifiers/Scoundrel/RollingPierce3.png';
import RollingPoison from '../images/attack-modifiers/Scoundrel/RollingPoison.png';
import RollingMuddle from '../images/attack-modifiers/Scoundrel/RollingMuddle.png';
import RollingInvisible from '../images/attack-modifiers/Scoundrel/RollingInvisible.png';

import ScoundrelIcon from '../images/icons/characters/Scoundrel.png';

import { none, pierce, poison, muddle, invisible } from '../general/effects';
import { minus1Base, plus0Base, minus2Base } from './Base';

const plus0SC = { modifier: '+0', effect: [none], rolling: false, source: 'sc', img: Plus0 };
const plus1SC = { modifier: '+1', effect: [none], rolling: false, source: 'sc', img: Plus1 };
const plus2SC = { modifier: '+2', effect: [none], rolling: false, source: 'sc', img: Plus2 };
const rollingPlus1SC = { modifier: '+1', effect: [none], rolling: true, source: 'sc', img: RollingPlus1 };
const rollingPierce3SC = { modifier: '+0', effect: [pierce], rolling: true, source: 'sc', img: RollingPierce3 };
const rollingPoisonSC = { modifier: '+0', effect: [poison], rolling: true, source: 'sc', img: RollingPoison };
const rollingMuddleSC = { modifier: '+0', effect: [muddle], rolling: true, source: 'sc', img: RollingMuddle };
const rollingInvisibleSC = { modifier: '+0', effect: [invisible], rolling: true, source: 'sc', img: RollingInvisible };

const ScoundrelCards = [plus0SC, plus1SC, plus2SC, rollingPlus1SC, rollingPierce3SC, rollingPoisonSC, rollingMuddleSC, rollingInvisibleSC];

export default { 
  key: 'SC', 
  text: 'Scoundrel', 
  value: 'Scoundrel', 
  cards: ScoundrelCards, 
  image: { avatar: false, src: ScoundrelIcon },
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
        add: [plus0SC], 
        remove: [minus2Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) card with one (+1) card',
      changes: { 
        add: [plus1SC], 
        remove: [minus1Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+2) card',
      changes: { 
        add: [plus2SC], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Add two rolling (+1) cards',
      changes: { 
        add: [rollingPlus1SC, rollingPlus1SC], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Pierce 3] cards',
      changes: { 
        add: [rollingPierce3SC, rollingPierce3SC], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Poison] card',
      changes: { 
        add: [rollingPoisonSC, rollingPoisonSC], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Muddle] cards',
      changes: { 
        add: [rollingMuddleSC, rollingMuddleSC], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Invisible] card',
      changes: { 
        add: [rollingInvisibleSC], 
        remove: []}, 
      checked: [false]
    }
  ]
}