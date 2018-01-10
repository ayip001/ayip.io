// ./src/static/js/components/App.jsx
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import BlogList from './BlogList'
import Post from './Post'
import NotFound from './NotFound'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      readingFont: false
    };
  };

  render() {
    return (
      <div className={this.state.readingFont ? "reading" : ""}>
        <Header
          showMenu={ this.state.showMenu }
          toggleMenu={(showMenu) => this.setState({showMenu})}
          readingFont={ this.state.readingFont }
          toggleFont={(readingFont) => this.setState({readingFont})} />
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
