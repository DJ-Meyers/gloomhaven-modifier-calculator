import React, { useContext } from 'react';
import { Segment, Header, Grid, Dropdown } from 'semantic-ui-react';
import PerksContext from '../../context/perks/perksContext';

const PerksContainer = () => { 

  const perksContext = useContext(PerksContext);

  let {
    classes
  } = perksContext;

  return (
    <Segment>
      <Header size='medium'>Perks</Header>
      <Grid>
        <Grid.Column>
          <Dropdown placeholder='Select Class' fluid search selection clearable search options={classes}/>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PerksContainer;
