import axios from "axios"

export const getBookmarks = async (serverUrl) => {
  const res = await axios.get(`${serverUrl}/api/bookmark`, {
    withCredentials: true,
  })
  return res.data
}

export const addBookmark = async (url, serverUrl) => {
  const res = await axios.post(
    `${serverUrl}/api/bookmark`,
    { url },
    { withCredentials: true }
  )
  return res.data
}

export const deleteBookmark = async (id, serverUrl) => {
  const res = await axios.delete(`${serverUrl}/api/bookmark/${id}`, {
    withCredentials: true,
  })
  return res.data
}
