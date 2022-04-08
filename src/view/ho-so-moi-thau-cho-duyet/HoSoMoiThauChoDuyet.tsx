import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../assets/sass/Card.scss";
import MyButtonWithIcon from "../../components/button/ButtonWithIcon";
import MyCard from "../../components/card/Card";
import CommentReceive from "../../components/comment/CommentReceive";
import CommentSend from "../../components/comment/CommentSend";
import MyInputComment from "../../components/input-text/InputComment";
import MyInputText from "../../components/input-text/InputText";
import MyStepProgressVertical from "../../components/step-progress/StepProgressVertical";
import MyTextWithAccount from "../../components/text/TextWithAccount";
import MyTextWithLabel from "../../components/text/TextWithLabel";

function HoSoMoiThauChoDuyet(props: any) {
  return (
    <>
      <Row>
        <Col md={9}>
          <MyCard title="This is title!!!">
            <Row className="my-card-content-row">
              <Col lg={4} md={4}>
                <MyInputText
                  id="id1"
                  name="name1"
                  label="this is label 1"
                  placeholder="this is placeholder"
                  icon="bell"
                />
              </Col>
              <Col lg={4} md={4}>
                <MyInputText
                  id="id2"
                  name="name2"
                  label="this is label 2"
                  placeholder="this is placeholder"
                  icon="bell"
                />
              </Col>
              <Col lg={4} md={4}>
                <MyInputText
                  id="id3"
                  name="name3"
                  label="this is label 3"
                  placeholder="this is placeholder"
                  icon="bell"
                />
              </Col>
            </Row>
            <Row className="my-card-content-row">
              <Col lg={8} md={8}>
                <MyInputText
                  id="id4"
                  name="name4"
                  label="this is label 4"
                  placeholder="this is placeholder"
                  icon="link"
                />
              </Col>
              <Col lg={4} md={4}>
                <MyInputText
                  id="id5"
                  name="name5"
                  label="this is label 5"
                  placeholder="this is placeholder"
                  icon="bell"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "15px" }} className="my-card-content-row">
              <MyButtonWithIcon
                style={{ marginLeft: "15px" }}
                label="Đính kèm"
                icon="link"
              />
            </Row>
          </MyCard>
          <MyCard title="This is title!!!"></MyCard>
          <MyCard title="This is title!!!"></MyCard>
          <MyCard title="This is title!!!"></MyCard>
          <MyCard title="This is title!!!"></MyCard>
          <MyCard title="This is title!!!"></MyCard>
        </Col>
        <Col md={3} className="my-no-padding-left">
          <MyCard title="This is title!!!">
            <Row className="my-card-content-row">
              <MyTextWithLabel
                label="This is label"
                content="This is content"
              />
            </Row>
            <Row className="my-card-content-row">
              <MyTextWithAccount
                label="This is label"
                content="Dang Phu Khang (FIS ES HN)"
              />
            </Row>
            <Row className="my-card-content-row">
              <MyTextWithLabel
                contentStyle={{ color: "#606060" }}
                label="This is label"
                content="This is content"
              />
            </Row>
          </MyCard>
          <MyCard title="This is title!!!">
            <MyStepProgressVertical />
          </MyCard>
          <MyCard
            style={{ paddingBottom: "0px" }}
            title="This is title!!!"
            footer={<MyInputComment />}
          >
            <Row className="my-card-content-row">
              <CommentReceive content="this is content" date="27 Apr 20222" />
            </Row>
            <Row className="my-card-content-row">
              <CommentReceive
                content="this is so long long content"
                date="27 Apr 20222"
              />
            </Row>
            <Row className="my-card-content-row">
              <CommentSend content="this is content" date="27 Apr 20222" />
            </Row>
          </MyCard>
        </Col>
      </Row>
    </>
  );
}

export default HoSoMoiThauChoDuyet;
