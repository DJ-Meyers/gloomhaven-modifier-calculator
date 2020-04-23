import React, { Fragment } from 'react';
import { Item, Grid } from 'semantic-ui-react';
import Card from './Card';

const Deck = ({uniques, onClick}) => {

  return (
    <Grid>
      <Grid.Column>
        <Item.Group>
          {uniques.map(unique => 
            { return unique.count > 0 ? 
               <Item key={unique.key}>
                 <Grid verticalAlign='middle'>
                   <Grid.Column width={11}>
                    <Item.Content>
                      <Card unique={unique} onClick={onClick} />
                    </Item.Content>
                   </Grid.Column>
                   <Grid.Column width={5}>
                    <Item.Header>
                      X{unique.count}
                    </Item.Header>
                   </Grid.Column>
                 </Grid>
              </Item> 
            : 
              <Fragment key={unique.key}/>
            }    
          )}
        </Item.Group>
      </Grid.Column>
    </Grid>
  );
};

export default Deck;
