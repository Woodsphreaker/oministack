import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import parseStringToArray from '../../utils/parseStringToArray'

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
  const [devs, setDevs] = useState([])
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [githubUsername, setGithuUserName] = useState('')
  const [techs, setTechs] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude)
        setLongitude(longitude)
      },
      err => console.log(err)
    )
  }, [])

  useEffect(() => {
    getDevs()
  }, [])

  const getDevs = async () => {
    try {
      const { data } = await api.get('/user')
      setDevs(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    addDev()
  }

  const addDev = async () => {
    try {
      const { data } = await api.post('/user', {
        githubUsername,
        techs,
        latitude,
        longitude,
      })
      alert('cadastrado com sucesso')
      setDevs([...devs, data])
    } catch (err) {
      const {
        response: {
          data: { error },
        },
      } = err
      alert(error)
    }

    setGithuUserName('')
    setTechs('')
  }

  return (
    <Container>
      <Sidebar>
        <strong>Cadastrar</strong>
        <form>
          <InputBlock>
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="username_github"
              value={githubUsername}
              onChange={e => setGithuUserName(e.target.value)}
              required
            ></input>
          </InputBlock>

          <InputBlock>
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            ></input>
          </InputBlock>

          <InputGroup>
            <InputBlock>
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                value={latitude}
                required
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </InputBlock>

            <InputBlock>
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                value={longitude}
                id="longitude"
                required
                onChange={e => setLongitude(e.target.value)}
              ></input>
            </InputBlock>
          </InputGroup>
          <SubmitButton onClick={handleSubmit}>Salvar</SubmitButton>
        </form>
      </Sidebar>
      <ListContainer>
        <List>
          {devs.map(dev => (
            <li key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.login} />
                <UserInfo>
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.toString()}</span>
                </UserInfo>
              </header>
              <p>{dev.bio}</p>
              <a href="https://github.com/Woodsphreaker">Acessar Perfil</a>
            </li>
          ))}
        </List>
      </ListContainer>
    </Container>
  )
}

export default Main
