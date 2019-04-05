import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { Text, View } from 'react-native'
import { ready, loading } from '../lambda/enums'
import Product from '../components/Product'
import Cart from '../components/Cart'

import { getData } from '../lambda/queries'
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
} from '../lambda/checkoutQueries'

class ShopifyApp extends Component {
  constructor() {
    super()

    this.state = {
      isCartOpen: false,
      isCustomerAuthOpen: false,
      isNewCustomer: false,
      products: [],
      checkout: {
        lineItems: {
          edges: [],
          id: undefined,
        },
      },
    }
  }

  componentDidMount() {
    this.props
      .createCheckout({
        variables: {
          input: {},
        },
      })
      .then(res => {
        this.setState({
          checkout: res.data.checkoutCreate.checkout,
        })
      })
  }

  addVariantToCart = (variantId, quantity) => {
    // TODO: fixa till detta
    let _variantId =
      'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMjAzMTY5MjI2NzYwNQ=='

    this.props
      .checkoutLineItemsAdd({
        variables: {
          checkoutId: this.state.checkout.id,
          lineItems: [
            { variantId: _variantId, quantity: parseInt(quantity, 10) },
          ],
        },
      })
      .then(res => {
        this.setState({
          checkout: res.data.checkoutLineItemsAdd.checkout,
        })
      })

    this.handleCartOpen()
  }

  updateLineItemInCart = (lineItemId, quantity) => {
    this.props
      .checkoutLineItemsUpdate({
        variables: {
          checkoutId: this.state.checkout.id,
          lineItems: [{ id: lineItemId, quantity: parseInt(quantity, 10) }],
        },
      })
      .then(res => {
        this.setState({
          checkout: res.data.checkoutLineItemsUpdate.checkout,
        })
      })
  }

  removeLineItemInCart = lineItemId => {
    this.props
      .checkoutLineItemsRemove({
        variables: {
          checkoutId: this.state.checkout.id,
          lineItemIds: [lineItemId],
        },
      })
      .then(res => {
        this.setState({
          checkout: res.data.checkoutLineItemsRemove.checkout,
        })
      })
  }

  associateCustomerCheckout = customerAccessToken => {
    this.props
      .checkoutCustomerAssociate({
        variables: {
          checkoutId: this.state.checkout.id,
          customerAccessToken,
        },
      })
      .then(res => {
        this.setState({
          checkout: res.data.checkoutCustomerAssociate.checkout,
          isCustomerAuthOpen: false,
        })
      })
  }

  products = () => {
    let products = []
    if (this.props.getData.networkStatus === ready) {
      products = this.props.getData.shop.products.edges.map(product => (
        <Product
          addVariantToCart={this.addVariantToCart}
          checkout={{ lineItems: { edges: [] } }}
          key={product.node.id.toString()}
          product={product.node}
        />
      ))
    }

    return products
  }

  handleCartOpen = () => {
    this.setState({
      isCartOpen: true,
    })
  }

  handleCartClose = () => {
    this.setState({
      isCartOpen: false,
    })
  }

  render() {
    return (
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'grey',
            padding: 50,
            marginBottom: 50,
          }}>
          <Text>SWEDEN</Text>
          <Text>WEBSHOP</Text>
          <Text>SEARCH</Text>
          <Text>CART</Text>
        </View>
        <View>{this.products()}</View>

        {this.state.isCartOpen ? (
          <Cart
            removeLineItemInCart={this.removeLineItemInCart}
            updateLineItemInCart={this.updateLineItemInCart}
            checkout={this.state.checkout}
            isCartOpen={this.state.isCartOpen}
            handleCartClose={this.handleCartClose}
            customerAccessToken={this.state.customerAccessToken}
          />
        ) : null}
      </View>
    )
  }
}

export default compose(
  graphql(createCheckout, { name: 'createCheckout' }),
  graphql(checkoutLineItemsAdd, { name: 'checkoutLineItemsAdd' }),
  graphql(checkoutLineItemsUpdate, { name: 'checkoutLineItemsUpdate' }),
  graphql(checkoutLineItemsRemove, { name: 'checkoutLineItemsRemove' }),
  graphql(checkoutCustomerAssociate, { name: 'checkoutCustomerAssociate' }),
  graphql(getData, { name: 'getData' })
)(ShopifyApp)

// ShopifyApp.propTypes = {
//   data: PropTypes.shape({
//     loading: PropTypes.bool,
//     error: PropTypes.object,
//     shop: PropTypes.object,
//   }).isRequired,
//   createCheckout: PropTypes.func.isRequired,
//   checkoutLineItemsAdd: PropTypes.func.isRequired,
//   checkoutLineItemsUpdate: PropTypes.func.isRequired,
// }
