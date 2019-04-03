import React, { Component } from 'react'
import { View } from 'react-native'
import VariantSelector from './VariantSelector'

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.findImage = this.findImage.bind(this)
  }

  componentWillMount() {
    this.props.product.options.forEach(selector => {
      this.setState({
        selectedOptions: { [selector.name]: selector.values[0] },
      })
    })
  }

  findImage(images, variantId) {
    const primary = images[0]

    const image = images.filter(function(image) {
      return image.variant_ids.includes(variantId)
    })[0]

    return (image || primary).src
  }

  handleOptionChange(event) {
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

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value,
    })
  }

  render() {
    return <View />
  }
}

export default Product
