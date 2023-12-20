import axios from 'axios'
const baseUrl = '/api/blogs'


let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
  console.log('processed token: ', token)
}


const getAll = () => {
  const request = axios.get(baseUrl, { headers: { Authorization: token } })
  return request.then(response => response.data)
}

export default { getAll, setToken }