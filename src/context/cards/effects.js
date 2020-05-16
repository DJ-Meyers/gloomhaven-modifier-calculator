// Default
export const none = 'None';
export const anyEffect = 'Any Effect';

// Attack Effects
export const push = 'Push';
export const pull = 'Pull';
export const pierce = 'Pierce';
export const shield = 'Shield Self';
export const heal = 'Heal Self';
export const addTarget = 'Add Target';
export const refreshItem = 'Refresh Item';
export const anyAttackEffect = 'Any Attack Effect';
export const attackEffects = [push, pull, pierce, shield, heal, addTarget, refreshItem];


// Debuffs
export const poison = 'Poison';
export const wound = 'Wound';
export const immobilize = 'Immobilize';
export const disarm = 'Disarm';
export const stun = 'Stun';
export const muddle = 'Muddle';
export const curse = 'Curse';
export const anyDebuff = 'Any Debuff';
export const debuffEffects = [poison, wound, immobilize, disarm, stun, muddle, curse];

// Buffs
export const invisible = 'Invisible';
export const strengthen = 'Strengthen';
export const bless = 'Bless';
export const anyBuff = 'Any Buff';
export const buffEffects = [invisible, strengthen, bless];

// Elements
export const fire = 'Fire';
export const ice = 'Ice';
export const air = 'Air';
export const earth = 'Earth';
export const light = 'Light';
export const dark = 'Dark';
export const anyElement = 'Any Element';
export const elementEffects = [fire, ice, air, earth, light, dark];

// Effects Array
export const effectsArray = [
  {id: none, bin: none, count: 0},
  {id: anyEffect, bin: anyEffect, count: 0}, 
  {id: push, bin: push, count: 0},
  {id: pull, bin: pull, count: 0}, 
  {id: pierce, bin: pierce, count: 0}, 
  {id: shield, bin: shield, count: 0}, 
  {id: heal, bin: heal, count: 0}, 
  {id: addTarget, bin: addTarget, count: 0}, 
  {id: refreshItem, bin: refreshItem, count: 0},
  {id: anyAttackEffect, bin: anyAttackEffect, count: 0},
  {id: poison, bin: poison, count: 0}, 
  {id: wound, bin: wound, count: 0}, 
  {id: immobilize, bin: immobilize, count: 0}, 
  {id: disarm, bin: disarm, count: 0}, 
  {id: stun, bin: stun, count: 0}, 
  {id: muddle, bin: muddle, count: 0}, 
  {id: curse, bin: curse, count: 0},
  {id: anyDebuff, bin: anyDebuff, count: 0}, 
  {id: invisible, bin: invisible, count: 0}, 
  {id: strengthen, bin: strengthen, count: 0}, 
  {id: bless, bin: bless, count: 0},
  {id: anyBuff, bin: anyBuff, count: 0}, 
  {id: fire, bin: fire, count: 0}, 
  {id: ice, bin: ice, count: 0}, 
  {id: air, bin: air, count: 0}, 
  {id: earth, bin: earth, count: 0}, 
  {id: light, bin: light, count: 0}, 
  {id: dark, bin: dark, count: 0},
  {id: anyElement, bin: anyElement, count: 0}
];

