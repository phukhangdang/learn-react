import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../assets/sass/InputText.scss";

interface IProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  icon: IconName;
}

function MyInputText({ name, id, label, placeholder, icon }: IProps) {
  return (
    <div className="my-form-group">
      <input
        type="input"
        className="my-form-field"
        placeholder={placeholder}
        name={name}
        id={id}
      />
      <label htmlFor={id} className="my-form-label">
        {label}
      </label>
      <FontAwesomeIcon icon={["fas", icon]} className="my-text-input-icon" />
    </div>
  );
}

export default MyInputText;
