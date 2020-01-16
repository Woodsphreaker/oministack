import React from 'react'

// Styled Components
import {
  Container,
  Sidebar,
  List,
  ListContainer,
  InputBlock,
  InputGroup,
  SubmitButton,
  UserInfo,
} from './styles'

const Main = () => {
  return (
    <Container>
      <Sidebar>
        <strong>Cadastrar</strong>
        <form>
          <InputBlock>
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required></input>
          </InputBlock>

          <InputBlock>
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </InputBlock>

          <InputGroup>
            <InputBlock>
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </InputBlock>

            <InputBlock>
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </InputBlock>
          </InputGroup>

          <SubmitButton>Salvar</SubmitButton>
        </form>
      </Sidebar>
      <ListContainer>
        <List>
          {[...Array(5).keys()].map(el => (
            <li key={el}>
              <header>
                <img
                  src="https://avatars1.githubusercontent.com/u/22459141?s=460&v=4"
                  alt="Woods"
                />
                <UserInfo>
                  <strong>Carlo Enrico</strong>
                  <span>ReactJS, React Native, NodeJS</span>
                </UserInfo>
              </header>
              <p>
                Almost full time developer, everlasting student and passionate
                about web development and the entire ecosystem
              </p>
              <a href="https://github.com/Woodsphreaker">Acessar Perfil</a>
            </li>
          ))}
        </List>
      </ListContainer>
    </Container>
  )
}

export default Main
