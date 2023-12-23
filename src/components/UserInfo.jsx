const UserInfo = ({ user, setUser }) => {

    const handleLogout = () => {
        window.localStorage.removeItem('loggedBlogsAppUser')
        setUser(null)
    }

    if (user) {

        const inline_style = {
            display: 'flex',
            alignItems: 'baseline',
            margin: '0 0 0 0',
            position: 'absolute',
            top: '10px'
        }

        return (
            <div style={inline_style} >
                <span><strong>{user.username}</strong> logged in&nbsp;</span>
                <button onClick={handleLogout}> Logout </button>
            </div >
        )
    }
}


export default UserInfo