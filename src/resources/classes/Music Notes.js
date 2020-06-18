import Plus1Immobilize from '../images/attack-modifiers/Music Notes/Plus1Immobilize.png';
import Plus1Disarm from '../images/attack-modifiers/Music Notes/Plus1Disarm.png';
import Plus2Wound from '../images/attack-modifiers/Music Notes/Plus2Wound.png';
import Plus2Poison from '../images/attack-modifiers/Music Notes/Plus2Poison.png';
import Plus2Curse from '../images/attack-modifiers/Music Notes/Plus2Curse.png';
import Plus3Muddle from '../images/attack-modifiers/Music Notes/Plus3Muddle.png';
import Plus0Stun from '../images/attack-modifiers/Music Notes/Plus0Stun.png';
import RollingPlus1 from '../images/attack-modifiers/Music Notes/RollingPlus1.png';
import RollingCurse from '../images/attack-modifiers/Music Notes/RollingCurse.png';
import Plus4 from '../images/attack-modifiers/Music Notes/Plus4.png';

import MusicNotesIcon from '../images/icons/characters/Music Notes.png';

import { none, immobilize, disarm, wound, poison, curse, muddle, stun  } from '../general/effects';
import { minus1Base, minus2Base, plus0Base, plus1Base } from './Base';

const plus1ImmobilizeSS = { modifier: '+1', effect: immobilize, rolling: false, source: 'ss', img: Plus1Immobilize };
const plus1DisarmSS = { modifier: '+1', effect: disarm, rolling: false, source: 'ss', img: Plus1Disarm };
const plus2WoundSS = { modifier: '+2', effect: wound, rolling: false, source: 'ss', img: Plus2Wound };
const plus2PoisonSS = { modifier: '+2', effect: poison, rolling: false, source: 'ss', img: Plus2Poison };
const plus2CurseSS = { modifier: '+2', effect: curse, rolling: false, source: 'ss', img: Plus2Curse };
const plus3MuddleSS = { modifier: '+3', effect: muddle, rolling: false, source: 'ss', img: Plus3Muddle };
const plus0StunSS = { modifier: '+0', effect: stun, rolling: false, source: 'ss', img: Plus0Stun };
const plus4SS = { modifier: '+4', effect: none, rolling: false, source: 'ss', img: Plus4 };
const rollingPlus1SS = { modifier: '+1', effect: none, rolling: true, source: 'ss', img: RollingPlus1 };
const rollingCurseSS = { modifier: '+0', effect: curse, rolling: true, source: 'ss', img: RollingCurse };

const MusicNotesCards = [plus4SS, plus1ImmobilizeSS, plus1DisarmSS, plus2WoundSS, plus2PoisonSS, plus2CurseSS, plus3MuddleSS, plus0StunSS, rollingPlus1SS, rollingCurseSS];

export default { 
  key: 'SS', 
  text: 'Music Notes', 
  value: 'Music Notes', 
  cards: MusicNotesCards, 
  image: { avatar: false, src: MusicNotesIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Remove one (-2) card',
      changes: { 
        add: [], 
        remove: [minus2Base]}, 
      checked: [false]
    },
    { text: 'Replace two (+1) cards with one (+4) card',
      changes: { 
        add: [plus4SS], 
        remove: [plus1Base, plus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+0) card with one (+1) [Immobilize] card',
      changes: { 
        add: [plus1ImmobilizeSS], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+1) [Disarm] card',
      changes: { 
        add: [plus1DisarmSS], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+2) [Wound] card',
      changes: { 
        add: [plus2WoundSS], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+2) [Poison] card',
      changes: { 
        add: [plus2PoisonSS], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+2) [Curse] card',
      changes: { 
        add: [plus2CurseSS], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+3) [Muddle] card',
      changes: { 
        add: [plus3MuddleSS], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) card with one (+0) [Stun] card',
      changes: { 
        add: [plus1ImmobilizeSS], 
        remove: [minus1Base]}, 
      checked: [false]
    },
    { text: 'Add three rolling (+1) cards',
      changes: { 
        add: [rollingPlus1SS, rollingPlus1SS, rollingPlus1SS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Curse] cards',
      changes: { 
        add: [rollingCurseSS, rollingCurseSS], 
        remove: []}, 
      checked: [false, false]
    }
  ]
}