import Head from 'next/head'
import { useAuth } from '../contexts/authintication'
import useResource from '../hooks/useResource'
import Login from './components/auth/LogIn'
import CookieStandAdmin from './components/CookieStandAdmin'
export default function Home() {
  const { user, login, logout } = useAuth()
  const { resources, loading, createResource, deleteResource } = useResource()
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      {user ? (
        <CookieStandAdmin
          stands={resources}
          loading={loading}
          onDelete={deleteResource}
          onCreate={createResource}
          logout={logout}
        />
      ) : (
        <>
          <Login login={login} />
        </>
      )}
    </>
  )
}
