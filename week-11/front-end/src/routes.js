import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Users from './pages/Users'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dash" exact render={() => <div>Dash</div>} />
        <Route path="/users" exact component={Users} />
        <Route path="*" render={() => '404 not found'} />
      </Switch>
    </Router>
  )
}

export default Routes
