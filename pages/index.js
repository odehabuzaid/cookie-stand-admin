import { useAuth } from '../contexts/authintication';
import useResource from '../hooks/useResource';
import Login from './components/auth/LogIn';
import CookieStandAdmin from './components/CookieStandAdmin';
export default function Home() {
  const { user, login } = useAuth()
  // , logout
  const { resources, loading, createResource, deleteResource } = useResource()
  return (
    <>
      {user ? (
        <CookieStandAdmin
          stands={resources}
          loading={loading}
          onDelete={deleteResource}
          onCreate={createResource}
        />
      ) : (
        <>
          <Login login={login} />
        </>
      )}
    </>
  )
}
