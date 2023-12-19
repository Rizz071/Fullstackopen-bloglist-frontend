const BlogsList = props => {

    return (
        <div>
            <h2>Blogs in list</h2>
            {props.blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
        </div>
    )
}

export default BlogsList