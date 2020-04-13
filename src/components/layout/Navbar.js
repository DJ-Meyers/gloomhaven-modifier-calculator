import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Icon } from 'semantic-ui-react';

export default class Navbar extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu inverted style={{ borderRadius: '0px' }}>
        <Container>
          <Menu.Item as="span" header>
            <Link to="/">
              <Icon name="home" /> Gloomhaven Attack Modifier Calculator
            </Link>
          </Menu.Item>
          {/* <Menu.Item as="span">
            <Link to="/About">About</Link>
          </Menu.Item> */}
        </Container>
      </Menu>
    );
  }
}
