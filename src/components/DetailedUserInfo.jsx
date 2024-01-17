import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Blog from './Blog'

const DetailedUserInfo = () => {
    const usersArray = useSelector(state => state.usersList)

    const id = useParams().id

    const user = usersArray.find(user => user.id === id)

    return (
        <div>
            <h2>{user.name}</h2>
            <strong>Added blogs</strong>
            <ul>
                {user.blogs.map(blog => <li key={Math.round(Math.random() * 10000)}><Link to={`/blogs/${blog.id}`} >{blog.title}</Link></li>)}
            </ul>
        </div>
    )
}


export default DetailedUserInfo