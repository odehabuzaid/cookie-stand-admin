import axios from 'axios'
import jwt from 'jsonwebtoken'
import useSWR from 'swr'
import { useAuth } from '../contexts/authintication'
export const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default function useResource() {
  const { tokens, logout } = useAuth()
  
  const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource)

  async function fetchResource(url) {
    if (!tokens) {
      return
    }

    try {
      const response = await axios.get(url, config())

      return response.data
    } catch (err) {
      handleError(error)
    }
  }

  async function createResource(info) {
    try {
      await axios.post(apiUrl, info, config())
      mutate() // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(error)
    }
  }

  async function deleteResource(id) {
    try {
      const url = apiUrl + id
      await axios.delete(url, config())
      mutate() // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(error)
    }
  }

  async function updateResource() {
    // STRETCH
    // Add ability for user to update an existing resource
  }

  // helper function to handle getting Authorization headers EXACTLY right
  function config() {
    return {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      }
    }
  }

  async function handleError(err) {
    console.error(err)
    if (err.messages[0].message == 'Token is invalid or expired') {
      const ref = jwt.decode(tokens.refresh)
      const response = await axios.post(tokenRefreshURL, { ref })
      tokens.access = response.data.access
    }
    logout()
  }

  return {
    resources: data,
    error,
    loading: tokens && !error && !data,
    createResource,
    deleteResource,
    updateResource
  }
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/
