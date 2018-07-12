import React from 'react';

export default (props) => {
  let image;
  if (typeof props.user.profile_picture === "undefined") {
    image = (
      <img className="profile_picture" src={`${window.profile_placeholder}`} />
    )
  }
  return (
    <div className="profile-frame">
      {image}
    </div>
  )
}
