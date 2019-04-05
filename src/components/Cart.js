import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import LineItem from './LineItem'

class Cart extends Component {
  openCheckout() {
    window.open(this.props.checkout.webUrl)
  }

  render() {
    let line_items = this.props.checkout.lineItems.edges.map(line_item => {
      return (
        <LineItem
          removeLineItemInCart={this.props.removeLineItemInCart}
          updateLineItemInCart={this.props.updateLineItemInCart}
          key={line_item.node.id.toString()}
          line_item={line_item.node}
        />
      )
    })

    // this.props.isCartOpen

    return (
      <View style={{ width: 100, height: '100%' }}>
        <View>
          <Text>Cart</Text>
          <Button title="X" onPress={this.props.handleCartClose} />
        </View>

        <View>{line_items}</View>

        <View id="footer">
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text>Subtotal</Text>
            </View>
            <Text>$ {this.props.checkout.subtotalPrice}</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text>Taxes</Text>
            </View>
            <Text>$ {this.props.checkout.totalTax}</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text>Total</Text>
            </View>

            <Text>$ {this.props.checkout.totalPrice}</Text>
          </View>

          <Button onPress={this.openCheckout} title="Checkout" />
        </View>
      </View>
    )
  }
}

export default Cart
