import styled from 'styled-components/native'
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
const TextBold = styled.Text`
  font-weight: bold;
`
const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const ItemBox = styled.View`
  margin-top: 32px;
`
const ItemContainer = styled.View`
  margin: 15px 0 0px 0;
`
const Item = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`
const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
`
const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`
const ContactBox = styled(ItemBox)`
  margin-top: 0;
`
const HeroTitle = styled.Text`
  font-size: 18px;
  color: #13131a;
  line-height: 30px;
`
const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`
const ActionContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`

const ActionButton = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  margin: 5px;
  flex: 1;
  align-items: center;
  justify-content: center;
`
const ActionButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
`

export {
  Container,
  Header,
  Logo,
  HeaderContent,
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
}
