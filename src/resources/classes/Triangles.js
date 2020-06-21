import Plus2 from '../images/attack-modifiers/Triangles/Plus2.png';
import Plus0Fire from '../images/attack-modifiers/Triangles/Plus0Fire.png';
import Plus0Ice from '../images/attack-modifiers/Triangles/Plus0Ice.png';
import Plus0Air from '../images/attack-modifiers/Triangles/Plus0Air.png';
import Plus0Earth from '../images/attack-modifiers/Triangles/Plus0Earth.png';
import Plus1Push1 from '../images/attack-modifiers/Triangles/Plus1Push1.png';
import Plus1Wound from '../images/attack-modifiers/Triangles/Plus1Wound.png';
import Plus0Stun from '../images/attack-modifiers/Triangles/Plus0Stun.png';
import Plus0AddTarget from '../images/attack-modifiers/Triangles/Plus0AddTarget.png';
import Plus1 from '../images/attack-modifiers/Triangles/Plus1.png';

import TrianglesIcon from '../images/icons/characters/Triangles.png';

import { none, fire, ice, air, earth, push, wound, stun, addTarget } from '../general/effects';
import { minus1Base, plus0Base } from './Base';

const plus1EL = { modifier: '+1', effect: [none], rolling: false, source: 'el', img: Plus1 };
const plus2EL = { modifier: '+2', effect: [none], rolling: false, source: 'el', img: Plus2 };
const plus0FireEL = { modifier: '+0', effect: [fire], rolling: false, source: 'el', img: Plus0Fire };
const plus0IceEL = { modifier: '+0', effect: [ice], rolling: false, source: 'el', img: Plus0Ice };
const plus0AirEL = { modifier: '+0', effect: [air], rolling: false, source: 'el', img: Plus0Air };
const plus0EarthEL = { modifier: '+0', effect: [earth], rolling: false, source: 'el', img: Plus0Earth };
const plus1PushEL = { modifier: '+1', effect: [push], rolling: false, source: 'el', img: Plus1Push1 };
const plus1WoundEL = { modifier: '+1', effect: [wound], rolling: false, source: 'el', img: Plus1Wound };
const plus0StunEL = { modifier: '+0', effect: [stun], rolling: false, source: 'el', img: Plus0Stun };
const plus0AddTargetEL = { modifier: '+0', effect: [addTarget], rolling: false, source: 'el', img: Plus0AddTarget };

const TrianglesCards = [plus1EL, plus2EL, plus0FireEL, plus0IceEL, plus0AirEL, plus0EarthEL, plus1PushEL, plus1WoundEL, plus0StunEL, plus0AddTargetEL];

export default { 
  key: 'EL', 
  text: 'Triangles', 
  value: 'Triangles', 
  cards: TrianglesCards, 
  image: { avatar: false, src: TrianglesIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (-1) card with one (+1) card',
      changes: { 
        add: [plus1EL], 
        remove: [minus1Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) with one (+2) card',
      changes: { 
        add: [plus2EL], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Add three (+0) [Fire] cards',
      changes: { 
        add: [plus0FireEL, plus0FireEL, plus0FireEL], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add three (+0) [Ice] cards',
      changes: { 
        add: [plus0IceEL, plus0IceEL, plus0IceEL], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add three (+0) [Air] cards',
      changes: { 
        add: [plus0AirEL, plus0AirEL, plus0AirEL], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add three (+0) [Earth] cards',
      changes: { 
        add: [plus0EarthEL, plus0EarthEL, plus0EarthEL], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Replace two (+0) cards with one (+0) [Fire] card and one (+0) [Earth]',
      changes: { 
        add: [plus0FireEL, plus0EarthEL], 
        remove: [plus0Base, plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace two (+0) cards with one (+0) [Ice] card and one (+0) [Air]',
      changes: { 
        add: [plus0IceEL, plus0AirEL], 
        remove: [plus0Base, plus0Base]}, 
      checked: [false]
    },
    { text: 'Add two (+1) [Push 1] cards',
      changes: { 
        add: [plus1PushEL, plus1PushEL], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Wound] card',
      changes: { 
        add: [plus1WoundEL], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+0) [Stun] card',
      changes: { 
        add: [plus0StunEL], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+0) [Add Target] card',
      changes: { 
        add: [plus0AddTargetEL], 
        remove: []}, 
      checked: [false]
    },
  ]
}