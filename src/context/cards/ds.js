import Plus1 from '../../gloomhaven/images/attack-modifiers/DS/am-ds-01.png';
import Plus1Rolling from '../../gloomhaven/images/attack-modifiers/DS/am-ds-05.png';
import Plus2Muddle from '../../gloomhaven/images/attack-modifiers/DS/am-ds-09.png';
import Plus1Poison from '../../gloomhaven/images/attack-modifiers/DS/am-ds-10.png';
import Plus1Wound from '../../gloomhaven/images/attack-modifiers/DS/am-ds-11.png';
import Plus1Immobilize from '../../gloomhaven/images/attack-modifiers/DS/am-ds-12.png';
import Stun from '../../gloomhaven/images/attack-modifiers/DS/am-ds-13.png';
import AddTarget from '../../gloomhaven/images/attack-modifiers/DS/am-ds-14.png';

import { none, muddle, poison, wound, immobilize, stun, addTarget } from './effects';

export const plus1DS = { modifier: '+1', effect: none, rolling: false, source: 'ds', img: Plus1 };
export const rollingPlus1DS = { modifier: '+1', effect: none, rolling: true, source: 'ds', img: Plus1Rolling };
export const plus2MuddleDS = { modifier: '+2', effect: muddle, rolling: false, source: 'ds', img: Plus2Muddle };
export const plus1PoisonDS = { modifier: '+1', effect: poison, rolling: false, source: 'ds', img: Plus1Poison };
export const plus1WoundDS = { modifier: '+1', effect: wound, rolling: false, source: 'ds', img: Plus1Wound };
export const plus1ImmobilizeDS = { modifier: '+1', effect: immobilize, rolling: false, source: 'ds', img: Plus1Immobilize };
export const plus0StunDS = { modifier: '+0', effect: stun, rolling: false, source: 'ds', img: Stun };
export const rollingAddTargetDS = { modifier: '+0', effect: addTarget, rolling: false, source: 'ds', img: AddTarget };

export const DSCards = [plus1DS, rollingPlus1DS, plus2MuddleDS, plus1PoisonDS, plus1WoundDS, plus1ImmobilizeDS, plus0StunDS, rollingAddTargetDS];