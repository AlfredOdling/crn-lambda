import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { View } from 'react-native'

class CustomerAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      nonFieldErrorMessage: null,
      emailErrorMessage: null,
      passwordErrorMessage: null,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.createCustomerAccount = this.createCustomerAccount.bind(this)
    this.resetErrorMessages = this.resetErrorMessages.bind(this)
    this.resetInputFields = this.resetInputFields.bind(this)
  }

  static propTypes = {
    customerCreate: PropTypes.func.isRequired,
    customerAccessTokenCreate: PropTypes.func.isRequired,
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  resetErrorMessages() {
    this.setState({
      nonFieldErrorMessage: null,
      emailErrorMessage: null,
      passwordErrorMessage: null,
    })
  }

  resetInputFields() {
    this.setState({
      email: '',
      password: '',
    })
  }

  handleSubmit(email, password) {
    this.resetErrorMessages()
    if (this.props.newCustomer) {
      this.createCustomerAccount(email, password)
    } else {
      this.loginCustomerAccount(email, password)
    }
  }

  createCustomerAccount(email, password) {
    const input = {
      email,
      password,
    }
    this.props.customerCreate({ variables: { input } }).then(res => {
      if (res.data.customerCreate.customer) {
        this.props.closeCustomerAuth()
        this.props.showAccountVerificationMessage()
      } else {
        res.data.customerCreate.userErrors.forEach(
          function(error) {
            if (error.field) {
              this.setState({
                [error.field + 'ErrorMessage']: error.message,
              })
            } else {
              this.setState({
                nonFieldErrorMessage: error.message,
              })
            }
          }.bind(this)
        )
      }
    })
  }

  loginCustomerAccount(email, password) {
    const input = {
      email,
      password,
    }
    this.props.customerAccessTokenCreate({ variables: { input } }).then(res => {
      if (res.data.customerAccessTokenCreate.customerAccessToken) {
        this.props.associateCustomerCheckout(
          res.data.customerAccessTokenCreate.customerAccessToken.accessToken
        )
      } else {
        res.data.customerAccessTokenCreate.userErrors.forEach(
          function(error) {
            if (error.field != null) {
              this.setState({
                [error.field + 'ErrorMessage']: error.message,
              })
            } else {
              this.setState({
                nonFieldErrorMessage: error.message,
              })
            }
          }.bind(this)
        )
      }
    })
  }

  render() {
    return <View />
  }
}

const customerCreate = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
      }
    }
  }
`

const customerAccessTokenCreate = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`

const CustomerAuthWithMutation = compose(
  graphql(customerCreate, { name: 'customerCreate' }),
  graphql(customerAccessTokenCreate, { name: 'customerAccessTokenCreate' })
)(CustomerAuth)

export default CustomerAuthWithMutation
