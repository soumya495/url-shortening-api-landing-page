import { createGlobalStyle } from 'styled-components'
import bgCta from '../../assets/bg-boost-desktop.svg'
import bgMobCta from '../../assets/bg-boost-mobile.svg'

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

#stats{
  background-color: ${({ theme }) => theme.whiteShmoke};
}

#cta {
  background-image: url(${bgCta.src});
  background-size: cover;
  background-color: ${({ theme }) => theme.pmViolet};
  color: #fff;
  padding-block: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 0;
}

footer {
  padding-block: 3rem;
  background-color: ${({ theme }) => theme.ntDarkViolet};
  color: #fff;
}

@media (max-width: 600px) {
  #cta {
    background-image: url(${bgMobCta.src});
    background-position: center;
  }
}

`

export default GlobalStyle
