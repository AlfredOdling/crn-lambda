import React from 'react'
import Product from './Product'

const Products = products => {
  products.map(product => {
    return (
      <Product
        addVariantToCart={this.props.addVariantToCart}
        checkout={this.props.checkout}
        key={product.id.toString()}
        product={product}
      />
    )
  })
}

export default Products
