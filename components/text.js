import styled from '@emotion/styled'

const TextStyle = styled.span`
  color: #4f4f4f;
`

export const Text = ({ children, ...rest }) => {
  return <TextStyle {...rest}>{children}</TextStyle>
}

const TitleStyle = styled.h4`
  font-size: 1.4rem;
  margin: 0;
  color: #4f4f4f;
  text-decoration: ${props => props.textDecoration};

  ${props =>
    props.hoverLink === 'true' &&
    `
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `};
`

export const Title = ({
  children,
  textDecoration = 'none',
  hoverLink = false,
  ...rest
}) => {
  return (
    <TitleStyle
      hoverLink={hoverLink.toString()}
      textDecoration={textDecoration}
      {...rest}
    >
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

const SmallStyle = styled.span`
  color: #7f7f7f;
  font-size: 14px;
`

export const Small = ({ children }) => {
  return <SmallStyle>{children}</SmallStyle>
}

export default Text
