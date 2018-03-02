import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PostsIndex from './containers/posts_index'
import PostNew from './containers/posts_new'
import PostsShow from './containers/posts_show'



const Routes = () => (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PostsIndex} />
            <Route exact path="/posts/new" component={PostNew} />
            <Route exact path="/posts/:id" component={PostsShow} />
          </Switch>
      </BrowserRouter>
    )

export default Routes
