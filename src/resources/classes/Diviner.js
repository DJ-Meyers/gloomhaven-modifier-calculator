import Plus1 from '../images/attack-modifiers/Diviner/Plus1.png';
import Plus3Shield1Self from '../images/attack-modifiers/Diviner/Plus3Shield1Self.png';
import Plus1Shield1Ally from '../images/attack-modifiers/Diviner/Plus1Shield1Ally.png';
import Plus2Dark from '../images/attack-modifiers/Diviner/Plus2Dark.png';
import Plus2Light from '../images/attack-modifiers/Diviner/Plus2Light.png';
import Plus3Muddle from '../images/attack-modifiers/Diviner/Plus3Muddle.png';
import Plus2Curse from '../images/attack-modifiers/Diviner/Plus2Curse.png';
import Plus2RegenerateSelf from '../images/attack-modifiers/Diviner/Plus2RegenerateSelf.png';
import Plus1Heal2Ally from '../images/attack-modifiers/Diviner/Plus1Heal2Ally.png';
import RollingHeal1Self from '../images/attack-modifiers/Diviner/RollingHeal1Self.png';
import RollingCurse from '../images/attack-modifiers/Diviner/RollingCurse.png';

import DivinerIcon from '../images/icons/characters/Diviner.png';

import { none, dark, light, curse, shieldSelf, shieldAlly, muddle, regenerateSelf, healAlly, healSelf } from '../general/effects';
import { minus1Base, minus2Base, plus1Base, plus0Base } from './Base';

export const plus1DR = { modifier: '+1', effect: none, rolling: false, source: 'dr', img: Plus1 };
export const plus3Shield1SelfDR = { modifier: '+3', effect: shieldSelf, rolling: false, source: 'dr', img: Plus3Shield1Self };
export const plus1Shield1AllyDR = { modifier: '+1', effect: shieldAlly, rolling: false, source: 'dr', img: Plus1Shield1Ally };
export const plus2DarkDR = { modifier: '+2', effect: dark, rolling: false, source: 'dr', img: Plus2Dark };
export const plus2LightDR = { modifier: '+2', effect: light, rolling: false, source: 'dr', img: Plus2Light };
export const plus3MuddleDR = { modifier: '+3', effect: muddle, rolling: false, source: 'dr', img: Plus3Muddle };
export const plus2CurseDR = { modifier: '+2', effect: curse, rolling: false, source: 'dr', img: Plus2Curse };
export const plus2RegenerateSelfDR = { modifier: '+2', effect: regenerateSelf, rolling: false, source: 'dr', img: Plus2RegenerateSelf };
export const plus1Heal2AllyDR = { modifier: '+1', effect: healAlly, rolling: false, source: 'dr', img: Plus1Heal2Ally };
export const rollingHeal1SelfDR = { modifier: '+0', effect: healSelf, rolling: true, source: 'dr', img: RollingHeal1Self };
export const rollingCurseDR = { modifier: '+0', effect: curse, rolling: true, source: 'dr', img: RollingCurse };

export const DivinerCards = [plus1DR, plus3Shield1SelfDR, plus1Shield1AllyDR, plus2DarkDR, plus2LightDR, plus3MuddleDR, plus2CurseDR, plus2RegenerateSelfDR, plus1Heal2AllyDR, rollingHeal1SelfDR, rollingCurseDR];

export default { 
  key: 'DR', 
  text: 'Diviner', 
  value: 'Diviner', 
  cards: DivinerCards, 
  image: { avatar: false, src: DivinerIcon },
  perks: [
    { text: 'Remove two (-1) cards', 
      changes: { 
        add: [], 
        remove: [minus1Base, minus1Base]}, 
      checked: [false, false]
    },
    { text: 'Remove one (-2) card',
      changes: { 
        add: [], 
        remove: [minus2Base]}, 
      checked: [false]
    },
    { text: 'Replace two (+1) cards with one (+3) [Shield 1 Self] card',
      changes: { 
        add: [plus3Shield1SelfDR], 
        remove: [plus1Base, plus1Base]}, 
      checked: [false, false]
    },
    { text: 'Replace one (+0) card with one (+1) [Shield 1 Ally] card',
      changes: { 
        add: [plus1Shield1AllyDR], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) card with one (+2) [Dark] card',
      changes: { 
        add: [plus2DarkDR], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) with one (+2) [Light] card',
      changes: { 
        add: [plus2LightDR], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) with one (+3) [Muddle] card',
      changes: { 
        add: [plus3MuddleDR], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) with one (+2) [Curse] card',
      changes: { 
        add: [plus2CurseDR], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (+0) with one (+2) [Regenerate Self] card',
      changes: { 
        add: [plus2RegenerateSelfDR], 
        remove: [plus0Base]}, 
      checked: [false]
    },
    { text: 'Replace one (-1) with one (+1) [Heal Ally] card',
      changes: { 
        add: [plus1Heal2AllyDR], 
        remove: [minus1Base]}, 
      checked: [false]
    },
    { text: 'Add two rolling [Heal Self] cards',
      changes: { 
        add: [rollingHeal1SelfDR], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Add two rolling [Curse] cards',
      changes: { 
        add: [rollingCurseDR], 
        remove: []}, 
      checked: [false]
    },
    { text: 'Ignore negative scenario effects and add two (+1) cards',
      changes: { 
        add: [plus1DR, plus1DR], 
        remove: []}, 
      checked: [false]
    }
  ]
}