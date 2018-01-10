// ./src/static/js/components/Header.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="row flex-center child-borders margin">
    <Link to='/' className="paper-btn menu-item margin">
      Home
    </Link>
    <Link to='/blog' className="paper-btn menu-item margin">
      Blog
    </Link>
  </div>
)

export default Header
