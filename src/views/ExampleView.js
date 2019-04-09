import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { graphql, compose } from 'react-apollo'
import { getSomeField, getPersons } from '../lambda/queries'
import _Link from '../platform/_Link'

const ExampleView = props => (
  <View
    style={{
      paddingHorizontal: 30,
      marginTop: 50,
      height: '100%',
      width: '100%',
    }}>
    <ScrollView>
      <View
        style={{
          borderColor: '#FFED00',
          borderWidth: 4,
          padding: 20,
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontFamily: 'Helvetica Neue',
            fontSize: 15,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Detta är en rad
        </Text>
      </View>
      <_Link linkTo="" title="BACK" />
    </ScrollView>
  </View>
)

export default ExampleView

// const ExampleView = props => {
//   const renderSomething = () => {
//     const { getSomeField, getPersons } = props
//     const { error, loading, persons } = getPersons

//     let somethingToRender = persons ? (
//       persons.map((person, i) => {
//         return (
//           <View
//             style={{
//               borderColor: '#FFED00',
//               borderWidth: 4,
//               padding: 20,
//               marginBottom: 20,
//             }}
//             key={i}>
//             <Text
//               style={{
//                 fontFamily: 'Helvetica Neue',
//                 fontSize: 15,
//                 color: 'black',
//                 fontWeight: 'bold',
//               }}>
//               {person.email}
//             </Text>
//           </View>
//         )
//       })
//     ) : (
//       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Loading!</Text>
//     )

//     return somethingToRender
//   }

//   return (
//     <View
//       style={{
//         padding: 50,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignContent: 'center',
//       }}>
//       {renderSomething()}

//       <_Link linkTo="" title="BACK" />
//     </View>
//   )
// }

// export default compose(
//   graphql(getSomeField, {
//     name: 'getSomeField',
//   }),
//   graphql(getPersons, {
//     name: 'getPersons',
//   })
// )(ExampleView)
