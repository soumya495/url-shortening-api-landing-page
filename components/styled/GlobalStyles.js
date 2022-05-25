import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Poppins', sans-serif;
}

html, body {
  overflow-x:hidden 
} 

body{
    width: 100%;
    min-height: 100vh;
    font-size: 1.125rem;
    overflow-x: hidden;
}
`

export default GlobalStyle
