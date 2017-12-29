// ./src/static/js/components/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <div className="section margin-small">
      <div className="row">
        <h3 className="margin-none">Hello, my name is</h3>
      </div>
      <div className="row flex-center">
        <h1 className="margin-none">Angus Yip</h1>
      </div>
      <div className="row flex-center">
        <h3 className="sm-4 col margin-none">I enjoy</h3>
        <div className="sm-4 col" />
      </div>
      <div className="row flex-center">
        <h2 className="margin-none">writing code</h2>
      </div>
      <div className="row flex-center">
        <div className="sm-4 col" />
        <h3 className="sm-4 col margin-none">and</h3>
      </div>
      <div className="row flex-center">
        <h2 className="margin-none">taking pictures</h2>
      </div>
    </div>
    <div className="section margin-small">
      <div className="row">
        <h3 className="margin-none">Reach me at</h3>
      </div>
      <div className="row flex-center child-borders"> <a href="mailto:hi@ayip.io" className="paper-btn margin-small">
          <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/ayip001" className="paper-btn margin-small">
          <i className="fa fa-github fa-3x" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/ayip001/" className="paper-btn margin-small">
          <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/ayip001" className="paper-btn margin-small">
          <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/facade.photography" className="paper-btn margin-small">
          <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div className="row">
      <h3 className="margin-none">Additional links</h3>
    </div>
    <div className="section">
      <div className="row flex-center">
        <Link to="/blog" className="col-6 col paper-btn btn-block">Blogs and Projects</Link>
      </div>
      <div className="row flex-center">
        <Link to="#" className="col-6 col paper-btn btn-block">Resume Download</Link>
      </div>
    </div>
    <div className="row flex-center">
      <a href="#top" class="paper-btn margin" popover-top="Back to top" style={{'border-radius': "30px"}}>
        <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
      </a>
    </div>
  </div>
)

export default Home
