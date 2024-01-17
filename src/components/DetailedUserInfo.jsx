import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const DetailedUserInfo = () => {
    const usersArray = useSelector(state => state.usersList)

    const id = useParams().id

    const user = usersArray.find(user => user.id === id)
    console.log(user)
    return (
        <div>
            <h2>{user.name}</h2>
            <strong>Added blogs</strong>
            <ul>
                {user.blogs.map(blog => <li key={Math.round(Math.random() * 10000)}>{blog.title}</li>)}
            </ul>
        </div>
    )
}


export default DetailedUserInfo