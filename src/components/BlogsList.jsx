import { useEffect, useState, useRef } from 'react'
import blogsService from '../services/blogsService'
import BlogCreate from './BlogCreate'
import Blog from './Blog'
import Togglable from './Togglable'
import { useDispatch } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'

const BlogsList = ({ user }) => {

    const [blogs, setBlogs] = useState([])
    const [updateFlag, setUpdateFlag] = useState(0)
    const [blogDetailsVisible, setBlogDetailsVisible] = useState(false)

    const dispatch = useDispatch

    const newBlogFormRef = useRef()

    useEffect(() => {

        blogsService
            .getAll(setUpdateFlag)
            .then(blogs => setBlogs(blogs))
            .catch(error => {
                console.log('error catched during fetching blogs from server')
                console.log(error)

                localStorage.clear()
            })


    }, [updateFlag])


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
                <BlogCreate
                    setUpdateFlag={setUpdateFlag} newBlogFormRef={newBlogFormRef}
                />
            </Togglable>

            <h2 style={{ textAlign: 'center', width: '50vw' }}>Blogs in list</h2>
            <div id='blogsListArray' style={{ ...container }}>
                {blogs.map(blog =>
                    <Blog
                        user={user}
                        key={blog.id}
                        blog={blog}
                        setUpdateFlag={setUpdateFlag}
                        blogDetailsVisible={blogDetailsVisible}
                        setBlogDetailsVisible={setBlogDetailsVisible} />)}
            </div>
        </>
    )
}

export default BlogsList