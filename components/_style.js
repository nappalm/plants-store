import { Global, css } from '@emotion/react'

const Style = () => {
  return (
    <Global
      styles={css`
        html {
          font-family: 'Urbanist', sans-serif;
          font-weight: 400;
          font-size: 15px;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          box-sizing: border-box;
        }
      `}
    />
  )
}

export default Style
