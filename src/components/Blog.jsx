import { useDispatch } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'
import { deleteBlog, addLike } from '../reducers/blogsReducer'
import { useSelector } from 'react-redux'

const Blog = ({ user, blog, setUpdateFlag, blogDetailsVisible, setBlogDetailsVisible }) => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.sessionUser.convertedToken)


  const handleDeleteBlog = async () => {

    try {
      const result = dispatch(deleteBlog(token, blog.id, setUpdateFlag))

      if (result === 204) {
        dispatch(showNotification(`blog ${blog.title} was deleted successfully`))

      } else {
        dispatch(showNotification(`blog ${blog.title} wasn't delete`))

      }
    } catch (exception) {
      dispatch(showNotification(`Deleting blog error ${exception}`))
    }
  }

  const handleViewDetails = () => {
    setBlogDetailsVisible(!blogDetailsVisible)
  }

  const handleAddLike = async () => {
    try {
      dispatch(addLike(token, blog))

      dispatch(showNotification(`Like to blog ${blog.title}\nwas added successfully`))
    } catch (exception) {
      dispatch(showNotification(`Adding like error\n${exception}`))
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