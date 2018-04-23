import { combineReducers } from 'redux';
import data from '../data';

const initialState = data;

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return initialState
        
        case 'GET_SINGLE_USER_POSTS':
            return initialState.filter(post => post.userId === action.payload)

        case 'CREATE_NEW_POST':
            return initialState.concat([action.payload])
    }
    return initialState;
}

const newPostData = (state, action) => {
    switch (action.type) {
        case 'HANDLE_TEXTAREA_CHANGE':
            return { ...state, textarea: action.payload}

        case 'HANDLE_USER_CHANGE':
            return { ...state, userId: action.payload }
    }
    return { textarea: '', userId: null, title: '' }
}

export default combineReducers({
    posts,
    newPostData
});