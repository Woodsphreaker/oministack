import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SectionDescription = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    :hover {
      opacity: 0.8;
    }

    svg {
      margin: 0 8px 0 0;
    }
  }
`

const SectionForm = styled.section`
  width: 100%;
  max-width: 450px;

  form {
    input {
      margin-top: 8px;
    }

    div {
      display: flex;
      input + input {
        width: 80px;
        margin-left: 8px;
      }
    }
  }
`

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  placeholder: props.placeholder || '',
}))`
  width: ${(props) => props.width || '100%'};
`

const Image = styled.img.attrs((props) => {
  return {
    src: props.src,
    alt: props.alt,
  }
})``

export { Container, Content, Image, Input, SectionDescription, SectionForm }
