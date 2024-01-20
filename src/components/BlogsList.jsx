import { useEffect, useState, useRef } from 'react'
import BlogCreate from './BlogCreate'
import Blog from './Blog'
import Togglable from './Togglable'
import { useDispatch, useSelector } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'
import { getAll } from '../reducers/blogsReducer'
import Comments from './Comments'


const BlogsList = () => {

    const dispatch = useDispatch()


    const token = useSelector(state => state.sessionUser.convertedToken)

    useEffect(() => {
        dispatch(getAll(token))
    }, [dispatch, token])



    const blogs = useSelector(state => state.blogs)



    const [blogDetailsVisible, setBlogDetailsVisible] = useState(false)

    const newBlogFormRef = useRef()


    // const container = {
    //     display: 'flex',
    //     justifyContent: 'flex-start',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     width: '50vw',
    // }
    // if (!token) return null

    if (blogs.length === 0) {
        return <p>Fetching data from server...</p>
    } else {
        return (
            <>
                <Togglable buttonLabel='New blog' ref={newBlogFormRef}>
                    <BlogCreate newBlogFormRef={newBlogFormRef} />
                </Togglable>

                <h2 style={{ textAlign: 'left', width: '50vw' }}>Blogs in list</h2>
                <div id='blogsListArray'>
                    {blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            blog={blog}
                            blogDetailsVisible={blogDetailsVisible}
                            setBlogDetailsVisible={setBlogDetailsVisible} />)}
                </div>
            </>
        )
    }
}

export default BlogsList