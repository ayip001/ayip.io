// ./src/static/js/components/Post.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Client from '../Client'
import NotFound from './NotFound'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.title,
      post: { title: 'loading' }
    };
  };

  componentDidMount() {
    Client.serve('posts', '1.0', 'post/' + this.state.title, post => {
      this.setState({
        post: post
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

    return (
      <div>
        <h1>{ post.title }</h1>
        <p>{ post.md }</p>
        <Link to='/blog'>Back</Link>
      </div>
    );
  };
}

export default Post
