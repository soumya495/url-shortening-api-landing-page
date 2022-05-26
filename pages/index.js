import FooterWrapper from '../components/FooterWrapper'
import Header from '../components/Header'
import StatsSection from '../components/StatsSection'
import { CtaBtn } from '../components/styled/CtaBtn'
import { StyledContainer } from '../components/styled/MainContainer'

export default function Home() {
  return (
    <>
      <StyledContainer>
        <Header />
      </StyledContainer>
      <section id='stats'>
        <StyledContainer>
          <StatsSection />
        </StyledContainer>
      </section>
      <section id='cta'>
        <h2>Boost Your links today</h2>
        <CtaBtn radius='2rem'>Get Started</CtaBtn>
      </section>
      <footer>
        <StyledContainer>
          <FooterWrapper />
        </StyledContainer>
      </footer>
    </>
  )
}
