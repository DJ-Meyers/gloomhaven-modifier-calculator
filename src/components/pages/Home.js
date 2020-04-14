import React, { Fragment } from 'react';
import Title from '../layout/Title';
import DeckContainer from '../deck/DeckContainer';
import { Grid } from 'semantic-ui-react';

const Home = () => {
  return (
    <Fragment>
      <Title title={'Gloomhaven Attack Modifier Calculator'} />
      <Grid columns='3'>
        <Grid.Column>
          <p>
            <span>Todo: Attack/Enemy Container</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <DeckContainer />
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
