import React, {Fragment} from 'react';
import { Header, Grid, Checkbox } from 'semantic-ui-react';

const Advantage = ({advantage, disadvantage, toggle}) => { 


  return (
    <Fragment>
      <Header size='small'>Advantage</Header>
      <Grid columns='equal'>
        <Grid.Column className='adv'>
          <Checkbox checked={advantage} label='Advantage' onChange={() => toggle(advantage, 'advantage')}/>
        </Grid.Column>
        <Grid.Column className='adv'>
          <Checkbox checked={disadvantage} label='Disadvantage' onChange={() => toggle(disadvantage, 'disadvantage')}/>
        </Grid.Column>
      </Grid>
    </Fragment>
    
  );
};


export default Advantage;
