import React from 'react';
import UserProfilePicture from '../user/user_profile_picture';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   refFixed: false
    // };
    // this.checkPosition = this.checkPosition.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.checkPosition);
  }

  componentWillUnmount(){
    // window.removeEventListener('scroll', this.checkPosition);
  }

  // checkPosition (e) {
  //
  //   const elPos = this.refs.storiesDiv.getBoundingClientRect().top;
  //   const winPos = window.scrollY || window.pageYOffset;
  //
  //   if (elPos <= 75) {
  //     this.setState({refFixed: true});
  //   } else {
  //     this.setState({refFixed: false});
  //   }
  // }

  componentWillReceiveProps(newProps) {
  }

  render() {
    // const refFixed = this.state.refFixed;
    if (Object.keys(this.props.followedUsers).length === 0) {
      return (
        <div ref='storiesDiv' className={`stories-container`}>
          <section className="story-header">
            <UserProfilePicture user={this.props.currentUser}/>
            <span>{this.props.currentUser.username}</span>
          </section>
          <section className="story-index">
            <span> Stories from people you follow will show up here.</span>
          </section>
        </div>
      );
    }
    const storyItems = this.props.followeeIds.map( (followeeId) => {
      const followedUser = this.props.followedUsers.find(user => {
        return user.id === followeeId;
      });
    // ------ Process Dates --------
      const now = Date.now();
      const lastPost = Object.values(followedUser.posts).slice(-1);
      const updatedDate = new Date(lastPost.updated_at);
      const difference = now - updatedDate;
      let weeks = 0;
      let days = 0;
      let hours = Math.floor(difference / (1000*60*60));
        if (hours >= 24) {
          days = Math.floor(days/24);
          hours = hours % 24;
          if (days >= 7) {
            weeks = Math.floor(days / 7);
            days = days % 7;
          }
        }

    // ------ Set what to display --------

      let dateDisp;
      if (weeks > 0) {
        dateDisp = `Updated ${weeks} weeks, ${days} days, and ${hours} hours ago`;
      } else if (days > 0) {
          dateDisp = `Updated ${days} days, and ${hours} hours ago`;
      } else if (hours > 0){
          dateDisp = `Updated ${hours} hours ago`;
      } else {
          dateDisp = "Updated less than an hour ago";
      }
    // ----- end -----
      if (weeks <= 5) {
        return (
          <div className="date-difference">
            <UserProfilePicture key={`follower${followeeId}`} user={followedUser}/>
            <span className="date-disp">{dateDisp}</span>
          </div>
        );
      }
    });
    return(
      <div ref='storiesDiv' className={"story-container "}>
        <section className="story-header">
          <UserProfilePicture user={this.props.currentUser}/>
          <div className="stories-header-user-info">
            <span>{this.props.currentUser.username}</span>
          </div>
        </section>
        <section className="story-index">
          {storyItems}
        </section>
      </div>
    );
  }
}

export default Stories;
