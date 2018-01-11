// ./src/static/js/components/App.jsx
import {Route, Switch} from "react-router-dom";
import BlogList from "./BlogList";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import Post from "./Post";
import React from "react";

class App extends React.Component {

    static shouldComponentUpdate () {
        return true;
    }

    constructor () {
        super();
        this.state = {
            "className": "",
            "readingFont": false,
            "showMenu": false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleFont = this.toggleFont.bind(this);
    }

    toggleMenu (showMenu) {
        this.setState({showMenu});
    }

    toggleFont (readingFont) {
        this.setState({readingFont});
        if (readingFont) {
            this.setState({"className": "reading"});
        } else {
            this.setState({"className": ""});
        }
    }

    render () {
        const {className, readingFont, showMenu} = this.state;

        return (
            <div className={className}>
                <Header
                    readingFont={readingFont}
                    showMenu={showMenu}
                    toggleFont={this.toggleFont}
                    toggleMenu={this.toggleMenu}
                />
                <Switch>
                    <Route
                        component={Home}
                        exact
                        path="/"
                    />
                    <Route
                        component={BlogList}
                        exact
                        path="/blog"
                    />
                    <Route
                        component={Post}
                        path="/blog/:title"
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }

}

export default App;
