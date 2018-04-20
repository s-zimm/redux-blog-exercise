import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionGetAllPosts, actionGetSingleUserPosts } from '../actions/actions';

const Navbar = (props) => {
    return (
        <header className="App-header">
            Awesome Blog App!
            <button onClick={props.getAllPosts}>All Posts</button>
            <button onClick={() => props.getSingeUserPosts(1)}>User 1 Posts</button>
            <button onClick={() => props.getSingeUserPosts(2)}>User 2 Posts</button>
            <button onClick={() => props.getSingeUserPosts(3)}>User 3 Posts</button>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getAllPosts: () => {
        dispatch(actionGetAllPosts())
    },
    getSingeUserPosts: (userId) => {
        dispatch(actionGetSingleUserPosts(userId))
    }
});

export default connect(null, mapDispatchToProps)(Navbar);