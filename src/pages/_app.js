import '@/styles/globals.css';
import "swiper/css";
import "swiper/css/navigation";
import {Analytics} from '@vercel/analytics/react'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics/>
    </>
  )
}
