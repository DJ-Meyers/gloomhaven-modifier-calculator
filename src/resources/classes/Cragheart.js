import Plus1 from '../images/attack-modifiers/Cragheart/Plus1.png';
import Minus2 from '../images/attack-modifiers/Cragheart/Minus2.png';
import Plus2 from '../images/attack-modifiers/Cragheart/Plus2.png';
import Plus1Immobilize from '../images/attack-modifiers/Cragheart/Plus1Immobilize.png';
import Plus2Muddle from '../images/attack-modifiers/Cragheart/Plus2Muddle.png';
import RollingPush2 from '../images/attack-modifiers/Cragheart/RollingPush2.png';
import RollingEarth from '../images/attack-modifiers/Cragheart/RollingEarth.png';
import RollingAir from '../images/attack-modifiers/Cragheart/RollingAir.png';

import CragheartIcon from '../images/icons/characters/Cragheart.png';

import { none, immobilize, muddle, push, earth, air } from '../general/effects';
import { plus0Base, minus1Base } from './Base';

const plus1CH = { modifier: '+1', effect: none, rolling: false, source: 'ch', img: Plus1 };
const minus2CH = { modifier: '-2', effect: none, rolling: false, source: 'ch', img: Minus2 };
const plus2CH = { modifier: '+2', effect: none, rolling: false, source: 'ch', img: Plus2 };
const plus1ImmobilizeCH = { modifier: '+1', effect: immobilize, rolling: false, source: 'ch', img: Plus1Immobilize };
const plus2MuddleCH = { modifier: '+2', effect: muddle, rolling: false, source: 'ch', img: Plus2Muddle };
const rollingPush2CH = { modifier: '+0', effect: push, rolling: true, source: 'ch', img: RollingPush2 };
const rollingEarthCH = { modifier: '+0', effect: earth, rolling: true, source: 'ch', img: RollingEarth };
const rollingAirCH = { modifier: '+0', effect: air, rolling: true, source: 'ch', img: RollingAir };

const CragheartCards = [plus1CH, minus2CH, plus2CH, plus1ImmobilizeCH, plus2MuddleCH, rollingPush2CH, rollingEarthCH, rollingAirCH];

export default { 
  key: 'CH', 
  text: 'Cragheart', 
  value: 'Cragheart', 
  cards: CragheartCards, 
  image: { avatar: false, src: CragheartIcon },
  perks: [
    { text: 'Remove four (+0) cards', 
      changes: { 
        add: [], 
        remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) card with one (+1) card', 
      changes: { 
        add: [plus1CH], 
        remove: [minus1Base]}, 
      checked: [false, false, false]
    },
    { text: 'Add one (-2) card and two (+2) cards', 
      changes: { 
        add: [minus2CH, plus2CH, plus2CH], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+1) [Immobilize] card', 
      changes: { 
        add: [plus1ImmobilizeCH], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+2) [Muddle] card', 
      changes: { 
        add: [plus2MuddleCH], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Push 2] cards', 
      changes: { 
        add: [rollingPush2CH, rollingPush2CH], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Earth] cards', 
      changes: { 
        add: [rollingEarthCH, rollingEarthCH], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Air] cards', 
      changes: { 
        add: [rollingAirCH], 
        remove: []}, 
      checked: [false]
    },
  ]
}