import Plus1Dark from '../images/attack-modifiers/Voidwarden/Plus1Dark.png';
import Plus1Ice from '../images/attack-modifiers/Voidwarden/Plus1Ice.png';
import Plus0Heal1Ally from '../images/attack-modifiers/Voidwarden/Plus0Heal1Ally.png';
import Plus1Heal1Ally from '../images/attack-modifiers/Voidwarden/Plus1Heal1Ally.png';
import Plus1Poison from '../images/attack-modifiers/Voidwarden/Plus1Poison.png';
import Plus3 from '../images/attack-modifiers/Voidwarden/Plus3.png';
import Plus1Curse from '../images/attack-modifiers/Voidwarden/Plus1Curse.png';

import VoidwardenIcon from '../images/icons/characters/Voidwarden.png';

import { dark, ice, healAlly, poison, none, curse} from '../general/effects';
import { minus1Base, plus0Base, minus2Base } from './Base';

const plus1DarkVW = { modifier: '+1', effect: dark, rolling: false, source: 'vw', img: Plus1Dark };
const plus1IceVW = { modifier: '+1', effect: ice, rolling: false, source: 'vw', img: Plus1Ice };
const plus0Heal1AllyVW = { modifier: '+0', effect: healAlly, rolling: false, source: 'vw', img: Plus0Heal1Ally };
const plus1Heal1AllyVW = { modifier: '+1', effect: healAlly, rolling: false, source: 'vw', img: Plus1Heal1Ally };
const plus1PoisonVW = { modifier: '+1', effect: poison, rolling: false, source: 'vw', img: Plus1Poison };
const plus3VW = { modifier: '+3', effect: none, rolling: false, source: 'vw', img: Plus3 };
const plus1CurseVW = { modifier: '+1', effect: curse, rolling: false, source: 'vw', img: Plus1Curse };

const VoidwardenCards = [plus1DarkVW, plus1IceVW, plus0Heal1AllyVW, plus1Heal1AllyVW, plus1PoisonVW, plus3VW, plus1CurseVW];

export default 
{ 
  key: 'VW', 
  text: 'Voidwarden', 
  value: 'Voidwarden', 
  cards: VoidwardenCards,
  image: { avatar: false, src: VoidwardenIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false]
    },
    { text: 'Remove one (-2) card', 
      changes: { 
        add: [], 
        remove: [minus2Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+1) [Dark]', 
      changes: { 
        add: [plus1DarkVW], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+0) card with one (+1) [Ice] card', 
      changes: { 
        add: [plus1IceVW], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (-1) card with one (+0) [Heal 1 Ally] card', 
      changes: { 
        add: [plus0Heal1AllyVW], 
        remove: [minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Heal 1 Ally] card', 
      changes: { 
        add: [plus1Heal1AllyVW], 
        remove: []}, 
      checked: [false, false, false]
    },
    { text: 'Add one (+1) [Poison] card', 
      changes: { 
        add: [plus1PoisonVW], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+3) card', 
      changes: { 
        add: [plus3VW], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Curse] card', 
      changes: { 
        add: [plus1CurseVW], 
        remove: []}, 
      checked: [false, false]
    }
  ]
}