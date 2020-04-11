import React from 'react'
import { View, Text } from 'react-native'

const Page2 = ({ navigation }) => {
  console.log(navigation.getParam('Param'))
  return (
    <>
      <View>
        <Text>Page2</Text>
        <Text>{navigation.getParam('Param')}</Text>
      </View>
    </>
  )
}

export default Page2
