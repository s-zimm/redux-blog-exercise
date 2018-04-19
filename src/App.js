import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import Navbar from './components/Navbar';
import ScreenDumb from './components/ScreenDumb';
import ScreenContainer from './components/ScreenContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState = {
  posts: [
      'Hey'
  ]
}

let reducer = (oldState = initialState, action) => {
  switch (action.type) {
      case 'CREATE_POST':
          let newPosts = oldState.posts.concat(['Heyo']);
          return { posts: newPosts  };
          break;
  }
  return oldState;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
  render() {
    return (
      <Provider store={this.store}>
        {/* <Router>
          <div className="App">
            <Navbar />
            <Route path="/blogs/:userId" component={BlogPage} />
            <Route exact path="/blogs" component={BlogPage} />

          </div>
        </Router> */}
        <ScreenContainer />
      </Provider>
    );
  }
}

export default App;
