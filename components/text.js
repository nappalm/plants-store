import styled from '@emotion/styled'

const TextStyle = styled.span`
  color: #4f4f4f;
`

export const Text = ({ children, ...rest }) => {
  return <TextStyle {...rest}>{children}</TextStyle>
}

const TitleStyle = styled.h4`
  font-size: 1.2rem;
  margin: 0;
  color: #4f4f4f;
  text-decoration: ${props => props.textDecoration};
`

export const Title = ({ children, textDecoration = 'none', ...rest }) => {
  return (
    <TitleStyle textDecoration={textDecoration} {...rest}>
      {children}
    </TitleStyle>
  )
}

const ParagraphStyle = styled.p`
  color: #4f4f4f;
  &.secondary {
    color: #9d9d9d;
  }
`

export const Paragraph = ({ children, ...rest }) => {
  return <ParagraphStyle {...rest}>{children}</ParagraphStyle>
}

const OfferStyle = styled.span`
  border: 1px solid #000;
  border-radius: 1rem;
  background-color: #000;
  color: white;
  padding: 0.2rem 0.5rem;

  ${props =>
    props.position === 'right-top' &&
    `
    position: absolute;
    right: 1rem;
    top: 1rem;
  `}
`

export const Offer = ({ position = 'right-top' }) => {
  return <OfferStyle position={position}>Offer</OfferStyle>
}

export default Text
