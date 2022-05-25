import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/styled/GlobalStyles'
import { theme } from '../components/styled/Theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
