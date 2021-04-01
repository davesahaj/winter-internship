import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import WpHeading from '../../../components/Heading/WpHeading';
import WpButton from '../../../components/Button/WpButton'
import WpInputText from '../../../components/InputText/WpInputText'
import './Style.css';
import { Link } from 'react-router-dom';

const WpLoginPrimaryDiv = () => {
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
						<WpInputText placeholder="Enter Username" inputTextStyle="inputText--primary" />
						<Link to="/login2">
							<WpButton children="SUBMIT" buttonSize="btn--xxl" />
						</Link>
            			
            			<p / >
            			<p>or</p>
            			<WpButton children="Continue with Google" buttonStyle="btn--google" buttonSize="btn--xl" />
          			</div>
				</Col>
  			</Row>
		</Container>
    )
}

export default WpLoginPrimaryDiv