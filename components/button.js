import styled from '@emotion/styled'
import { css } from '@emotion/react'

const hoverStyle = css`
  transform: translate(-0.25rem, -0.25rem);
  box-shadow: 0.25rem 0.25rem #000;
  color: white;
  background-color: #0093f5;
`

const ButtonStyle = styled.button`
  width: ${props => props.w};
  background-color: #000;
  border: solid 0.0625rem #000;
  border-radius: 0.25rem;
  color: #fff;

  outline: none;
  font-size: 1.1rem;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  cursor: pointer;
  transition: all 0.14s ease-out;

  margin: ${props => props.m}rem;
  margin-bottom: ${props => props.mb}rem;
  margin-top: ${props => props.mt}rem;

  &:hover {
    ${hoverStyle};
  }

  ${props => props.focused === 'true' && hoverStyle};
`

const Button = ({
  children,
  variant = 'solid',
  w = 'auto',
  m = 0,
  mb,
  mt,
  focused = false,
  ...rest
}) => {
  return (
    <ButtonStyle
      focused={focused.toString()}
      variant={variant}
      w={w}
      m={m}
      mb={mb}
      mt={mt}
      {...rest}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button
