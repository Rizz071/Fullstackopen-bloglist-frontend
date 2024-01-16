import { useState } from 'react'
import { useDispatch } from 'react-redux'
import blogsService from '../services/blogsService'
import { showNotification } from '../reducers/notificationReducer'

const BlogCreate = ({ setUpdateFlag, newBlogFormRef }) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const dispatch = useDispatch()


    const handleCreateBlog = event => {
        event.preventDefault()

        try {
            newBlogFormRef.current.toggleVisibility()
            blogsService.createBlog(title, author, url, setUpdateFlag)

            setTitle('')
            setAuthor('')
            setUrl('')

            dispatch(showNotification(`Blog ${title} was created`))

        } catch (exception) {
            console.log(exception)
            dispatch(showNotification(`Creation blog error\n${exception}`))
        }
    }



    return (
        <form onSubmit={handleCreateBlog} >
            <table>
                <caption style={{ textAlign: 'left' }}>
                    <h2>Create new blog</h2>
                </caption>
                <tbody>
                    <tr>
                        <td>
                            Title
                        </td>
                        <td>
                            <input
                                id='title'
                                type='text'
                                value={title}
                                name='title'
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Author
                        </td>
                        <td>
                            <input
                                id='author'
                                type='text'
                                value={author}
                                name='author'
                                onChange={(event) => setAuthor(event.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            URL
                        </td>
                        <td>
                            <input
                                id='url'
                                type='text'
                                value={url}
                                name='url'
                                onChange={(event) => setUrl(event.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>


            <button id='add-blog-button' style={{ marginTop: '5px' }} type='submit'>Add blog</button>
        </form >
    )



}


export default BlogCreate