import React, { useState } from "react";
import { Checkbox, Image } from "react-bootstrap";
import discordLogo from "../../assets/images/icons/discord.png";
import Avatar from "../../assets/images/icons/Avatar.png";
import SocialCommentButtons from "./socialCommentButtons";

const FeedbackCard = ({
  currentKey,
  selectedKey,
  handleSelected,
  checkAll,
}) => {
  const [isClicked, setClicked] = useState(false);
  function handleClick() {
    handleSelected(currentKey);
  }

  return (
    <div
      onClick={handleClick}
      className={`fs-card ${
        selectedKey === currentKey || checkAll ? "active" : ""
      }`}
    >
      <div className="card-title">
        <div className="title-left">
          <Checkbox
            checked={isClicked || checkAll}
            onChange={() => setClicked(!isClicked)}
          />
          <div className="title-img">
            <div className="img-container">
              <Image src={discordLogo} alt="discord" className="discord" />
            </div>
            <p className="title-text">Automated feedback from Discord</p>
          </div>
        </div>
        <div className="title-right">
          <SocialCommentButtons showSocial={selectedKey === currentKey} />
        </div>
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veritatis
        ipsam sed ducimus suscipit provident. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Expedita delectus aliquam fuga nemo
        perspiciatis eaque, amet minus deleniti explicabo labore.
      </p>
      <div className="author">
        {/* <div className="img-container"> */}
        <Image src={Avatar} alt="avatar" className="avatar" />
        {/* </div> */}

        <p>Saira Khan</p>
        <p style={{ marginLeft: "20px" }}>3hrs ago via Discord</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
