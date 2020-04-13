import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as MailComposer from 'expo-mail-composer'
import { Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import formatPrice from '../../utils/formatPrice'
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

const formatMessage = (data) => {
  const { name: organization, title: incident, value } = data
  const message = `Olá ${organization}, estou entrando em contato pois gostaria de ajudar no caso ${incident}, no valor de ${formatPrice(
    value
  )}`
  return message
}

const IncidentDetail = ({ route, navigation }) => {
  const [incident, setIncident] = useState({})

  const getIncident = async () => {
    const { id } = route.params
    const { data } = await api.get(`detail?id=${id}`)
    setIncident(data)
  }

  useEffect(() => {
    getIncident()
  }, [])

  const handleClick = () => {
    navigation.goBack()
  }

  const senMail = () => {
    // Send email using a internal email client
    const { email, title } = incident
    MailComposer.composeAsync({
      subject: `Herói do caso g${title}`,
      recipients: [email],
      body: formatMessage(incident),
    })
  }

  const sendWhatsApp = () => {
    const { whatsapp } = incident
    Linking.openURL(
      `whatsapp://send?phone=${whatsapp}&text=${formatMessage(incident)}`
    )
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
            <Value>{incident.name}</Value>
          </ItemContainer>

          <ItemContainer>
            <Property>
              <TextBold>CASO: </TextBold>
            </Property>
            <Value>{incident.title}</Value>
          </ItemContainer>

          <ItemContainer>
            <Property>
              <TextBold>DESCRIÇÃO: </TextBold>
            </Property>
            <Value>{incident.description}</Value>
          </ItemContainer>

          <ItemContainer>
            <Property>
              <TextBold>VALOR:</TextBold>
            </Property>
            <Value>{formatPrice(incident.value)}</Value>
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
  navigation: PropTypes.func,
  route: PropTypes.func,
}

IncidentDetail.defaultProps = {
  navigation: {},
  route: '',
}

export default IncidentDetail
