export const actionGetAllPosts = () => ({
    type: 'GET_ALL_POSTS'
});

export const actionGetSingleUserPosts = (userId) => ({
    type: 'GET_SINGLE_USER_POSTS',
    payload: userId
});

export const actionCreateNewPost = (post) => ({
    type: 'CREATE_NEW_POST',
    payload: post
});

export const actionHandleTextareaChange = (value) => ({
    type: 'HANDLE_TEXTAREA_CHANGE',
    payload: value
});

export const actionHandleSelectUser = (value) => ({
    type: 'HANDLE_USER_CHANGE',
    payload: value
});