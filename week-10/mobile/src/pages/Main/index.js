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

  useEffect(() => {
    loadInitialPosition()
  }, [])

  useEffect(() => {
    getDevs()
  }, [])

  const loadInitialPosition = async () => {
    const { granted } = await requestPermissionsAsync()

    if (granted) {
      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      })

      const { latitude, longitude } = coords
      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      })
    }
  }

  const getDevs = async () => {
    const { data } = await api.get('/user')
    setDevs(data)
  }

  if (!currentRegion) {
    return false
  }

  const handleNavigation = user => {
    const { navigation } = props
    navigation.navigate('Profile', { user })
  }

  const handleSubmit = () => {}

  return (
    <>
      <Map initialRegion={currentRegion}>
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{ latitude: -23.5427793, longitude: -46.5745167 }}>
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
        <Input placeholder="Buscar devs por techs ..."></Input>
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
