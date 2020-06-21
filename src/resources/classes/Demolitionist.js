import Plus0AdjacentSuffer1 from '../images/attack-modifiers/Demolitionist/Plus0AdjacentSuffer1.png';
import Plus0Poison from '../images/attack-modifiers/Demolitionist/Plus0Poison.png';
import Plus2 from '../images/attack-modifiers/Demolitionist/Plus2.png';
import Plus2Earth from '../images/attack-modifiers/Demolitionist/Plus2Earth.png';
import Plus2Fire from '../images/attack-modifiers/Demolitionist/Plus2Fire.png';
import Plus2Muddle from '../images/attack-modifiers/Demolitionist/Plus2Muddle.png';

import DemolitionistIcon from '../images/icons/characters/Demolitionist.png';

import { none, muddle, poison, earth, fire, adjacentEnemiesSuffer1 } from '../general/effects';
import { minus1Base, plus0Base, minus2Base, plus1Base } from './Base';

const plus0AdjacentSuffer1DM = { modifier: '+0', effect: [adjacentEnemiesSuffer1], rolling: false, source: 'dm', img: Plus0AdjacentSuffer1 };
const plus0PoisonDM = { modifier: '+0', effect: [poison], rolling: false, source: 'dm', img: Plus0Poison };
const plus2DM = { modifier: '+2', effect: [none], rolling: false, source: 'dm', img: Plus2 };
const plus2EarthDM = { modifier: '+2', effect: [earth], rolling: false, source: 'dm', img: Plus2Earth };
const plus2FireDM = { modifier: '+2', effect: [fire], rolling: false, source: 'dm', img: Plus2Fire };
const plus2MuddleDM = { modifier: '+2', effect: [muddle], rolling: false, source: 'dm', img: Plus2Muddle };

const DemolitionistCards = [plus2MuddleDM, plus0PoisonDM, plus2DM, plus2EarthDM, plus2FireDM, plus0AdjacentSuffer1DM];

export default 
{ 
  key: 'DM', 
  text: 'Demolitionist', 
  value: 'Demolitionist', 
  cards: DemolitionistCards,
  image: { avatar: false, src: DemolitionistIcon },
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
      checked: [false, false]
    },
    { text: 'Remove one (-2) card and one (+1) card', 
      changes: { 
        add: [], 
        remove: [minus2Base, plus1Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+2) [Muddle] card', 
      changes: { 
        add: [plus2MuddleDM], 
        remove: [plus0Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (-1) card with one (+0) [Poison] card', 
      changes: { 
        add: [plus0PoisonDM], 
        remove: [minus1Base]}, 
      checked: [false]
    },
    { text: 'Add one (+2)', 
      changes: { 
        add: [plus2DM], 
        remove: []}, 
      checked: [false, false]
    },
    { text: 'Replace one (+1) card with one (+2) [Earth] card', 
      changes: { 
        add: [plus2EarthDM], 
        remove: [plus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+1) card with one (+2) [Fire] card', 
      changes: { 
        add: [plus2FireDM], 
        remove: [plus1Base]}, 
      checked: [false, false]
    },
    { text: 'Add one (+0) [All adjacent enemies suffer 1 damage]', 
      changes: { 
        add: [plus0AdjacentSuffer1DM], 
        remove: []}, 
      checked: [false, false]
    }
  ]
}