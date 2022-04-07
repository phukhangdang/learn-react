import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../assets/sass/Card.scss";
import MyCard from "../../components/card/Card";
import MyInputText from "../../components/input-text/InputText";

function HoSoMoiThauChoDuyet(props: any) {
  return (
    <>
      <Row>
        <Col md={9}>
          <MyCard title="This is title!!!">
            <Row className="my-card-content-row">
              <Col lg={4} md={4}>
                <MyInputText
                  label="this is label"
                  placeholder="this is placeholder"
                  icon="icon"
                />
              </Col>
              <Col lg={4} md={4}>
                <MyInputText
                  label="this is label"
                  placeholder="this is placeholder"
                  icon="icon"
                />
              </Col>
              <Col lg={4} md={4}>
                <MyInputText
                  label="this is label"
                  placeholder="this is placeholder"
                  icon="icon"
                />
              </Col>
            </Row>
          </MyCard>
        </Col>
        <Col md={3} className="my-no-padding-left">
          <MyCard title="This is title!!!">
            <h2>This is content!!!</h2>
          </MyCard>
        </Col>
      </Row>
    </>
  );
}

export default HoSoMoiThauChoDuyet;
