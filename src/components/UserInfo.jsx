import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeSignedInUser } from '../reducers/sessionUserReducer'

const UserInfo = ({ loggedUser }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
        dispatch(removeSignedInUser())
    }

    if (loggedUser) {

        const inline_style = {
            display: 'flex',
            alignItems: 'baseline',
            margin: '0 0 0 0',

        }

        return (
            <div style={inline_style} >
                <span><strong>{loggedUser.name}</strong> logged in&nbsp;</span>
                <button onClick={handleLogout}> Logout </button>
            </div >
        )
    }
}


export default UserInfo