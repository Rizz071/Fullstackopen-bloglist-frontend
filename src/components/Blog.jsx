import blogsService from "../services/blogsService"

const Blog = ({ blog, setMessage, setUpdateFlag }) => {

  const handleDeleteBlog = () => {

    try {
      blogsService.deleteBlog(blog.id, setUpdateFlag)

      setMessage(`blog ${blog.title}\nwas deleted successfully`)
      setTimeout(() => { setMessage(null) }, 5000)


    } catch (exception) {
      setMessage(`Deleting blog error\n${exception}`)
      setTimeout(() => { setMessage(null) }, 5000)
    }
  }

  const item = {
    // flexBasis: "200px"
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "5px",
    // width: "100px"
    // alignItems: "baseline",
    // flexDirection: "row"
    padding: "20px 20px 20px 20px",
    margin: "20px 20px 20px 20px",
    // position: "absolute",
    // top: "10px"
  }



  return (
    <div style={{ ...item }}>
      <strong>{blog.title}</strong> <button onClick={handleDeleteBlog}> x </button><br />
      &nbsp;of {blog.author}<br />
      &nbsp;url: <span style={{ color: "blue" }}>{blog.url}</span><br />
      &nbsp;likes: {blog.likes}
    </div>
  )
}


export default Blog