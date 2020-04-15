import React, { Fragment, useContext } from 'react';
import { Image, Header } from 'semantic-ui-react';
import DeckContext from '../../context/deck/deckContext'

const DeckCard = ({card}) => { 

  const deckContext = useContext(DeckContext);
  const {
    discard,
    getUrl
  } = deckContext;
  
  const onClick = () => {
    discard(card);
  };

  return (
    <Image src={getUrl(card)} onClick={onClick} />
  );
};

export default DeckCard;
