import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row } from "react-bootstrap";
import "../../assets/sass/Card.scss";

interface IProps {
  children: any;
  title: string;
}

function MyCard({ children, title }: IProps) {
  return (
    <>
      <div className="my-card">
        <Row className="my-card-title">
          {title}
          <FontAwesomeIcon
            className="my-card-caret-down"
            icon={["fas", "caret-down"]}
          />
        </Row>
        <div>
          <hr className="my-card-divider"></hr>
        </div>
        <Row className="my-card-content">{children}</Row>
      </div>
    </>
  );
}

export default MyCard;
