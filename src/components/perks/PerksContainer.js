import React, { useContext, useEffect } from 'react';
import { Segment, Header, Grid, Dropdown } from 'semantic-ui-react';
import PerksContext from '../../context/perks/perksContext';
import DeckContext from '../../context/deck/deckContext';
import Perks from './Perks';

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
    applyPerks
  } = deckContext;

  useEffect(() => {
    applyPerks(selectedClass);
  }, [selectedClass]);

  const onChange = (e, data) => {
    setClass(classes.filter(c => c.text === data.value)[0]);
  };

  return (
    <Segment>
      <Header size='medium'>Perks</Header>
      <Grid>
        <Grid.Column>
          <Dropdown placeholder='Select Class' fluid search selection search options={classes} onChange={onChange}/>
          <Perks character={selectedClass} toggle={togglePerk} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PerksContainer;
