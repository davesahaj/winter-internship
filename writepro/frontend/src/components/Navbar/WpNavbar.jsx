import React from 'react';
import { Nav, Navbar, NavDropdown, Image, Row, Col } from 'react-bootstrap';
import './Style.css';

const WpNavbar = () => {
    return (
		<div className="fixed-top">
		<div className="bg--light m-0">
		<Row>
			<Col>
			</Col>
			<Col className="text-center">
			<h2 className="m-3 align-middle">WritePro.in</h2>
			</Col>
			<Col>
				<Image className="float-right m-2" src="https://homepages.cae.wisc.edu/~ece533/images/zelda.png" height="50vh" roundedCircle />
			</Col>
		</Row>
		
		</div>
		<Navbar bg="dark" variant="dark" expand="lg">
  		<Navbar.Toggle aria-controls="basic-navbar-nav" />
  		<Navbar.Collapse id="basic-navbar-nav">
    	<Nav className="mr-auto">
      	<Nav.Link href="#home">Home</Nav.Link>
      	<Nav.Link href="#link">Link</Nav.Link>
  		<NavDropdown title="Dropdown" id="basic-nav-dropdown">
    		<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    		<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>        		<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    		<NavDropdown.Divider />
    		<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      	</NavDropdown>
    	</Nav>
  		</Navbar.Collapse>
		</Navbar>
		</div>
    )
}

export default WpNavbar
