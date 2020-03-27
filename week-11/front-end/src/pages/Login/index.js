import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import { FiLogIn } from 'react-icons/fi'

// Styled Components
import { Container, SectionForm, Image } from './styles'

// Images
import heroesImg from '../../assets/images/heroes.png'
import logoImg from '../../assets/images/logo.svg'

const Login = () => {
  return (
    <>
      <Container>
        <SectionForm>
          <Image src={logoImg} alt="Be The Hero"></Image>
          <form>
            <h1>Faça seu Login</h1>
            <input placeholder="Sua ID"></input>
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
