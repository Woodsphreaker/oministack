import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Detail = ({ navigation }) => {
  return (
    <>
      <Container>
        <Text>Detail</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Incidents', { Param: 123 })}>
          <Text>Page 2</Text>
        </TouchableOpacity>
      </Container>
    </>
  )
}

Detail.propTypes = {
  navigation: PropTypes.object,
}

Detail.defaultProps = {
  navigation: {},
}

export default Detail
