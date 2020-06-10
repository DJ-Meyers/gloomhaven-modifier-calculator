import React, { Fragment } from 'react';
import { Header, Image, List, Checkbox } from 'semantic-ui-react';

const Perks = (props) => { 

  const insertIcon = (text) => {
         
    // let effects = (text.match(/\[.+?\]/g) || [] )
    // let effects = (text.match(/\[([^)]+)\]/g) || [] )
    //   .map(str => console.log(str));
  
    return (
    <span>{text}</span>
    );
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
        </Fragment>
      }
      
    </Fragment>
  );
};

export default Perks;
