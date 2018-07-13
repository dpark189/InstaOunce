import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    const items = Object.keys(this.props.posts).reverse().map( (key) => {
      return (
        <PostIndexItem
          post={this.props.posts[key]}
          author={this.props.users[this.props.posts[key].author_id]}
          key={key}
        />
      );
    });
    return (
      <section className="post-index-section">
        {items}
      </section>
    );
  }
}

export default PostIndex;
