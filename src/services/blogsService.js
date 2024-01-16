import axios from 'axios'
const baseUrl = '/api/blogs'


let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
  console.log('processed token: ', token)
}

const getAll = async (setUpdateFlag) => {


  const request = await axios.get(baseUrl, { headers: { Authorization: token } })

  request.data.sort((a, b) => {
    if (a.likes < b.likes) {
      return 1
    }
    if (a.likes > b.likes) {
      return -1
    }

    // names must be equal
    return 0
  })



  // console.log(request)
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
  if (window.confirm('Do you really want to delete blog?')) {
    const request = await axios.delete(
      `${baseUrl}\\${id}`,
      {
        headers: { Authorization: token },
        'Content-Type': 'application/json'
      }
    )
    setUpdateFlag(Math.random)
    return request.status
  }
  return null
}

const addLike = async (blog, setUpdateFlag) => {

  const blogObject = blog
  blogObject.likes += 1

  const request = await axios.put(
    `${baseUrl}\\${blog.id}`,
    blogObject,
    {
      headers: { Authorization: token },
      'Content-Type': 'application/json'
    }
  )

  setUpdateFlag(Math.random)
  return request.data
}

export default { getAll, createBlog, deleteBlog, addLike, setToken }