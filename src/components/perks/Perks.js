import React, { Fragment } from 'react';
import { Header, List, Checkbox, Image } from 'semantic-ui-react';

const Perks = (props) => { 

  return (
    <Fragment>
      { props.character === null ? 
        (<Fragment />) 
          : 
        <Fragment>
          <Header size='small' >
            {props.character.text}
          </Header>
          <List>
            {props.character.perks.map(perk => {
              return (
                <List.Item key={perk.text}>
                  <List.Content>
                  {perk.checked.map((checkbox, index) => {
                    return (<Checkbox key={index} checked={checkbox} onChange={() => {
                      props.toggle(perk, index);

                      if (!perk.checked[index]) {
                        props.apply(perk);
                      }
                      else {
                        props.undo(perk);
                      }
                    }}/>)
                  })} {perk.text}</List.Content>
                </List.Item>)
            })}
          </List>
        </Fragment>
      }
      
    </Fragment>
  );
};

export default Perks;
