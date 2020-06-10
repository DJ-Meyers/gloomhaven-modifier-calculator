import Plus0 from '../../assets/images/attack-modifiers/Tinkerer/Plus0.png';
import Plus1 from '../../assets/images/attack-modifiers/Tinkerer/Plus1.png';
import Plus3 from '../../assets/images/attack-modifiers/Tinkerer/Plus3.png';
import RollingFire from '../../assets/images/attack-modifiers/Tinkerer/RollingFire.png';
import RollingMuddle from '../../assets/images/attack-modifiers/Tinkerer/RollingMuddle.png';
import Plus1Wound from '../../assets/images/attack-modifiers/Tinkerer/Plus1Wound.png';
import Plus1Immobilize from '../../assets/images/attack-modifiers/Tinkerer/Plus1Immobilize.png';
import Plus1Heal2Self from '../../assets/images/attack-modifiers/Tinkerer/Plus1Heal2Self.png';
import Plus0AddTarget from '../../assets/images/attack-modifiers/Tinkerer/Plus0AddTarget.png';

import { none, fire, muddle, wound, immobilize, healSelf, addTarget } from './effects';

export const plus0TI = { modifier: '+0', effect: none, rolling: false, source: 'ti', img: Plus0 };
export const plus1TI = { modifier: '+1', effect: none, rolling: false, source: 'ti', img: Plus1 };
export const plus3TI = { modifier: '+3', effect: none, rolling: false, source: 'ti', img: Plus3 };
export const plus1WoundTI = { modifier: '+1', effect: wound, rolling: false, source: 'ti', img: Plus1Wound };
export const plus1ImmobilizeTI = { modifier: '+1', effect: immobilize, rolling: false, source: 'ti', img: Plus1Immobilize };
export const plus1Heal2SelfTI = { modifier: '+1', effect: healSelf, rolling: false, source: 'ti', img: Plus1Heal2Self };
export const plus0AddTargetTI = { modifier: '+0', effect: addTarget, rolling: false, source: 'ti', img: Plus0AddTarget };
export const rollingFireTI = { modifier: '+0', effect: fire, rolling: true, source: 'ti', img: RollingFire };
export const rollingMuddleTI = { modifier: '+0', effect: muddle, rolling: true, source: 'ti', img: RollingMuddle };

export const TinkererCards = [plus0TI, plus1TI, plus3TI, plus1WoundTI, plus1ImmobilizeTI, plus1Heal2SelfTI, plus0AddTargetTI, rollingFireTI, rollingMuddleTI];