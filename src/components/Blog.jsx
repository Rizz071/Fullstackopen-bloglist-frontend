import blogsService from '../services/blogsService'

const Blog = ({ user, blog, setMessage, setUpdateFlag, blogDetailsVisible, setBlogDetailsVisible }) => {

  const handleDeleteBlog = async () => {

    try {
      const result = await blogsService.deleteBlog(blog.id, setUpdateFlag)

      if (result === 204) {
        setMessage(`blog ${blog.title} was deleted successfully`)
        setTimeout(() => { setMessage(null) }, 5000)
      } else {
        setMessage(`blog ${blog.title} wasn't delete`)
        setTimeout(() => { setMessage(null) }, 5000)
      }
    } catch (exception) {
      setMessage(`Deleting blog error ${exception}`)
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
      setMessage(`Adding like error\n${exception}`)
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
      <div className='blog-entity'>
        <span className='blog-title'><strong>{blog.title}</strong></span>
        <br />
        <button className='buttonView' style={toggleVisibilityButton2} onClick={handleViewDetails}>View</button>
        <button className='buttonHide' style={toggleVisibilityButton1} onClick={handleViewDetails}>Hide</button>

        {user.username === blog.user.username
          ? <button id='blog-delete-button' style={{ margin: '0 0 0 3px' }} onClick={handleDeleteBlog}> x </button>
          : false
        }
      </div>
      <div className='blogHidePart' style={toggleVisibilityButton1}>
        <span className='blog-author'>&nbsp;of {blog.author}</span><br />
        <span className='blog-url'>&nbsp;url: <span style={{ color: 'blue' }}>{blog.url}</span></span><br />
        <span className='blog-likes'>&nbsp;likes: {blog.likes}</span> <button className='button-likes' style={{ margin: '0 0 0 3px' }} onClick={handleAddLike}>&#128077;</button> <br /><br />
        <span className='blog-creator'>&nbsp;created by: {blog.user.username}</span>
      </div>
    </div >
  )
}


export default Blog