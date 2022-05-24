import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useContext } from 'react'
import { StoreContext } from '../app/storeContext'
import Flex from './flex'

import ShoppingCart from './icons/shopping-cart'
import Text, { Title } from './text'

const centerContent = css`
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 60rem;
`

const LayoutStyle = styled.div`
  margin-top: 1rem;
  ${centerContent};

  .content {
    margin-top: 5rem;
  }

  .nav {
    border-bottom: 1px solid #000;
    z-index: 1;
    background: white;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;

    &-content {
      ${centerContent};
      min-height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 1rem;
      padding-right: 1rem;
    }
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
  const { items } = useContext(StoreContext)

  return (
    <LayoutStyle>
      <Head>
        <meta name="description" content="Plants Store" />
        <meta name="author" content="Manuel Morales" />
        <meta name="author" content="ppjuan_94@hotmail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Plants Store</title>
      </Head>
      <div className="nav">
        <div className="nav-content">
          <Flex>
            <Title>Plants Store</Title>
            <Text>
              This project is only a preview, it does not include functionality
            </Text>
          </Flex>
          <div className="shopping-cart-preview">
            <div className="shopping-cart-counter">{items.length}</div>
            <ShoppingCart />
          </div>
        </div>
      </div>
      <div className="content">{children}</div>
    </LayoutStyle>
  )
}

export default Layout
