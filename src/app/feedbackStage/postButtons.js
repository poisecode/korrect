import React, { useState } from "react";
import PostCanvas from "./postOffcanvas";

const PostButtons = ({ selectedComments = "02" }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <PostCanvas show={show} handleClose={() => setShow(false)} />
      <div className="post-btn-container">
        <p className="comments">{selectedComments} Comment Selected</p>
        <button className="btn">Create New Post</button>
        <button className="btn post" onClick={() => setShow(!show)}>
          Assign Existing Post
        </button>
      </div>
    </>
  );
};

export default PostButtons;
