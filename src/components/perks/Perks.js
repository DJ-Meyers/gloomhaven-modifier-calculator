import React, { Fragment } from 'react';
import { Header, List, Checkbox, Button } from 'semantic-ui-react';

let toggleState = false;

const Perks = (props) => { 

  const insertIcon = (text) => {
  
    return (
    <span>{text}</span>
    );
  };

  const toggleAllPerks = (perks) => {
    toggleState = !toggleState;

    perks.forEach(perk => {
      perk.checked.forEach((checkbox, index) => {

        if (!perk.checked[index] && toggleState === true) {
          props.toggle(perk, index);
          props.apply(perk);
        }
        else if (perk.checked[index] && toggleState === false) {
          props.toggle(perk, index);
          props.undo(perk);
        }
        
      });
    });
  };

  return (
    <Fragment>
      { props.character === null ? 
        (<Fragment />) 
          : 
        <Fragment>
          <Header size='small' dividing >
            {props.character.text}
          </Header>
          <List>
            {props.character.perks.map(perk => {
              return (
                <List.Item key={perk.text}>
                  <List.Content verticalAlign='middle'>
                  {perk.checked.map((checkbox, index) => {
                    return (
                      <Checkbox key={index} checked={checkbox} onChange={() => {
                          props.toggle(perk, index);

                          if (!perk.checked[index]) {
                            props.apply(perk);
                          }
                          else {
                            props.undo(perk);
                          }
                        }}
                      />)
                  })} {insertIcon(perk.text)} </List.Content>
                </List.Item>)
            })}
          </List>
          {props.character.perks.length > 0 ? 
            <Header>
              <Button fluid compact onClick={()=>{ toggleAllPerks(props.character.perks) }} className='toggle' >Toggle all</Button> 
            </Header>
            : <Fragment />}
        </Fragment>
      }
      
    </Fragment>
  );
};

export default Perks;
