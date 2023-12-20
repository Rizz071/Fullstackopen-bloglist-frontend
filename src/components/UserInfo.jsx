const UserInfo = ({ user, setUser }) => {

    const handleLogout = event => {
        window.localStorage.removeItem('loggedBlogsAppUser')
        setUser(null)
    }

    let current_username = ''

    if (user) {

        const inline_style = {
            display: "flex",
            alignItems: "baseline"
        }

        return (
            <div style={inline_style} >
                <p>{current_username} logged in&nbsp;</p>
                <button onClick={handleLogout}> Logout </button>
            </div >
        )
    }
}


export default UserInfo