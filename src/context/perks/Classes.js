import Base from '../../gloomhaven/images/class-icons/base.png';
import DS from '../../gloomhaven/images/class-icons/DS.png';
import BT from '../../gloomhaven/images/class-icons/BT.png';
import BR from '../../gloomhaven/images/class-icons/BR.png';
import CH from '../../gloomhaven/images/class-icons/CH.png';
import PH from '../../gloomhaven/images/class-icons/PH.png';
import DR from '../../gloomhaven/images/class-icons/DR.png';
import NS from '../../gloomhaven/images/class-icons/NS.png';
import BE from '../../gloomhaven/images/class-icons/BE.png';
import MT from '../../gloomhaven/images/class-icons/MT.png';
import SS from '../../gloomhaven/images/class-icons/SS.png';
import SB from '../../gloomhaven/images/class-icons/SB.png';
import SC from '../../gloomhaven/images/class-icons/SC.png';
import SW from '../../gloomhaven/images/class-icons/SW.png';
import SU from '../../gloomhaven/images/class-icons/SU.png';
import SK from '../../gloomhaven/images/class-icons/SK.png';
import QM from '../../gloomhaven/images/class-icons/QM.png';
import TI from '../../gloomhaven/images/class-icons/TI.png';
import EL from '../../gloomhaven/images/class-icons/EL.png';

import { plus0Base, plus1Base, minus1Base, plus2Base, minus2Base, times2Base, times0Base } from '../cards/base';
import { plus1DS, rollingPlus1DS, plus2MuddleDS, plus1PoisonDS, plus1WoundDS, plus1ImmobilizeDS, plus0StunDS, rollingAddTargetDS } from '../cards/angry face';
import { plus1BR, plus3BR, rollingPush1BR, rollingStunBR, rollingDisarmBR, rollingMuddleBR, rollingAddTargetBR, plus1Shield1SelfBR } from '../cards/brute';
import { plus1CH, minus2CH, plus2CH, plus1ImmobilizeCH, plus2MuddleCH, rollingPush2CH, rollingEarthCH, rollingAirCH } from '../cards/cragheart';
import { plus2PH, plus0PH, plus1PH, plus1AirPH, rollingPoisonPH, rollingCursePH, rollingImmobilizePH, rollingStunPH } from '../cards/cthulu';
import { minus1DarkNS, plus1DarkNS, plus1InvisibleNS, rollingMuddleNS, rollingHeal1SelfNS, rollingCurseNS, rollingAddTargetNS } from '../cards/eclipse';
import { plus1BE, rollingPlus2BE, rollingWoundBE, rollingPlus1DisarmBE, rollingHeal1SelfBE, plus2FireBE, rollingStunBE } from '../cards/lightning bolts';
import { plus2MT, plus2IceMT, rollingPlus1MT, rollingPull1MT, rollingMuddleMT, rollingImmobilizeMT, rollingStunMT, rollingDisarmMT } from '../cards/mindthief';
import { plus4SS, plus1ImmobilizeSS, plus1DisarmSS, plus2WoundSS, plus2PoisonSS, plus2CurseSS, plus3MuddleSS, rollingPlus1SS, rollingCurseSS } from '../cards/music notes';
import { plus2SB, rollingPlus2SB, plus1ImmobilizeSB, rollingWoundSB, rollingHeal3SelfSB, refreshItemSB, rollingStunSB } from '../cards/saw';
import { plus0SC, plus1SC, plus2SC, rollingPlus1SC, rollingPierce3SC, rollingPoisonSC, rollingMuddleSC, rollingInvisibleSC } from '../cards/scoundrel';
import { plus3Shield1SelfDR, plus1Shield1AllyDR, plus2DarkDR, plus2LightDR, plus3MuddleDR, plus2CurseDR, plus2RegenerateSelfDR, plus1Heal2AllyDR, rollingHeal1SelfDR, rollingCurseDR, plus1DR } from '../cards/diviner';




const classes = [
  { key: 'base', text: 'Base', value: 'Base', image: { avatar: false, src: Base},
    perks: [],
  },
  { key: 'DS', text: 'Angry Face', value: 'Angry Face', image: { avatar: false, src: DS },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Replace two (+0) cards with two (+1) cards',
        changes: { 
          add: [plus1DS, plus1DS], 
          remove: [plus0Base, plus0Base]}, 
        checked: [false, false, false]
      },
      { text: 'Add two rolling (+1) cards',
        changes: { 
          add: [rollingPlus1DS, rollingPlus1DS], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+2) [Muddle] card',
        changes: { 
          add: [plus2MuddleDS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Poison] card',
        changes: { 
          add: [plus1PoisonDS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Wound] card',
        changes: { 
          add: [plus1WoundDS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Immobilize] card',
        changes: { 
          add: [plus1ImmobilizeDS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+0) [Stun] card',
        changes: { 
          add: [plus0StunDS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Add Target] card',
        changes: { 
          add: [rollingAddTargetDS], 
          remove: []}, 
        checked: [false, false]
      }
    ],
  },
  { key: 'BR', text: 'Brute', value: 'Brute', image: { avatar: false, src: BR },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) card with one (+1) card', 
        changes: { 
          add: [plus1BR], 
          remove: [minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Add two (+1) cards', 
        changes: { 
          add: [plus1BR, plus1BR], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+3) card', 
        changes: { 
          add: [plus3BR], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add three rolling [Push 1] cards', 
        changes: { 
          add: [rollingPush1BR, rollingPush1BR, rollingPush1BR], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one rolling [Stun] card', 
        changes: { 
          add: [rollingStunBR], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one rolling [Disarm] card and one rolling [Muddle] card', 
        changes: { 
          add: [rollingDisarmBR, rollingMuddleBR], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Add Target] card', 
        changes: { 
          add: [rollingAddTargetBR], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+1) [Shield 1, Self] card', 
        changes: { 
          add: [plus1Shield1SelfBR], 
          remove: []}, 
        checked: [false]
      },

    ]
  },
  { key: 'CH', text: 'Cragheart', value: 'Cragheart', image: { avatar: false, src: CH },
    perks: [
      { text: 'Remove four (+0) cards', 
        changes: { 
          add: [], 
          remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) card with one (+1) card', 
        changes: { 
          add: [plus1CH], 
          remove: [minus1Base]}, 
        checked: [false, false, false]
      },
      { text: 'Add one (-2) card and two (+2) cards', 
        changes: { 
          add: [minus2CH, plus2CH, plus2CH], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Immobilize] card', 
        changes: { 
          add: [plus1ImmobilizeCH], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+2) [Muddle] card', 
        changes: { 
          add: [plus2MuddleCH], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Push 2] cards', 
        changes: { 
          add: [rollingPush2CH, rollingPush2CH], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Earth] cards', 
        changes: { 
          add: [rollingEarthCH, rollingEarthCH], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Air] cards', 
        changes: { 
          add: [rollingAirCH], 
          remove: []}, 
        checked: [false]
      },
    ]
  },
  { key: 'PH', text: 'Cthulu', value: 'Cthulu', image: { avatar: false, src: PH },
    perks: [
      { text: 'Replace one (-2) card with one (+0) card', 
        changes: { 
          add: [plus0PH], 
          remove: [minus2Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) card with one (+1) card', 
        changes: { 
          add: [plus1PH], 
          remove: [minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Replace one (+0) card with one (+2) card', 
        changes: { 
          add: [plus2PH], 
          remove: [plus0Base]}, 
        checked: [false, false]
      },
      { text: 'Add two (+1) cards', 
        changes: { 
          add: [plus1PH, plus1PH], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Air] card', 
        changes: { 
          add: [plus1AirPH], 
          remove: []}, 
        checked: [false, false, false]
      },
      { text: 'Add three rolling [Poison] cards', 
        changes: { 
          add: [rollingPoisonPH, rollingPoisonPH, rollingPoisonPH], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Curse] cards', 
        changes: { 
          add: [rollingCursePH, rollingCursePH], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Immobilize] cards', 
        changes: { 
          add: [rollingImmobilizePH, rollingImmobilizePH], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Stun] card', 
        changes: { 
          add: [rollingStunPH], 
          remove: []}, 
        checked: [false, false]
      },
    ]
  },
  { key: 'DR', text: 'Diviner', value: 'Diviner', image: { avatar: false, src: DR },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Remove one (-2) card',
        changes: { 
          add: [], 
          remove: [minus2Base]}, 
        checked: [false]
      },
      { text: 'Replace two (+1) cards with one (+3) [Shield 1 Self] card',
        changes: { 
          add: [plus3Shield1SelfDR], 
          remove: [plus1Base, plus1Base]}, 
        checked: [false, false]
      },
      { text: 'Replace one (+0) card with one (+1) [Shield 1 Ally] card',
        changes: { 
          add: [plus1Shield1AllyDR], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+2) [Dark] card',
        changes: { 
          add: [plus2DarkDR], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) with one (+2) [Light] card',
        changes: { 
          add: [plus2LightDR], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) with one (+3) [Muddle] card',
        changes: { 
          add: [plus3MuddleDR], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) with one (+2) [Curse] card',
        changes: { 
          add: [plus2CurseDR], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) with one (+2) [Regenerate Self] card',
        changes: { 
          add: [plus2RegenerateSelfDR], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) with one (+1) [Heal Ally] card',
        changes: { 
          add: [plus1Heal2AllyDR], 
          remove: [minus1Base]}, 
        checked: [false]
      },
      { text: 'Add two rolling [Heal Self] cards',
        changes: { 
          add: [rollingHeal1SelfDR], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Curse] cards',
        changes: { 
          add: [rollingCurseDR], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Ignore negative scenario effects and add two (+1) cards',
        changes: { 
          add: [plus1DR, plus1DR], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'NS', text: 'Eclipse', value: 'Eclipse', image: { avatar: false, src: NS },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Remove four (+0) cards',
        changes: { 
          add: [], 
          remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Add one (-1) [Dark] card',
        changes: { 
          add: [minus1DarkNS], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Replace one (-1) [Dark] card with one (+1) [Dark] card',
        changes: { 
          add: [plus1DarkNS], 
          remove: [minus1DarkNS]}, 
        checked: [false, false]
      },
      { text: 'Add one (+1) [Invisible] card',
        changes: { 
          add: [plus1InvisibleNS], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+1) [Wound] card',
        changes: { 
          add: [plus1WoundDS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add three rolling [Muddle] cards',
        changes: { 
          add: [rollingMuddleNS, rollingMuddleNS, rollingMuddleNS], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Heal 1 Self] card',
        changes: { 
          add: [rollingHeal1SelfNS, rollingHeal1SelfNS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Curse] cards',
        changes: { 
          add: [rollingCurseNS, rollingCurseNS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Add Target] card',
        changes: { 
          add: [rollingAddTargetNS], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'BE', text: 'Lightning Bolts', value: 'Lightning Bolts', image: { avatar: false, src: BE },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false]
      },
      { text: 'Remove four (+0) cards',
        changes: { 
          add: [], 
          remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) card with one (+1) card',
        changes: { 
          add: [plus1BE], 
          remove: [minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Replace one (+0) card with one rolling (+2) card',
        changes: { 
          add: [rollingPlus2BE], 
          remove: [plus0Base]}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Wound] cards',
        changes: { 
          add: [rollingWoundBE, rollingWoundBE], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one rolling [Stun] card',
        changes: { 
          add: [rollingStunBE], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one rolling (+1) [Disarm] card',
        changes: { 
          add: [rollingPlus1DisarmBE], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Heal 1 Self] cards',
        changes: { 
          add: [rollingHeal1SelfBE, rollingHeal1SelfBE], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+2) [Fire] cards',
        changes: { 
          add: [plus2FireBE], 
          remove: []}, 
        checked: [false, false]
      }
    ]
  },
  { key: 'MT', text: 'Mindthief', value: 'Mindthief', image: { avatar: false, src: MT },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Remove four (+0) cards',
        changes: { 
          add: [], 
          remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace two (+1) cards with two (+2) cards',
        changes: { 
          add: [plus2MT, plus2MT], 
          remove: [plus1Base, plus1Base]}, 
        checked: [false]
      },
      { text: 'Add one (+2) [Ice] card',
        changes: { 
          add: [plus2IceMT], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling (+1) cards',
        changes: { 
          add: [rollingPlus1MT, rollingPlus1MT], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add three rolling [Pull 1] cards',
        changes: { 
          add: [rollingPull1MT, rollingPull1MT, rollingPull1MT], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add three rolling [Muddle] cards',
        changes: { 
          add: [rollingMuddleMT, rollingMuddleMT, rollingMuddleMT], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Immobilize] cards',
        changes: { 
          add: [rollingImmobilizeMT, rollingImmobilizeMT], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Stun] card',
        changes: { 
          add: [rollingStunMT], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Disarm] card and one rolling [Muddle] card',
        changes: { 
          add: [rollingDisarmMT, rollingMuddleMT], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'SS', text: 'Music Notes', value: 'Music Notes', image: { avatar: false, src: SS },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Remove one (-2) card',
        changes: { 
          add: [], 
          remove: [minus2Base]}, 
        checked: [false]
      },
      { text: 'Replace two (+1) cards with one (+4) card',
        changes: { 
          add: [plus4SS], 
          remove: [plus1Base, plus1Base]}, 
        checked: [false, false]
      },
      { text: 'Replace one (+0) card with one (+1) [Immobilize] card',
        changes: { 
          add: [plus1ImmobilizeSS], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+1) [Disarm] card',
        changes: { 
          add: [plus1DisarmSS], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+2) [Wound] card',
        changes: { 
          add: [plus2WoundSS], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+2) [Poison] card',
        changes: { 
          add: [plus2PoisonSS], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+2) [Curse] card',
        changes: { 
          add: [plus2CurseSS], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+3) [Muddle] card',
        changes: { 
          add: [plus3MuddleSS], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) card with one (+0) [Stun] card',
        changes: { 
          add: [plus1ImmobilizeSS], 
          remove: [minus1Base]}, 
        checked: [false]
      },
      { text: 'Add three rolling (+1) cards',
        changes: { 
          add: [rollingPlus1SS, rollingPlus1SS, rollingPlus1SS], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Curse] cards',
        changes: { 
          add: [rollingCurseSS, rollingCurseSS], 
          remove: []}, 
        checked: [false, false]
      }
    ]
  },
  { key: 'SB', text: 'Saw', value: 'Saw', image: { avatar: false, src: SB },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Remove four (+0) cards',
        changes: { 
          add: [], 
          remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+2) card',
        changes: { 
          add: [plus2SB], 
          remove: [plus0Base]}, 
        checked: [false, false]
      },
      { text: 'Add one rolling (+2) card',
        changes: { 
          add: [rollingPlus2SB], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+1) [Immobilize] card',
        changes: { 
          add: [plus1ImmobilizeSB], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Wound] cards',
        changes: { 
          add: [rollingWoundSB, rollingWoundSB], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one rolling [Stun] card',
        changes: { 
          add: [rollingStunSB], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Heal 3 Self] card',
        changes: { 
          add: [rollingHeal3SelfSB], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+0) [Refresh an Item] card',
        changes: { 
          add: [refreshItemSB], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'SC', text: 'Scoundrel', value: 'Scoundrel', image: { avatar: false, src: SC },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Remove four (+0) cards',
        changes: { 
          add: [], 
          remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-2) card with one (+0) card',
        changes: { 
          add: [plus0SC], 
          remove: [minus2Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) card with one (+1) card',
        changes: { 
          add: [plus1SC], 
          remove: [minus1Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+2) card',
        changes: { 
          add: [plus2SC], 
          remove: [plus0Base]}, 
        checked: [false, false]
      },
      { text: 'Add two rolling (+1) cards',
        changes: { 
          add: [rollingPlus1SC, rollingPlus1SC], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Pierce 3] cards',
        changes: { 
          add: [rollingPierce3SC, rollingPierce3SC], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Poison] card',
        changes: { 
          add: [rollingPoisonSC, rollingPoisonSC], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Muddle] cards',
        changes: { 
          add: [rollingMuddleSC, rollingMuddleSC], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Invisible] card',
        changes: { 
          add: [rollingInvisibleSC], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'SW', text: 'Spellweaver', value: 'Spellweaver', image: { avatar: false, src: SW }},
  { key: 'SU', text: 'Circles', value: 'Summoner', image: { avatar: false, src: SU }},
  { key: 'SK', text: 'Sun', value: 'Sun', image: { avatar: false, src: SK }},
  { key: 'QM', text: 'Three Spears', value: 'Three Spears', image: { avatar: false, src: QM }},
  { key: 'TI', text: 'Tinkerer', value: 'Tinkerer', image: { avatar: false, src: TI }},
  { key: 'EL', text: 'Triangles', value: 'Triangles', image: { avatar: false, src: EL }},
  { key: 'BT', text: 'Two Minis', value: 'Two Minis', image: { avatar: false, src: BT }}
];

const remove = (modifier) => {
  console.log(modifier);
};

const add = (modifier) => {
  console.log(modifier);
}

export default classes;