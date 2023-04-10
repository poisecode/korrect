import React from "react";
import { Image } from "react-bootstrap";
import chatIcon from "../../assets/images/icons/chat-icon.svg";
import deleteIcon from "../../assets/images/icons/delete.svg";
import eyeShow from "../../assets/images/icons/eye-show.png";
import eyeHide from "../../assets/images/icons/eye-hide.jpeg";

const SocialCommentButtons = ({ showSocial }) => {
  return (
    <div className={`social ${showSocial ? "active" : ""}`}>
      <div className="social-container">
        <div className="icon-container">
          <Image
            src={eyeShow}
            alt="icon"
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="icon-container">
          <Image
            src={chatIcon}
            alt="icon"
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="icon-container">
          <Image
            src={deleteIcon}
            alt="icon"
            style={{ width: "25px", height: "25px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialCommentButtons;
