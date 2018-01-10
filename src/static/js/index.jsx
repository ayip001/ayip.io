// ./src/static/js/index.js
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {render} from "react-dom";
import style from "../styles/main.scss";

render(
    <div className="container">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>,
    document.getElementById("root")
);
