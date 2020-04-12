import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
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

const Incidents = ({ route }) => {
  const [incidents, setIncidents] = useState([...Array(10)])

  const navigation = useNavigation()

  const handleClick = (item) => {
    navigation.navigate('detail')
  }

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

      <IncidentsList
        data={incidents}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <IncidentItem>
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

            <DetailsButton onPress={handleClick}>
              <DetailsButtonText>
                <TextBold>Ver mais detalhes</TextBold>
              </DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </IncidentItem>
        )}
        keyExtractor={(item) => item}
      />
    </Container>
  )
}

export default Incidents
