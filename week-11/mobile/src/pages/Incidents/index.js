import React from 'react'
import { Feather } from '@expo/vector-icons'
// import { View, Text, TouchableOpacity } from 'react-native'

import LogoImage from '../../assets/img/logo.png'

import {
  Container,
  Header,
  Logo,
  HeaderContent,
  TextBold,
  Title,
  Description,
  IncidentsList,
  IncidentItem,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles'

const Incidents = ({ route, navigation }) => {
  return (
    <Container>
      <Header>
        <Logo source={LogoImage} />
        <HeaderContent>
          Total de
          <TextBold> 0 casos</TextBold>
        </HeaderContent>
      </Header>

      <Title>
        <TextBold>Bem-vindo!</TextBold>
      </Title>
      <Description>Escolha um dos casos e salve o dia !</Description>

      <IncidentsList>
        {[...Array(10)].map((el) => (
          <IncidentItem key={`${el}`}>
            <IncidentProperty>
              <TextBold>ONG:</TextBold>
            </IncidentProperty>
            <IncidentValue>APAD</IncidentValue>

            <IncidentProperty>
              <TextBold>CASO: </TextBold>
            </IncidentProperty>
            <IncidentValue>Cadelinha Atropelada</IncidentValue>

            <IncidentProperty>
              <TextBold>VALOR:</TextBold>
            </IncidentProperty>
            <IncidentValue>R$ 120,00</IncidentValue>

            <DetailsButton onPress={() => alert('ok')}>
              <DetailsButtonText>
                <TextBold>Ver mais detalhes</TextBold>
              </DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </IncidentItem>
        ))}
      </IncidentsList>
    </Container>
  )
}

export default Incidents
