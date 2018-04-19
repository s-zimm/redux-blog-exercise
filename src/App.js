import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/blogs/:userId" component={BlogPage} />
          <Route exact path="/blogs" component={BlogPage} />

        </div>
      </Router>
    );
  }
}

export default App;
