import React from 'react';
import { connect } from 'react-redux';
import { 
    actionCreateNewPost,
    actionHandleTextareaChange,
    actionHandleSelectUser
 } from '../actions/actions';

const NewBlog = ({ handleTextareaChange, handleSelectUser }) => {
    return (
        <div>
            <form>
                <select onChange={(event) => handleSelectUser(event.target.value)} name="" id="">
                    <option default value={1}>User 1</option>
                    <option value={2}>User 2</option>
                    <option value={3}>User 3</option>
                </select>
                <textarea onChange={(event) => handleTextareaChange(event.target.value)} placeholder="New Post"/>
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
    }
});

export default connect(null, mapDispatchToProps)(NewBlog);