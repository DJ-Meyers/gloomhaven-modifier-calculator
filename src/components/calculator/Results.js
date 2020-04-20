import React, { Fragment } from 'react';
import { Header, Grid, Statistic, Divider } from 'semantic-ui-react';

const Results = () => { 
  return (
    <Fragment>
      <Header size='small'>Results</Header>
      <Grid>
        <Grid.Column className='atk'>
          <Statistic value='3' label='Average Damage' size='mini'/>
          <Divider />
          <Statistic value='35%' label='Kill %' size='mini'/>
          <Divider />
          <Statistic value='10%' label='Overkill %' size='mini'/>
          <Divider />
          <Statistic value='35%' label='Negative Draw %' size='mini'/>
          <Divider />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Results;
