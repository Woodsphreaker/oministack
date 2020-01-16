import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Sidebar = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`

const InputBlock = styled.div`
  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }

  & + div {
    margin-top: 20px;
  }
`
const InputGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;

  > div {
    margin-top: 0;
  }
`
const SubmitButton = styled.button.attrs(() => ({
  type: 'submit',
}))`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7159c1;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transition: background 0.5s;

  &:hover {
    background: #6931ca;
  }
`

const ListContainer = styled.div`
  flex: 1;
  margin-left: 30px;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30px;
  }
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  li {
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    padding: 20px;

    header {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
      }
    }

    > p {
      color: #666;
      font-size: 14px;
      line-height: 20px;
      margin: 10px;
    }

    > a {
      color: #8e4dff;
      font-size: 14px;
      text-decoration: none;
      margin: 10px;

      &:hover {
        color: #5a26a6;
      }
    }
  }
`

const UserInfo = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`

export {
  Container,
  Sidebar,
  ListContainer,
  List,
  InputBlock,
  InputGroup,
  SubmitButton,
  UserInfo,
}
