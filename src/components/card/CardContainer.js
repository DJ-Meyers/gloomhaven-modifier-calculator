import React, { Fragment } from 'react';
import { Item, Grid } from 'semantic-ui-react';
import DeckCard from './DeckCard';

const CardContainer = ({card}) => { 
  return (
    <Fragment>
      { 
        card.count !== 0 ? (
          <Item>
          <Grid verticalAlign='middle'>
            <Grid.Column width={12}>
              <DeckCard card={card} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Item.Header >X{card.count}</Item.Header>
            </Grid.Column>
          </Grid>
        </Item>)
        :
          (<Fragment />)
      }
    </Fragment>
    
  );
};

export default CardContainer;
