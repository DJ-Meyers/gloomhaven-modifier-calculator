import React, { Fragment, useContext } from 'react';
import { Image, Header } from 'semantic-ui-react';
import DeckContext from '../../context/deck/deckContext'

const DiscardCard = ({card}) => { 

  const deckContext = useContext(DeckContext);
  const {
    undiscard,
    getUrl
  } = deckContext;
  
  const onClick = () => {
    undiscard(card);
  };

  return (
    <Image src={getUrl(card)} onClick={onClick} />
  );
};

export default DiscardCard;
