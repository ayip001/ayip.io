// ./src/static/js/components/NotFound.jsx
import React from 'react'

const NotFound = (props) => (
  <div>
    <h1>404 Not Found</h1>
    <h2>Path: {props.match.params.path}</h2>
  </div>
)

export default NotFound
