import React from 'react'
import { View, Text } from 'react-native'

const Profile = props => {
  return (
    <View>
      <Text>{props.navigation.getParam('name')}</Text>
    </View>
  )
}

export default Profile
