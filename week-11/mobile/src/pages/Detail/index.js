import React from 'react'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'

import LogoImage from '../../assets/img/logo.png'

import {
  Container,
  Logo,
  Header,
  TextBold,
  BackButton,
  ItemBox,
  ItemContainer,
  Item,
  Property,
  Value,
  ContactBox,
  HeroTitle,
  HeroDescription,
  ActionContainer,
  ActionButton,
  ActionButtonText,
} from './styles'

const Detail = ({ navigation }) => {
  const handleClick = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <Logo source={LogoImage} />
        <BackButton onPress={handleClick}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </BackButton>
      </Header>

      <ItemBox>
        <Item>
          <ItemContainer style={{ marginTop: 0 }}>
            <Property>
              <TextBold>ONG:</TextBold>
            </Property>
            <Value>APAD</Value>
          </ItemContainer>

          <ItemContainer>
            <Property>
              <TextBold>CASO: </TextBold>
            </Property>
            <Value>Cadelinha Atropelada</Value>
          </ItemContainer>

          <ItemContainer>
            <Property>
              <TextBold>VALOR:</TextBold>
            </Property>
            <Value>R$ 120,00</Value>
          </ItemContainer>
        </Item>
      </ItemBox>

      <ContactBox>
        <Item>
          <HeroTitle>
            <TextBold>Salve o dia!</TextBold>
          </HeroTitle>
          <HeroTitle>
            <TextBold>Seja o Herói desse caso. </TextBold>
          </HeroTitle>
          <HeroDescription>Entre em contato</HeroDescription>

          <ActionContainer>
            <ActionButton onPress={() => {}}>
              <ActionButtonText>
                <TextBold>WhatsApp</TextBold>
              </ActionButtonText>
            </ActionButton>
            <ActionButton onPress={() => {}}>
              <ActionButtonText>
                <TextBold>E-mail</TextBold>
              </ActionButtonText>
            </ActionButton>
          </ActionContainer>
        </Item>
      </ContactBox>
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
