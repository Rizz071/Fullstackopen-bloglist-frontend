import loginService from "../services/loginService"
import blogsService from "../services/blogsService"

const LoginForm = ({ username, setUsername, password, setPassword, setUser, setMessage }) => {

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({ username, password })

            window.localStorage.setItem(
                'loggedBlogsAppUser', JSON.stringify(user)
            )

            blogsService.setToken(user.token)

            setUser(user)

            setUsername('')
            setPassword('')

        } catch (exception) {
            setMessage('Wrong credentials')
            console.log(exception)
            setTimeout(() => { setMessage(null) }, 5000)
        }
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
                                type="text"
                                value={username}
                                name="Username"
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
                                type="password"
                                value={password}
                                name="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <button style={{ marginTop: "5px" }} type="submit">Login</button>
        </form >
    )
}

export default LoginForm