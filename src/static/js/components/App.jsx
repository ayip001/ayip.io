// ./src/static/js/components/App.jsx
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Main from './Main'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route component={Main}/>
    </Switch>
  </div>
)

export default App
