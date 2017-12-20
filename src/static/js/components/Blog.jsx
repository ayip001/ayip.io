// ./src/static/js/components/Blog.jsx
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BlogList from './BlogList'
import Post from './Post'

const Blog = () => (
  <Switch>
    <Route exact path='/blog' component={BlogList}/>
    <Route path='/blog/:title' component={Post}/>
  </Switch>
)


export default Blog
