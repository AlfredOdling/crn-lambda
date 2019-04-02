import React, { Component } from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { APOLLO_CLIENT_URI } from './utils/constants'
import Routes from './routing/Routes'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  uri: APOLLO_CLIENT_URI,
})

// Default State
cache.writeData({
  data: {
    someField: 'some value!!',
  },
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    )
  }
}
