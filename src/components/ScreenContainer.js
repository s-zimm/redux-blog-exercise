import { connect } from 'react-redux';
import ScreenDumb from './ScreenDumb';

let Screen = connect(
    (state) => {
        return { posts: state.posts }
    },
    (dispatch) => {
        return { dispatch: dispatch }
    }
)(ScreenDumb)

export default Screen;