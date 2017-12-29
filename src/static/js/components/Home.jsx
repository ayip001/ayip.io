// ./src/static/js/components/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <p>I'll add CSS soon!</p>
    <h2>Hello, my name is</h2>
    <h1 id='name'>Angus Yip</h1>
    <h3>I like to</h3>
    <h2>write code</h2>
    <h3>and</h3>
    <h2>take pictures</h2>
    <h1>Let's connect!</h1>
    <ul>
      <li><a href="mailto:hi@ayip.io">Email</a></li>
      <li><a href="https://github.com/ayip001">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/ayip001/">Linkedin</a></li>
      <li><a href="https://www.facebook.com/ayip001">Facebook</a></li>
      <li><a href="https://www.instagram.com/facade.photography">Instagram</a></li>
    </ul>
    <p>See my <Link to='/blog'>Blog</Link>!</p>
  </div>
)

export default Home
