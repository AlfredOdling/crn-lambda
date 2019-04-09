import React from 'react'
import _Link from '../../platform/_Link'

const Login = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#FFED00',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        style={{
          paddingTop: 40,
          fontFamily: 'Helvetica Neue',
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        LOGIN (WEB)
      </div>

      <div
        style={{
          border: '4px solid white',
          padding: 10,
        }}>
        <p
          style={{
            fontFamily: 'Helvetica Neue',
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
            margin: 0,
          }}>
          FACEBOOK
        </p>
      </div>
      <p
        style={{
          fontFamily: 'Helvetica Neue',
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold',
        }}>
        You are logged out
      </p>

      <_Link linkTo="next" title="NEXT" />
    </div>
  )
}

export default Login

// https://www.leanpanda.com/blog/2019-01-04-create-a-static-website-with-authentication-tutorial-with-react-and-netlify-identity/
