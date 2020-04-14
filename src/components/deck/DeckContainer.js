import React, { useContext, useEffect } from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';
import Deck from './Deck';
import DeckContext from '../../context/deck/deckContext';
import uniques from '../../context/deck/uniques';

const DeckContainer = () => { 

  const deckContext = useContext(DeckContext);
  let {
    deck, 
    discardPile,
    deckUniques,
    discardUniques,
    updateUniques
  } = deckContext;

  useEffect(() => {
    // Initialize

    updateUniques();
  }, []);

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
