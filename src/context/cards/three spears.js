import RollingPlus1 from '../../gloomhaven/images/attack-modifiers/QM/am-qm-01.png';
import RollingMuddle from '../../gloomhaven/images/attack-modifiers/QM/am-qm-03.png';
import RollingPierce3 from '../../gloomhaven/images/attack-modifiers/QM/am-qm-06.png';
import RollingStun from '../../gloomhaven/images/attack-modifiers/QM/am-qm-08.png';
import RollingAddTarget from '../../gloomhaven/images/attack-modifiers/QM/am-qm-09.png';
import Plus0RefreshItem from '../../gloomhaven/images/attack-modifiers/QM/am-qm-11.png';
import Plus1 from '../../gloomhaven/images/attack-modifiers/QM/am-qm-13.png';
import Plus2 from '../../gloomhaven/images/attack-modifiers/QM/am-qm-15.png';

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