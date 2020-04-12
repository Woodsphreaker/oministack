import React from 'react'
import PropTypes from 'prop-types'

import LogoImage from '../../assets/img/logo.png'

import { Container, Logo, Header, HeaderContent, TextBold } from './styles'

const Detail = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Logo source={LogoImage} />
        <HeaderContent>
          Total de
          <TextBold> 0 casos</TextBold>
        </HeaderContent>
      </Header>
    </Container>
  )
}

Detail.propTypes = {
  navigation: PropTypes.object,
}

Detail.defaultProps = {
  navigation: {},
}

export default Detail
