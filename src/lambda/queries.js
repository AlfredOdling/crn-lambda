import gql from 'graphql-tag'

// LOCAL
export const getSomeField = gql`
  {
    someField @client
  }
`

export const addField = gql`
  mutation addField($field: String!) {
    addField(field: $field) @client {
      field
    }
  }
`

export const getShopifyAppState = gql`
  {
    ShopifyAppState @client
  }
`

// SERVER
export const getPersons = gql`
  query {
    persons {
      email
    }
  }
`

export const getShop = gql`
  query {
    shop {
      name
    }
  }
`

export const createCheckout = gql`
  mutation {
    checkoutCreate(input: {}) {
      userErrors {
        message
        field
      }
      checkout {
        id
        webUrl
        subtotalPrice
        totalTax
        totalPrice
        lineItems(first: 250) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              title
              variant {
                title
                image {
                  src
                }
                price
              }
              quantity
            }
          }
        }
      }
    }
  }
`

export const getProducts = gql`
  query {
    products(first: 20) {
      edges {
        node {
          id
          title
          images(first: 3) {
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
`

export const getData = gql`
  query {
    shop {
      name
      description
      products(first: 20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            options {
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
