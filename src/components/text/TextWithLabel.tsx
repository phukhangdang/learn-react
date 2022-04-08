import React from "react";
import "../../assets/sass/Text.scss";

interface IProps {
  label: string;
  content?: string;
  style?: any;
  labelStyle?: any;
  contentStyle?: any;
}

function MyTextWithLabel({
  label,
  content,
  style,
  labelStyle,
  contentStyle,
}: IProps) {
  return (
    <>
      <div style={style} className="my-text-with-label">
        <label style={labelStyle} className="my-text-with-label-label">
          {label}
        </label>
        <p style={contentStyle} className="my-text-with-label-content">
          {content}
        </p>
      </div>
    </>
  );
}

export default MyTextWithLabel;
