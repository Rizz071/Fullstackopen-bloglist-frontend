import { useState } from "react"
import blogsService from "../services/blogsService"

const BlogCreate = ({ setMessage, setUpdateFlag, newBlogFormRef }) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleCreateBlog = event => {
        event.preventDefault()

        try {
            newBlogFormRef.current.toggleVisibility()
            blogsService.createBlog(title, author, url, setUpdateFlag)

            setTitle('')
            setAuthor('')
            setUrl('')

            setMessage(`Blog ${title} was created`)
            setTimeout(() => { setMessage(null) }, 5000)

        } catch (exception) {
            console.log(exception)
            setMessage(`Creation blog error\n${exception}`)
            setTimeout(() => { setMessage(null) }, 5000)
        }
    }



    return (
        <form onSubmit={handleCreateBlog} >
            <table>
                <caption style={{ textAlign: "left" }}>
                    <h2>Create new blog</h2>
                </caption>
                <tbody>
                    <tr>
                        <td>
                            Title
                        </td>
                        <td>
                            <input
                                type="text"
                                value={title}
                                name="title"
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
                                type="text"
                                value={author}
                                name="author"
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
                                type="text"
                                value={url}
                                name="url"
                                onChange={(event) => setUrl(event.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>


            <button style={{ marginTop: "5px" }} type="submit">Add blog</button>
        </form >
    )



}


export default BlogCreate