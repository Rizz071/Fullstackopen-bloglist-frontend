import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, rerender, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'
import blogsService from '../services/blogsService'


//Mocking blogsService.addLike
jest.mock('../services/blogsService')


//Dummy blog
const blog = {
    title: 'Sample Blog 114',
    author: 'John Doe',
    url: 'http://some.address.com',
    likes: 15,
    user: {
        username: 'testuser1'
    }
}


test('Component displaying a blog renders the blog\'s title and author, but does not render its URL or number of likes by default', () => {

    const { container } = render(<Blog blog={blog} />)

    const blogEntity = container.querySelector('.blog-entity')
    expect(blogEntity).toHaveTextContent('Sample Blog 114')

    const buttonView = container.querySelector('.buttonView')
    expect(buttonView).not.toHaveStyle('display: none')

    const buttonHide = container.querySelector('.buttonHide')
    expect(buttonHide).toHaveStyle('display: none')


    const blogHidePart = container.querySelector('.blogHidePart')
    expect(blogHidePart).toHaveStyle('display: none')
})


test('Blog\'s URL and number of likes are shown when the button controlling the shown details has been clicked', async () => {

    let blogDetailsVisible = false

    const setBlogDetailsVisible = () => {
        blogDetailsVisible = true
    }


    const { container, rerender } = render(<Blog blog={blog} blogDetailsVisible={blogDetailsVisible} setBlogDetailsVisible={setBlogDetailsVisible} />)

    let blogEntity, blogHidePart, buttonView, buttonHide


    blogEntity = container.querySelector('.blog-entity')
    expect(blogEntity).toHaveTextContent('Sample Blog 114')

    buttonView = container.querySelector('.buttonView')
    expect(buttonView).not.toHaveStyle('display: none')

    buttonHide = container.querySelector('.buttonHide')
    expect(buttonHide).toHaveStyle('display: none')

    blogHidePart = container.querySelector('.blogHidePart')
    expect(blogHidePart).toHaveStyle('display: none')

    //Clicking "View" button!..
    const user = userEvent.setup()
    const button = screen.getByText('View')
    await user.click(button)
    rerender(<Blog blog={blog} blogDetailsVisible={blogDetailsVisible} />)

    blogEntity = container.querySelector('.blog-entity')
    expect(blogEntity).toHaveTextContent('Sample Blog 114')

    buttonView = container.querySelector('.buttonView')
    expect(buttonView).toHaveStyle('display: none')

    buttonHide = container.querySelector('.buttonHide')
    expect(buttonHide).not.toHaveStyle('display: none')


    blogHidePart = container.querySelector('.blogHidePart')
    expect(blogHidePart).not.toHaveStyle('display: none')
})



test('If the like button is clicked twice, the event handler the component received as props is called twice', async () => {



    const mockSetMessage = jest.fn()

    const { container } = render(<Blog blog={blog} setMessage={mockSetMessage} blogDetailsVisible={true} />)

    const user = userEvent.setup()
    const button = container.querySelector('.button-likes')
    await user.click(button)
    await user.click(button)

    expect(blogsService.addLike).toBeCalledTimes(2)
    expect(mockSetMessage.mock.calls).toHaveLength(2)
})