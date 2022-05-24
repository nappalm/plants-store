import Layout from '../components/layout'
import Style from '../components/_style'

import StoreContext from '../app/storeContext'

const Website = ({ Component, pageProps, router }) => {
  return (
    <StoreContext>
      <Layout>
        <Style />
        <Component {...pageProps} key={router.route} />
      </Layout>
    </StoreContext>
  )
}

export default Website
