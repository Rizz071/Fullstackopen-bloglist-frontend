import { useEffect, useState, useRef } from 'react'
// import blogsService from '../services/blogsService'
import BlogCreate from './BlogCreate'
import Blog from './Blog'
import Togglable from './Togglable'
import { useDispatch, useSelector } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'
import { getAll } from '../reducers/blogsReducer'


const BlogsList = ({ user }) => {
    const dispatch = useDispatch()

    let token = useSelector(state => state.sessionUser.convertedToken)

    useEffect(() => {
        // localStorage.clear()
        dispatch(getAll(token))

        // console.log(useSelector(state => state.blogs))

        // blogsService
        //   .getAll(setUpdateFlag)
        //   .then(blogs => setBlogs(blogs))
        //   .catch(error => {
        //     console.log('error occured during fetching blogs from server')
        //     console.log(error)

        // localStorage.clear()
    }, [])



    const blogs = useSelector(state => state.blogs)
    user = useSelector(state => state.sessionUser)

    const [blogDetailsVisible, setBlogDetailsVisible] = useState(false)

    const newBlogFormRef = useRef()


    const container = {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '50vw',
        // alignItems: 'stretch'
        // margin: '0 0 0 0',
        // position: 'absolute',
        // top: '10px'
    }



    return (
        <>
            <Togglable buttonLabel='New blog' ref={newBlogFormRef}>
                <BlogCreate newBlogFormRef={newBlogFormRef} />
            </Togglable>

            <h2 style={{ textAlign: 'center', width: '50vw' }}>Blogs in list</h2>
            <div id='blogsListArray' style={{ ...container }}>
                {blogs.map(blog =>
                    <Blog
                        user={user}
                        key={blog.id}
                        blog={blog}
                        blogDetailsVisible={blogDetailsVisible}
                        setBlogDetailsVisible={setBlogDetailsVisible} />)}
            </div>
        </>
    )
}

export default BlogsList