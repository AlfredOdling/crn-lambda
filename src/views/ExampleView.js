import React from 'react'
import { View, Text } from 'react-native'
import { graphql, compose } from 'react-apollo'
import { getSomeField, getPersons } from '../lambda/queries'

const ExampleView = props => {
  const { getSomeField, getPersons } = props
  const { error, loading, persons } = getPersons

  return (
    <View style={{ padding: 50 }}>
      <Text>hejhej!</Text>
    </View>
  )
}

export default compose(
  graphql(getSomeField, {
    name: 'getSomeField',
  }),
  graphql(getPersons, {
    name: 'getPersons',
  })
)(ExampleView)
