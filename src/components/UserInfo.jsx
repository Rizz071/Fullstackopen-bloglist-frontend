import { useSelector } from 'react-redux'

const UserInfo = ({ user, setUser }) => {
    const loggedUsers = useSelector(state => state.users)

    const handleLogout = () => {
        window.localStorage.removeItem('loggedBlogsAppUser')
        setUser(null)
    }

    if (user) {


        const inline_style = {
            display: 'flex',
            alignItems: 'baseline',
            margin: '0 0 0 0',

        }

        return (
            <div style={inline_style} >
                <span><strong>{loggedUsers.map(user => user.name)}</strong> logged in&nbsp;</span>
                <button onClick={handleLogout}> Logout </button>
            </div >
        )
    }
}


export default UserInfo