//  global css
import '../styles/globals.css'

//  global state
import { RecoilRoot } from 'recoil';

//  components
import Background from '../components/background/background'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

//  types
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>

      <Background />

      <Header/>

      <Component {...pageProps} />

      <Footer/>

    </RecoilRoot>
  )
}
