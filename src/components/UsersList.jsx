import { requestUsers } from '../reducers/usersListReducer'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


const UsersList = () => {

    const usersArray = useSelector(state => state.usersList)

    return (
        <div>
            <h2>Users on server</h2>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td><strong>blogs created</strong></td>
                    </tr>

                    {usersArray.map(user => <tr key={user.id}> <td >{user.name ? user.name : user.username}</td><td style={{ textAlign: 'right' }}>{user.blogs.length}</td></tr>)}
                </tbody>
            </table>
        </div >
    )



}


export default UsersList