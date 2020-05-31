import React, { Fragment } from 'react';
import { Header, Grid, Label, Input } from 'semantic-ui-react';

const Trials = ({trials, setTrials}) => { 
  return (
    <Fragment>
      <Header size='small'>Parameters</Header>
      <Grid columns='equal' stackable>
        <Grid.Column className='centered'>
          <Input fluid type='number' min='0'
              value={trials} onChange={(e, d)=>{setTrials(d.value)}}>
            <Label attached='top'>Trials</Label>
            <input />
          </Input>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Trials;
