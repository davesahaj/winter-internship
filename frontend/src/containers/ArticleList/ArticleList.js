import React, { useState } from 'react';
import { Container, Row, Col, Badge, Table } from 'react-bootstrap'
import { connect, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import ButtonLight from '../../components/ButtonLight/ButtonLight';
import Footer from '../../components/Footer/Footer';
import Switchbox from '../../components/Switchbox/Switchbox';
import Titletext from '../../components/Titletext/Titletext';
import AddArticle from './AddArticle/AddArticle';

const ArticleList = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const Articles = props.articles;
    console.log(Articles);
    return (
        <>
        <Container className="container--primary mt-4 mb-4">
            <div class="p-2">
                <Titletext text="Article List" />
            </div>
            <Container fluid>
                <Row>
                    <Col>
                        <h4>Keywords - <Badge variant="primary">{props.keywords}</Badge></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Table size="sm" striped hover responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>title</th>
                        <th className="d-none d-sm-block">URL</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Articles.map((article) => (<tr>
                            <td>1</td>
                            <td><Link to="/ArticleView">
                                {article.title}
                                </Link>
                            </td>
                            <td className="d-none d-sm-block" onClick={()=> window.open(article.link, "_blank")} >
                                {article.link}
                            </td>
                            <td><Switchbox /></td>
                        </tr>
                        ))}
                      </tbody>
                    </Table>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 3, offset: 0 }}>
                        <div className="my-2">
                        <ButtonLight bSize="btn-lg" text="Add Article" onClick={() => setModalShow(true)} />
                        <AddArticle show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </Col>
                    <Col sm={{ span: 3, offset: 0 }}>
                        <div className="my-2">
                        <ButtonLight bSize="btn-lg" text="Add Multiple Articles" onClick={() => setModalShow(true)} />
                        </div>
                    </Col>
                    <Col sm={{ span: 4, offset: 2 }}>
                        <div className="my-2">
                            <Link to="/Report">
                            <ButtonLight bSize="btn-lg" text="Generate Report" btype="submit" />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Footer />
        </>
    );
};

const mapStateToProps = state => ({
    articles: state.articleListReducer.articles,
    keywords: state.articleListReducer.keywords,
  });

export default connect(mapStateToProps)(ArticleList);
