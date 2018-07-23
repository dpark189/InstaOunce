import React from 'react';
import UserProfilePicture from '../user/user_profile_picture';
import StoryItem from './story_item';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refFixed: false,
      left: ""
    };
    this.checkPosition = this.checkPosition.bind(this);
  }

  componentDidMount() {
    this.props.fetchStories(this.props.currentUser.id);
    window.addEventListener('scroll', this.checkPosition);
    this.state.leftPos = this.refs.storiesDiv.getBoundingClientRect().x;
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.checkPosition);
  }

  checkPosition (e) {
    const elPos = this.refs.storiesDiv.getBoundingClientRect().top;
    const winPos = window.scrollY;
    const left = this.refs.storiesDiv.getBoundingClientRect().x;
    if (winPos > elPos) {
      this.setState({refFixed: true, left: this.state.leftPos});
    } else {
      this.setState({refFixed: false, left: ""});
    }
  }

  componentWillReceiveProps(newProps) {
  }

  render() {
    const refFixed = this.state.refFixed;
    let storyItems;
    if ((typeof this.props.users === "undefined") || (this.props.currentUser.followeeIds.length === 0)) {
      storyItems = (
        <span>Stories from people you follow will show up here.</span>
      );
    } else {
      const followedUsers = this.props.users;
      const fiveDaysAgo = new Date();
      fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
      const now = new Date();
      const validUsers = followedUsers.filter( user => {
        if (( typeof user.last_update !== "undefined" ) &&
        ( new Date(now) - new Date(user.last_update) < fiveDaysAgo )) {
          return user;
        }
      });
      validUsers.sort( (user1, user2) => {
        return Date(user1.last_update) - Date(user2.last_update);
      });
      storyItems = validUsers.map( user => {
        return (
          <StoryItem user={user}/>
        );
      });
    }

    return(
      <div ref='storiesDiv' className={`story-container fixed-${this.state.refFixed}`} style={{left: this.state.left}}>
        <div className="story-container-div">
          <section className="story-header">
            <UserProfilePicture user={this.props.currentUser}/>
            <span>{this.props.currentUser.username}</span>
          </section>
          <section className="story-index">
            <div className="story-item-div">
              {storyItems}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Stories;
