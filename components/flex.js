import styled from '@emotion/styled'

const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
  grid-gap: ${props => props.gap}rem;
  padding: ${props => props.p}rem;
`

const Flex = ({
  children,
  gap = 0,
  direction = 'column',
  align = 'start',
  p = 0
}) => {
  return (
    <FlexStyle gap={gap} p={p} direction={direction} align={align}>
      {children}
    </FlexStyle>
  )
}

export default Flex
