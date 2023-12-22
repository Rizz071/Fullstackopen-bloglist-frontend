import { useEffect, useState } from 'react'
import blogsService from "../services/blogsService"
import BlogCreate from './BlogCreate'
import Blog from './Blog'

const BlogsList = ({ setMessage }) => {

    const [blogs, setBlogs] = useState([])
    const [updateFlag, setUpdateFlag] = useState(0)

    useEffect(() => {
        console.log('rendering useEfect in BlogList')

        blogsService
            .getAll(setUpdateFlag)
            .then(blogs => setBlogs(blogs))

    }, [updateFlag])


    return (
        <>
            <div>
                <BlogCreate
                    setMessage={setMessage}
                />
            </div>
            <div>
                <h2>Blogs in list</h2>
                {blogs.map(blog => <Blog key={blog.id} blog={blog} setMessage={setMessage} setUpdateFlag={setUpdateFlag} />)}
            </div>
        </>
    )
}

export default BlogsList