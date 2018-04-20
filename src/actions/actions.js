export const actionGetAllPosts = () => ({
    type: 'GET_ALL_POSTS'
});

export const actionGetSingleUserPosts = (userId) => ({
    type: 'GET_SINGLE_USER_POSTS',
    payload: userId
});