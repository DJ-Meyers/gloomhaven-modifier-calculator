import React, { useContext } from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';
import DamageHistogram from './DamageHistogram';
import EffectsGraph from './EffectsGraph';

import CalculatorContext from '../../context/calculator/calculatorContext';
const DetailsContainer = () => { 

  const calculatorContext = useContext(CalculatorContext);
  let {
    maxDmg,
    effectBins,
    effects,
    dmgBins
  } = calculatorContext;

  return (
    <Modal trigger={<Button compact fluid >Advanced</Button>} >
      <Modal.Header>Advanced Details</Modal.Header>
      <Modal.Content className='chart' >
        <Header>Damage Histogram</Header>
        <DamageHistogram bins={dmgBins} max={maxDmg} />
        <Header>Effects Histogram</Header>
        <EffectsGraph bins={effectBins} effects={effects} />
      </Modal.Content>
    </Modal>
  );
};

export default DetailsContainer;
