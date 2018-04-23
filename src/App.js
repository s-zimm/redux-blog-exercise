import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import BlogPageContainer from './components/BlogPageContainer';
import Navbar from './components/Navbar';
import ScreenDumb from './components/ScreenDumb';
import ScreenContainer from './components/ScreenContainer';
import NewBlog from './components/NewBlog';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';

// let initialState = {
//   posts: [
//       'Hey'
//   ]
// }

// let reducer = (oldState = initialState, action) => {
//   switch (action.type) {
//       case 'CREATE_POST':
//           let newPosts = oldState.posts.concat(['Heyo']);
//           return { posts: newPosts  };
//           break;
//   }
//   return oldState;
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
  render() {
    return (
      <Provider store={this.store}>
        <div>
          
          <Navbar />
          <NewBlog />
          <BlogPageContainer />
          {/* <ScreenContainer /> */}

        </div>
      </Provider>
    );
  }
}

export default App;
