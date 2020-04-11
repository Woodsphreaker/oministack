import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Home = ({ navigation }) => {
  return (
    <>
      <Container>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Page2', { Param: 123 })}>
          <Text>Page 2</Text>
        </TouchableOpacity>
      </Container>
    </>
  )
}

Home.propTypes = {
  navigation: PropTypes.object,
}

Home.defaultProps = {
  navigation: {},
}

export default Home
