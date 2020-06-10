import Plus0 from '../../assets/images/attack-modifiers/Scoundrel/Plus0.png';
import Plus1 from '../../assets/images/attack-modifiers/Scoundrel/Plus1.png';
import Plus2 from '../../assets/images/attack-modifiers/Scoundrel/Plus2.png';
import RollingPlus1 from '../../assets/images/attack-modifiers/Scoundrel/RollingPlus1.png';
import RollingPierce3 from '../../assets/images/attack-modifiers/Scoundrel/RollingPierce3.png';
import RollingPoison from '../../assets/images/attack-modifiers/Scoundrel/RollingPoison.png';
import RollingMuddle from '../../assets/images/attack-modifiers/Scoundrel/RollingMuddle.png';
import RollingInvisible from '../../assets/images/attack-modifiers/Scoundrel/RollingInvisible.png';

import { none, pierce, poison, muddle, invisible } from './effects';

export const plus0SC = { modifier: '+0', effect: none, rolling: false, source: 'sc', img: Plus0 };
export const plus1SC = { modifier: '+1', effect: none, rolling: false, source: 'sc', img: Plus1 };
export const plus2SC = { modifier: '+2', effect: none, rolling: false, source: 'sc', img: Plus2 };
export const rollingPlus1SC = { modifier: '+1', effect: none, rolling: true, source: 'sc', img: RollingPlus1 };
export const rollingPierce3SC = { modifier: '+0', effect: pierce, rolling: true, source: 'sc', img: RollingPierce3 };
export const rollingPoisonSC = { modifier: '+0', effect: poison, rolling: true, source: 'sc', img: RollingPoison };
export const rollingMuddleSC = { modifier: '+0', effect: muddle, rolling: true, source: 'sc', img: RollingMuddle };
export const rollingInvisibleSC = { modifier: '+0', effect: invisible, rolling: true, source: 'sc', img: RollingInvisible };

export const ScoundrelCards = [plus0SC, plus1SC, plus2SC, rollingPlus1SC, rollingPierce3SC, rollingPoisonSC, rollingMuddleSC, rollingInvisibleSC];