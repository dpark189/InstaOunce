import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {

    const items = this.props.posts.map( (post) => {
      return (
        <PostIndexItem
          post={post}
          author={this.props.users[post.author_id]}
          key={post.id}
        />
      );
    });
    return (
      <section className="post-index-section">
        <h1>i'm a post index</h1>
        {items}
      </section>
    );
  }
}

export default PostIndex;
