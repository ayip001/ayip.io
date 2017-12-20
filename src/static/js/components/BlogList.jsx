// ./src/static/js/components/BlogList.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = () => (
  <div>
    <ul>
      <li><Link to='/blog/project_title'>project_title</Link></li>
    </ul>
  </div>
)

export default BlogList
