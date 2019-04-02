import React, { Component } from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import ExampleComponent from './ExampleComponent'
import { ApolloProvider } from 'react-apollo'
import { APOLLO_CLIENT_URI } from './utils'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  uri: APOLLO_CLIENT_URI,
  // connectToDevTools: false, // Enabling devtools in production if true
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
        <ExampleComponent />
      </ApolloProvider>
    )
  }
}
