import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./side-bar/SideBar";
import NavBar from "./nav-bar/NavBar";
import "../../assets/sass/SideBar.scss";
import "../../assets/sass/NavBar.scss";
import "../../assets/sass/Layout.scss";

interface IProps {
  children: any;
}

function MyLayout({ children }: IProps) {
  return (
    <>
      <Container fluid className="my-layout">
        <Row>
          <Col style={{ minWidth: "200px" }} md={2} xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col md={10} xs={10} id="page-content-wrapper">
            <Row className="my-navbar-row">
              <NavBar />
            </Row>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyLayout;
