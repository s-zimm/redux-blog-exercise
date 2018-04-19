import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <header className="App-header">
            Awesome Blog App!
            <Link className="nav-link" to={"/blogs/"}>All Blogs</Link>
        </header>
    )
}

export default Navbar;