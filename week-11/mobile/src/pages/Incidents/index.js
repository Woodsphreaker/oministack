import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
// import PropTypes from 'prop-types'
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

const Incidents = () => {
  const navigation = useNavigation()
  const [incidents, setIncidents] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)

  const prepareData = (data = []) => {
    if (!data.length) {
      return false
    }

    const newData = data.map((el) => ({
      ...el,
      value: formatPrice(el.value),
    }))
    return setIncidents(page === 1 ? newData : [...incidents, ...newData])
  }

  const getIncidents = async () => {
    const response = await api.get(`incident?page=${page}`)
    const { data } = response
    const { 'x-total-count': totalCount = 0 } = response.headers
    setTotal(totalCount)
    setRefreshing(false)
    prepareData(data)
  }

  useEffect(() => {
    getIncidents()
  }, [page])

  const handleClick = (id) => {
    navigation.navigate('detail', { id })
  }

  const loadMore = () => {
    setRefreshing(true)
    setPage(page + 1)
  }

  const refreshList = () => {
    setRefreshing(true)
    setPage(1)
  }

  return (
    <Container>
      <Header>
        <Logo source={LogoImage} />
        <HeaderContent>
          Total de
          <TextBold> {total} casos</TextBold>
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
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        onRefresh={refreshList}
        refreshing={refreshing}
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

Incidents.propTypes = {
  // route: PropTypes.func,
}

Incidents.defaultProps = {
  // route: '',
}

export default Incidents
