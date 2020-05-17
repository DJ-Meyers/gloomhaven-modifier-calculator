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

import { plus0Base, plus1Base, minus1Base, plus2Base, minus2Base, times2Base, times0Base, BaseCards } from '../cards/base';
import { plus1DS, rollingPlus1DS, plus2MuddleDS, plus1PoisonDS, plus1WoundDS, plus1ImmobilizeDS, plus0StunDS, rollingAddTargetDS, AngryFaceCards } from '../cards/angry face';
import { plus1BR, plus3BR, rollingPush1BR, rollingStunBR, rollingDisarmBR, rollingMuddleBR, rollingAddTargetBR, plus1Shield1SelfBR, BruteCards } from '../cards/brute';
import { plus1CH, minus2CH, plus2CH, plus1ImmobilizeCH, plus2MuddleCH, rollingPush2CH, rollingEarthCH, rollingAirCH, CragheartCards } from '../cards/cragheart';
import { plus2PH, plus0PH, plus1PH, plus1AirPH, rollingPoisonPH, rollingCursePH, rollingImmobilizePH, rollingStunPH, CthuluCards } from '../cards/cthulu';
import { minus1DarkNS, plus1DarkNS, plus1InvisibleNS, rollingMuddleNS, rollingHeal1SelfNS, rollingCurseNS, rollingAddTargetNS, EclipseCards } from '../cards/eclipse';
import { plus1BE, rollingPlus2BE, rollingWoundBE, rollingPlus1DisarmBE, rollingHeal1SelfBE, plus2FireBE, rollingStunBE, LightningBoltsCards } from '../cards/lightning bolts';
import { plus2MT, plus2IceMT, rollingPlus1MT, rollingPull1MT, rollingMuddleMT, rollingImmobilizeMT, rollingStunMT, rollingDisarmMT, MindthiefCards } from '../cards/mindthief';
import { plus4SS, plus1ImmobilizeSS, plus1DisarmSS, plus2WoundSS, plus2PoisonSS, plus2CurseSS, plus3MuddleSS, rollingPlus1SS, rollingCurseSS, MusicNotesCards } from '../cards/music notes';
import { plus2SB, rollingPlus2SB, plus1ImmobilizeSB, rollingWoundSB, rollingHeal3SelfSB, refreshItemSB, rollingStunSB, SawCards } from '../cards/saw';
import { plus0SC, plus1SC, plus2SC, rollingPlus1SC, rollingPierce3SC, rollingPoisonSC, rollingMuddleSC, rollingInvisibleSC, ScoundrelCards } from '../cards/scoundrel';
import { plus3Shield1SelfDR, plus1Shield1AllyDR, plus2DarkDR, plus2LightDR, plus3MuddleDR, plus2CurseDR, plus2RegenerateSelfDR, plus1Heal2AllyDR, rollingHeal1SelfDR, rollingCurseDR, plus1DR, DivinerCards } from '../cards/diviner';
import { plus1SW, plus0StunSW, plus1WoundSW, plus1ImmobilizeSW, plus1CurseSW, plus2FireSW, plus2IceSW, rollingEarthSW, rollingAirSW, rollingLightSW, rollingDarkSW, SpellweaverCards } from '../cards/spellweaver';
import { plus0SU, plus1SU, plus2SU, rollingWoundSU, rollingPoisonSU, rollingHeal1SelfSU, rollingFireSU, rollingAirSU, rollingDarkSU, rollingEarthSU, CirclesCards } from '../cards/circles';
import { plus0SK, plus2SK, rollingPlus1SK, rollingHeal1SelfSK, rollingStunSK, rollingLightSK, plus1SK, rollingShield1SelfSK, SunCards } from '../cards/sun';
import { ThreeSpearsCards, plus2QM, rollingPlus1QM, rollingMuddleQM, rollingPierce3QM, rollingStunQM, rollingAddTargetQM, plus1QM, plus0RefreshItemQM } from '../cards/three spears';
import { TinkererCards, plus0TI, plus1TI, plus3TI, rollingFireTI, rollingMuddleTI, plus1WoundTI, plus1ImmobilizeTI, plus1Heal2SelfTI, plus0AddTargetTI } from '../cards/tinkerer';
import { TrianglesCards, plus1EL, plus2EL, plus0FireEL, plus0IceEL, plus0AirEL, plus0EarthEL, plus1PushEL, plus1WoundEL, plus0StunEL, plus0AddTargetEL } from '../cards/triangles';
import { TwoMinisCards, plus1BT, plus2BT, plus1WoundBT, plus1ImmobilizeBT, rollingHeal1SelfBT, rollingEarthBT } from '../cards/two minis';




const classes = [
  { key: 'base', text: 'Base', value: 'Base', cards: BaseCards, image: { avatar: false, src: Base},
    perks: [],
  },
  { key: 'BR', text: 'Brute', value: 'Brute', cards: BruteCards, image: { avatar: false, src: BR },
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
  { key: 'CH', text: 'Cragheart', value: 'Cragheart', cards: CragheartCards, image: { avatar: false, src: CH },
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
  { key: 'MT', text: 'Mindthief', value: 'Mindthief', cards: MindthiefCards, image: { avatar: false, src: MT },
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
  { key: 'SC', text: 'Scoundrel', value: 'Scoundrel', cards: ScoundrelCards, image: { avatar: false, src: SC },
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
  { key: 'SW', text: 'Spellweaver', value: 'Spellweaver', cards: SpellweaverCards, image: { avatar: false, src: SW },
    perks: [
      { text: 'Remove four (+0) cards', 
        changes: { 
          add: [], 
          remove: [plus0Base, plus0Base, plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) card with one (+1) card',
        changes: { 
          add: [plus1SW], 
          remove: [minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Add two (+1) cards',
        changes: { 
          add: [plus1SW, plus1SW], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+0) [Stun] card',
        changes: { 
          add: [plus0StunSW], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Replace one (+1) [Wound] card',
        changes: { 
          add: [plus1WoundSW], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Immobilize] card',
        changes: { 
          add: [plus1ImmobilizeSW], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Curse] card',
        changes: { 
          add: [plus1CurseSW], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+2) [Fire] card',
        changes: { 
          add: [plus2FireSW], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+2) [Ice] card',
        changes: { 
          add: [plus2IceSW], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one rolling [Earth] card and one rolling [Air] card',
        changes: { 
          add: [rollingEarthSW, rollingAirSW], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Light] card and one rolling [Dark] card',
        changes: { 
          add: [rollingLightSW, rollingDarkSW], 
          remove: []}, 
        checked: [false]
      },
    ]
  },
  { key: 'TI', text: 'Tinkerer', value: 'Tinkerer', cards: TinkererCards, image: { avatar: false, src: TI},
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Replace one (-2) card with one (+0) card',
        changes: { 
          add: [plus0TI], 
          remove: [minus2Base]}, 
        checked: [false]
      },
      { text: 'Add two (+1) cards',
        changes: { 
          add: [plus1TI, plus1TI], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+3) card',
        changes: { 
          add: [plus3TI], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Fire] cards',
        changes: { 
          add: [rollingFireTI, rollingFireTI], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add three rolling [Muddle] card',
        changes: { 
          add: [rollingMuddleTI, rollingMuddleTI, rollingMuddleTI], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Wound] card',
        changes: { 
          add: [plus1WoundTI], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+1) [Immobilize] card',
        changes: { 
          add: [plus1ImmobilizeTI], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+1) [Heal 2 Self] card',
        changes: { 
          add: [plus1Heal2SelfTI], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+0) [Add Target] card',
        changes: { 
          add: [plus0AddTargetTI], 
          remove: []}, 
        checked: [false]
      }
    ],
  },
  { key: 'DS', text: 'Angry Face', value: 'Angry Face', cards: AngryFaceCards, image: { avatar: false, src: DS },
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
  { key: 'PH', text: 'Cthulu', value: 'Cthulu', cards: CthuluCards, image: { avatar: false, src: PH },
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
  { key: 'NS', text: 'Eclipse', value: 'Eclipse', cards: EclipseCards, image: { avatar: false, src: NS },
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
  { key: 'BE', text: 'Lightning Bolts', value: 'Lightning Bolts', cards: LightningBoltsCards, image: { avatar: false, src: BE },
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
 
  { key: 'SS', text: 'Music Notes', value: 'Music Notes', cards: MusicNotesCards, image: { avatar: false, src: SS },
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
  { key: 'SB', text: 'Saw', value: 'Saw', cards: SawCards, image: { avatar: false, src: SB },
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
  { key: 'SU', text: 'Circles', value: 'Summoner', cards: CirclesCards, image: { avatar: false, src: SU },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-2) card with one (+0) card',
        changes: { 
          add: [plus0SU], 
          remove: [minus2Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) cards with one (+1) card',
        changes: { 
          add: [plus1SU], 
          remove: [minus1Base]}, 
        checked: [false, false, false]
      },
      { text: 'Add one (+2) card',
        changes: { 
          add: [plus2SU], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Wound] cards',
        changes: { 
          add: [rollingWoundSU, rollingWoundSU], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Poison] cards',
        changes: { 
          add: [rollingPoisonSU, rollingPoisonSU], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Heal 1 Self] cards',
        changes: { 
          add: [rollingHeal1SelfSU, rollingHeal1SelfSU], 
          remove: []}, 
        checked: [false, false, false]
      },
      { text: 'Add one rolling [Fire] card and one rolling [Air] card',
        changes: { 
          add: [rollingFireSU, rollingAirSU], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Dark] card and one rolling [Earth] card',
        changes: { 
          add: [rollingDarkSU, rollingEarthSU], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Ignore negative scenario effects and add two (+1) cards',
        changes: { 
          add: [plus1SU, plus1SU], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'SK', text: 'Sun', value: 'Sun', cards: SunCards, image: { avatar: false, src: SK },
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
          add: [plus0SK], 
          remove: [minus2Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) card with one (+2) card',
        changes: { 
          add: [plus2SK], 
          remove: [plus0Base]}, 
        checked: [false]
      },
      { text: 'Add two rolling (+1) cards',
        changes: { 
          add: [rollingPlus1SK, rollingPlus1SK], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Heal 1 Self] cards',
        changes: { 
          add: [rollingHeal1SelfSK, rollingHeal1SelfSK], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one rolling [Stun] card',
        changes: { 
          add: [rollingStunSK], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Light] cards',
        changes: { 
          add: [rollingLightSK, rollingLightSK], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Shield 1 Self] cards',
        changes: { 
          add: [rollingShield1SelfSK, rollingShield1SelfSK], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Ignore negative item effects and add two (+1) cards',
        changes: { 
          add: [plus1SK, plus1SK], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'QM', text: 'Three Spears', value: 'Three Spears', cards: ThreeSpearsCards, image: { avatar: false, src: QM },
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
          add: [plus2QM], 
          remove: [plus0Base]}, 
        checked: [false, false]
      },
      { text: 'Add two rolling (+1) cards',
        changes: { 
          add: [rollingPlus1QM, rollingPlus1QM], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add three rolling [Muddle] cards',
        changes: { 
          add: [rollingMuddleQM, rollingMuddleQM, rollingMuddleQM], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add two rolling [Pierce 3] cards',
        changes: { 
          add: [rollingPierce3QM, rollingPierce3QM], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Stun] card',
        changes: { 
          add: [rollingStunQM], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one rolling [Add Target] card',
        changes: { 
          add: [rollingAddTargetQM], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+0) [Refresh Item] card',
        changes: { 
          add: [plus0RefreshItemQM], 
          remove: []}, 
        checked: [false, false, false]
      },
      { text: 'Ignore negative item effects and add two (+1) cards',
        changes: { 
          add: [plus1QM, plus1QM], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'EL', text: 'Triangles', value: 'Triangles', cards: TrianglesCards, image: { avatar: false, src: EL },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false, false]
      },
      { text: 'Replace one (-1) card with one (+1) card',
        changes: { 
          add: [plus1EL], 
          remove: [minus1Base]}, 
        checked: [false]
      },
      { text: 'Replace one (+0) with one (+2) card',
        changes: { 
          add: [plus2EL], 
          remove: [plus0Base]}, 
        checked: [false, false]
      },
      { text: 'Add three (+0) [Fire] cards',
        changes: { 
          add: [plus0FireEL, plus0FireEL, plus0FireEL], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add three (+0) [Ice] cards',
        changes: { 
          add: [plus0IceEL, plus0IceEL, plus0IceEL], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add three (+0) [Air] cards',
        changes: { 
          add: [plus0AirEL, plus0AirEL, plus0AirEL], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add three (+0) [Earth] cards',
        changes: { 
          add: [plus0EarthEL, plus0EarthEL, plus0EarthEL], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Replace two (+0) cards with one (+0) [Fire] card and one (+0) [Earth]',
        changes: { 
          add: [plus0FireEL, plus0EarthEL], 
          remove: [plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Replace two (+0) cards with one (+0) [Ice] card and one (+0) [Air]',
        changes: { 
          add: [plus0IceEL, plus0AirEL], 
          remove: [plus0Base, plus0Base]}, 
        checked: [false]
      },
      { text: 'Add two (+1) [Push 1] cards',
        changes: { 
          add: [plus1PushEL, plus1PushEL], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+1) [Wound] card',
        changes: { 
          add: [plus1WoundEL], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+0) [Stun] card',
        changes: { 
          add: [plus0StunEL], 
          remove: []}, 
        checked: [false]
      },
      { text: 'Add one (+0) [Add Target] card',
        changes: { 
          add: [plus0AddTargetEL], 
          remove: []}, 
        checked: [false]
      },
    ]
  },
  { key: 'BT', text: 'Two Minis', value: 'Two Minis', cards: TwoMinisCards, image: { avatar: false, src: BT },
    perks: [
      { text: 'Remove two (-1) cards', 
        changes: { 
          add: [], 
          remove: [minus1Base, minus1Base]}, 
        checked: [false]
      },
      { text: 'Replace one (-1) cards with one (+1) card',
        changes: { 
          add: [plus1BT], 
          remove: [minus1Base]}, 
        checked: [false, false, false]
      },
      { text: 'Replace one (+0) card with one (+2) card',
        changes: { 
          add: [plus2BT], 
          remove: [plus0Base]}, 
        checked: [false, false]
      },
      { text: 'Add one (+1) [Wound] card',
        changes: { 
          add: [plus1WoundBT], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add one (+1) [Immobilize] card',
        changes: { 
          add: [plus1ImmobilizeBT], 
          remove: []}, 
        checked: [false, false]
      },
      { text: 'Add two rolling [Heal 1 Self] cards',
        changes: { 
          add: [rollingHeal1SelfBT, rollingHeal1SelfBT], 
          remove: []}, 
        checked: [false, false, false]
      },
      { text: 'Add two rolling [Earth] cards',
        changes: { 
          add: [rollingEarthBT, rollingEarthBT], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'DR', text: 'Diviner', value: 'Diviner', cards: DivinerCards, image: { avatar: false, src: DR },
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
  }
];

const remove = (modifier) => {
  console.log(modifier);
};

const add = (modifier) => {
  console.log(modifier);
}

export default classes;