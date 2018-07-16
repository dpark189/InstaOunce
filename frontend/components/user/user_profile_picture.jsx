import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let image;

    if ((typeof this.props.user.profile_picture === "undefined") || (typeof this.props.user.profile_picture === "null")) {
      image = (
        <div className="profile-frame" style={{backgroundImage: "url(" + window.profile_placeholder + ")"}}>
        </div>
      );
    } else {
      image = (
        <div className="profile-frame" style={{backgroundImage: "url(" + this.props.user.profile_picture.profile_pictureUrl + ")"}}>
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
