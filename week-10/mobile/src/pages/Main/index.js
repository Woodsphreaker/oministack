import React, { useEffect, useState } from 'react'

// Proptypes
import propTypes from 'prop-types'

// Maps
import { Marker, Callout } from 'react-native-maps'

// location
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

// Api
import api from '../../services/api'

// Icons
import { MaterialIcons } from '@expo/vector-icons'

// Utils
import getCoords from '../../../utils/getCoords'

// Websocket
import { connect, disconnect, subscribeNewDev } from '../../services/socket'

// Styled Components
import {
  Map,
  Avatar,
  DevInfoContainer,
  DevName,
  DevBio,
  DevTechs,
  Form,
  Input,
  SubmitButton,
} from './styles'

const Main = props => {
  const [currentRegion, setCurrentRegion] = useState(null)
  const [devs, setDevs] = useState([])
  const [searchedTechs, setSearchedTechs] = useState('')

  useEffect(() => {
    loadInitialPosition()
  }, [])

  useEffect(() => {
    subscribeNewDev(dev => setDevs([...devs, dev]))
  }, [devs])

  const connectToWebSocket = () => {
    const { latitude, longitude } = currentRegion
    disconnect()
    connect({
      latitude,
      longitude,
      techs: searchedTechs,
    })
  }

  const loadInitialPosition = async () => {
    const { granted } = await requestPermissionsAsync()

    if (granted) {
      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      })

      const { latitude, longitude } = coords
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      })
    }
  }

  const setRegion = coords => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = coords

    setCurrentRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    })
  }

  const getDevs = async () => {
    try {
      const { latitude, longitude } = currentRegion
      const { data } = await api.get('/search', {
        params: {
          latitude,
          longitude,
          techs: searchedTechs,
        },
      })
      setDevs(data)
      connectToWebSocket()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegionChange = coords => {
    setRegion(coords)
    disconnect()
    // getDevs()
  }

  const handleNavigation = user => {
    const { navigation } = props
    navigation.navigate('Profile', { user })
  }

  const handleSubmit = () => {
    getDevs()
  }

  if (!currentRegion) {
    return false
  }

  return (
    <>
      <Map
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}>
        {devs.map(dev => (
          <Marker key={dev._id} coordinate={getCoords(dev)}>
            <Avatar
              source={{
                uri: `${dev.avatar_url}`,
              }}
            />

            <Callout onPress={() => handleNavigation(dev.github_username)}>
              <DevInfoContainer>
                <DevName>{dev.name}</DevName>
                <DevBio>{dev.bio}</DevBio>
                <DevTechs></DevTechs>
              </DevInfoContainer>
            </Callout>
          </Marker>
        ))}
      </Map>
      <Form>
        <Input
          onChangeText={setSearchedTechs}
          placeholder="Buscar devs por techs ..."></Input>
        <SubmitButton onPress={handleSubmit}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </SubmitButton>
      </Form>
    </>
  )
}

Main.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
}

export default Main
