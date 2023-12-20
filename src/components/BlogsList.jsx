import { useEffect } from 'react'
import blogsService from "../services/blogsService"
import Blog from './Blog'

const BlogsList = ({ user, blogs, setBlogs, setErrorMessage }) => {

    useEffect(() => {
        blogsService
            .getAll()
            .then(blogs => setBlogs(blogs))
    }, [])

    return (
        <div>
            <h2>Blogs in list</h2>
            {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
        </div>
    )
}

export default BlogsList