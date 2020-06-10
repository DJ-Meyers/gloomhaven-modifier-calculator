import RollingPlus1 from '../../assets/images/attack-modifiers/Three Spears/RollingPlus1.png';
import RollingMuddle from '../../assets/images/attack-modifiers/Three Spears/RollingMuddle.png';
import RollingPierce3 from '../../assets/images/attack-modifiers/Three Spears/RollingPierce3.png';
import RollingStun from '../../assets/images/attack-modifiers/Three Spears/RollingStun.png';
import RollingAddTarget from '../../assets/images/attack-modifiers/Three Spears/RollingAddTarget.png';
import Plus0RefreshItem from '../../assets/images/attack-modifiers/Three Spears/Plus0RefreshItem.png';
import Plus1 from '../../assets/images/attack-modifiers/Three Spears/Plus1.png';
import Plus2 from '../../assets/images/attack-modifiers/Three Spears/Plus2.png';

import { none, muddle, pierce, stun, addTarget, refreshItem } from './effects';

export const rollingPlus1QM = { modifier: '+1', effect: none, rolling: true, source: 'qm', img: RollingPlus1 };
export const rollingMuddleQM = { modifier: '+0', effect: muddle, rolling: true, source: 'qm', img: RollingMuddle };
export const rollingPierce3QM = { modifier: '+0', effect: pierce, rolling: true, source: 'qm', img: RollingPierce3 };
export const rollingStunQM = { modifier: '+0', effect: stun, rolling: true, source: 'qm', img: RollingStun };
export const rollingAddTargetQM = { modifier: '+0', effect: addTarget, rolling: true, source: 'qm', img: RollingAddTarget };
export const plus0RefreshItemQM = { modifier: '+0', effect: refreshItem, rolling: false, source: 'qm', img: Plus0RefreshItem };
export const plus1QM = { modifier: '+1', effect: none, rolling: false, source: 'qm', img: Plus1 };
export const plus2QM = { modifier: '+2', effect: none, rolling: false, source: 'qm', img: Plus2 };

export const ThreeSpearsCards = [rollingPlus1QM, rollingMuddleQM, rollingPierce3QM, rollingStunQM, rollingAddTargetQM, plus0RefreshItemQM, plus1QM, plus2QM ];