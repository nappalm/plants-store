import styled from '@emotion/styled'
import { useState } from 'react'

const CounterStyle = styled.div`
  display: flex;
  grid-gap: 1rem;
  align-items: center;

  button {
    font-size: 1.5rem;
    border: none;
    background-color: #f2f2f2;
    padding: 0.4rem 0.7rem;
    border-radius: 6px;
    cursor: pointer;
  }

  span {
    font-size: 1.5rem;
  }
`

const Counter = () => {
  const [number, setNumber] = useState(1)

  const handleAdd = () => {
    setNumber(prev => {
      return prev + 1
    })
  }

  const handleRemove = () => {
    setNumber(prev => {
      return prev - 1
    })
  }

  return (
    <CounterStyle>
      <button disabled={number === 1} onClick={handleRemove}>
        -
      </button>
      <span>{number}</span>
      <button onClick={handleAdd}>+</button>
    </CounterStyle>
  )
}

export default Counter
