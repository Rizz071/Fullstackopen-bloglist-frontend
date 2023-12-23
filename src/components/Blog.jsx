import blogsService from '../services/blogsService'

const Blog = ({ blog, setMessage, setUpdateFlag, blogDetailsVisible, setBlogDetailsVisible }) => {

  const handleDeleteBlog = async () => {

    try {
      const result = await blogsService.deleteBlog(blog.id, setUpdateFlag)

      if (result === '204') {
        setMessage(`blog ${blog.title}\nwas deleted successfully`)
        setTimeout(() => { setMessage(null) }, 5000)
      } else {
        setMessage(`blog ${blog.title}\nwasn't delete`)
        setTimeout(() => { setMessage(null) }, 5000)
      }
    } catch (exception) {
      setMessage(`Deleting blog error\n${exception}`)
      setTimeout(() => { setMessage(null) }, 5000)
    }
  }

  const handleViewDetails = () => {
    setBlogDetailsVisible(!blogDetailsVisible)
  }

  const handleAddLike = async () => {
    try {
      await blogsService.addLike(blog, setUpdateFlag)

      setMessage(`Like to blog ${blog.title}\nwas added successfully`)
      setTimeout(() => { setMessage(null) }, 5000)
    } catch (exception) {
      setMessage(`Deleting blog error\n${exception}`)
      setTimeout(() => { setMessage(null) }, 5000)
    }
  }



  const item = {
    // flexBasis: '200px'
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5px',
    // width: '100px'
    // alignItems: 'baseline',
    // flexDirection: 'row'
    padding: '20px 20px 20px 20px',
    margin: '20px 20px 20px 20px',
    width: '10vw'
    // position: 'absolute',
    // top: '10px'
  }

  const toggleVisibilityButton1 = {
    display: blogDetailsVisible ? '' : 'none',
    margin: '0 0 0 0'
  }
  const toggleVisibilityButton2 = {
    display: blogDetailsVisible ? 'none' : '',
    margin: '0 0 0 0'
  }

  return (
    <div style={{ ...item }}>
      <div>
        <strong>{blog.title}</strong>
        <br />
        <button style={toggleVisibilityButton2} onClick={handleViewDetails}>View</button>
        <button style={toggleVisibilityButton1} onClick={handleViewDetails}>Hide</button>
        <button style={{ margin: '0 0 0 3px' }} onClick={handleDeleteBlog}> x </button>
      </div>
      <div style={toggleVisibilityButton1}>
        &nbsp;of {blog.author}<br />
        &nbsp;url: <span style={{ color: 'blue' }}>{blog.url}</span><br />
        &nbsp;likes: {blog.likes} <button style={{ margin: '0 0 0 3px' }} onClick={handleAddLike}>&#128077;</button> <br /><br />
        &nbsp;created by: {blog.user.username}
      </div>
    </div >
  )
}


export default Blog