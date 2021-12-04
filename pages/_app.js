import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../contexts/authintication'
import '../pages/components/utils/loading.css'
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
