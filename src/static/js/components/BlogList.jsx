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
    Client.serve('posts', 'all', posts => {
      this.setState({
        posts: posts,
        loading: false
      });
    });
  };

  render() {
    const { posts } = this.state;

    const len = (post) => post.categories.length;
    const categories = (post) => (post.categories.map((category, i) => (
      <span key={ i }>
        { category }
        { i + 1 !== len(post) && ' • ' }
      </span>
    )));

    const list = posts.map((post, i) => (
      <div key={ i } className="row flex-center">
        <Link to={'/blog/' + post.title} className="card" style={{width: '20rem'}}>
          <div className="card-body">
            { post.categories.includes("Blog") ?
              <p className="card-text text-secondary">Blog</p>:
              <p className="card-text text-success">Project</p> }
            <p className="card-text text-muted">{ categories(post) }</p>
            <h4 className="card-title text-primary">{post.title}</h4>
          </div>
          <img className="image-bottom" src={post.cover_img_url} alt="Loading"/>
          <div className="card-body">
            <span className="card-read-more text-secondary" href="#">Read more >></span>
          </div>
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
