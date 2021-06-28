import React from "react";
import { Nav } from "react-bootstrap";
import PostImg from "./PostImg";
import PostIt from "./PostIt";
import PostVideo from "./PostVideo";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Nav defaultActiveKey="/home" className="flex-sm-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </div>
        <PostIt />
        <PostImg />
        <PostVideo />
    </>
  );
};

export default Dashboard;
