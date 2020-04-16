import React, { useContext, useEffect } from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';
import Deck from '../cards/Deck';
import DeckContext from '../../context/deck/deckContext';

const DeckContainer = () => { 

  const deckContext = useContext(DeckContext);
  let {
    deckUniques,
    discardUniques,
    updateUniques,
    discard,
    undiscard
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
          <Deck cards={deckUniques} onClick={discard}/>
        </Grid.Column>
        <Grid.Column>
          <Header size='medium'>Discard</Header>
          <Deck cards={discardUniques} onClick={undiscard}/>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default DeckContainer;
