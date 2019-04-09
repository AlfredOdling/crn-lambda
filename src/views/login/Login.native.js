import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { AuthSession } from 'expo'
// https://www.leanpanda.com/blog/2019-01-04-create-a-static-website-with-authentication-tutorial-with-react-and-netlify-identity/
import _Link from '../../platform/_Link'

const FB_APP_ID = 1196810150484418

export default class Login extends React.Component {
  state = {
    result: null,
  }

  render() {
    console.log('this.state.result', this.state.result)

    return (
      <View style={styles.outerContainer}>
        <Text
          style={{
            fontFamily: 'Helvetica Neue',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          LOGIN (NATIVE)
        </Text>
        <TouchableOpacity
          style={{
            borderColor: 'white',
            borderWidth: 4,
            padding: 10,
            marginBottom: 20,
          }}
          onPress={this._handlePressAsync}>
          <Text
            style={{
              fontFamily: 'Helvetica Neue',
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
            }}>
            FACEBOOK
          </Text>
        </TouchableOpacity>

        {this.state.result && this.state.result.type ? (
          <Text
            style={{
              fontFamily: 'Helvetica Neue',
              fontSize: 15,
              color: 'green',
              fontWeight: 'bold',
            }}>
            You are logged in
          </Text>
        ) : (
          <Text
            style={{
              fontFamily: 'Helvetica Neue',
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            You are logged out
          </Text>
        )}

        <_Link linkTo="next" title="NEXT" />
      </View>
    )
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl()
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${FB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    })
    this.setState({ result })
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#FFED00',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
