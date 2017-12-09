// ./src/static/js/components/Main.jsx
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main
