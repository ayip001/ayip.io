// ./src/static/js/components/BlogList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Client from '../Client'

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  };

  componentDidMount() {
    Client.serve('posts', '1.0', 'all', posts => {
      this.setState({
        posts: posts,
        loading: false
      });
    });
  };

  render() {
    const { posts } = this.state;

    const list = posts.map((post, i) => (
      <div className="row flex-center">
        <Link to={'/blog/' + post.title} className="card" style={{width: '20rem'}}>
          <div className="card-body">
            { post.categories.includes("Blog") ?
              <p className="card-text text-secondary">Blog</p>:
              <p className="card-text text-success">Project</p> }
            <h4 className="card-title text-primary">{post.title}</h4>
          </div>
          <img className="image-bottom" src={post.cover_img_url} alt="Loading"/>
        </Link>
      </div>
    ));

    return (
      <div>
        { this.state.loading && <h1>Loading</h1> }
        { list }
      </div>
    );
  };
}

export default BlogList
