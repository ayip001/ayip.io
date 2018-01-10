// ./src/static/js/components/Post.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import ReactDisqusComments from "react-disqus-comments"
import Client from '../Client'
import NotFound from './NotFound'
const ReactMarkdown = require('react-markdown')

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.title,
      post: { title: '', categories: [], date: '' },
      loading: true
    };
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    Client.serve('posts', 'post/' + this.state.title, post => {
      this.setState({
        post: post,
        loading: false
      });
    });
  };

  render() {
    const { post } = this.state;

    // if there is an error message, there is an error
    if (post.message)
    {
      console.log(new Error(post.message));
      return <NotFound />;
    };

    const len = post.categories.length;
    const categories = post.categories.map((category, i) => (
      <span key={ i }>
        { i + 1 === len && len !== 1 && 'and ' }
          <a href="#">{ category }</a>
        { i + 1 !== len && ', ' }
      </span>
    ));

    return (
      <div className="paper">
        { this.state.loading && <h1>Loading</h1> }
        <h1>{ post.title }</h1>
        <p className="article-meta">
          Written by <a href="#">{ post.author }</a>
          { ' on ' + post.date.split(' ').slice(0, 4).join(' ') }.
          Posted in { categories }.
        </p>
        <ReactMarkdown source={ post.md }/>
        <ReactDisqusComments
          shortname={ "ayip-io" }
          identifier={ post.title }
          title={ post.title }
          url={ window.location.href }
        />
        <div className="row flex-center child-borders margin">
          <Link to='/blog' className="paper-btn paper-btn-plain margin">
            Back
          </Link>
        </div>
      </div>
    );
  };
}

export default Post
