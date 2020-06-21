import Plus2 from '../images/attack-modifiers/Mindthief/Plus2.png';
import Plus0 from '../images/attack-modifiers/Mindthief/Plus0.png';
import Plus2Ice from '../images/attack-modifiers/Mindthief/Plus2Ice.png';
import RollingPlus1 from '../images/attack-modifiers/Mindthief/RollingPlus1.png';
import RollingPull1 from '../images/attack-modifiers/Mindthief/RollingPull1.png';
import RollingMuddle from '../images/attack-modifiers/Mindthief/RollingMuddle.png';
import RollingImmobilize from '../images/attack-modifiers/Mindthief/RollingImmobilize.png';
import RollingStun from '../images/attack-modifiers/Mindthief/RollingStun.png';
import RollingDisarm from '../images/attack-modifiers/Mindthief/RollingDisarm.png';

import MindthiefIcon from '../images/icons/characters/Mindthief.png';

import { none, stun, ice, muddle, immobilize, pull, disarm } from '../general/effects';
import { minus1Base, plus0Base, plus1Base } from './Base';

const plus2MT = { modifier: '+2', effect: [none], rolling: false, source: 'mt', img: Plus2 };
const plus0MT = { modifier: '+0', effect: [none], rolling: false, source: 'mt', img: Plus0 };
const plus2IceMT = { modifier: '+2', effect: [ice], rolling: false, source: 'mt', img: Plus2Ice };
const rollingPlus1MT = { modifier: '+1', effect: [none], rolling: true, source: 'mt', img: RollingPlus1 };
const rollingPull1MT = { modifier: '+0', effect: [pull], rolling: true, source: 'mt', img: RollingPull1 };
const rollingMuddleMT = { modifier: '+0', effect: [muddle], rolling: true, source: 'mt', img: RollingMuddle };
const rollingImmobilizeMT = { modifier: '+0', effect: [immobilize], rolling: true, source: 'mt', img: RollingImmobilize };
const rollingStunMT = { modifier: '+0', effect: [stun], rolling: true, source: 'mt', img: RollingStun };
const rollingDisarmMT = { modifier: '+0', effect: [disarm], rolling: true, source: 'mt', img: RollingDisarm };

const MindthiefCards = [plus2MT, plus0MT, plus2IceMT, rollingPlus1MT, rollingPull1MT, rollingMuddleMT, rollingImmobilizeMT, rollingStunMT, rollingDisarmMT];

export default { 
  key: 'MT', 
  text: 'Mindthief', 
  value: 'Mindthief', 
  cards: MindthiefCards, 
  image: { avatar: false, src: MindthiefIcon },
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
    { text: 'Replace two (+1) cards with two (+2) cards',
      changes: { 
        add: [plus2MT, plus2MT], 
        remove: [plus1Base, plus1Base]}, 
      checked: [false]
    },
    { text: 'Add one (+2) [Ice] card',
      changes: { 
        add: [plus2IceMT], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling (+1) cards',
      changes: { 
        add: [rollingPlus1MT, rollingPlus1MT], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add three rolling [Pull 1] cards',
      changes: { 
        add: [rollingPull1MT, rollingPull1MT, rollingPull1MT], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add three rolling [Muddle] cards',
      changes: { 
        add: [rollingMuddleMT, rollingMuddleMT, rollingMuddleMT], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Immobilize] cards',
      changes: { 
        add: [rollingImmobilizeMT, rollingImmobilizeMT], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Stun] card',
      changes: { 
        add: [rollingStunMT], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Disarm] card and one rolling [Muddle] card',
      changes: { 
        add: [rollingDisarmMT, rollingMuddleMT], 
        remove: []}, 
      checked: [false]
    }
  ]
}