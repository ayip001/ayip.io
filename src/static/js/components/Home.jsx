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
      <div className="row flex-center margin-none">
        <div className="col-6 col padding-none">
          <div className="row margin-none">
            <h3 className="margin-none">I enjoy</h3>
          </div>
        </div>
      </div>
      <div className="row flex-center margin-none">
        <h2 className="margin-none">writing code</h2>
      </div>
      <div className="row flex-center margin-none">
        <div className="col-6 col padding-none">
          <div className="row flex-right margin-none">
            <h3 className="margin-none">and</h3>
          </div>
        </div>
      </div>
      <div className="row flex-center">
        <h2 className="margin-none">taking photos</h2>
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
      <h3 className="margin-none">Check out my</h3>
    </div>
    <div className="section">
      <div className="row flex-center">
        <Link to="/blog" className="col-6 col paper-btn btn-block">Blogs and Projects</Link>
      </div>
      <div className="row flex-center">
        <a href="https://drive.google.com/file/d/16XK27hQgnkwfmzc7mdgh2DaaK_Eg3UEp/view?usp=sharing" className="col-6 col paper-btn btn-block">Résumé</a>
      </div>
    </div>
    <div className="row flex-center">
      <a href="#top" className="paper-btn margin" popover-top="Back to top" style={{'borderRadius': "40px"}}>
        <i className="fa fa-hand-o-up fa-2x" aria-hidden="true"></i>
      </a>
    </div>
  </div>
)

export default Home
