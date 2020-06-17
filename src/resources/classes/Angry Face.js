import Plus1 from '../images/attack-modifiers/Angry Face/Plus1.png';
import RollingPlus1 from '../images/attack-modifiers/Angry Face/RollingPlus1.png';
import Plus2Muddle from '../images/attack-modifiers/Angry Face/Plus2Muddle.png';
import Plus1Poison from '../images/attack-modifiers/Angry Face/Plus1Poison.png';
import Plus1Wound from '../images/attack-modifiers/Angry Face/Plus1Wound.png';
import Plus1Immobilize from '../images/attack-modifiers/Angry Face/Plus1Immobilize.png';
import Stun from '../images/attack-modifiers/Angry Face/Plus0Stun.png';
import RollingAddTarget from '../images/attack-modifiers/Angry Face/RollingAddTarget.png';

import AngryFaceIcon from '../images/icons/characters/Angry Face.png';

import { none, muddle, poison, wound, immobilize, stun, addTarget } from '../general/effects';
import { minus1Base, plus0Base } from './Base.js';

const plus1DS = { modifier: '+1', effect: none, rolling: false, source: 'ds', img: Plus1 };
const rollingPlus1DS = { modifier: '+1', effect: none, rolling: true, source: 'ds', img: RollingPlus1 };
const plus2MuddleDS = { modifier: '+2', effect: muddle, rolling: false, source: 'ds', img: Plus2Muddle };
const plus1PoisonDS = { modifier: '+1', effect: poison, rolling: false, source: 'ds', img: Plus1Poison };
const plus1WoundDS = { modifier: '+1', effect: wound, rolling: false, source: 'ds', img: Plus1Wound };
const plus1ImmobilizeDS = { modifier: '+1', effect: immobilize, rolling: false, source: 'ds', img: Plus1Immobilize };
const plus0StunDS = { modifier: '+0', effect: stun, rolling: false, source: 'ds', img: Stun };
const rollingAddTargetDS = { modifier: '+0', effect: addTarget, rolling: false, source: 'ds', img: RollingAddTarget };

const AngryFaceCards = [plus1DS, rollingPlus1DS, plus2MuddleDS, plus1PoisonDS, plus1WoundDS, plus1ImmobilizeDS, plus0StunDS, rollingAddTargetDS];

export default {
  key: 'DS', 
  text: 'Angry Face', 
  value: 'Angry Face', 
  cards: AngryFaceCards, 
  image: { avatar: false, src: AngryFaceIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace two (+0) cards with two (+1) cards',
      changes: { 
        add: [plus1DS, plus1DS], 
        remove: [plus0Base, plus0Base]}, 
      checked: [false, false, false]
    },
    { text: 'Add two rolling (+1) cards',
      changes: { 
        add: [rollingPlus1DS, rollingPlus1DS], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+2) [Muddle] card',
      changes: { 
        add: [plus2MuddleDS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Poison] card',
      changes: { 
        add: [plus1PoisonDS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Wound] card',
      changes: { 
        add: [plus1WoundDS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Immobilize] card',
      changes: { 
        add: [plus1ImmobilizeDS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+0) [Stun] card',
      changes: { 
        add: [plus0StunDS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Add Target] card',
      changes: { 
        add: [rollingAddTargetDS], 
        remove: []}, 
      checked: [false, false]
    }
  ],
  
}