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

const Form = styled.View`
  flex-direction: row;
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
`

const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: '#999',
  autoCapitalize: 'words',
  autoCorrect: false,
}))`
  flex: 1;
  height: 50px;
  background-color: #fff;
  border-radius: 25px;
  padding: 0 20px;
  color: #333;
  font-size: 16px;
  box-shadow: 10px 10px 10px #000;
`

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #7159c1;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`

export {
  Map,
  Avatar,
  DevInfoContainer,
  DevName,
  DevBio,
  DevTechs,
  Form,
  Input,
  SubmitButton,
}
