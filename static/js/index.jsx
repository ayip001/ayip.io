// index.jsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";

ReactDOM.render(<App />, document.getElementById("content"));

render () {
    return (
        <PageHeader>
            <div className="header-contents">
                <Hello name="Rimini" />
            </div>
        </PageHeader>
    );
}
