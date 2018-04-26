import { combineReducers } from 'redux';
import data from '../data';

const initialState = data;

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return state
        
        case 'GET_SINGLE_USER_POSTS':
            return state.filter(post => post.userId === action.payload)

        case 'CREATE_NEW_POST':
            let arrayed = [action.payload]
            return arrayed.concat(state)
    }
    return initialState;
}

const newPostData = (state, action) => {
    switch (action.type) {
        case 'HANDLE_TEXTAREA_CHANGE':
            return { ...state, body: action.payload}

        case 'HANDLE_USER_CHANGE':
            return { ...state, userId: action.payload }

        case 'HANDLE_TITLE_CHANGE':
            return { ...state, title: action.payload }
    }
    return { body: '', userId: 1, title: '' }
}

export default combineReducers({
    posts,
    newPostData
});