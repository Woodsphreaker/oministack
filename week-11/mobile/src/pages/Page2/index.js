import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Page2 = ({ route, navigation }) => {
  const { Param = 'None' } = route.params || {}

  return (
    <>
      <View>
        <Text>Page2</Text>
        <Text>{console.tron.log(Param)}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Page2
