import React from 'react';
import { connect } from 'react-redux';
import { 
    actionCreateNewPost,
    actionHandleTextareaChange,
    actionHandleSelectUser,
    actionHandleTitleChange
 } from '../actions/actions';

const NewBlog = ({ handleTextareaChange, handleTitleChange, handleSelectUser, createNewPost, newPostData }) => {
    return (
        <div>
            <form onSubmit={(event) => { event.preventDefault(); createNewPost(newPostData)}}>
                <select value={newPostData.userId} onChange={(event) => handleSelectUser(event.target.value)} name="" id="">
                    <option default value={1}>User 1</option>
                    <option value={2}>User 2</option>
                    <option value={3}>User 3</option>
                </select>
                <input value={newPostData.title} onChange={(event) => handleTitleChange(event.target.value)} type="text"/>
                <textarea value={newPostData.textarea} onChange={(event) => handleTextareaChange(event.target.value)} placeholder="New Post"/>
                <button>Add</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    createNewPost: (post) => {
        dispatch(actionCreateNewPost(post))
    },
    handleTextareaChange: (value) => {
        dispatch(actionHandleTextareaChange(value))
    },
    handleSelectUser: (value) => {
        dispatch(actionHandleSelectUser(value))
    },
    handleTitleChange: (value) => {
        dispatch(actionHandleTitleChange(value))
    }
});

const mapStateToProps = (state) => ({
    newPostData: state.newPostData
})

export default connect(mapStateToProps, mapDispatchToProps)(NewBlog);