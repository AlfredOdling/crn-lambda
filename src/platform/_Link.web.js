import React from 'react'
import { Link } from 'react-router-dom'

const _Link = ({ linkTo, title }) => (
  <Link
    to={'/' + linkTo}
    style={{ marginTop: 20, textDecoration: 'none', color: 'black' }}>
    {title}
  </Link>
)

export default _Link
