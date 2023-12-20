const Blog = ({ blog }) => (
  <ul>
    <li><strong>{blog.title}</strong></li>
    <li>of {blog.author}</li>
    <li>From: {blog.url}</li>
    <li>Likes: {blog.likes}</li>
  </ul>
)

export default Blog