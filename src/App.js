import React, { Component } from 'react'
import './App.css'
import PostIndex from './containers/posts_index'

class App extends Component {
  render() {
    return (
      <div className="container">
      Ok we ready to start coding!
      <PostIndex/>
      </div>
    );
  }
}

export default App
