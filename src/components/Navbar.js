import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionGetAllPosts, actionGetSingleUserPosts } from '../actions/actions';

const Navbar = ({ getAllPosts, getSingeUserPosts }) => {
    return (
        <header className="App-header">
            Awesome Blog App!
            <button onClick={getAllPosts}>All Posts</button>
            <button onClick={() => getSingeUserPosts(1)}>User 1 Posts</button>
            <button onClick={() => getSingeUserPosts(2)}>User 2 Posts</button>
            <button onClick={() => getSingeUserPosts(3)}>User 3 Posts</button>
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