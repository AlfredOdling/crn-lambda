import React, { Component } from 'react'
import { View } from 'react-native'

class LineItem extends Component {
  constructor(props) {
    super(props)

    this.decrementQuantity = this.decrementQuantity.bind(this)
    this.incrementQuantity = this.incrementQuantity.bind(this)
  }

  decrementQuantity(lineItemId) {
    this.props.updateLineItemInCart(
      lineItemId,
      this.props.line_item.quantity - 1
    )
  }

  incrementQuantity(lineItemId) {
    this.props.updateLineItemInCart(
      lineItemId,
      this.props.line_item.quantity + 1
    )
  }

  render() {
    return <View />
  }
}

export default LineItem
