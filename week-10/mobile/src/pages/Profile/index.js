import React from 'react'

import { Browser } from './styles'

// Proptypes
import propTypes from 'prop-types'

const Profile = ({ navigation }) => {
  const user = navigation.getParam('user')
  return <Browser source={{ uri: `https://github.com/${user}` }} />
}

Profile.propTypes = {
  navigation: propTypes.shape({
    getParam: propTypes.func.isRequired,
  }).isRequired,
}

export default Profile
