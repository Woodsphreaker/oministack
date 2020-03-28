import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html, body, #root {
  min-height: 100%
}
body {
  font-size: 400 14px;
  font-family: Roboto, sans-serif;
  background-color: #f0f0f0;
  -webkit-font-smoothing: antialiased !important;
}
body, input, textarea, button {
  color: #222;
  font-size: 400 18px;
  font-family: Roboto, sans-serif;
}
button {
  cursor: pointer !important;
}

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px
}

form textarea {
  width: 100%;
  min-height: 140px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;
}

form button {
    width: 100%;
    height: 60px;
    background-color: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

    :hover {
      filter: brightness(90%);
    }
  }

`
