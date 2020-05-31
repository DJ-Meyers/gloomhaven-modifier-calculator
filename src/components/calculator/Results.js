import React, { Fragment } from 'react';
import { Header, Grid, Statistic, Divider } from 'semantic-ui-react';

const Results = (props) => { 
  return (
    <Fragment>
      <Header size='small'>Results</Header>
      <Grid>
        <Grid.Column className='centered'>
          <Statistic value={`${props.values.averageDamage === null ? '-' : props.values.averageDamage.toFixed(2)}`} label='Average Damage' size='mini'/>
          <Divider />
          <Statistic value={`${props.values.killPct === null ? '-' : props.values.killPct.toFixed(2)}%`} label='Kill %' size='mini'/>
          <Divider />
          <Statistic value={`${props.values.negativeDrawPct === null ? '-' : props.values.negativeDrawPct.toFixed(2)}%`} label='Negative Draw %' size='mini'/>
          <Divider />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Results;
