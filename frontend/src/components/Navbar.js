import React, { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Image, Col } from 'react-bootstrap';

const WpNavbar = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <Fragment>
      <Nav.Link href="/DashboardUser" >Dashboard</Nav.Link>
      <Nav.Link href="/login" >Login</Nav.Link>
      <Nav.Link href="/signup" >Sign Up</Nav.Link>
    </Fragment>
  );

  const authLinks = () => (
    <Nav.Link href="" onClick={logout}>Logout</Nav.Link>
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Col className="p-0">
          <Navbar.Brand>Writepro</Navbar.Brand>
        </Col>
        <Col className="p-0">
          <Nav.Link href="/UserProfile" >
            <Image className="float-right m-1" src="https://homepages.cae.wisc.edu/~ece533/images/zelda.png" height="40vh" roundedCircle />
          </Nav.Link>
        </Col>
      </Navbar>
      
      <Navbar style={{ "background-color": "#efefef" }} expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home<span className="sr-only">(current)</span></Nav.Link>
          
          {isAuthenticated ? authLinks() : guestLinks()}
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(WpNavbar);
