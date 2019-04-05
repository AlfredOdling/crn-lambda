import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import VariantSelector from './VariantSelector'
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.product.options.forEach(selector => {
      this.setState({
        selectedOptions: { [selector.name]: selector.values[0] },
      })
    })
  }

  findImage = (images, variantId) => {
    const primary = images[0]

    const image = images.filter(function(image) {
      return image.variant_ids.includes(variantId)
    })[0]

    return (image || primary).src
  }

  handleOptionChange = event => {
    const target = event.target
    let selectedOptions = this.state.selectedOptions
    selectedOptions[target.name] = target.value

    const selectedVariant = this.props.product.variants.edges.find(variant => {
      return variant.node.selectedOptions.every(selectedOption => {
        return selectedOptions[selectedOption.name] === selectedOption.value
      })
    }).node

    this.setState({
      selectedVariant,
      selectedVariantImage: selectedVariant.image.src,
    })
  }

  handleQuantityChange = event => {
    this.setState({
      selectedVariantQuantity: event.target.value,
    })
  }

  render() {
    let variantImage =
      this.state.selectedVariantImage ||
      this.props.product.images.edges[0].node.src
    let variant =
      this.state.selectedVariant || this.props.product.variants.edges[0].node
    let variantQuantity = this.state.selectedVariantQuantity || 1

    let variant_selectors = this.props.product.options.map((option, i) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={'VariantSelector' + i}
          option={option}
        />
      )
    })

    return (
      <View
        style={{
          margin: 50,
          backgroundColor: '#FF9911',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text>{this.props.product.title}</Text>

        {this.props.product.images.edges.length ? (
          <Image source={{ uri: variantImage, width: 200, height: 200 }} />
        ) : null}

        <Text>{variant.price}</Text>
        {variant_selectors}

        {/*        <label className="Product__option">
          Quantity
          <input
            min="1"
            type="number"
            defaultValue={variantQuantity}
            onChange={this.handleQuantityChange}
          />
        </label>*/}

        <Button
          title="Add to Cart"
          onPress={() =>
            this.props.addVariantToCart(variant.id, variantQuantity)
          }
        />
      </View>
    )
  }
}

export default Product
