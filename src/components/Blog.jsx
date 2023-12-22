import blogsService from "../services/blogsService"

const Blog = ({ blog, setMessage, setUpdateFlag }) => {

  const handleDeleteBlog = () => {

    try {
      blogsService.deleteBlog(blog.id)

      setUpdateFlag(Math.random)

      setMessage(`blog ${blog.title}\nwas deleted successfully`)
      setTimeout(() => { setMessage(null) }, 5000)


    } catch (exception) {
      setMessage(`Deleting blog error\n${exception}`)
      setTimeout(() => { setMessage(null) }, 5000)
    }
  }

  return (
    <p>
      <strong>{blog.title}</strong> <button onClick={handleDeleteBlog}> x </button><br />
      &nbsp;of {blog.author}<br />
      &nbsp;url: <span style={{ color: "blue" }}>{blog.url}</span><br />
      &nbsp;likes: {blog.likes}
    </p>
  )
}


export default Blog