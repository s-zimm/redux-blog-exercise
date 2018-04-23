import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { connect } from 'react-redux';

// action is a description of change
let action = { type: 'CREATE_POST' };

// let initialState = {
//     posts: [
//         'Hey'
//     ]
// }

// let reducer = (oldState = initialState, action) => {
//     switch (action.type) {
//         case 'CREATE_POST':
//             let newPosts = oldState.posts.concat(['Heyo']);
//             return { posts: newPosts  };
//             break;
//     }
//     return oldState;
// };

// let store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// class Screen extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = store.getState();
//         store.subscribe(() => {
//             this.setState(store.getState())
//         })
//     }

//     render() {
//         let { posts } = this.state
//         return (
//             <div>
//                 <p>{posts.toString()}</p>
//                 <button onClick={() => store.dispatch({ type: 'CREATE_POST' })}>Click</button>
//             </div>
//         )
//     }
// }

// const ScreenDumb = ({ dispatch, posts }) => {
//     return (
//         <div>
//             <p>{posts.toString()}</p>
//             <button onClick={() => dispatch({ type: 'CREATE_POST' })}>Click</button>
//         </div>
//     )
// }

// let Screen = connect(
//     (state) => {
//         return { posts: state.posts }
//     },
//     (dispatch) => {
//         return { dispatch: dispatch }
//     }
// )(ScreenDumb)
    

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
