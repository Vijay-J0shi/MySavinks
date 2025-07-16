import React, { useContext, useEffect, useState } from 'react'
import { authDataContext } from '../Context/AuthContext'
import { userDataContext } from '../Context/UserContext'
import { addBookmark, deleteBookmark, getBookmarks } from '../utils/bookmarkApi'
import BookmarkCard from '../components/BookmarkCard'
import { toast } from 'react-toastify'

export const Home = () => {
  const { serverUrl, loading, setLoading } = useContext(authDataContext)
  const { userData } = useContext(userDataContext)
  const [url, setUrl] = useState("")
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getBookmarks(serverUrl)
        setBookmarks(data)
      } catch (err) {
        console.log(err)
      }
    }
    load()
  }, [serverUrl])

  const handleAdd = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const newBm = await addBookmark(url, serverUrl)
      setBookmarks([newBm, ...bookmarks])
      setUrl("")
      toast.success("Bookmark added!")
    } catch (err) {
      console.log(err)
      toast.error("Add failed")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteBookmark(id, serverUrl)
      setBookmarks(bookmarks.filter((bm) => bm._id !== id))
      toast.success("Deleted!")
    } catch (err) {
      console.log(err)
      toast.error("Delete failed")
    }
  }

  if (!userData) return <p className="p-6 text-lg text-red-600 text-red-50:hsl[19,20%,12%]">Please log in to continue.</p>

  return (
    <div className="p-6 w-screen mx-auto ">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userData.name}</h1>

      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="url"
          placeholder="Enter a link to save"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="flex-1 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bookmarks.map((bm) => (
          <BookmarkCard key={bm._id} data={bm} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}
