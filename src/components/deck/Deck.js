import React, { useContext, useEffect } from 'react';
import { Item, Grid } from 'semantic-ui-react';
import CardContainer from '../card/CardContainer';
import DeckCard from '../card/DeckCard';

const Deck = ({cards}) => {

  return (
    <Grid >
      <Grid.Column>
        <Item.Group>
          {cards.map(card => (
            <CardContainer key={[card.key]} card={card} childCard={<DeckCard card={card} />}/>
          ))}
        </Item.Group>
      </Grid.Column>
    </Grid>
  );
};

export default Deck;
