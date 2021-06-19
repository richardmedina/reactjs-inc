import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom'

import HomeContainer from './containers/home-container/home-container.component'

const CustomRoutes = ({ isLogged }) => (
  <Switch>
    <Route exact path='/home' component={HomeContainer} />
    <Route exact path="/about" render={() => <div>{isLogged ? 'IsLogged' : 'Is not Logged' }</div>} />
  </Switch>
)

export default CustomRoutes

