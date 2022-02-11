import homeIllustration from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import { StyledLink } from '../../components/Header'
import colors from '../../utils/style/colors'

export const HomeScreen = styled.div`
  display: flex;
  justify-content: center;
`
const HomeContainer = styled.div`
  margin: 30px;
  display: flex;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  flex-direction: row
  max-width: 1200px;
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
    text-align: center;
  }
`
const TextH1 = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`
const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <HomeScreen>
      <HomeContainer>
        <LeftCol>
          <TextH1>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </TextH1>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={homeIllustration} alt="home background" />
      </HomeContainer>
    </HomeScreen>
  )
}

export default Home
