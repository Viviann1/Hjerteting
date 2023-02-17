import Navbar from '@/components/navbar';
import '../styles/globals.css';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '100',
})

export default function App({ Component, pageProps }) {
  return (
  <>
  <main className={montserrat.className}>
  <Navbar /> 
  <Component {...pageProps} />
  </main>
  </>
  );
}
