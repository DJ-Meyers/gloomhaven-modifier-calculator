import Plus2 from '../../resources/images/attack-modifiers/Triangles/Plus2.png';
import Plus0Fire from '../../resources/images/attack-modifiers/Triangles/Plus0Fire.png';
import Plus0Ice from '../../resources/images/attack-modifiers/Triangles/Plus0Ice.png';
import Plus0Air from '../../resources/images/attack-modifiers/Triangles/Plus0Air.png';
import Plus0Earth from '../../resources/images/attack-modifiers/Triangles/Plus0Earth.png';
import Plus1Push1 from '../../resources/images/attack-modifiers/Triangles/Plus1Push1.png';
import Plus1Wound from '../../resources/images/attack-modifiers/Triangles/Plus1Wound.png';
import Plus0Stun from '../../resources/images/attack-modifiers/Triangles/Plus0Stun.png';
import Plus0AddTarget from '../../resources/images/attack-modifiers/Triangles/Plus0AddTarget.png';
import Plus1 from '../../resources/images/attack-modifiers/Triangles/Plus1.png';

import { none, fire, ice, air, earth, push, wound, stun, addTarget } from '../../resources/general/effects';

export const plus1EL = { modifier: '+1', effect: none, rolling: false, source: 'el', img: Plus1 };
export const plus2EL = { modifier: '+2', effect: none, rolling: false, source: 'el', img: Plus2 };
export const plus0FireEL = { modifier: '+0', effect: fire, rolling: false, source: 'el', img: Plus0Fire };
export const plus0IceEL = { modifier: '+0', effect: ice, rolling: false, source: 'el', img: Plus0Ice };
export const plus0AirEL = { modifier: '+0', effect: air, rolling: false, source: 'el', img: Plus0Air };
export const plus0EarthEL = { modifier: '+0', effect: earth, rolling: false, source: 'el', img: Plus0Earth };
export const plus1PushEL = { modifier: '+1', effect: push, rolling: false, source: 'el', img: Plus1Push1 };
export const plus1WoundEL = { modifier: '+1', effect: wound, rolling: false, source: 'el', img: Plus1Wound };
export const plus0StunEL = { modifier: '+0', effect: stun, rolling: false, source: 'el', img: Plus0Stun };
export const plus0AddTargetEL = { modifier: '+0', effect: addTarget, rolling: false, source: 'el', img: Plus0AddTarget };

export const TrianglesCards = [plus1EL, plus2EL, plus0FireEL, plus0IceEL, plus0AirEL, plus0EarthEL, plus1PushEL, plus1WoundEL, plus0StunEL, plus0AddTargetEL];