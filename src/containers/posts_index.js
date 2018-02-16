import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux' //We dont need it anymore because of the refactoring below
import { fetchPosts } from '../actions/index'
import { NavLink } from 'react-router-dom'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <div className="text-sm-right">
          <NavLink to="/posts/new" className="btn btn-primary">
            Add A Posst
          </NavLink>
        </div>
      </div>
    )
  }

}


//function mapStateToProps(dispatch) {
  //return bindActionCreators({ fetchPosts }, dispatch)
//}
//export default connect(null, mapStateToProps) (PostsIndex)

//we can directly pass the fetchPosts function instead of mapStateToProps like so as a shortCut
//export default connect(null, { fetchPosts: fetchPosts }) (PostsIndex)

//we can use some ES6 refactoring here like so because we got the same key as the value here
export default connect(null, { fetchPosts }) (PostsIndex)
