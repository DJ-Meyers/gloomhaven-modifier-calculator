
import TwoMinis from '../../resources/images/icons/characters/Two Minis.png';
import Cthulu from '../../resources/images/icons/characters/Cthulu.png';
import Diviner from '../../resources/images/icons/characters/Diviner.png';
import Eclipse from '../../resources/images/icons/characters/Eclipse.png';
import LightningBolts from '../../resources/images/icons/characters/Lightning Bolts.png';
import MusicNotes from '../../resources/images/icons/characters/Music Notes.png';
import Saw from '../../resources/images/icons/characters/Saw.png';
import Circles from '../../resources/images/icons/characters/Circles.png';
import Sun from '../../resources/images/icons/characters/Sun.png';
import ThreeSpears from '../../resources/images/icons/characters/Three Spears.png';
import Triangles from '../../resources/images/icons/characters/Triangles.png';

import Base from '../../resources/classes/Base';
import Brute from '../../resources/classes/Brute';
import Cragheart from '../../resources/classes/Cragheart';
import Mindthief from '../../resources/classes/Mindthief';
import Scoundrel from '../../resources/classes/Scoundrel';
import Spellweaver from '../../resources/classes/Spellweaver';
import Tinkerer from '../../resources/classes/Tinkerer';

import AngryFace from '../../resources/classes/Angry Face';

import { plus0Base, plus1Base, minus1Base, minus2Base } from '../../resources/classes/Base';
import { plus2PH, plus0PH, plus1PH, plus1AirPH, rollingPoisonPH, rollingCursePH, rollingImmobilizePH, rollingStunPH, CthuluCards } from '../cards/cthulu';
import { minus1DarkNS, plus1DarkNS, plus1NS, plus1InvisibleNS, rollingMuddleNS, rollingHeal1SelfNS, rollingCurseNS, rollingAddTargetNS, EclipseCards } from '../cards/eclipse';
import { plus1BE, rollingPlus2BE, rollingWoundBE, rollingPlus1DisarmBE, rollingHeal1SelfBE, plus2FireBE, rollingStunBE, LightningBoltsCards } from '../cards/lightning bolts';
import { plus4SS, plus1ImmobilizeSS, plus1DisarmSS, plus2WoundSS, plus2PoisonSS, plus2CurseSS, plus3MuddleSS, rollingPlus1SS, rollingCurseSS, MusicNotesCards } from '../cards/music notes';
import { plus2SB, rollingPlus2SB, plus1ImmobilizeSB, rollingWoundSB, rollingHeal3SelfSB, refreshItemSB, rollingStunSB, SawCards } from '../cards/saw';
import { plus3Shield1SelfDR, plus1Shield1AllyDR, plus2DarkDR, plus2LightDR, plus3MuddleDR, plus2CurseDR, plus2RegenerateSelfDR, plus1Heal2AllyDR, rollingHeal1SelfDR, rollingCurseDR, plus1DR, DivinerCards } from '../cards/diviner';
import { plus0SU, plus1SU, plus2SU, rollingWoundSU, rollingPoisonSU, rollingHeal1SelfSU, rollingFireSU, rollingAirSU, rollingDarkSU, rollingEarthSU, CirclesCards } from '../cards/circles';
import { plus0SK, plus2SK, rollingPlus1SK, rollingHeal1SelfSK, rollingStunSK, rollingLightSK, plus1SK, rollingShield1SelfSK, SunCards } from '../cards/sun';
import { ThreeSpearsCards, plus2QM, rollingPlus1QM, rollingMuddleQM, rollingPierce3QM, rollingStunQM, rollingAddTargetQM, plus1QM, plus0RefreshItemQM } from '../cards/three spears';
import { TrianglesCards, plus1EL, plus2EL, plus0FireEL, plus0IceEL, plus0AirEL, plus0EarthEL, plus1PushEL, plus1WoundEL, plus0StunEL, plus0AddTargetEL } from '../cards/triangles';
import { TwoMinisCards, plus1BT, plus2BT, plus1WoundBT, plus1ImmobilizeBT, rollingHeal1SelfBT, rollingEarthBT } from '../cards/two minis';

const classes = [
  Base,
  Brute,
  Cragheart,
  Mindthief,
  Scoundrel,
  Spellweaver,
  Tinkerer,
  AngryFace,
  { key: 'SU', text: 'Circles', value: 'Circles', cards: CirclesCards, image: { avatar: false, src: Circles },
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
  { key: 'PH', text: 'Cthulu', value: 'Cthulu', cards: CthuluCards, image: { avatar: false, src: Cthulu },
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
  { key: 'NS', text: 'Eclipse', value: 'Eclipse', cards: EclipseCards, image: { avatar: false, src: Eclipse },
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
      },
      { text: 'Ignore negative scenario effects and add two (+1) cards',
        changes: { 
          add: [plus1NS, plus1NS], 
          remove: []}, 
        checked: [false]
      }
    ]
  },
  { key: 'BE', text: 'Lightning Bolts', value: 'Lightning Bolts', cards: LightningBoltsCards, image: { avatar: false, src: LightningBolts },
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
  { key: 'SS', text: 'Music Notes', value: 'Music Notes', cards: MusicNotesCards, image: { avatar: false, src: MusicNotes },
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
  { key: 'SB', text: 'Saw', value: 'Saw', cards: SawCards, image: { avatar: false, src: Saw },
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
  { key: 'SK', text: 'Sun', value: 'Sun', cards: SunCards, image: { avatar: false, src: Sun },
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
  { key: 'QM', text: 'Three Spears', value: 'Three Spears', cards: ThreeSpearsCards, image: { avatar: false, src: ThreeSpears },
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
  { key: 'EL', text: 'Triangles', value: 'Triangles', cards: TrianglesCards, image: { avatar: false, src: Triangles },
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
  { key: 'BT', text: 'Two Minis', value: 'Two Minis', cards: TwoMinisCards, image: { avatar: false, src: TwoMinis },
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
  { key: 'DR', text: 'Diviner', value: 'Diviner', cards: DivinerCards, image: { avatar: false, src: Diviner },
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

export default classes;