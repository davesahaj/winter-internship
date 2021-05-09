import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ButtonLight from '../../components/ButtonLight/ButtonLight';
import Footer from '../../components/Footer/Footer';
import Inputgroup from '../../components/Inputgroup/Inputgroup';
import Titletext from '../../components/Titletext/Titletext';
import "./UserProfile.css";

const UserProfile = () => {
    return (
        <>
        <Container className="container--primary mt-4 mb-4">
            <div class="p-2">
                <Titletext text="User profile" />
            </div>
            <Container fluid>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Image className="m-auto centerImg" src="https://homepages.cae.wisc.edu/~ece533/images/zelda.png" height="200vh" roundedCircle />    
                        <div className="m-2">
                            <ButtonLight text="Change Image" />
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Inputgroup text="Username" />
                    </Col>
                    <Col>
                        <div className="m-2">
                            <ButtonLight text="Change" />
                        </div>
                    </Col>
                    </Row>
                <Row>
                    <Col>
                        <Inputgroup text="Email" />
                    </Col>
                    <Col>
                        <div className="m-2">
                            <ButtonLight text="Change" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Inputgroup text="Password" />
                    </Col>
                    <Col>
                        <div className="m-2">
                            <ButtonLight text="Change" />
                        </div>
                    </Col>
                </Row>
            <Row>
                <Col />
                <Col>
                    <div className="m-2">
                        <ButtonLight text="Apply changes" />
                    </div>
                </Col>
                <Col />
            </Row>
            </Container>
        </Container>
        <Footer />
        </>
    )
}

export default UserProfile;