import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import Title from '../layout/Title';
import DeckContainer from '../cards/DeckContainer';
import AttackContainer from '../attack/AttackContainer';
import CalculatorContainer from '../calculator/CalculatorContainer';
import PerksContainer from '../perks/PerksContainer';

const Home = () => {
  return (
    <Fragment>
      <Title title={'Gloomhaven Attack Modifier Calculator'} />
      <Grid columns='equal' stackable>
        <Grid.Column>
          <PerksContainer />
        </Grid.Column>
        <Grid.Column>
          <DeckContainer/>
        </Grid.Column>
        <Grid.Column>
          <AttackContainer />
        </Grid.Column>
        <Grid.Column>
          <CalculatorContainer />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Home;
