import React, { Fragment } from 'react';
import { Header, Grid, Label, Input } from 'semantic-ui-react';

const Attack = ({damage, setDamage, pierce, setPierce}) => { 
  return (
    <Fragment>
      <Header size='small'>Attack</Header>
      <Grid columns='equal' stackable>
        <Grid.Column className='atk'>
          <Input fluid type='number' min='0'
              value={damage} onChange={(e, d)=>{setDamage(d.value)}}>
            <Label attached='top'>Damage</Label>
            <input />
          </Input>
        </Grid.Column>
        <Grid.Column className='atk'>
          <Input fluid type='number' min='0'
              value={pierce} onChange={(e, d)=>{setPierce(d.value)}}>
            <Label attached='top'>Pierce</Label>
            <input />
          </Input>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Attack;
