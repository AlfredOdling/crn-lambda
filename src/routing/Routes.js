import React from 'react'
import { View } from 'react-native'
import { Router, Switch, Route } from './routing'
import ExampleView from '../views/ExampleView'
import Login from '../views/login/Login'

const Routes = ({ data }) => {
  return (
    <View>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/next" component={ExampleView} />
        </Switch>
      </Router>
    </View>
  )
}

export default Routes
