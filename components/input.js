import styled from '@emotion/styled'

const InputStyle = styled.input`
  border: 2px solid black;
  outline: none;
  height: 1.8rem;
  font-size: 1.1rem;
  width: ${props => props.w};
`

const Input = ({ onChange, defaultValue, w = 'auto', ...rest }) => {
  return (
    <InputStyle
      w={w}
      onChange={onChange}
      defaultValue={defaultValue}
      {...rest}
    />
  )
}

export default Input
