import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import Main from './pages/Main'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
