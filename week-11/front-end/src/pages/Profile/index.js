import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

// api
import api from '../../services/api'

import logoImg from '../../assets/images/logo.svg'

// Styled Components
import { Container, Header, Image, List } from './styles'

const Profile = () => {
  const { ong = 'OngName', ongID = '' } = JSON.parse(
    localStorage.getItem('ongData')
  )

  const [incidents, setIncidents] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getIncidentes = async () => {
      const response = await api.get('/profile/', {
        headers: {
          Authorization: ongID,
        },
      })

      setIncidents(response.data || [])
    }

    getIncidentes()
  }, [ongID])

  const handleDeleteIncident = (id) => async (ev) => {
    try {
      await api.delete(`/incident/${id}`, {
        headers: {
          Authorization: ongID,
        },
      })

      setIncidents(incidents.filter((el) => el.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('ongData')
    history.push('/')
  }

  return (
    <>
      <Container>
        <Header>
          <Image src={logoImg} alt="Be The Hero" />
          <span>Bem vinda, {ong}</span>

          <Link to="/incidents/new">Cadastrar novo caso</Link>
          <button type="button" onClick={handleLogout}>
            <FiPower size={18} color="#e02041" />
          </button>
        </Header>

        <h1>Casos cadastrados</h1>

        <List>
          {incidents.map((el, idx) => (
            <li key={el.id}>
              <strong>Caso:</strong>
              <p>{el.title}</p>

              <strong>Descrição:</strong>
              <p>{el.description}</p>

              <strong>Valor:</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(el.value)}
              </p>

              <button type="button">
                <FiTrash2
                  size={20}
                  color="#a8a8b3"
                  onClick={handleDeleteIncident(el.id)}
                />
              </button>
            </li>
          ))}
        </List>
      </Container>
    </>
  )
}

export default Profile
