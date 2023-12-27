import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import blogsService from './services/blogsService'
import BlogsList from './components/BlogsList'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'
import Togglable from './components/Togglable'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')


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

      <UserInfo
        user={user}
        setUser={setUser}
      />

      <h1 style={{ marginTop: '50px' }}>BLOGS Application</h1>

      <Notification message={message} />

      {user === null
        ? <Togglable buttonLabel='Login' >
          <LoginForm
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            setUser={setUser}
            setMessage={setMessage}
          />
        </Togglable>
        : <BlogsList
          user={user}
          setMessage={setMessage}
        />
      }

    </div>
  )
}

export default App