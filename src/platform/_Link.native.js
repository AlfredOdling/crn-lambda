import React from 'react'
import { Text } from 'react-native'
import { Link } from 'react-router-native'

const _Link = ({ linkTo, title }) => (
  <Link to={'/' + linkTo} style={{ marginTop: 20 }}>
    <Text style={{ color: 'black' }}>{title}</Text>
  </Link>
)

export default _Link
