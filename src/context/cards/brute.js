import RollingPierce3 from '../../gloomhaven/images/attack-modifiers/BR/am-br-01.png';
import RollingStun from '../../gloomhaven/images/attack-modifiers/BR/am-br-02.png';
import RollingDisarm from '../../gloomhaven/images/attack-modifiers/BR/am-br-04.png';
import RollingMuddle from '../../gloomhaven/images/attack-modifiers/BR/am-br-05.png';
import RollingAddTarget from '../../gloomhaven/images/attack-modifiers/BR/am-br-06.png';
import Plus1Shield1Self from '../../gloomhaven/images/attack-modifiers/BR/am-br-08.png';
import Plus1 from '../../gloomhaven/images/attack-modifiers/BR/am-br-09.png';
import Plus3 from '../../gloomhaven/images/attack-modifiers/BR/am-br-15.png';
import RollingPush1 from '../../gloomhaven/images/attack-modifiers/BR/am-br-16.png';


import { none, muddle, stun, disarm, addTarget, pierce3, shield1Self, push1 } from './effects';

export const rollingPierce3BR = { modifier: '+0', effect: pierce3, rolling: true, source: 'br', img: RollingPierce3 };
export const rollingStunBR = { modifier: '+0', effect: stun, rolling: true, source: 'br', img: RollingStun };
export const rollingDisarmBR = { modifier: '+0', effect: disarm, rolling: true, source: 'br', img: RollingDisarm };
export const rollingMuddleBR = { modifier: '+0', effect: muddle, rolling: true, source: 'br', img: RollingMuddle };
export const rollingAddTargetBR = { modifier: '+0', effect: addTarget, rolling: true, source: 'br', img: RollingAddTarget };
export const plus1Shield1SelfBR = { modifier: '+1', effect: shield1Self, rolling: false, source: 'br', img: Plus1Shield1Self };
export const plus1BR = { modifier: '+1', effect: none, rolling: false, source: 'br', img: Plus1 };
export const plus3BR = { modifier: '+3', effect: none, rolling: false, source: 'br', img: Plus3 };
export const rollingPush1BR = { modifier: '+0', effect: push1, rolling: true, source: 'br', img: RollingPush1 };

export const BruteCards = [rollingPierce3BR, rollingStunBR, rollingDisarmBR, rollingMuddleBR, rollingAddTargetBR, plus1Shield1SelfBR, plus1BR, plus3BR, rollingPush1BR];