import { useEffect, useState, useRef } from 'react'
import blogsService from "../services/blogsService"
import BlogCreate from './BlogCreate'
import Blog from './Blog'
import Togglable from './Togglable'

const BlogsList = ({ setMessage }) => {

    const [blogs, setBlogs] = useState([])
    const [updateFlag, setUpdateFlag] = useState(0)
    const [blogDetailsVisible, setBlogDetailsVisible] = useState(false)

    const newBlogFormRef = useRef()

    useEffect(() => {
        console.log('rendering useEfect in BlogList')

        blogsService
            .getAll(setUpdateFlag)
            .then(blogs => setBlogs(blogs))

    }, [updateFlag])


    const container = {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "50vw",
        // alignItems: "stretch"
        // margin: "0 0 0 0",
        // position: "absolute",
        // top: "10px"
    }



    return (
        <>
            <Togglable buttonLabel='New blog' ref={newBlogFormRef}>
                <BlogCreate
                    setMessage={setMessage} setUpdateFlag={setUpdateFlag} newBlogFormRef={newBlogFormRef}
                />
            </Togglable>

            <h2 style={{ textAlign: "center", width: "50vw" }}>Blogs in list</h2>
            <div style={{ ...container }}>
                {blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        setMessage={setMessage}
                        setUpdateFlag={setUpdateFlag}
                        blogDetailsVisible={blogDetailsVisible}
                        setBlogDetailsVisible={setBlogDetailsVisible} />)}
            </div>
        </>
    )
}

export default BlogsList