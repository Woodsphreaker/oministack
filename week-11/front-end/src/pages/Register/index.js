import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// Api
import api from '../../services/api'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()
  const handleSubmit = async (ev) => {
    ev.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    }

    try {
      const {
        data: { id },
      } = await api.post('/ong', data)
      console.log({ id })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

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
            <form onSubmit={handleSubmit}>
              <Input
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                type="text"
                placeholder="Nome da Ong"
              />
              <Input
                onChange={(ev) => setEmail(ev.target.value)}
                value={email}
                type="email"
                placeholder="E-mail"
              />
              <Input
                onChange={(ev) => setWhatsapp(ev.target.value)}
                value={whatsapp}
                type="text"
                placeholder="WhatsApp"
              />
              <div>
                <Input
                  onChange={(ev) => setCity(ev.target.value)}
                  value={city}
                  type="text"
                  placeholder="Cidade"
                />
                <Input
                  value={uf}
                  onChange={(ev) => setUf(ev.target.value)}
                  type="text"
                  placeholder="UF"
                  width="80px"
                />
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
