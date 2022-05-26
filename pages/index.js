import Header from '../components/Header'
import StatsSection from '../components/StatsSection'
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
    </>
  )
}
