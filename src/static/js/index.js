// ./src/static/js/index.js
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import style from '../styles/main.scss'

render(
  <div className="container">
    <div className="paper">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </div>,
  document.getElementById('root')
)
