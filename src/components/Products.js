import React, { Component } from 'react'
import { View } from 'react-native'
import Product from './Product'

class Products extends Component {
  render() {
    let products = this.props.products.map(product => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          checkout={this.props.checkout}
          key={product.id.toString()}
          product={product}
        />
      )
    })

    return <View>{products}</View>
  }
}

export default Products
