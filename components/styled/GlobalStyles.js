import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    width: 100%;
    min-height: 100vh;
    font-size: 1.125rem;
}
`

export default GlobalStyle
