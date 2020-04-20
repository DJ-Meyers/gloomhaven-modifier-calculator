import React, { useContext } from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';
// import AttackContext from '../../context/attack/attackContext';

const PerksContainer = () => { 

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
      <Header size='medium'>Perks</Header>
      <Grid>
        <Grid.Column>
          <p>
            <span>
              Placeholder
            </span>
          </p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PerksContainer;
