import React from 'react';
import { Image } from 'semantic-ui-react';
// Card Images


const Card = ({unique, onClick}) => { 
  return (
    <Image src={unique.card.img} onClick={()=>onClick(unique)}/>
  );
};

export default Card;
