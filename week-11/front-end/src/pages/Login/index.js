import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// Api
import api from '../../services/api'

// Icons
import { FiLogIn } from 'react-icons/fi'

// Styled Components
import { Container, SectionForm, Image } from './styles'

// Images
import heroesImg from '../../assets/images/heroes.png'
import logoImg from '../../assets/images/logo.svg'

const Login = () => {
  const [id, setID] = useState('')
  const history = useHistory()

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    try {
      const {
        data: { ong },
      } = await api.post('/session', { id })
      if (ong) {
        localStorage.setItem(
          'ongData',
          JSON.stringify({ ong: ong.name, ongID: id })
        )
        history.push('/profile')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container>
        <SectionForm>
          <Image src={logoImg} alt="Be The Hero"></Image>
          <form onSubmit={handleSubmit}>
            <h1>Faça seu Login</h1>
            <input
              onChange={(ev) => setID(ev.target.value)}
              placeholder="Sua ID"
            ></input>
            <button type="submit">Entar</button>
            <Link to="/register">
              <FiLogIn size={16} color="#e02041" />
              Não Tenho cadastro
            </Link>
          </form>
        </SectionForm>

        <Image src={heroesImg} alt="Heroes"></Image>
      </Container>
    </>
  )
}

export default Login
