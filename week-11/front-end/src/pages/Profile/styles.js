import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    height: 60px;
    background-color: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
    margin-left: auto;
    margin-top: 0;

    :hover {
      filter: brightness(90%);
    }
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdc;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    :hover {
      border-color: #999;
    }
  }
`

const Image = styled.img.attrs((props) => {
  return {
    src: props.src,
    alt: props.alt,
  }
})``

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: none;

      :hover {
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`

export { Container, Header, Image, List }
