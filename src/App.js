import React, { Component } from 'react'
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Routes from './routing/Routes'

const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: 'https://nth-graphql-demo.myshopify.com/api/graphql',
})
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-Shopify-Storefront-Access-Token': 'feb2da63f08980373469b41292002b8a',
    },
  })
  return forward(operation)
})

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
})

// Default State
cache.writeData({
  data: {
    someField: 'some value!!',
    shopifyAppState: {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
    },
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
