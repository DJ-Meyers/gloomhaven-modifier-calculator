import React, { Fragment } from 'react';
import { Item, Grid } from 'semantic-ui-react';
import Card from './Card';

const Deck = ({cards, onClick}) => {

  return (
    <Grid>
      <Grid.Column>
        <Item.Group>
          {cards.map(card => 
            { return card.count > 0 ? 
               <Item key={card.key}>
                 <Grid verticalAlign='middle'>
                   <Grid.Column width={11}>
                    <Item.Content>
                      <Card card={card} onClick={onClick} />
                    </Item.Content>
                   </Grid.Column>
                   <Grid.Column width={5}>
                    <Item.Header>
                      X{card.count}
                    </Item.Header>
                   </Grid.Column>
                 </Grid>
              </Item> 
            : 
              <Fragment key={card.key}/>
            }    
          )}
        </Item.Group>
      </Grid.Column>
    </Grid>
  );
};

export default Deck;
