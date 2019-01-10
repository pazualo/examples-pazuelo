import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}
