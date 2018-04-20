import React, { Component } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import Navbar from './Navbar';

const BlogPage = (props) => {

    // fetchData = (userId = '') => {
    //     if (userId) {
    //         axios.get('https://jsonplaceholder.typicode.com/posts/?userId=' + userId)
    //             .then(data => {
    //                 this.setState({ posts: data.data })
    //             })
    //     } else (
    //         axios.get('https://jsonplaceholder.typicode.com/posts/')
    //         .then(data => this.setState({ posts: data.data }))
    //     )
        
    // }

    // componentDidMount() {
    //     if (this.props.match.params.userId) {
    //         this.fetchData(this.props.match.params.userId)
    //     } else {
    //         this.fetchData();
    //     }
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.userId !== this.props.match.params.userId) {
    //         this.setState({ posts: [] })
    //         this.fetchData(this.props.match.params.userId)
    //     }
    // }

    // render() {
        if (props.posts.length > 0) {
            return (
                <React.Fragment>
                    <div>
                        <BlogList blogs={props.posts}/>
                    </div>
                </React.Fragment>
            )
        } else {
            return <div>Loading...</div>
        }
        
    }
// }

export default BlogPage;