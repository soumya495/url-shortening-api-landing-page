import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/styled/GlobalStyles'
import { theme } from '../components/styled/Theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={true}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
