import React, { Fragment, useContext } from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import DeckContext from '../../context/deck/deckContext';
import PerksContext from '../../context/perks/perksContext';

import Bless from '../../assets/images/icons/Effects/Bless.png';
import Curse from '../../assets/images/icons/Effects/Curse.png';
import { bless, curse } from '../../context/cards/base';

const BlessCurse = () => { 

  const deckContext = useContext(DeckContext);
  let {
    addCard,
    resetDeck
  } = deckContext;

  const perksContext = useContext(PerksContext);
  let {
    resetPerks
  } = perksContext;

  return (
    <Fragment>
      <Grid columns='equal'>
        <Grid.Column className='centered'>
          <Button.Group fluid basic widths='3'>
            <Button compact onClick={()=>{ addCard(bless); }}>
                <Image src={Bless} avatar/>
            </Button>
            <Button compact onClick={()=>{ addCard(curse); }}>
                <Image src={Curse} avatar/>
            </Button>
            <Button compact content='Reset' onClick={()=>{ resetDeck(); resetPerks(); }} />
          </Button.Group>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default BlessCurse;
