import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfilePicture extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      image: props.user.profile_picture.profile_pictureUrl
    };
  }

  render () {
    let image;
    debugger
    if (!this.props.user.profile_picture) {
      image = (
        <div className="profile-frame" style={{backgroundImage: "url(" + window.profile_placeholder + ")"}}>
        </div>
      );
    } else {
      image = (
        <div className="profile-frame" style={{backgroundImage: "url(" + this.state.image + ")"}}>
        </div>
      );
    }
    return (
      <div className="profile-pic-div">
        {image}
      </div>
    );
  }
}

export default withRouter(ProfilePicture);
