import React from "react";
import "../../assets/sass/InputComment.scss";

function MyInputComment() {
  return (
    <div style={{ width: "100%" }}>
      <input
        type="email"
        className="my-input-comment"
        placeholder="Type your comment ..."
      />
      <button
        type="button"
        className="my-input-comment-button my-input-comment-button-primary my-input-comment-button-inside"
      >
        Send
      </button>
    </div>
  );
}

export default MyInputComment;
