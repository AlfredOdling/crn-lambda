import React from 'react'
import { View, Image, Text, Button } from 'react-native'

const LineItem = props => {
  const { updateLineItemInCart, line_item } = props

  const decrementQuantity = lineItemId => {
    updateLineItemInCart(lineItemId, line_item.quantity - 1)
  }

  const incrementQuantity = lineItemId => {
    updateLineItemInCart(lineItemId, line_item.quantity + 1)
  }

  // TODO: how to add "alt" to Image?
  // alt={`${line_item.title} product shot`}

  return (
    <View>
      <View>
        {line_item.variant.image ? (
          <Image
            source={{ uri: line_item.variant.image.src, width: 40, height: 40 }}
          />
        ) : null}
      </View>

      <View>
        <View>
          <Text>{line_item.variant.title}</Text>
          <Text>{line_item.title}</Text>
        </View>

        <View>
          <Button title="-" onPress={() => decrementQuantity(line_item.id)} />
          <Text>{line_item.quantity}</Text>
          <Button title="+" onPress={() => incrementQuantity(line_item.id)} />
        </View>
        <Text>
          $ {(line_item.quantity * line_item.variant.price).toFixed(2)}
        </Text>
      </View>
    </View>
  )
}
export default LineItem
