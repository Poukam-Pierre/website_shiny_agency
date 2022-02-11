import colors from '../../utils/style/colors'
import errorImg from '../../assets/404.svg'
import styled from 'styled-components'

const ErroImg = styled.img`
  max-width: 800px;
`
const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
`
const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle> Oups.... </ErrorTitle>
      <ErroImg src={errorImg} alt="Il semblerai qu'il y ait une erreur" />
      <ErrorSubtitle> Il semblerai qu'il y ait un probleme </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
