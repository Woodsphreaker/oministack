import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// API
import api from '../../services/api'

// Styled Components
import {
  Container,
  Content,
  Image,
  SectionDescription,
  SectionForm,
  Input,
  Textarea,
} from './styles'

// Icons
import { FiArrowLeft } from 'react-icons/fi'

// Images
import logoImg from '../../assets/images/logo.svg'

const Incident = () => {
  const { ongID = '' } = JSON.parse(localStorage.getItem('ongData'))

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const history = useHistory()
  const handleSubmit = async (ev) => {
    ev.preventDefault()

    const data = {
      title,
      description,
      value,
    }

    try {
      await api.post('/incident', data, {
        headers: {
          Authorization: ongID,
        },
      })

      history.push('/profile')
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
            <h1>Cadastrar Novo Caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um herói para
              resolver isso
            </p>

            <Link to="/profile">
              <FiArrowLeft size={16} color="#e02041" />
              Voltar para home
            </Link>
          </SectionDescription>
          <SectionForm>
            <form onSubmit={handleSubmit}>
              <Input
                onChange={(ev) => setTitle(ev.target.value)}
                value={title}
                type="text"
                placeholder="Titulo do Caso"
              />
              <Textarea
                onChange={(ev) => setDescription(ev.target.value)}
                value={description}
                placeholder="Descrição"
              />
              <Input
                onChange={(ev) => setValue(ev.target.value)}
                value={value}
                type="text"
                placeholder="Valor em reais"
              />
              <button type="submit">Cadastrar</button>
            </form>
          </SectionForm>
        </Content>
      </Container>
    </>
  )
}

export default Incident
