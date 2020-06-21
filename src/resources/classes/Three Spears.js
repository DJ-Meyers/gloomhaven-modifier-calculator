import RollingPlus1 from '../images/attack-modifiers/Three Spears/RollingPlus1.png';
import RollingMuddle from '../images/attack-modifiers/Three Spears/RollingMuddle.png';
import RollingPierce3 from '../images/attack-modifiers/Three Spears/RollingPierce3.png';
import RollingStun from '../images/attack-modifiers/Three Spears/RollingStun.png';
import RollingAddTarget from '../images/attack-modifiers/Three Spears/RollingAddTarget.png';
import Plus0RefreshItem from '../images/attack-modifiers/Three Spears/Plus0RefreshItem.png';
import Plus1 from '../images/attack-modifiers/Three Spears/Plus1.png';
import Plus2 from '../images/attack-modifiers/Three Spears/Plus2.png';

import ThreeSpearsIcon from '../images/icons/characters/Three Spears.png';

import { none, muddle, pierce, stun, addTarget, refreshItem } from '../general/effects';
import { minus1Base, plus0Base } from './Base';

const rollingPlus1QM = { modifier: '+1', effect: [none], rolling: true, source: 'qm', img: RollingPlus1 };
const rollingMuddleQM = { modifier: '+0', effect: [muddle], rolling: true, source: 'qm', img: RollingMuddle };
const rollingPierce3QM = { modifier: '+0', effect: [pierce], rolling: true, source: 'qm', img: RollingPierce3 };
const rollingStunQM = { modifier: '+0', effect: [stun], rolling: true, source: 'qm', img: RollingStun };
const rollingAddTargetQM = { modifier: '+0', effect: [addTarget], rolling: true, source: 'qm', img: RollingAddTarget };
const plus0RefreshItemQM = { modifier: '+0', effect: [refreshItem], rolling: false, source: 'qm', img: Plus0RefreshItem };
const plus1QM = { modifier: '+1', effect: [none], rolling: false, source: 'qm', img: Plus1 };
const plus2QM = { modifier: '+2', effect: [none], rolling: false, source: 'qm', img: Plus2 };

const ThreeSpearsCards = [plus2QM, rollingPlus1QM, rollingMuddleQM, rollingPierce3QM, rollingStunQM, rollingAddTargetQM, plus0RefreshItemQM, plus1QM];

export default { 
  key: 'QM', 
  text: 'Three Spears', 
  value: 'Three Spears', 
  cards: ThreeSpearsCards, 
  image: { avatar: false, src: ThreeSpearsIcon },
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
    { text: 'Replace one (+0) card with one (+2) card',
      changes: { 
        add: [plus2QM], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Add two rolling (+1) cards',
      changes: { 
        add: [rollingPlus1QM, rollingPlus1QM], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Add three rolling [Muddle] cards',
      changes: { 
        add: [rollingMuddleQM, rollingMuddleQM, rollingMuddleQM], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Pierce 3] cards',
      changes: { 
        add: [rollingPierce3QM, rollingPierce3QM], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Stun] card',
      changes: { 
        add: [rollingStunQM], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one rolling [Add Target] card',
      changes: { 
        add: [rollingAddTargetQM], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add one (+0) [Refresh Item] card',
      changes: { 
        add: [plus0RefreshItemQM], 
        remove: []}, 
      checked: [false, false, false]
    },
    { text: 'Ignore negative item effects and add two (+1) cards',
      changes: { 
        add: [plus1QM, plus1QM], 
        remove: []}, 
      checked: [false]
    }
  ]
}