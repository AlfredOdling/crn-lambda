import React, { Component } from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Routes from './routing/Routes'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  url: 'https://graphql.myshopify.com/api/graphql',
  fetcherOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': 'dd4d4dc146542ba7763305d71d1b3d38',
    },
  },
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
