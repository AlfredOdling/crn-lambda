import React, { Component } from 'react'
import { View } from 'react-native'
import LineItem from './LineItem'

class Cart extends Component {
  constructor(props) {
    super(props)

    this.openCheckout = this.openCheckout.bind(this)
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl)
  }

  render() {
    // let line_items = this.props.checkout.lineItems.edges.map(line_item => {
    //   return (
    //     <LineItem
    //       removeLineItemInCart={this.props.removeLineItemInCart}
    //       updateLineItemInCart={this.props.updateLineItemInCart}
    //       key={line_item.node.id.toString()}
    //       line_item={line_item.node}
    //     />
    //   )
    // })

    // isCartOpen
    // handleCartClose
    // line_items
    // checkout.subtotalPrice
    // checkout.totalTax
    // checkout.totalPrice

    return <View />
  }
}

export default Cart
