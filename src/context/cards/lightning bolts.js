import RollingPlus2 from '../../assets/images/attack-modifiers/Lightning Bolts/RollingPlus2.png';
import RollingWound from '../../assets/images/attack-modifiers/Lightning Bolts/RollingWound.png';
import RollingStun from '../../assets/images/attack-modifiers/Lightning Bolts/RollingStun.png';
import RollingPlus1Disarm from '../../assets/images/attack-modifiers/Lightning Bolts/RollingPlus1Disarm.png';
import RollingHeal1Self from '../../assets/images/attack-modifiers/Lightning Bolts/RollingHeal1Self.png';
import Plus2Fire from '../../assets/images/attack-modifiers/Lightning Bolts/Plus2Fire.png';
import Plus1 from '../../assets/images/attack-modifiers/Lightning Bolts/Plus1.png';

import { none, wound, stun, fire, disarm, healSelf } from './effects';

export const rollingPlus2BE = { modifier: '+2', effect: none, rolling: true, source: 'be', img: RollingPlus2 };
export const rollingWoundBE = { modifier: '+0', effect: wound, rolling: true, source: 'be', img: RollingWound };
export const rollingStunBE = { modifier: '+0', effect: stun, rolling: true, source: 'be', img: RollingStun };
export const rollingPlus1DisarmBE = { modifier: '+1', effect: disarm, rolling: true, source: 'be', img: RollingPlus1Disarm };
export const rollingHeal1SelfBE = { modifier: '+0', effect: healSelf, rolling: true, source: 'be', img: RollingHeal1Self };
export const plus2FireBE = { modifier: '+2', effect: fire, rolling: false, source: 'be', img: Plus2Fire };
export const plus1BE = { modifier: '+1', effect: none, rolling: false, source: 'be', img: Plus1 };

export const LightningBoltsCards = [rollingPlus2BE, rollingWoundBE, rollingStunBE, rollingPlus1DisarmBE, rollingHeal1SelfBE, plus2FireBE, plus1BE];