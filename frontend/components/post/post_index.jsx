import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      posts: props.posts.sort( (post1, post2) => { return new Date(post1.updated_at) - new Date(post2.updated_at);}),
      users: props.users
    };
  }

  componentDidMount() {
    this.props.fetchFeedPosts(this.props.currentUserId, this.state.offset);
  }

  componentWillReceiveProps(newProps) {
    this.setState({posts: newProps.posts, users: newProps.users});
  }

  render () {
    const items = this.state.posts.map( (post) => {
      return (
        <PostIndexItem
          post={post}
          author={this.state.users[post.author_id]}
          key={post.id}
          currentUserId={this.state.currentUserId}
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
