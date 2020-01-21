import styled from 'styled-components/native'

// Maps
import MapView from 'react-native-maps'

const Map = styled(MapView)`
  flex: 1;
`
const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`

const DevInfoContainer = styled.View`
  width: 250px;
`
const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`
const DevBio = styled.Text`
  margin-top: 5px;
  color: #666;
`
const DevTechs = styled.Text`
  margin-top: 5px;
`

export { Map, Avatar, DevInfoContainer, DevName, DevBio, DevTechs }
