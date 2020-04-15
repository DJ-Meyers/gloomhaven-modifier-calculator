import React, { Fragment } from 'react';
import { Item, Grid } from 'semantic-ui-react';
import DeckCard from './DeckCard';

const CardContainer = (props) => { 
  return (
    <Fragment>
      { 
        props.card.count !== 0 ? (
          <Item>
          <Grid verticalAlign='middle'>
            <Grid.Column width={12}>
              {props.childCard}
            </Grid.Column>
            <Grid.Column width={4}>
              <Item.Header >X{props.card.count}</Item.Header>
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
