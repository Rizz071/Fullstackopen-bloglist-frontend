import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import blogsService from '../services/blogsService'
import { showNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'



const DetailedBlogInfo = ({ blogs, setUpdateFlag }) => {

    const usersArray = useSelector(state => state.usersList)
    const id = useParams().id


    const blog = blogs.find(blog => blog.id === id)
    // console.log(blog)

    const dispatch = useDispatch()


    const handleAddLike = async () => {
        try {
            await blogsService.addLike(blog, setUpdateFlag)

            dispatch(showNotification(`Like to blog ${blog.title}\nwas added successfully`))
        } catch (exception) {
            dispatch(showNotification(`Adding like error\n${exception}`))
        }
    }




    return (
        <div>
            <h2>{blog.title}</h2>
            <a href={blog.url}>{blog.url}</a>
            <span>&nbsp;likes: {blog.likes}</span> <button style={{ margin: '0 0 0 3px' }} onClick={handleAddLike}>&#128077;</button>
            <p>added by {blog.author}</p>
        </div >
    )

}


export default DetailedBlogInfo