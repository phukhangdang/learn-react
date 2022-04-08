import React from "react";
import { Navbar } from "react-bootstrap";
import "../../../assets/sass/NavBar.scss";
import avatar from "../../../assets/image/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(props: any) {
  return (
    <>
      <Navbar className="my-navbar">
        <Navbar.Brand className="my-navbar-title">
          This is title!!!
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <FontAwesomeIcon
            className="my-navbar-notification"
            icon={["fas", "bell"]}
          />
          <img alt="" src={avatar} className="my-navbar-logo" />
          <div className="my-navbar-user">
            <span className="my-navbar-user-account">Phu Khang Dang</span>
            <span className="my-navbar-user-role">Admin</span>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
