import { connect } from 'react-redux';
import BlogPage from './BlogPage';

import {
    actionGetAllPosts,
    actionGetSingleUserPosts
} from '../actions/actions';

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

// const mapDispatchToProps = (dispatch) => ({
//     getAllPosts: () => dispatch(actionGetAllPosts),
//     getSingeUserPosts: (userId) => dispatch(actionGetSingleUserPosts)
// });

const BlogPageContainer = connect(
    mapStateToProps
)(BlogPage);

export default BlogPageContainer;