import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SectionForm = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
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
  }
`
const Image = styled.img.attrs((props) => {
  return {
    src: props.src,
    alt: props.alt,
  }
})``

export { Container, SectionForm, Image }
