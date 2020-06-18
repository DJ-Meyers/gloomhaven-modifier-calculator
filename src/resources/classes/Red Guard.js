import Plus1 from '../images/attack-modifiers/Red Guard/Plus1.png';
import Plus2Fire from '../images/attack-modifiers/Red Guard/Plus2Fire.png';
import Plus2Light from '../images/attack-modifiers/Red Guard/Plus2Light.png';
import Plus1FireLight from '../images/attack-modifiers/Red Guard/Plus1FireLight.png';
import Plus1Shield1Self from '../images/attack-modifiers/Red Guard/Plus1Shield1Self.png';
import Plus1Immobilize from '../images/attack-modifiers/Red Guard/Plus1Immobilize.png';
import Plus1Wound from '../images/attack-modifiers/Red Guard/Plus1Wound.png';

import RedGuardIcon from '../images/icons/characters/Red Guard.png';

import { none, fire, light, shieldSelf, immobilize, wound } from '../general/effects';
import { minus1Base, plus0Base, minus2Base, plus1Base } from './Base';

const plus1RG = { modifier: '+1', effect: none, rolling: false, source: 'rg', img: Plus1 };
const plus2FireRG = { modifier: '+2', effect: fire, rolling: false, source: 'rg', img: Plus2Fire };
const plus2LightRG = { modifier: '+2', effect: light, rolling: false, source: 'rg', img: Plus2Light };
const plus1FireLightRG = { modifier: '+1', effect: fire, rolling: false, source: 'rg', img: Plus1FireLight };
const plus1Shield1SelfRG = { modifier: '+1', effect: shieldSelf, rolling: false, source: 'rg', img: Plus1Shield1Self };
const plus1ImmobilizeRG = { modifier: '+1', effect: immobilize, rolling: false, source: 'rg', img: Plus1Immobilize };
const plus1WoundRG = { modifier: '+1', effect: wound, rolling: false, source: 'rg', img: Plus1Wound };

const RedGuardCards = [plus1RG, plus2FireRG, plus2LightRG, plus1FireLightRG, plus1Shield1SelfRG, plus1ImmobilizeRG, plus1WoundRG];

export default 
{ 
  key: 'RG', 
  text: 'Red Guard', 
  value: 'Red Guard', 
  cards: RedGuardCards,
  image: { avatar: false, src: RedGuardIcon },
  perks: [
    { text: 'Remove four (+0) cards', 
      changes: { 
        add: [], 
        remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
      checked: [false]
    },
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false]
    },
    { text: 'Remove one (-2) card and one (+1) card', 
      changes: { 
        add: [], 
        remove: [minus2Base, plus1Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) card with one (+1) card', 
      changes: { 
        add: [plus1RG], 
        remove: [minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+1) card with one (+2) [Fire] card', 
      changes: { 
        add: [plus2FireRG], 
        remove: [plus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+1) card with one (+2) [Light] card', 
      changes: { 
        add: [plus2LightRG], 
        remove: [plus1Base]}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Fire, Light] card', 
      changes: { 
        add: [plus1FireLightRG], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Shield 1 Self] card', 
      changes: { 
        add: [plus1Shield1SelfRG], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Replace one (+0) card with one (+1) [Immobilize] card', 
      changes: { 
        add: [plus1ImmobilizeRG], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+1) [Wound] card', 
      changes: { 
        add: [plus1WoundRG], 
        remove: []}, 
      checked: [false]
    }
  ]
}