import React, { useState } from 'react'
import { Container, Row, Tabs, Tab, Col, Card, Badge, ProgressBar, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ButtonLight from '../../components/ButtonLight/ButtonLight';
import Footer from '../../components/Footer/Footer';
import Titletext from '../../components/Titletext/Titletext';
import "./Report.css";

const Report = () => {
    const [key, setKey] = useState('home');

    return (
        <>
        <Container className="container--primary mt-4 mb-4">
            <div class="p-2">
                <Titletext text="Report" />
            </div>
            <Container fluid>
                <Row className="py-2">
                    <Col>
                    <Container className="bgBrown container--primary p-2">
                    <Tabs
                    className="my-2"
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    >
                    <Tab eventKey="ar1" title="Article 1">
                        <Row>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Word Count</Card.Title>
                              <h1 className=""><Badge variant="dark">502</Badge></h1>
                              </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Readability level</Card.Title>
                              <h1 className=""><Badge variant="primary">Collage</Badge></h1>
                              </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Keyword frequency</Card.Title>
                              <h1 className=""><Badge variant="secondary">10 Times</Badge></h1>  
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="ar2" title="Article 2">
                    <Row>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Word Count</Card.Title>
                              <h1 className=""><Badge variant="dark">354</Badge></h1>
                              </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Readability level</Card.Title>
                              <h1 className=""><Badge variant="primary">Collage</Badge></h1>
                              </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Keyword frequency</Card.Title>
                              <h1 className=""><Badge variant="secondary">13 Times</Badge></h1>  
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="ar3" title="Article 3">
                    <Row>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Word Count</Card.Title>
                              <h1 className=""><Badge variant="dark">414</Badge></h1>
                              </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Readability level</Card.Title>
                              <h1 className=""><Badge variant="primary">School</Badge></h1>
                              </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card className="text-center">
                              <Card.Body>
                              <Card.Title>Keyword frequency</Card.Title>
                              <h1 className=""><Badge variant="secondary">16 Times</Badge></h1>  
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Tab>
                    </Tabs>
                    </Container>
                    </Col>
                </Row>
                <Row className="py-2">
                    <Col>
                        <Container className="bgBrown container--primary p-2">
                            <Row className="p-4">
                                <CardDeck>
                                <Card className="text-center">
                                <Card.Header>Rank 1</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 02</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 2</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 01</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 3</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 03</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 4</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 05</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 5</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 04</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 6</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 06</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                </CardDeck>
                                <CardDeck className="mt-2">
                                <Card className="text-center">
                                <Card.Header>Rank 7</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 11</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 8</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 07</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 9</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 10</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 10</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 08</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 11</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 09</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                <Card className="text-center">
                                <Card.Header>Rank 12</Card.Header>
                                <Card.Body>
                                    <Card.Text><h4><Badge variant="success">Article 12</Badge></h4></Card.Text>
                                </Card.Body>
                                </Card>
                                </CardDeck>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="py-2">
                    <Col>
                        <Card>
                        <Card.Header>Summary</Card.Header>
                        <Card.Body>
                            <Card.Title>Keywords - Keyword, Keyword, Keyword</Card.Title>
                            <Card.Text>
                            Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at the wicket with the bat (and running between the wickets), while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter (so they are "out"). Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side either catching the ball after it is hit by the bat and before it hits the ground, or hitting a wicket with the ball before a batter can cross the crease in front of the wicket. When ten batters have been dismissed, the innings ends and the teams swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches. They communicate with two off-field scorers who record the match's statistical information.
                            </Card.Text>
                            <Card.Text>
                            Forms of cricket range from Twenty20, with each team batting for a single innings of 20 overs, to Test matches played over five days. Traditionally cricketers play in all-white kit, but in limited overs cricket they wear club or team colours. In addition to the basic kit, some players wear protective gear to prevent injury caused by the ball, which is a hard, solid spheroid made of compressed leather with a slightly raised sewn seam enclosing a cork core layered with tightly wound string.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="py-2">
                    <Col sm={{ span: 6, offset: 0 }}>
                        <div className="my-2">
                        <ButtonLight bSize="btn-lg" text="Download" />
                        </div>
                    </Col>
                    <Col sm={{ span: 6, offset: 0 }}>
                        <div className="my-2">
                            <Link to="/Invitations">
                            <ButtonLight bSize="btn-lg" text="Share" btype="submit" />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Footer />
        </>
    )
}

export default Report;