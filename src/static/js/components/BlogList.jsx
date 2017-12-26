// ./src/static/js/components/BlogList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Client from '../Client'

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  };

  componentDidMount() {
    Client.serve('posts', '1.0', 'all', posts => {
      this.setState({
        posts: posts
      });
    });
  };

  render() {
    const { posts } = this.state;

    const list = posts.map((post, i) => (
      <tr>
        <td><Link to={'/blog/' + post.title}>{post.title}</Link></td>
        <td>{post.author}</td>
        <td>{post.date}</td>
        <td>{post.cover_img_url}</td>
      </tr>
    ));

    return (
      <div>
        <ul>
          { list }
        </ul>
      </div>
    );
  };
}

export default BlogList
