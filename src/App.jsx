import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import BlogsList from './components/BlogsList'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'
import Togglable from './components/Togglable'
import { addSignedInUser, addBearer } from './reducers/sessionUserReducer'
import { useDispatch, useSelector } from 'react-redux'
import UsersList from './components/UsersList'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import DetailedUserInfo from './components/DetailedUserInfo'
import DetailedBlogInfo from './components/DetailedBlogInfo'


const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.sessionUser)


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogsAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(addSignedInUser(user))
      dispatch(addBearer(user))
    }
  }, [])

  return (
    <Router>
      {sessionUser.name && <UserInfo loggedUser={sessionUser} />}

      <h1 style={{ marginTop: '50px' }}>BLOGS Application</h1>

      <Notification message={message} />

      <Routes>

        <Route path="/users/:id" element={<DetailedUserInfo />} />
        <Route path="/blogs/:id" element={<DetailedBlogInfo />} />

        <Route path="/" element={
          <>
            {!sessionUser.name
              ? <Togglable buttonLabel='Login' >
                <LoginForm
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                />
              </Togglable>
              : <div>
                < BlogsList />
                <UsersList />
              </div>
            }
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App