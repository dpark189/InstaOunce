import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      posts: props.posts,
      users: props.users
    };
    this.checkLoadMore = this.checkLoadMore.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeedPosts(this.props.currentUserId, this.state.offset);
    window.addEventListener('scroll', this.checkLoadMore);
  }

  loadCompVisibile(el){
    const comp = el.getBoundingClientRect();
    return (comp.top >= 0 && comp.left >= 0 &&
      comp.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      comp.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  checkLoadMore() {
    const loadComp = this.refs.loadMore;
    if (this.loadCompVisibile(loadComp)) {
      this.setState({offset: this.state.offset + 1});
      this.props.fetchFeedPosts(this.props.currentUserId, this.state.offset);
    }
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
          currentUserId={this.props.currentUserId}
        />
      );
    });
    return (
      <section className="post-index-section">
        {items}
        <div ref="loadMore" className="post-index-item-div"></div>
      </section>
    );
  }
}

export default PostIndex;
