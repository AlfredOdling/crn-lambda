import React from 'react'
import { View } from 'react-native'
import { Router, Switch, Route } from './routing'
import ShopifyApp from '../views/ShopifyApp'

const Routes = ({ data }) => {
  return (
    <View>
      <Router>
        <Switch>
          <Route exact path="/" component={ShopifyApp} />
        </Switch>
      </Router>
    </View>
  )
}

export default Routes
