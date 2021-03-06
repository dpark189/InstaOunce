import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchCommentsForPost } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { Link } from 'react-router-dom';
import UserProfilePicture from '../user/user_profile_picture';
import CommentIndex from '../comment/comment_index';
import CreateCommentFormContainer from '../comment/create_comment_form_container';
import reactStringReplace from 'react-string-replace';
import ImageSlide from './image_slide';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    let likedStatus;

    if ((props.post.likes_count === 0) || !props.post.likes_by_user_id) {
      likedStatus = false;
    } else {
      if (Object.values(props.post.likes_by_user_id).includes(props.currentUserId)){
        likedStatus = true;
      } else {
        likedStatus = false;
      }
    }

    this.state = {
      likedStatus,
      dispAll: false
    };
    this.state.fade = false;
    this.fadingDone = this.fadingDone.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDispAll = this.handleDispAll.bind(this);
  }

  componentDidMount() {
    const elm = this.refs.liking;
		elm.addEventListener('animationend', this.fadingDone);
    this.props.fetchCommentsForPost(this.props.post.id);
  }

  componentWillUnmount () {
    const elm = this.refs.liking;
    elm.removeEventListener('animationend', this.fadingDone);
  }

  fadingDone () {
    this.setState({fade: false});
  }

  handleDispAll (e) {
    this.setState({dispAll: true});
  }

  handleLikeClick(e) {
    this.setState({fade: true});
    if ((typeof this.props.post.likes_by_user_id === 'undefined') ||
      (typeof this.props.post.likes_by_user_id[this.props.currentUserId] === 'undefined')
    ) {
      this.props.createLike("Post", this.props.post.id, this.props.currentUserId).then(
        () => this.setState({likedStatus: true})
      );
    } else {
      this.props.deleteLike("Post", this.props.post.likes_by_user_id[this.props.currentUserId].like_id).then(
        () => this.setState({likedStatus: false})
      );
    }
  }


  // componentDidUpdate(prevProps, prevState) {
  //   if ((typeof this.props.post.likes_by_user_id === 'undefined') ||
  //     (typeof this.props.post.likes_by_user_id[this.props.currentUserId] === 'undefined')
  //   ) {
  //       this.setState({likedStatus: false});
  //     } else {
  //       this.setState({likedStatus: true});
  //     }
  // }

  componentWillReceiveProps(newProps) {
    if ((typeof newProps.post.likes_by_user_id === 'undefined') ||
      (typeof newProps.post.likes_by_user_id[newProps.currentUserId] === 'undefined'))
      {
        this.setState({likedStatus: false});
      } else {
        this.setState({likedStatus: true});
      }
  }

  render() {
    let images;
    const fade = this.state.fade;
    if ((typeof this.props.post.photos === "undefined" ) ||
    (Object.values(this.props.post.photos).length === 0 ) ||
    (typeof this.props.post.photos === "null")) {
      images = "";
    } else {
      images = (
          <ImageSlide images={this.props.post.photos}/>
        );
      }

    const likeCount = this.props.post.likes_count;
    const caption = reactStringReplace(this.props.post.caption, /#(\S+)/g, (match, i) => (
      <Link key={match + `${i}`} to={`/hashtag/${match}`}>{`#${match}`}</Link>
    ));

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const date = new Date(this.props.post.updated_at);
    const dispDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    let moreSpan;
    if (this.props.post.commentIds.length > 2) {
      moreSpan = (
        <span
          onClick={this.handleDispAll}
          className="disp-all-link">
          {!this.state.dispAll ? `more` : ""}
        </span>
      );
    }

    return(
      <div className="post-index-item-div">

        <section className="post-header">
          <div className="post-user-info">
            <UserProfilePicture user={this.props.author} />
            <Link className="user-show-page-link" to={`/users/${this.props.author.id}`}>
              <strong>{this.props.author.username}</strong>
            </Link>
          </div>
        </section>

        <section className="post-images" >
          <i ref='liking' className={`${fade ? 'fade' : ''} fas fa-heart post-icons like-icon-picture`} onDoubleClick={this.handleLikeClick}></i>
          {images}
        </section>

        <section className="post-sub-header">
          <div className="post-icon-links">
              <i
                onClick={this.handleLikeClick}
                className={`far fa-heart post-icons ${this.state.likedStatus}-like-icon`}
                >
              </i>
              <label htmlFor="comment-input">
                <i className="far fa-comment post-icons"></i>
              </label>
          </div>
          <div className="post-sub-header-likes">
            <strong>{likeCount} likes</strong>
          </div>
        </section>

        <section className="post-index-item-caption">
          <div className="post-index-item-caption-spans">
            <span>
              <strong>{this.props.author.username} </strong>{caption}
            </span>
            {moreSpan}
          </div>
          <CommentIndex
            dispAll={this.state.dispAll}
            commentIds={this.props.post.commentIds}
            parentType="Post"
            parentId={this.props.post.id}/>
          <div className="update-date">
            {dispDate}
          </div>
        </section>
        <section className="index-item-comment">
          <CreateCommentFormContainer
            parentType="Post"
            parentId={this.props.post.id}/>
        </section>

      </div>
    );
  }
}

const msp = (state, ownProps) => {

  const dummyPost = {
    id: "",
    author_id: state.session.id,
    caption: "",
    photos: {photoUrl: ""},
    commentIds: [],
    likes_by_user_id: "",
    likes_count: 0
  };
  const post = ownProps.post || dummyPost;
  return {
    post: post,
    errors: state.errors
  };
};

const mdp = (dispatch) => {
  return {
    fetchCommentsForPost: (postId) => dispatch(fetchCommentsForPost(postId)),
    createLike: (likedType, likedId, currentUserId) => dispatch(createLike(likedType, likedId, currentUserId)),
    deleteLike: (likedType, likedId, currentUserId) => dispatch(deleteLike(likedType, likedId, currentUserId))
  };
};

export default connect(msp, mdp)(PostIndexItem);
