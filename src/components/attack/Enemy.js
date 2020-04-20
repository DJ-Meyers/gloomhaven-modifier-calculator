import React, {Fragment} from 'react';
import { Header, Grid, Input } from 'semantic-ui-react';

const Enemy = ({hp, shield, setHP, setShield}) => { 
  return (
    <Fragment>
      <Header size='small'>Enemy</Header>
      <Grid columns='equal' stackable>
        <Grid.Column className='atk'>
          <Input label='HP' fluid
          value={hp} onChange={(e, d)=>{setHP(d.value)}}
          type='number' min='0' />
        </Grid.Column>
        <Grid.Column className='atk'>
          <Input label='Shield' fluid 
          value={shield} onChange={(e, d)=>{setShield(d.value)}} 
          type='number' min='0'/>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Enemy;
