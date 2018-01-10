// ./src/static/js/components/Header.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const BurgerMenu = ({showMenu, toggleMenu}) => (
  <div
    className={showMenu ?
      "burger-menu hamburger hamburger--collapse is-active" :
      "burger-menu hamburger hamburger--collapse"}
    onClick={() => toggleMenu(!showMenu)}>
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </div>
)

const FontButton = ({readingFont, toggleFont}) => (
  <div className="row flex-center">
    { readingFont ?
      <div
        className="paper-btn paper-btn-2 font-btn"
        onClick={() => toggleFont(!readingFont)}>
        Aesthetic font for croissant
      </div> :
      <div
        className="paper-btn paper-btn-4 font-btn"
        onClick={() => toggleFont(!readingFont)}>
        Boring font for reading
      </div>}
  </div>
)

const Menu = () => (
  <div className="row flex-center child-borders margin">
    <Link to='/' className="paper-btn paper-btn-plain margin">
      Home
    </Link>
    <Link to='/blog' className="paper-btn paper-btn-plain margin">
      Blog
    </Link>
  </div>
)

const ModalMenu = ({showMenu, toggleMenu, readingFont, toggleFont}) => (
  <div>
    {showMenu &&
      <div className="modal" onClick={() => toggleMenu(!showMenu)}>
        <div className="menu-item">
          <Menu />
          <FontButton
            readingFont={readingFont}
            toggleFont={toggleFont} />
        </div>
      </div>}
  </div>
)

const Header = ({showMenu, toggleMenu, readingFont, toggleFont}) => (
  <div>
    <BurgerMenu
      showMenu={ showMenu }
      toggleMenu={ toggleMenu } />
    <ModalMenu
      showMenu={ showMenu }
      toggleMenu={ toggleMenu }
      readingFont={ readingFont }
      toggleFont={ toggleFont } />
    { /* if not home, show header at top of page */ }
    {window.location.pathname !== '/' && <Menu />}
  </div>
)

export default Header
