import React, { Component } from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { APOLLO_CLIENT_URI } from './utils/constants'
import Routes from './routing/Routes'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  uri: APOLLO_CLIENT_URI,
  fetchOptions: {
    mode: 'no-cors',
  },
})

// Default State
cache.writeData({
  data: {
    someField: 'some value!!',
  },
})

// export const graphQLClient = new ApolloClient({
//   link,
//   fetchOptions: {
//     mode: 'no-cors',
//   },
//   cache: new InMemoryCache()
// });

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    )
  }
}
