import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import WpButton from '../../components/Button/WpButton';
import WpInputText from '../../components/InputText/WpInputText';
import './Style.css';

const WpLogin = () => {
    return (
        <Container fluid className="">
  			<Row>
    			<Col sm={3} className="left" style={{ backgroundImage: "url(/img/left.png)" }}>
					<h3 className="display-3 p-3">Our website Moto</h3>
				</Col>
    			<Col sm={3} className="center" style={{ backgroundImage: "url(/img/center.png)" }}>
					
				</Col>
				<Col sm={6} className="right">
					<h1 className="display-1 pt-5">Welcome to WritePro</h1>
					<WpInputText placeholder="username" />
					<WpInputText placeholder="password" />
					<WpButton children="Submit" onclick="/home" />
				</Col>
  			</Row>
		</Container>
    )
}

export default WpLogin