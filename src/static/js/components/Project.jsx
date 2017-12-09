// ./src/static/js/components/Project.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
  // some API calls
  return (
    <div>
      <h1>{props.match.params.title}</h1>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default Project
