import RollingPlus2 from '../../gloomhaven/images/attack-modifiers/BE/am-be-01.png';
import RollingWound from '../../gloomhaven/images/attack-modifiers/BE/am-be-02.png';
import RollingStun from '../../gloomhaven/images/attack-modifiers/BE/am-be-06.png';
import RollingPlus1Disarm from '../../gloomhaven/images/attack-modifiers/BE/am-be-08.png';
import RollingHeal1Self from '../../gloomhaven/images/attack-modifiers/BE/am-be-09.png';
import Plus2Fire from '../../gloomhaven/images/attack-modifiers/BE/am-be-11.png';
import Plus1 from '../../gloomhaven/images/attack-modifiers/BE/am-be-13.png';

import { none, wound, stun, fire, disarm, heal1Self } from './effects';

export const rollingPlus2BE = { modifier: '+2', effect: none, rolling: true, source: 'be', img: RollingPlus2 };
export const rollingWoundBE = { modifier: '+0', effect: wound, rolling: true, source: 'be', img: RollingWound };
export const rollingStunBE = { modifier: '+0', effect: stun, rolling: true, source: 'be', img: RollingStun };
export const rollingPlus1DisarmBE = { modifier: '+1', effect: disarm, rolling: true, source: 'be', img: RollingPlus1Disarm };
export const rollingHeal1SelfBE = { modifier: '+0', effect: heal1Self, rolling: true, source: 'be', img: RollingHeal1Self };
export const plus2FireBE = { modifier: '+2', effect: fire, rolling: false, source: 'be', img: Plus2Fire };
export const plus1BE = { modifier: '+1', effect: none, rolling: false, source: 'be', img: Plus1 };

export const LightningBoltsCards = [rollingPlus2BE, rollingWoundBE, rollingStunBE, rollingPlus1DisarmBE, rollingHeal1SelfBE, plus2FireBE, plus1BE];