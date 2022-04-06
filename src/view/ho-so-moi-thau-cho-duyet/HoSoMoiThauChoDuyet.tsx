import React from "react";
import { Row } from "react-bootstrap";
import "../../assets/sass/Card.scss";

function HoSoMoiThauChoDuyet(props: any) {
  return (
    <>
      <Row>
        <div className="col-9">
          <div className="my-card">
            <h2>This is a test!!!</h2>
          </div>
        </div>
        <div className="col-3 my-no-padding-left">
          <div className="my-card">
            <h2>This is a test, too!!!</h2>
          </div>
        </div>
      </Row>
    </>
  );
}

export default HoSoMoiThauChoDuyet;
