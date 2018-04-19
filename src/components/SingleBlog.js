import React from 'react';
import { Link } from 'react-router-dom';


const SingleBlog = ({ title, body, userId }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3><Link to={`/blogs/${userId}`}>UserID: {userId}</Link></h3>
            <p>{body}</p>
        </div>
    )
}

export default SingleBlog;