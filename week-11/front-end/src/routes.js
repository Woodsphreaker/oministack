import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Incidend from './pages/Incident'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/incidents/new" exact component={Incidend} />
        <Route path="*" render={() => '404 not found'} />
      </Switch>
    </Router>
  )
}

export default Routes
