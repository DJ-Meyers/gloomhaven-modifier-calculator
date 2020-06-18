import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Icon } from 'semantic-ui-react';

export default class Navbar extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu inverted color='grey' style={{ borderRadius: '0px' }}>
        <Container>
          <Menu.Item as="span" header>
            <Link to="/rolling-advantage">
              <Icon name="home" /> Rolling Advantage
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
