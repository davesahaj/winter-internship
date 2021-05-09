import React from 'react'
import { Container, Row, Col, Badge, Form, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ButtonLight from '../../components/ButtonLight/ButtonLight';
import Footer from '../../components/Footer/Footer';
import Inputgroup from '../../components/InputgroupPrepend/InputgroupPrepend';
import Titletext from '../../components/Titletext/Titletext';
import "./ArticleView.css";

const ArticleView = () => {
    return (
        <>
        <Container className="container--primary mt-4 mb-4">
            <div class="p-2">
                <Titletext text="Article" />
            </div>
            <Container fluid>
                <Row className="py-2">
                    <Card>
                    <Card.Header>What are microservices?</Card.Header>
                    <Card.Body>
                        <Card.Title>
                        <Link onClick={()=> window.open("https://microservices.io/", "_blank")}>
                        Article Link - https://microservices.io/
                        </Link>
                        </Card.Title>
                        <Card.Text>
                        The microservice architecture is not a silver bullet. It has several drawbacks. Moreover, 
                        when using this architecture there are numerous issues that you must address.
                        </Card.Text>
                        <Card.Text>
                        The microservice architecture pattern language is a collection of patterns for applying the microservice architecture. It has two goals:
                        </Card.Text>
                        <Card.Text>
                        1. The pattern language enables you to decide whether microservices are a good fit for your application.
                        </Card.Text>
                        <Card.Text>
                        2. The pattern language enables you to use the microservice architecture successfully.
                        </Card.Text>
                        <Card.Text>
                        A good starting point is the Monolithic Architecture pattern, which is the traditional architectural style that is still a good choice for many applications. 
                        It does, however, 
                        have numerous limitations and issues and so a better choice for large/complex applications is the Microservice architecture pattern.
                        </Card.Text>
                        <Link to="/ArticleList">
                        <ButtonLight text="Save changes" />
                        </Link>
                    </Card.Body>
                    </Card>
                </Row>
            </Container>
        </Container>
        <Footer />
        </>
    )
}

export default ArticleView;