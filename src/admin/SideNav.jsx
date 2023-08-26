import React from "react";
import { MdLogout } from "react-icons/md";
import { Navbar, Nav } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
const SideNav = ({ setNavState }) => {
  return (
    <Navbar variant="dark" expand="md">
      <Navbar.Brand className="text-dark">Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-dark">
        <AiOutlineMenu />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-dark" onClick={() => setNavState(1)}>
            All Users
          </Nav.Link>
          <Nav.Link className="text-dark" onClick={() => setNavState(2)}>
            Add number
          </Nav.Link>
          <Nav.Link className="text-dark" onClick={() => setNavState(3)}>
            Register new user
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="text-white btn btn-danger pl-3 pr-3 pt-2 pb-2">
            Log Out <MdLogout className="ml-1" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideNav;
