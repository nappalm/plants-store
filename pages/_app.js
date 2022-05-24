import Layout from '../components/layout'
import Style from '../components/_style'

const Website = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Style />
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default Website
