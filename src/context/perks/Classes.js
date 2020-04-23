import Base from '../../gloomhaven/images/class-icons/base.png';
import DS from '../../gloomhaven/images/class-icons/DS.png';
import BT from '../../gloomhaven/images/class-icons/BT.png';
import BR from '../../gloomhaven/images/class-icons/BR.png';
import CH from '../../gloomhaven/images/class-icons/CH.png';
import PH from '../../gloomhaven/images/class-icons/PH.png';
import DR from '../../gloomhaven/images/class-icons/DR.png';
import NS from '../../gloomhaven/images/class-icons/NS.png';
import BE from '../../gloomhaven/images/class-icons/BE.png';
import MT from '../../gloomhaven/images/class-icons/MT.png';
import SS from '../../gloomhaven/images/class-icons/SS.png';
import SB from '../../gloomhaven/images/class-icons/SB.png';
import SC from '../../gloomhaven/images/class-icons/SC.png';
import SW from '../../gloomhaven/images/class-icons/SW.png';
import SU from '../../gloomhaven/images/class-icons/SU.png';
import SK from '../../gloomhaven/images/class-icons/SK.png';
import QM from '../../gloomhaven/images/class-icons/QM.png';
import TI from '../../gloomhaven/images/class-icons/TI.png';
import EL from '../../gloomhaven/images/class-icons/EL.png';

import { plus0Base, plus1Base, minus1Base, plus2Base, minus2Base, times2Base, times0Base } from '../cards/base';



const classes = [
  { key: 'base', text: 'Base', value: 'Base', image: { avatar: false, src: Base},
    cards: [],
    perks: [],
  },
  { key: 'DS', text: 'Angry Face', value: 'Angry Face', image: { avatar: false, src: DS },
    cards: [],
    perks: [
      { text: 'Remove two (-1)', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Replace two (+0) cards with two (+1) cards',
        changes: { 
          add: [0, 0], 
          remove: ['+0', '+0']}, 
        checked: [false, false, false]
      },
    ],
  },
  { key: 'BR', text: 'Brute', value: 'Brute', image: { avatar: false, src: BR }, 
  cards: [
    
  ],
  perks: [
    { text: 'Remove two (-1) cards', func: () => { remove('-1'); remove('-1'); }, checked: [false]},
    { text: 'Remove one (-1) card and add one (+1) card', func: () => { remove('-1'); add('+1'); }, checked: [false]},
    { text: 'Add two (+1) cards', func: () => { add('+1'); add('+1'); }, checked: [false, false]},

  ]},
  { key: 'CH', text: 'Cragheart', value: 'Cragheart', image: { avatar: false, src: CH }},
  { key: 'PH', text: 'Cthulu', value: 'Cthulu', image: { avatar: false, src: PH }},
  { key: 'DR', text: 'Diviner', value: 'Diviner', image: { avatar: false, src: DR }},
  { key: 'NS', text: 'Eclipse', value: 'Eclipse', image: { avatar: false, src: NS }},
  { key: 'BE', text: 'Lightning Bolts', value: 'Lightning Bolts', image: { avatar: false, src: BE }},
  { key: 'MT', text: 'Mindthief', value: 'Mindthief', image: { avatar: false, src: MT }},
  { key: 'SS', text: 'Music Notes', value: 'Music Notes', image: { avatar: false, src: SS }},
  { key: 'SB', text: 'Saw', value: 'Saw', image: { avatar: false, src: SB }},
  { key: 'SC', text: 'Scoundrel', value: 'Scoundrel', image: { avatar: false, src: SC }},
  { key: 'SW', text: 'Spellweaver', value: 'Spellweaver', image: { avatar: false, src: SW }},
  { key: 'SU', text: 'Circles', value: 'Summoner', image: { avatar: false, src: SU }},
  { key: 'SK', text: 'Sun', value: 'Sun', image: { avatar: false, src: SK }},
  { key: 'QM', text: 'Three Spears', value: 'Three Spears', image: { avatar: false, src: QM }},
  { key: 'TI', text: 'Tinkerer', value: 'Tinkerer', image: { avatar: false, src: TI }},
  { key: 'EL', text: 'Triangles', value: 'Triangles', image: { avatar: false, src: EL }},
  { key: 'BT', text: 'Two Minis', value: 'Two Minis', image: { avatar: false, src: BT }}
];

const remove = (modifier) => {
  console.log(modifier);
};

const add = (modifier) => {
  console.log(modifier);
}

export default classes;