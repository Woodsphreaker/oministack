import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/images/logo.svg'

// Styled Components
import { Container, Header, Image, List } from './styles'

const Profile = () => {
  return (
    <>
      <Container>
        <Header>
          <Image src={logoImg} alt="Be The Hero" />
          <span>Bem vinda, APAD</span>

          <Link to="/incidents/new">Cadastrar novo caso</Link>
          <button type="button">
            <FiPower size={18} color="#e02041" />
          </button>
        </Header>

        <h1>Casos cadastrados</h1>

        <List>
          <li>
            <strong>Caso:</strong>
            <p>Caso teste</p>

            <strong>Descrição:</strong>
            <p>Lorem Ipsum</p>

            <strong>Valor:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>Caso:</strong>
            <p>Caso teste</p>

            <strong>Descrição:</strong>
            <p>Lorem Ipsum</p>

            <strong>Valor:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>Caso:</strong>
            <p>Caso teste</p>

            <strong>Descrição:</strong>
            <p>Lorem Ipsum</p>

            <strong>Valor:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>Caso:</strong>
            <p>Caso teste</p>

            <strong>Descrição:</strong>
            <p>Lorem Ipsum</p>

            <strong>Valor:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </List>
      </Container>
    </>
  )
}

export default Profile
