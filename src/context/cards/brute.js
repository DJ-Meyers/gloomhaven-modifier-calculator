import RollingPierce3 from '../../assets/images/attack-modifiers/Brute/RollingPierce3.png';
import RollingStun from '../../assets/images/attack-modifiers/Brute/RollingStun.png';
import RollingDisarm from '../../assets/images/attack-modifiers/Brute/RollingDisarm.png';
import RollingMuddle from '../../assets/images/attack-modifiers/Brute/RollingMuddle.png';
import RollingAddTarget from '../../assets/images/attack-modifiers/Brute/RollingAddTarget.png';
import Plus1Shield1Self from '../../assets/images/attack-modifiers/Brute/Plus1Shield1Self.png';
import Plus1 from '../../assets/images/attack-modifiers/Brute/Plus1.png';
import Plus3 from '../../assets/images/attack-modifiers/Brute/Plus3.png';
import RollingPush1 from '../../assets/images/attack-modifiers/Brute/RollingPush1.png';


import { none, muddle, stun, disarm, addTarget, pierce, shieldSelf, push } from './effects';

export const rollingPierce3BR = { modifier: '+0', effect: pierce, rolling: true, source: 'br', img: RollingPierce3 };
export const rollingStunBR = { modifier: '+0', effect: stun, rolling: true, source: 'br', img: RollingStun };
export const rollingDisarmBR = { modifier: '+0', effect: disarm, rolling: true, source: 'br', img: RollingDisarm };
export const rollingMuddleBR = { modifier: '+0', effect: muddle, rolling: true, source: 'br', img: RollingMuddle };
export const rollingAddTargetBR = { modifier: '+0', effect: addTarget, rolling: true, source: 'br', img: RollingAddTarget };
export const plus1Shield1SelfBR = { modifier: '+1', effect: shieldSelf, rolling: false, source: 'br', img: Plus1Shield1Self };
export const plus1BR = { modifier: '+1', effect: none, rolling: false, source: 'br', img: Plus1 };
export const plus3BR = { modifier: '+3', effect: none, rolling: false, source: 'br', img: Plus3 };
export const rollingPush1BR = { modifier: '+0', effect: push, rolling: true, source: 'br', img: RollingPush1 };

export const BruteCards = [rollingPierce3BR, rollingStunBR, rollingDisarmBR, rollingMuddleBR, rollingAddTargetBR, plus1Shield1SelfBR, plus1BR, plus3BR, rollingPush1BR];