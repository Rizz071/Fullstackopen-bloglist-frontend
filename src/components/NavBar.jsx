import { Link } from 'react-router-dom'



const NavBar = () => {

    const inline_style = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        gap: '30px',
        backgroundColor: 'grey',
        margin: '10px 0 10px 0',

    }

    return (
        <div style={inline_style} >
            <span><Link to={'/'}>Home</Link></span>
            <span><Link to={'/'}>Blogs</Link></span>
            <span><Link to={'/users/'}>Users</Link></span>
        </div >
    )
}


export default NavBar