// ./src/static/js/components/Main.jsx
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Blog from './Blog'
import NotFound from './NotFound'

const Main = () => (
  <main>
    <Header />
    <Switch>
      <Route path='/blog' component={Blog}/>
      <Route path='/:path' component={NotFound}/>
    </Switch>
  </main>
)

export default Main
