import React, { useContext } from 'react';
import { Modal, Segment, Header, Grid, Button } from 'semantic-ui-react';
import DamageHistogram from './DamageHistogram';

import CalculatorContext from '../../context/calculator/calculatorContext';
const DetailsContainer = () => { 

  const calculatorContext = useContext(CalculatorContext);
  let {
    dmgValues,
    maxDmg
  } = calculatorContext;

  return (
    <Modal trigger={<Button compact floated='right'>Show Details</Button>}>
      <Modal.Header>Advanced Details</Modal.Header>
      <Modal.Content>
        <Header>Damage Histogram</Header>
        <DamageHistogram rawData={dmgValues} max={maxDmg} />
      </Modal.Content>
    </Modal>
  );
};

export default DetailsContainer;
