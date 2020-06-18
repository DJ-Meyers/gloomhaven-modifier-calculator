import Plus1Dark from '../images/attack-modifiers/Eclipse/Plus1Dark.png';
import Plus1Invisible from '../images/attack-modifiers/Eclipse/Plus1Invisible.png';
import RollingMuddle from '../images/attack-modifiers/Eclipse/RollingMuddle.png';
import RollingHeal1Self from '../images/attack-modifiers/Eclipse/RollingHeal1Self.png';
import RollingCurse from '../images/attack-modifiers/Eclipse/RollingCurse.png';
import RollingAddTarget from '../images/attack-modifiers/Eclipse/RollingAddTarget.png';
import Plus1 from '../images/attack-modifiers/Eclipse/Plus1.png';
import Minus1Dark from '../images/attack-modifiers/Eclipse/Minus1Dark.png';

import EclipseIcon from '../images/icons/characters/Eclipse.png';

import { none, dark, invisible, muddle, healSelf, curse, addTarget } from '../general/effects';
import { minus1Base, plus0Base } from './Base';

const plus1DarkNS = { modifier: '+1', effect: dark, rolling: false, source: 'ns', img: Plus1Dark };
const plus1InvisibleNS = { modifier: '+1', effect: invisible, rolling: false, source: 'ns', img: Plus1Invisible };
const rollingMuddleNS = { modifier: '+0', effect: muddle, rolling: true, source: 'ns', img: RollingMuddle };
const rollingHeal1SelfNS = { modifier: '+0', effect: healSelf, rolling: true, source: 'ns', img: RollingHeal1Self };
const rollingCurseNS = { modifier: '+0', effect: curse, rolling: true, source: 'ns', img: RollingCurse };
const rollingAddTargetNS = { modifier: '+0', effect: addTarget, rolling: true, source: 'ns', img: RollingAddTarget };
const plus1NS = { modifier: '+1', effect: none, rolling: false, source: 'ns', img: Plus1 };
const minus1DarkNS = { modifier: '-1', effect: dark, rolling: false, source: 'ns', img: Minus1Dark };

export const EclipseCards = [minus1DarkNS, plus1DarkNS, plus1InvisibleNS, rollingMuddleNS, rollingHeal1SelfNS, rollingCurseNS, rollingAddTargetNS, plus1NS];

export default { 
  key: 'NS', 
  text: 'Eclipse', 
  value: 'Eclipse', 
  cards: EclipseCards, 
  image: { avatar: false, src: EclipseIcon },
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
    { text: 'Add one (-1) [Dark] card',
      changes: { 
        add: [minus1DarkNS], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Replace one (-1) [Dark] card with one (+1) [Dark] card',
      changes: { 
        add: [plus1DarkNS], 
        remove: [minus1DarkNS]}, 
      checked: [false, false]
    },
    { text: 'Add one (+1) [Invisible] card',
      changes: { 
        add: [plus1InvisibleNS], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add three rolling [Muddle] cards',
      changes: { 
        add: [rollingMuddleNS, rollingMuddleNS, rollingMuddleNS], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add two rolling [Heal 1 Self] card',
      changes: { 
        add: [rollingHeal1SelfNS, rollingHeal1SelfNS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Curse] cards',
      changes: { 
        add: [rollingCurseNS, rollingCurseNS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Add Target] card',
      changes: { 
        add: [rollingAddTargetNS], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Ignore negative scenario effects and add two (+1) cards',
      changes: { 
        add: [plus1NS, plus1NS], 
        remove: []}, 
      checked: [false]
    }
  ]
}