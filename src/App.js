import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Internships from './pages/Internships'

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/internships">Internships</Link>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/internships">
              <Internships />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
