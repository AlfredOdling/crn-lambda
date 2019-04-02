import React from 'react'
import { View } from 'react-native'
import { Router, Switch, Route } from './routing'
import ExampleView from '../views/ExampleView'

const Routes = ({ data }) => {
  return (
    <View>
      <Router>
        <Switch>
          <Route exact path="/" component={ExampleView} />
        </Switch>
      </Router>
    </View>
  )
}

export default Routes
