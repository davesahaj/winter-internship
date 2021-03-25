import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import WpHeading from '../../../components/Heading/WpHeading';
import WpLoginForm from '../LoginForm/WpLoginForm';
import './Style.css';

const WpLoginDiv = () => {
    return (
        <Container fluid className="">
  			<Row>
    			<Col sm={3} className="left" style={{ backgroundImage: "url(/img/left.png)" }}>
					<WpHeading headingSize="heading--medium" children="Our website Moto" />
				</Col>
    			<Col sm={3} className="center" style={{ backgroundImage: "url(/img/center.png)" }}>
					
				</Col>
				<Col sm={6} className="right d-flex">
					<div class="justify-content-center align-self-center">
						<WpHeading children="Welcome to WritePro" />
						<WpLoginForm />
					</div>
				</Col>
  			</Row>
		</Container>
    )
}

export default WpLoginDiv