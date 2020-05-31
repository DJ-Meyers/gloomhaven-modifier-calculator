import React, { useContext } from 'react';
import { Segment, Header, Grid, Button } from 'semantic-ui-react';
import Results from './Results';
import Trials from './Trials';
import DetailsContainer from './DetailsContainer';

import CalculatorContext from '../../context/calculator/calculatorContext';
import DeckContext from '../../context/deck/deckContext';
import AttackContext from '../../context/attack/attackContext';

const CalculatorContainer = () => { 

  const calculatorContext = useContext(CalculatorContext);
  let {
    averageDamage,
    killPct,
    negativeDrawPct,
    calculateDamage,
    trials,
    setTrials
  } = calculatorContext;

  const deckContext = useContext(DeckContext);
  let {
    deck
  } = deckContext;

  const attackContext = useContext(AttackContext);
  let {
    advantage,
    disadvantage,
    attackDamage,
    attackPierce,
    enemyHP,
    enemyShield
  } = attackContext;

  return (
    <Segment>
      <Header size='medium'>Calculator</Header>
      <Grid>
        <Grid.Column>
          <Trials trials={trials} setTrials={setTrials} />
          <Results values={{averageDamage, killPct, negativeDrawPct}}/>
          <Grid columns='equal'>
            <Grid.Column className='centered'>
              <DetailsContainer />
            </Grid.Column>
            <Grid.Column className='centered'>
              <Button compact fluid content='Calculate' onClick={()=>{
                calculateDamage({advantage, disadvantage, attackDamage, attackPierce, enemyHP, enemyShield}, deck)}} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default CalculatorContainer;
