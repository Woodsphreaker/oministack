import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import Constants from 'expo-constants'

const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 10px 0 10px;
  background: #eee;
`
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.Image.attrs((props) => {
  return {
    source: props.source,
  }
})``

const HeaderContent = styled.Text`
  font-size: 15px;
  color: #737380;
`
const Title = styled.Text`
  font-size: 30px;
  margin: 30px 0 16px;
  color: #13131a;
`
const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`
const TextBold = styled.Text`
  font-weight: bold;
`
const IncidentsList = styled(FlatList)`
  margin-top: 32px;
`
const IncidentItem = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`
const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
`
const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`
const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const DetailsButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
`
export {
  Container,
  Header,
  Logo,
  HeaderContent,
  Title,
  Description,
  TextBold,
  IncidentsList,
  IncidentItem,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
}
