import axios from 'axios'
const baseUrl = '/api/blogs'


let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
  console.log('processed token: ', token)
}

const getAll = async (setUpdateFlag) => {
  const request = await axios.get(baseUrl, { headers: { Authorization: token } })
  return request.data
}

const createBlog = async (title, author, url, setUpdateFlag) => {
  const request = await axios.post(
    baseUrl,
    {
      'title': title,
      'author': author,
      'url': url,
      'likes': 0
    },
    {
      headers: { Authorization: token },
      'Content-Type': 'application/json'
    }
  )
  setUpdateFlag(Math.random)
  return request.data
}

const deleteBlog = async (id, setUpdateFlag) => {
  const request = await axios.delete(
    `${baseUrl}\\${id}`,
    {
      headers: { Authorization: token },
      'Content-Type': 'application/json'
    }
  )

  setUpdateFlag(Math.random)
  return request.data
}

export default { getAll, createBlog, deleteBlog, setToken }