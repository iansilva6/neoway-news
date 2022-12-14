import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  min-height: 100%;
  background-color: #e7e7e7;
}
body {
  font-family: 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#root {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: underline;
  }
}
`

export default GlobalStyle