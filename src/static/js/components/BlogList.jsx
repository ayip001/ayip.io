// ./src/static/js/components/BlogList.jsx
import Client from "../Client";
import {Link} from "react-router-dom";
import React from "react";

class BlogList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {"posts": []};
    }

    componentDidMount () {
        Client.serve("posts", "all", (posts) => {
            this.setState({
                posts
            });
        });
    }

    render () {
        const {posts} = this.state;
        const len = (post) => post.categories.length;
        const categories = (post) => post.categories.map((category, i) => (
            <span key={i}>
                {category}
                {i + 1 !== len(post) && " • "}
            </span>
        ));
        const list = posts.map((post, i) => (
            <div
                className="row flex-center"
                key={i}
            >
                <Link
                    className="card"
                    style={{"width": "20rem"}}
                    to={`/blog/${post.title}`}
                >
                    <div className="card-body">
                        {post.categories.includes("Blog")
                            ? <p className="card-text text-secondary">
                                Blog
                            </p>
                            : <p className="card-text text-success">
                                Project
                            </p>}
                        <p className="card-text text-muted">
                            { categories(post) }
                        </p>
                        <h4 className="card-title text-primary">
                            {post.title}
                        </h4>
                    </div>
                    <img
                        alt="Loading"
                        className="image-bottom"
                        src={post.cover_img_url}
                    />
                    <div className="card-body">
                        <span
                            className="card-read-more text-secondary"
                            href="#"
                        >
                            Read more &gt;&gt;
                        </span>
                    </div>
                </Link>
            </div>
        ));

        return (
            <div>
                {list}
            </div>
        );
    }

}

export default BlogList;
