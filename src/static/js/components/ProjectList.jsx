// ./src/static/js/components/ProjectList.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectList = () => (
  <div>
    <ul>
      <li><Link to='/projects/project_title'>project_title</Link></li>
    </ul>
  </div>
)

export default ProjectList
