import React from 'react'
import { Link } from 'react-router-dom'

// Styled Components
import {
  Container,
  Content,
  Image,
  SectionDescription,
  SectionForm,
  Input,
} from './styles'

// Icons
import { FiArrowLeft } from 'react-icons/fi'

// Images
import logoImg from '../../assets/images/logo.svg'

const Register = () => {
  return (
    <>
      <Container>
        <Content>
          <SectionDescription>
            <Image src={logoImg} alt="Be The Hero" />
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem casos da sua ONG
            </p>

            <Link to="/">
              <FiArrowLeft size={16} color="#e02041" />
              Voltar para o logon
            </Link>
          </SectionDescription>
          <SectionForm>
            <form>
              <Input type="text" placeholder="Nome da Ong" />
              <Input type="email" placeholder="E-mail" />
              <Input type="text" placeholder="WhatsApp" />
              <div>
                <Input type="text" placeholder="Cidade" />
                <Input type="text" placeholder="UF" width="80px" />
              </div>

              <button>Cadastrar</button>
            </form>
          </SectionForm>
        </Content>
      </Container>
    </>
  )
}

export default Register
