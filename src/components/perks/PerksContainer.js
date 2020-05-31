import React, { useContext } from 'react';
import { Segment, Header, Grid, Dropdown } from 'semantic-ui-react';
import PerksContext from '../../context/perks/perksContext';
import DeckContext from '../../context/deck/deckContext';
import Perks from './Perks';
import BlessCurse from './BlessCurse';

const PerksContainer = () => { 

  const perksContext = useContext(PerksContext);
  let {
    classes,
    selectedClass,
    setClass,
    togglePerk
  } = perksContext;

  const deckContext = useContext(DeckContext);
  let {
    applyPerk,
    undoPerk,
    resetDeck
  } = deckContext;

  const onChange = (e, data) => {
    setClass(classes.filter(c => c.text === data.value)[0]);
    resetDeck();
  };

  return (
    <Segment>
      <Header size='medium'>Perks</Header>
      <Grid>
        <Grid.Column>
          <Dropdown placeholder='Select Class' fluid search selection options={classes} onChange={onChange}/>
          <Perks character={selectedClass} toggle={togglePerk} apply={applyPerk} undo={undoPerk} />
          <BlessCurse />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PerksContainer;
