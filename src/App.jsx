import { useState, useEffect } from 'react'



import LoginForm from './components/LoginForm'
import blogsService from './services/blogsService'
import BlogsList from './components/BlogsList'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'
import Togglable from './components/Togglable'

import { addSignedInUser } from './reducers/usersReducer'
import { useDispatch, useSelector } from 'react-redux'
import UsersList from './components/UsersList'
import { requestUsers } from './reducers/usersListReducer'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {

    const loggedUserJSON = window.localStorage.getItem('loggedBlogsAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      dispatch(addSignedInUser(user))
      blogsService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    dispatch(requestUsers())
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

      <UsersList />
    </div>
  )
}

export default App