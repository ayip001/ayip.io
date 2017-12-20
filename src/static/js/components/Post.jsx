// ./src/static/js/components/Post.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
  // some API calls
  return (
    <div>
      <h1>{props.match.params.title}</h1>
      <Link to='/blog'>Back</Link>
    </div>
  )
}

export default Post
