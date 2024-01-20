import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'
import { login } from '../reducers/sessionUserReducer'

const LoginForm = ({ username, setUsername, password, setPassword }) => {
    const dispatch = useDispatch()


    const handleLogin = async (event) => {
        event.preventDefault()

        const result = await dispatch(login({ username, password }))


        setUsername('')
        setPassword('')

        if (result?.response.data.error) {
            dispatch(showNotification(result.response.data.error))
            console.log(result)
            return
        }

        dispatch(showNotification(`Good day, ${username}!`))
    }


    return (
        <form onSubmit={handleLogin} >

            <table>
                <tbody>
                    <tr>
                        <td>
                            Username
                        </td>
                        <td>
                            <input
                                type='text'
                                value={username}
                                name='Username'
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password
                        </td>
                        <td>
                            <input
                                type='password'
                                value={password}
                                name='Password'
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <button id='login-button' style={{ marginTop: '5px' }} type='submit'>Login</button>
        </form >
    )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
}


export default LoginForm