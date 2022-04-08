import React from "react";
import "../../assets/sass/Text.scss";
import avatar from "../../assets/image/avatar.jpg";

interface IProps {
  label: string;
  content?: string;
  style?: any;
  labelStyle?: any;
  contentStyle?: any;
}

function MyTextWithAccount({
  label,
  content,
  style,
  labelStyle,
  contentStyle,
}: IProps) {
  return (
    <>
      <div style={style} className="my-text-with-account">
        <label style={labelStyle} className="my-text-with-account-label">
          {label}
        </label>
        <p style={contentStyle} className="my-text-with-account-content">
          <img alt="" src={avatar} className="my-text-with-account-avatar" />
          {content}
        </p>
      </div>
    </>
  );
}

export default MyTextWithAccount;
