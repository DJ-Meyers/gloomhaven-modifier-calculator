import React, { useContext, useEffect } from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';
import Deck from './Deck';
import DeckContext from '../../context/deck/deckContext';

const DeckContainer = () => { 

  const deckContext = useContext(DeckContext);
  let {
    deckUniques,
    deck,
    discardUniques,
    discardPile,
    updateUniques,
    discard,
    undiscard
  } = deckContext;

  useEffect(() => {
    // Initialize

    updateUniques();
    // eslint-disable-next-line
  }, []);

  return (
    <Segment id='DeckContainer'>
      <Header size='medium'>Attack Modifiers</Header>
      <Grid columns='equal'>
        <Grid.Column>
  <Header size='small'>Deck ({deck.length})</Header>
          <Deck uniques={deckUniques} onClick={discard}/>
        </Grid.Column>
        <Grid.Column>
          <Header size='small'>Discard ({discardPile.length})</Header>
          <Deck uniques={discardUniques} onClick={undiscard}/>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default DeckContainer;
