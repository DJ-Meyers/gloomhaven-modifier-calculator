import Plus0Stun from '../images/attack-modifiers/Hatchet/Plus0Stun.png';
import Plus1Immobilize from '../images/attack-modifiers/Hatchet/Plus1Immobilize.png';
import Plus1Poison from '../images/attack-modifiers/Hatchet/Plus1Poison.png';
import Plus1Push2 from '../images/attack-modifiers/Hatchet/Plus1Push2.png';
import Plus1Stun from '../images/attack-modifiers/Hatchet/Plus1Stun.png';
import Plus1Wound from '../images/attack-modifiers/Hatchet/Plus1Wound.png';
import Plus2Air from '../images/attack-modifiers/Hatchet/Plus2Air.png';
import Plus2Muddle from '../images/attack-modifiers/Hatchet/Plus2Muddle.png';
import Plus3 from '../images/attack-modifiers/Hatchet/Plus3.png';

import HatchetIcon from '../images/icons/characters/Hatchet.png';

import { none, muddle, poison, stun, air, push, wound, immobilize } from '../general/effects';
import { minus1Base, plus0Base, plus1Base } from './Base';

const plus0StunHA = { modifier: '+0', effect: stun, rolling: false, source: 'ha', img: Plus0Stun };
const plus1ImmobilizeHA = { modifier: '+1', effect: immobilize, rolling: false, source: 'ha', img: Plus1Immobilize };
const plus1PoisonHA = { modifier: '+1', effect: poison, rolling: false, source: 'ha', img: Plus1Poison };
const plus1Push2HA = { modifier: '+1', effect: push, rolling: false, source: 'ha', img: Plus1Push2 };
const plus1StunHA = { modifier: '+1', effect: immobilize, rolling: false, source: 'ha', img: Plus1Stun };
const plus1WoundHA = { modifier: '+1', effect: wound, rolling: false, source: 'ha', img: Plus1Wound };
const plus2AirHA = { modifier: '+2', effect: air, rolling: false, source: 'ha', img: Plus2Air };
const plus2MuddleHA = { modifier: '+2', effect: muddle, rolling: false, source: 'ha', img: Plus2Muddle };
const plus3HA = { modifier: '+3', effect: none, rolling: false, source: 'ha', img: Plus3 };

const HatchetCards = [plus0StunHA, plus1ImmobilizeHA, plus1PoisonHA, plus1Push2HA, plus1StunHA, plus1WoundHA, plus2AirHA, plus2MuddleHA, plus3HA];

export default 
{ 
  key: 'HA', 
  text: 'Hatchet', 
  value: 'Hatchet', 
  cards: HatchetCards,
  image: { avatar: false, src: HatchetIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+0) card with one (+2) [Muddle] card', 
      changes: { 
        add: [plus2MuddleHA], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+1) [Poison] card', 
      changes: { 
        add: [plus1PoisonHA], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+1) [Wound] card', 
      changes: { 
        add: [plus1WoundHA], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+1) [Immobilize] card', 
      changes: { 
        add: [plus1ImmobilizeHA], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+1) [Push 2] card', 
      changes: { 
        add: [plus1PoisonHA], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+0) [Stun] card', 
      changes: { 
        add: [plus0StunHA], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+1) card with one (+1) [Stun] card', 
      changes: { 
        add: [plus1StunHA], 
        remove: [plus1Base]}, 
      checked: [false]
    },
    { text: 'Add one (+2) Air card', 
      changes: { 
        add: [plus2AirHA], 
        remove: []}, 
      checked: [false, false, false]
    },
    { text: 'Replace one (+1) with one (+3) card', 
      changes: { 
        add: [plus3HA], 
        remove: [plus1Base]}, 
      checked: [false, false, false]
    }
  ]
}