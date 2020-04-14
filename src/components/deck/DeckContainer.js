import React, { useContext, useEffect } from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';
import Deck from './Deck';
import DeckContext from '../../context/deck/deckContext';

const DeckContainer = () => { 

  const deckContext = useContext(DeckContext);
  const {
    deck, 
    discardPile,
    deckUniques,
    discardUniques,
    updateUniques
  } = deckContext;

  useEffect(() => {
    updateUniques();
  }, [deckUniques, discardUniques]);

  return (
    <Segment>
      <Grid columns='equal' divided>
        <Grid.Column >
          <Header size='medium'>Deck</Header>
          <Deck cards={deckUniques}/>
        </Grid.Column>
        <Grid.Column>
          <Header size='medium'>Discard</Header>
          <Deck cards={discardUniques} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default DeckContainer;
