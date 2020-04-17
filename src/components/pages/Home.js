import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import Title from '../layout/Title';
import DeckContainer from '../cards/DeckContainer';
import AttackContainer from '../attack/AttackContainer';

const Home = () => {
  return (
    <Fragment>
      <Title title={'Gloomhaven Attack Modifier Calculator'} />
      <Grid columns='3' stackable>
        <Grid.Column>
          <AttackContainer />
        </Grid.Column>
        <Grid.Column>
          <DeckContainer/>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>Todo: Perks Container</span>
          </p>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Home;
