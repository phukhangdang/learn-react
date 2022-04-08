import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../assets/sass/Button.scss";

interface IProps {
  label: string;
  icon: IconName;
  style?: any;
}

function MyButtonWithIcon({ label, icon, style }: IProps) {
  return (
    <button style={style} className="my-button">
      <FontAwesomeIcon icon={["fas", icon]} className="my-button-icon" />
      {label}
    </button>
  );
}

export default MyButtonWithIcon;
