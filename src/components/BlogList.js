import React from 'react';
import SingleBlog from './SingleBlog';

const BlogList = (props) => {
    
    let renderAllBlogs = () => {
        return props.blogs.map(blog => {
            return <SingleBlog 
                        title={blog.title}
                        body={blog.body}
                        userId={blog.userId}
                    />
        })
    }

    return (
        <div>
            {renderAllBlogs()}
        </div>
    )
}

export default BlogList