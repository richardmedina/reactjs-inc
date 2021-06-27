import React from 'react'

import { Switch, Route } from 'react-router-dom'
import HomeContainer from './containers/home-container/home-container.components'

const CustomRoutes = () =>
  <Switch>
    <Route exact path='/home' component={HomeContainer} />
    <Route path='*' component={() => (<div>Not Found</div>)} />
  </Switch>

export default CustomRoutes