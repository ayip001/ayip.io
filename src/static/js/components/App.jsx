// ./src/static/js/components/App.jsx
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import BlogList from './BlogList'
import Post from './Post'
import NotFound from './NotFound'

const App = () => (
  <div>
    {window.location.pathname !== '/' && <Header />}
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/blog' component={BlogList}/>
      <Route path='/blog/:title' component={Post}/>
      <Route component={NotFound}/>
    </Switch>
  </div>
)

export default App
