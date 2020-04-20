import React, { Fragment } from 'react';
import { Header, Grid, Input } from 'semantic-ui-react';

const Attack = ({damage, setDamage, pierce, setPierce}) => { 
  return (
    <Fragment>
      <Header size='small'>Attack</Header>
      <Grid columns='equal' stackable>
        <Grid.Column className='atk'>
          <Input label='Damage' fluid
          value={damage} onChange={(e, d)=>{setDamage(d.value)}}
          type='number' min='0' />
        </Grid.Column>
        <Grid.Column className='atk'>
          <Input label='Pierce' fluid 
          value={pierce} onChange={(e, d)=>{setPierce(d.value)}} 
          type='number' min='0'/>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Attack;
