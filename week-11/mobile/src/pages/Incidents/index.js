import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import formatPrice from '../../utils/formatPrice'
import api from '../../services/api'
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
  const navigation = useNavigation()

  const [incidents, setIncidents] = useState()

  const prepareData = (data = []) => {
    if (!data.length) {
      return false
    }

    const newData = data.map((el) => ({
      ...el,
      value: formatPrice(el.value),
    }))
    return setIncidents(newData)
  }

  const getIncidents = async () => {
    const { data } = await api.get('incident')
    prepareData(data)
  }

  useEffect(() => {
    getIncidents()
  }, [])

  const handleClick = (id) => {
    navigation.navigate('detail', { id })
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
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <IncidentItem>
            <IncidentProperty>
              <TextBold>ONG:</TextBold>
            </IncidentProperty>
            <IncidentValue>{item.name}</IncidentValue>

            <IncidentProperty>
              <TextBold>CASO: </TextBold>
            </IncidentProperty>
            <IncidentValue>{item.title}</IncidentValue>

            <IncidentProperty>
              <TextBold>VALOR:</TextBold>
            </IncidentProperty>
            <IncidentValue>{item.value}</IncidentValue>

            <DetailsButton onPress={() => handleClick(item.id)}>
              <DetailsButtonText>
                <TextBold>Ver mais detalhes</TextBold>
              </DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </IncidentItem>
        )}
      />
    </Container>
  )
}

export default Incidents
