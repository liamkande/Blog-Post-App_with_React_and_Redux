import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import PostNew from './containers/posts_new'


const Routes = () => (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/posts/new" component={PostNew} />
          </Switch>
      </BrowserRouter>
    )

export default Routes
