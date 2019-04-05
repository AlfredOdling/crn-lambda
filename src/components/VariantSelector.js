import React from 'react'
import { View, Text } from 'react-native'

export const VariantSelector = props => {
  const { option, handleOptionChange } = props
  const { name, values } = option

  const options = values.map(value => {
    return (
      <View key={name}>
        <Text>{value}</Text>
      </View>
    )
  })

  return <View>{options}</View>
}

// export const VariantSelector = () => (
//   <select
//     className="Product__option"
//     name={this.props.option.name}
//     key={this.props.option.name}
//     onChange={this.props.handleOptionChange}>
//     {this.props.option.values.map(value => {
//       return (
//         <option
//           value={value}
//           key={`${this.props.option.name}-${value}`}>{`${value}`}</option>
//       )
//     })}
//   </select>
// )

export default VariantSelector
