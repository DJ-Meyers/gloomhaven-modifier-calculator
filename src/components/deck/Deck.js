import React, { useContext, useEffect } from 'react';
import { Item, Grid } from 'semantic-ui-react';
import CardContainer from '../card/CardContainer';

const Deck = ({cards}) => {

  return (
    <Grid >
      <Grid.Column>
        <Item.Group>
          {cards.map(card => (
            <CardContainer key={[card.key]} card={card} />
          ))}
        </Item.Group>
      </Grid.Column>
    </Grid>
  );
};

export default Deck;
