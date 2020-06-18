import RollingPierce3 from '../images/attack-modifiers/Brute/RollingPierce3.png';
import RollingStun from '../images/attack-modifiers/Brute/RollingStun.png';
import RollingDisarm from '../images/attack-modifiers/Brute/RollingDisarm.png';
import RollingMuddle from '../images/attack-modifiers/Brute/RollingMuddle.png';
import RollingAddTarget from '../images/attack-modifiers/Brute/RollingAddTarget.png';
import Plus1Shield1Self from '../images/attack-modifiers/Brute/Plus1Shield1Self.png';
import Plus1 from '../images/attack-modifiers/Brute/Plus1.png';
import Plus3 from '../images/attack-modifiers/Brute/Plus3.png';
import RollingPush1 from '../images/attack-modifiers/Brute/RollingPush1.png';

import BruteIcon from '../images/icons/characters/Brute.png';

import { none, muddle, stun, disarm, addTarget, pierce, shieldSelf, push } from '../general/effects';
import { minus1Base } from './Base';

const rollingPierce3BR = { modifier: '+0', effect: pierce, rolling: true, source: 'br', img: RollingPierce3 };
const rollingStunBR = { modifier: '+0', effect: stun, rolling: true, source: 'br', img: RollingStun };
const rollingDisarmBR = { modifier: '+0', effect: disarm, rolling: true, source: 'br', img: RollingDisarm };
const rollingMuddleBR = { modifier: '+0', effect: muddle, rolling: true, source: 'br', img: RollingMuddle };
const rollingAddTargetBR = { modifier: '+0', effect: addTarget, rolling: true, source: 'br', img: RollingAddTarget };
const plus1Shield1SelfBR = { modifier: '+1', effect: shieldSelf, rolling: false, source: 'br', img: Plus1Shield1Self };
const plus1BR = { modifier: '+1', effect: none, rolling: false, source: 'br', img: Plus1 };
const plus3BR = { modifier: '+3', effect: none, rolling: false, source: 'br', img: Plus3 };
const rollingPush1BR = { modifier: '+0', effect: push, rolling: true, source: 'br', img: RollingPush1 };

const BruteCards = [rollingPierce3BR, rollingStunBR, rollingDisarmBR, rollingMuddleBR, rollingAddTargetBR, plus1Shield1SelfBR, plus1BR, plus3BR, rollingPush1BR];

export default 
{ 
  key: 'BR', 
  text: 'Brute', 
  value: 'Brute', 
  cards: BruteCards,
  image: { avatar: false, src: BruteIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) card with one (+1) card', 
      changes: { 
        add: [plus1BR], 
        remove: [minus1Base]}, 
      checked: [false]
    },
    { text: 'Add two (+1) cards', 
      changes: { 
        add: [plus1BR, plus1BR], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+3) card', 
      changes: { 
        add: [plus3BR], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add three rolling [Push 1] cards', 
      changes: { 
        add: [rollingPush1BR, rollingPush1BR, rollingPush1BR], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Pierce 3] cards', 
      changes: { 
        add: [rollingPierce3BR, rollingPierce3BR], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Stun] card', 
      changes: { 
        add: [rollingStunBR], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one rolling [Disarm] card and one rolling [Muddle] card', 
      changes: { 
        add: [rollingDisarmBR, rollingMuddleBR], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Add Target] card', 
      changes: { 
        add: [rollingAddTargetBR], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Shield 1, Self] card', 
      changes: { 
        add: [plus1Shield1SelfBR], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Ignore negative item effects and add one (+1) card', 
      changes: { 
        add: [plus1BR], 
        remove: []}, 
      checked: [false]
    }
  ]
}