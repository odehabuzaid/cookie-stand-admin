import axios from 'axios'
import jwt from 'jsonwebtoken'
import { createContext, useContext, useState } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_AUTH_URL
const tokenUrl = baseUrl

const AuthContext = createContext()

export function useAuth() {
  const auth = useContext(AuthContext)
  if (!auth) throw new Error('AuthProvider!')
  return auth
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout
  })

  async function login(username, password) {
    const response = await axios.post(tokenUrl, { username, password })
    const decodedAccess = jwt.decode(response.data.access)
    const newState = {
      tokens: response.data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id
      }
    }
    setState((prevState) => ({ ...prevState, ...newState }))
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null
    }
    setState((prevState) => ({ ...prevState, ...newState }))
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  )
}
