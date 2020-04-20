// Core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

// 3rd Party Components
import { Container } from 'semantic-ui-react';

// Context
import DeckState from './context/deck/deckState';
import AttackState from './context/attack/attackState';
import PerksState from './context/perks/perksState';

// Other
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <DeckState>
      <AttackState>
        <PerksState>
          <Router>
            <div className="App">
              <Navbar />
              <Container style={{ marginTop: '2rem' }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  {/* <Route exact path="/About" component={About} /> */}
                </Switch>
              </Container>
            </div>
          </Router>
        </PerksState>
      </AttackState>
    </DeckState>
  );
}

export default App;
