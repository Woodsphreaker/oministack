import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as MailComposer from 'expo-mail-composer'
import { Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'

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

const message =
  'Olá APAD, estou entrando em contato pois gostaria de entrar em contato para ajudar no caso xxx no valor de R$ 00,00'

const IncidentDetail = ({ route, navigation }) => {
  const [incident, setIncident] = useState({})

  const getIncident = async () => {
    const { data } = await api.get()
  }

  useEffect(() => {}, [])

  const handleClick = () => {
    navigation.goBack()
  }

  const senMail = () => {
    // Send email using a internal email client
    MailComposer.composeAsync({
      subject: 'Herói do caso xxx',
      recipients: ['teste@teste.com'],
      body: message,
    })
  }

  const sendWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=5511971431714&text=${message}`)
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
            <ActionButton onPress={() => sendWhatsApp()}>
              <ActionButtonText>
                <TextBold>WhatsApp</TextBold>
              </ActionButtonText>
            </ActionButton>
            <ActionButton onPress={() => senMail()}>
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

IncidentDetail.propTypes = {
  navigation: PropTypes.object,
}

IncidentDetail.defaultProps = {
  navigation: {},
}

export default IncidentDetail
