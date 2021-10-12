import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Character from './Character'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/characters/:id'>
            <Character />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
