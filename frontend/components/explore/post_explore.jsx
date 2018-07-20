import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostExploreItem from './post_explore_item';
import ProfilePicture from '../user/user_profile_picture';

class PostExplore extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    let header;

    if (this.props.match.path === "/explore") {
      header = (<span className="explore-title">Explore</span>);
    } else if (this.props.match.path === "/hashtag/:hashtag") {
      header = (
        <section className="hashtag-header">
          <div className="profile-frame" style={{backgroundImage: "url(" + window.profile_placeholder + ")"}}>
          </div>
          <div className="tag-info">
            <h2>{`#${this.props.match.params.hashtag}`}</h2>
            <h4>{Object.keys(this.props.posts).length} Posts</h4>
          </div>
        </section>
      );
    }
    const items = Object.keys(this.props.posts).reverse().map( (key) => {
      return (
          <div className="explore-posts">
            <PostExploreItem
              key={`asdf${key}`}
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
        <div className="post-explore-header">
          {header}
        </div>
        <div className="post-explore-div">
          {items}
        </div>
      </section>
    );
  }
}

export default PostExplore;
