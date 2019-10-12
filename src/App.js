import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Internships from './pages/Internships'
import Contact from './pages/Contact';

import Login from './pages/Login';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/internships" component={Internships} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
