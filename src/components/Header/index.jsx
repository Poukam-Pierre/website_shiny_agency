import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import blackLogo from '../../assets/dark-logo.png'

export const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary}; `}
`

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`

const HomeLogo = styled.img`
  height: 70px;
`

function Header() {
  return (
    <HeaderNav>
      <Link to="/">
        <HomeLogo src={blackLogo} alt="logo shuny_agency" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/Freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </HeaderNav>
  )
}

export default Header
