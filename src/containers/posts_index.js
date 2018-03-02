import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux' //We dont need it anymore because of the refactoring below
import { fetchPosts } from '../actions/index'
import { NavLink } from 'react-router-dom'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

renderPosts() {
  return this.props.posts.map((post) => {
    return (
      //this key is coming directly from the post in the back-end as they will always have an unique id
      <li className="list-group-item" key={post.id}>
        <NavLink to={"/posts/" + post.id}>
          <span className="float-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </NavLink>
      </li>
    )
  })
}
  render() {
    return (
      <div className="container">
        <div className="text-right">
          <NavLink to="/posts/new" className="btn btn-primary">
            Add A Posst
          </NavLink>
        </div>
          <h3 className="poststitle">Posts</h3>
          <ul>
            {this.renderPosts()}
          </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

//function mapStateToProps(dispatch) {
  //return bindActionCreators({ fetchPosts }, dispatch)
//}
//export default connect(null, mapStateToProps) (PostsIndex)

//we can directly pass the fetchPosts function instead of mapStateToProps like so as a shortCut
//export default connect(null, { fetchPosts: fetchPosts }) (PostsIndex)

//we can use some ES6 refactoring here like so because we got the same key as the value here
export default connect(mapStateToProps, { fetchPosts }) (PostsIndex)
