import React, { useContext } from 'react';
import { Segment, Header, Grid, Button } from 'semantic-ui-react';
import Results from './Results';
// import AttackContext from '../../context/attack/attackContext';

const CalculatorContainer = () => { 

  // const attackContext = useContext(AttackContext);
  // let {
  //   advantage,
  //   disadvantage,
  //   toggle,

  //   attackDamage,
  //   attackPierce,
  //   setDamage,
  //   setPierce,

  //   enemyHP,
  //   enemyShield,
  //   setEnemyHP,
  //   setEnemyShield
  // } = attackContext;

  // useEffect(() => {
  //   // Initialize

  //   updateUniques();
  // }, []);

  return (
    <Segment>
      <Header size='medium'>Calculator</Header>
      <Grid>
        <Grid.Column>
          <Results />
          <Button onClick={()=>{console.log('calculate');}} floated='right' >Calculate</Button>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default CalculatorContainer;
