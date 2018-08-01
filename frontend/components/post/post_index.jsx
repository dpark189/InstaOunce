import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    this.props.fetchFeedPosts(this.props.currentUserId, this.state.offset);
  }

  render () {
    const items = Object.keys(this.props.posts).reverse().map( (key) => {
      return (
        <PostIndexItem
          post={this.props.posts[key]}
          author={this.props.users[this.props.posts[key].author_id]}
          key={key}
          currentUserId={this.props.currentUserId}
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
