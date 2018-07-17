import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostExploreItem from './post_explore_item';

class PostExplore extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    const items = Object.keys(this.props.posts).reverse().map( (key) => {
      return (
        <div className="explore-posts">
          <PostExploreItem
            key={key}
            post={this.props.posts[key]}
            author={this.props.users[this.props.posts[key].author_id]}
            createLike={this.props.createLike}
            deleteLike={this.props.deleteLike}
            currentUserId={this.props.currentUserId}
          />
        </div>
      );
    });
    return (
      <section className="post-explore-section">
        <div className="post-explore-div">
          {items}
        </div>
      </section>
    );
  }
}

export default PostExplore;
