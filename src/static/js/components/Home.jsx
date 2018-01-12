// ./src/static/js/components/Home.jsx
import {Link} from "react-router-dom";
import React from "react";

const PROFILE_PIC_LINK = `https://cdn-images-1.medium.com/fit/c/500/500/
1*cTIK9Z8mjbSSHxVu6k4baQ.jpeg`;
const RESUME_LINK = `https://drive.google.com/file/d/
16XK27hQgnkwfmzc7mdgh2DaaK_Eg3UEp/view?usp=sharing`;

class Home extends React.Component {

    static shouldComponentUpdate () {
        return false;
    }

    static componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        const intro = (
            <div className="paper">
                <div className="row">
                    <h3 className="margin-none">
                        {"Hello, my name is"}
                    </h3>
                </div>
                <img
                    className="row flex-center avatar"
                    src={PROFILE_PIC_LINK}
                />
                <div className="row flex-center">
                    <h1 className="margin-none intro">
                        {"Angus Yip"}
                    </h1>
                </div>
                <div className="row flex-center margin-none">
                    <div className="col-6 col padding-none">
                        <div className="row margin-none">
                            <h3 className="margin-none intro">
                                {"I enjoy"}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row flex-center margin-none">
                    <h2 className="margin-none">
                        {"developing"}
                    </h2>
                </div>
                <div className="row flex-center margin-none">
                    <div className="col-6 col padding-none">
                        <div className="row flex-right margin-none">
                            <h3 className="margin-none intro">
                                {"as well as"}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row flex-center">
                    <h2 className="margin-none">
                        {"photography"}
                    </h2>
                </div>
            </div>
        );

        const links = (
            <div className="paper">
                <div className="row">
                    <h3 className="margin-none">
                        {"Check out my"}
                    </h3>
                </div>
                <div className="row flex-center child-borders">
                    <Link
                        className="paper-btn paper-btn-3 font-btn margin"
                        to="/blog"
                    >
                        {"Blogs & Projects"}
                    </Link>
                    <a
                        className="paper-btn paper-btn-1 font-btn margin"
                        href={RESUME_LINK}
                    >
                        {"Résumé"}
                    </a>
                </div>
            </div>
        );

        const contact = (
            <div className="paper">
                <div className="row">
                    <h3 className="margin-none">
                        {"Reach me at"}
                    </h3>
                </div>
                <div className="row flex-center child-borders">
                    <a
                        className="paper-btn margin-small"
                        href="mailto:hi@ayip.io"
                    >
                        <i
                            aria-hidden="true"
                            className="fa fa-envelope-o fa-2x"
                        />
                    </a>
                    <a
                        className="paper-btn margin-small"
                        href="https://github.com/ayip001"
                    >
                        <i
                            aria-hidden="true"
                            className="fa fa-github fa-2x"
                        />
                    </a>
                    <a
                        className="paper-btn margin-small"
                        href="https://www.linkedin.com/in/ayip001/"
                    >
                        <i
                            aria-hidden="true"
                            className="fa fa-linkedin-square fa-2x"
                        />
                    </a>
                    <a
                        className="paper-btn margin-small"
                        href="https://www.facebook.com/ayip001"
                    >
                        <i
                            aria-hidden="true"
                            className="fa fa-facebook-square fa-2x"
                        />
                    </a>
                    <a
                        className="paper-btn margin-small"
                        href="https://www.instagram.com/facade.photography"
                    >
                        <i
                            aria-hidden="true"
                            className="fa fa-instagram fa-2x"
                        />
                    </a>
                </div>
            </div>
        );

        return (
            <div className="row flex-spaces">
                <div className="sm-12 md-8 col">
                    {intro}
                </div>
                <div className="sm-12 md-4 col">
                    {links}
                    {contact}
                </div>
            </div>
        );
    }

}

export default Home;
