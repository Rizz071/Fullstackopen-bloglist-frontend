import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import blogsService from './services/blogsService'
import BlogsList from './components/BlogsList'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState([])


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogsAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])



  return (
    <div>
      <h1>BLOGS Application</h1>

      <Notification message={errorMessage} />

      <UserInfo
        user={user}
        setUser={setUser}
      />

      {user === null
        ? <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          user={user}
          setUser={setUser}
          setErrorMessage={setErrorMessage}
        />
        : <BlogsList
          user={user}
          blogs={blogs}
          setBlogs={setBlogs}
          setErrorMessage={setErrorMessage}
        />
      }

    </div>
  )
}

export default App