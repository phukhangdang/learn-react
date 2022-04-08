import React from "react";
import "../../assets/sass/Comment.scss";
import avatar from "../../assets/image/avatar.jpg";

interface IProps {
  content: string;
  date: string;
}

function CommentSend({ content, date }: IProps) {
  return (
    <div className="my-comment">
      <div className="my-comment-send">
        <div className="my-comment-inline">
          <span className="my-comment-content">{content}</span>
          <span className="my-comment-date">{date}</span>
        </div>
        <img alt="" src={avatar} className="my-comment-avatar" />
      </div>
    </div>
  );
}

export default CommentSend;
