import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row } from "react-bootstrap";
import "../../assets/sass/InputText.scss";

interface IProps {
  label: string;
  placeholder: string;
  icon: string;
}

function MyInputText({ label, placeholder, icon }: IProps) {
  return (
    <>
      <input className="my-input-text"/>
    </>
  );
}

export default MyInputText;
