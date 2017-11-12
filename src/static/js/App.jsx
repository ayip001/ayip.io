// App.jsx

import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";

require('../css/hello.css');
var $ = require('jquery');

import HelloBackground from '../images/hello_bg.jpg';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    addHeaderImg() {
        let headerBg = new Image();
        headerBg.src = HelloBackground;
    }

    render() {
        return (
            <PageHeader>
                <div className="header-contents">
                    {this.addHeaderImg()}
                    <Hello name="Rimini" />
                </div>
            </PageHeader>
        );
    }
}
