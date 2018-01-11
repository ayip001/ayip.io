// ./src/static/js/components/Post.jsx
import Client from "../Client";
import {Link} from "react-router-dom";
import NotFound from "./NotFound";
import React from "react";
import ReactDisqusComments from "react-disqus-comments";
import ReactMarkdown from "react-markdown";

class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            "post": {
                "categories": [],
                "date": "",
                "title": ""
            },
            "title": this.props.match.params.title
        };
    }

    componentDidMount () {
        window.scrollTo(0, 0);
        Client.serve("posts", `post/${this.state.title}`, (post) => {
            this.setState({post});
        });
    }

    render () {
        const {post} = this.state;

        // If there is an error message, there is an error
        if (post.message) {
            console.log(new Error(post.message));
            return <NotFound />;
        }

        const len = post.categories.length;
        const categories = post.categories.map((category, i) => (
            <span key={i}>
                {i + 1 === len && len !== 1 && "and "}
                <a href="#">
                    { category }
                </a>
                {i + 1 !== len && ", "}
            </span>));

        return (
            <div className="paper">
                <h1>
                    {post.title}
                </h1>
                <p className="article-meta">
                    {"Written by "}
                    <a href="#">
                        {post.author}
                    </a>
                    {` on ${post.date.split(" ").slice(0, 4).
                        join(" ")}. Posted in `}
                    {categories}
                    {"."}
                </p>
                <ReactMarkdown source={post.md} />
                <ReactDisqusComments
                    identifier={post.title}
                    shortname="ayip-io"
                    title={post.title}
                    url={window.location.href}
                />
                <div className="row flex-center child-borders margin">
                    <Link
                        className="paper-btn paper-btn-plain margin"
                        to="/blog"
                    >
                        {"Back"}
                    </Link>
                </div>
            </div>
        );
    }
}

export default Post;
