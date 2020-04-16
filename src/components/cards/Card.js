import React from 'react';
import { Image } from 'semantic-ui-react';
// Card Images
import Plus0 from 'gloomhaven/images/attack-modifiers/base/player/am-p-01.png';
import Plus1 from 'gloomhaven/images/attack-modifiers/base/player/am-p-07.png';
import Minus1 from 'gloomhaven/images/attack-modifiers/base/player/am-p-12.png';
import Minus2 from 'gloomhaven/images/attack-modifiers/base/player/am-p-17.png';
import Plus2 from 'gloomhaven/images/attack-modifiers/base/player/am-p-18.png';
import Miss from 'gloomhaven/images/attack-modifiers/base/player/am-p-19.png';
import Times2 from 'gloomhaven/images/attack-modifiers/base/player/am-p-20.png';

const Card = ({card, onClick}) => { 
  return (
    <Image src={getUrl(card)} onClick={()=>onClick(card)}/>
  );
};

const getUrl = (card) => {
  if (card.source === 'base') {
    switch (card.modifier) {
      case '+0':
        return Plus0;
      case '+1':
        return Plus1;
      case '-1':
        return Minus1;
      case '+2':
        return Plus2;
      case '-2':
        return Minus2;
      case '*0':
        return Miss;
      case '*2':
        return Times2;
      default:
        return Plus0;
    }
  }
};

export default Card;
