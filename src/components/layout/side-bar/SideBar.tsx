import React from "react";
import { Nav } from "react-bootstrap";
import "../../../assets/sass/SideBar.scss";
import logo from "../../../assets/image/logo.svg";

function SideBar(props: any) {
  return (
    <>
      <Nav className="d-none d-md-block my-side-bar" activeKey="/home">
        <Nav.Item>
          <div className="my-side-bar-brand">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="my-side-bar-brand-logo"
            />
            <span className="my-side-bar-brand-text">ePurchase</span>
          </div>
        </Nav.Item>
        <Nav.Item className="my-side-bar-item">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-side-bar-item">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-side-bar-item">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-side-bar-item">
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default SideBar;
