import React, {Fragment} from 'react';
import { Header, Grid, Label, Input } from 'semantic-ui-react';

const Enemy = ({hp, shield, setHP, setShield}) => { 
  return (
    <Fragment>
      <Header size='small'>Enemy</Header>
      <Grid columns='equal' stackable>
        <Grid.Column className='atk'>
          <Input fluid type='number' min='0'
              value={hp} onChange={(e, d)=>{setHP(d.value)}}>
            <Label attached='top'>HP</Label>
            <input />
          </Input>
        </Grid.Column>
        <Grid.Column className='atk'>
          <Input fluid type='number' min='0'
              value={shield} onChange={(e, d)=>{setShield(d.value)}}>
            <Label attached='top'>Shield</Label>
            <input />
          </Input>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Enemy;
