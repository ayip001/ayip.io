// ./src/static/js/components/NotFound.jsx
import React from "react";

const NotFound = () => (
    <div className="paper">
        <div className="row flex-center">
            <a
                className="font-btn paper-btn paper-btn-5"
                href="#"
            >
                <i
                    aria-hidden="true"
                    className="fa fa-frown-o fa-2x"
                />
            </a>
        </div>
        <div className="row flex-center margin-small">
            <h1 className="col-10 col margin-none">
                {"404 Not Found"}
            </h1>
        </div>
    </div>
);


export default NotFound;
