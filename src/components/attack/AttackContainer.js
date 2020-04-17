import React, { useContext } from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';
import Advantage from './Advantage';
import Enemy from './Enemy';
import Attack from './Attack';
import AttackContext from '../../context/attack/attackContext';

const AttackContainer = () => { 

  const attackContext = useContext(AttackContext);
  let {
    advantage,
    disadvantage,
    toggle
  } = attackContext;

  // useEffect(() => {
  //   // Initialize

  //   updateUniques();
  // }, []);

  return (
    <Segment>
      <Header size='medium'>Attack Stats</Header>
      <Grid>
        <Grid.Column>
          <Advantage advantage={advantage} disadvantage={disadvantage} toggle={toggle}/>
          <Attack />
          <Enemy />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default AttackContainer;
