import Plus1 from '../../gloomhaven/images/attack-modifiers/DR/am-dr-01.png';
import Plus3Shield1Self from '../../gloomhaven/images/attack-modifiers/DR/am-dr-03.png';
import Plus1Shield1Ally from '../../gloomhaven/images/attack-modifiers/DR/am-dr-05.png';
import Plus2Dark from '../../gloomhaven/images/attack-modifiers/DR/am-dr-06.png';
import Plus2Light from '../../gloomhaven/images/attack-modifiers/DR/am-dr-07.png';
import Plus3Muddle from '../../gloomhaven/images/attack-modifiers/DR/am-dr-08.png';
import Plus2Curse from '../../gloomhaven/images/attack-modifiers/DR/am-dr-09.png';
import Plus2RegenerateSelf from '../../gloomhaven/images/attack-modifiers/DR/am-dr-10.png';
import Plus1Heal2Ally from '../../gloomhaven/images/attack-modifiers/DR/am-dr-11.png';
import RollingHeal1Self from '../../gloomhaven/images/attack-modifiers/DR/am-dr-12.png';
import RollingCurse from '../../gloomhaven/images/attack-modifiers/DR/am-dr-14.png';


import { none, dark, light, curse, shieldSelf, shieldAlly, muddle, regenerateSelf, healAlly, healSelf } from './effects';

export const plus1DR = { modifier: '+1', effect: none, rolling: false, source: 'dr', img: Plus1 };
export const plus3Shield1SelfDR = { modifier: '+3', effect: shieldSelf, rolling: false, source: 'dr', img: Plus3Shield1Self };
export const plus1Shield1AllyDR = { modifier: '+1', effect: shieldAlly, rolling: false, source: 'dr', img: Plus1Shield1Ally };
export const plus2DarkDR = { modifier: '+2', effect: dark, rolling: false, source: 'dr', img: Plus2Dark };
export const plus2LightDR = { modifier: '+2', effect: light, rolling: false, source: 'dr', img: Plus2Light };
export const plus3MuddleDR = { modifier: '+3', effect: muddle, rolling: false, source: 'dr', img: Plus3Muddle };
export const plus2CurseDR = { modifier: '+2', effect: curse, rolling: false, source: 'dr', img: Plus2Curse };
export const plus2RegenerateSelfDR = { modifier: '+1', effect: regenerateSelf, rolling: false, source: 'dr', img: Plus2RegenerateSelf };
export const plus1Heal2AllyDR = { modifier: '+1', effect: healAlly, rolling: false, source: 'dr', img: Plus1Heal2Ally };
export const rollingHeal1SelfDR = { modifier: '+0', effect: healSelf, rolling: true, source: 'dr', img: RollingHeal1Self };
export const rollingCurseDR = { modifier: '+0', effect: curse, rolling: true, source: 'dr', img: RollingCurse };

export const DivinerCards = [plus1DR, plus3Shield1SelfDR, plus1Shield1AllyDR, plus2DarkDR, plus2LightDR, plus3MuddleDR, plus2CurseDR, plus2RegenerateSelfDR, plus1Heal2AllyDR, rollingHeal1SelfDR, rollingCurseDR];