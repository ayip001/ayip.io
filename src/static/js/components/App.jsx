// ./src/static/js/components/App.jsx
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import BlogList from './BlogList'
import Post from './Post'
import NotFound from './NotFound'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      showMenu: false
    };
  };

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu});
  };

  render() {
    return (
      <div>
        { /* begin burger menu */ }
        <div
          className={this.state.showMenu ? "burger-menu hamburger hamburger--collapse is-active" : "burger-menu hamburger hamburger--collapse"}
          onClick={ this.toggleMenu }
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
        { /* end burger menu */ }
        { // modal header
          this.state.showMenu &&
          <div className="modal" onClick={ this.toggleMenu }>
            <Header />
          </div>
        }
        { /* if not home, show header at top of page */ }
        {window.location.pathname !== '/' && <Header />}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/blog' component={BlogList}/>
          <Route path='/blog/:title' component={Post}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  };
}

export default App
