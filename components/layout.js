import styled from '@emotion/styled'
import Flex from './flex'

import ShoppingCart from './icons/shopping-cart'
import Text, { Title } from './text'

const LayoutStyle = styled.div`
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 60rem;
  margin-top: 1rem;
  .content {
    margin-top: 1rem;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }

  .shopping-cart-preview {
    display: flex;
    align-items: center;
    grid-gap: 0.5rem;
  }

  .shopping-cart-counter {
    font-weight: 600;
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <div className="nav">
        <Flex>
          <Title>Plants Store</Title>
          <Text>
            This project is only a preview, it does not include functionality
          </Text>
        </Flex>
        <div className="shopping-cart-preview">
          <div className="shopping-cart-counter">0</div>
          <ShoppingCart />
        </div>
      </div>
      <div className="content">{children}</div>
    </LayoutStyle>
  )
}

export default Layout
