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

export { Container, Header, Logo, HeaderContent, TextBold }
