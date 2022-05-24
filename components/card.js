import styled from '@emotion/styled'

const CardStyle = styled.div`
  position: relative;
  height: ${props => props.h};
  border-radius: 0.25rem;
  width: ${props => props.w};
  border: solid 0.0625rem #000;
  transition: all 0.14s ease-out;
  text-align: ${props => props.textAlign};
  .card-body {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }

  ${props =>
    props.showShadow === 'true' &&
    `
    box-shadow: 0.25rem 0.25rem #000;
    transform: translate(-0.25rem,-0.25rem);
  `}
`

const Card = ({
  children,
  h = 'auto',
  w = '100%',
  showShadow = false,
  textAlign = 'left'
}) => {
  return (
    <CardStyle
      h={h}
      w={w}
      showShadow={showShadow.toString()}
      textAlign={textAlign}
    >
      <div className="card-body">{children}</div>
    </CardStyle>
  )
}

export default Card
