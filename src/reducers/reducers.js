import { combineReducers } from 'redux';
import data from '../data';

const initialState = data;

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return { posts: initialState }
        
        case 'GET_SINGLE_USER_POSTS':
            return { posts: initialState.filter(post => post.userId === action.payload)}
    }
}

export default combineReducers({
    posts
});