import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image, Button } from "react-bootstrap";

const Avatar = (props) => {
  const { profile, count } = props;
  const inputRef = React.createRef();

  return (
    <div className="avatar-container">
      {profile ? (
        profile.image_url ? (
          <Image
            className="image-avatar"
            src={profile.image_url}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <span className="text-avatar">{profile.name.substring(0, 1)}</span>
        )
      ) : (
        <span className="text-avatar">{count || 0}</span>
      )}
    </div>
  );
};
Avatar.propTypes = {
  // getPosts: PropTypes.func
};
export default Avatar;
