import loginService from "../services/loginService"
import blogsService from "../services/blogsService"

const LoginForm = ({ username, setUsername, password, setPassword, user, setUser, setErrorMessage }) => {

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
            setErrorMessage('Wrong credentials')
            console.log(exception)
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }


    return (
        <form onSubmit={handleLogin} >
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form >
    )
}

export default LoginForm