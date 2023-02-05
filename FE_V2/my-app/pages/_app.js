import '@/styles/globals.css'
import Layout from './../src/js/layout/Layout';

  
function App({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}
  
export default App