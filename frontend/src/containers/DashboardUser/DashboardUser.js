import React, { useState } from "react";
import store from "../../store";
import "./DashboardUser.css";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Table } from 'react-bootstrap'
import { connect, useDispatch } from "react-redux";
import { articleList } from "../../actions/articleList";
import ButtonLight from "../../components/ButtonLight/ButtonLight";
import Titletext from "../../components/Titletext/Titletext";
import Footer from "../../components/Footer/Footer";
import AddFilters from "./AddFilters/AddFilters";
import InputDropdown from "../../components/InputDropdown/InputDropdown";
import InputgroupPrepend from "../../components/InputgroupPrepend/InputgroupPrepend";
import { Link } from "react-router-dom";

const DashboardUser = () => {
    const [modalShow, setModalShow] = useState(false);

    const [formData, setFormData] = useState({
        keywords: "Microservices",
        country: "India",
        language: "English",
      });
    const dispatch = useDispatch();

    function handleKeywordsChange (event) {
        const input = event.target
        const newKeywords = input.value
        setFormData({keywords: newKeywords});
    }

    const handleCountryChange =(e)=>{
        setFormData({country: e});
    }
    const handleLanguageChange =(e)=>{
        setFormData({language: e});
    }

    const handleSearchClicked = (e) => {
        console.log('Clicked');
        dispatch(articleList(formData));
        console.log(store.getState());
    }
  return (
      <>
    <Container className="container--primary mt-4">
                <div class="p-2">
                <Titletext text="Create a new report" />
                </div>

                <Container fluid>
                    <Row>
                        <Col xm={12} sm={4}>
                            <InputgroupPrepend
                            text="Keywords"
                            value={formData.keywords}
                            onChange={handleKeywordsChange}
                            isRequired={true}
                            />
                        </Col>
                        <Col xm={12} sm={4}>
                            <InputDropdown
                            text="Country"
                            value={formData.country}
                            onSelect={handleCountryChange}
                            isRequired={true}
                            />
                        </Col>
                        <Col xm={12} sm={4}>
                            <InputDropdown
                            text="Language"
                            value={formData.language}
                            onSelect={handleLanguageChange}
                            isRequired={true}
                            />
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col sm={{ span: 6, offset: 0 }}>
                            <div className="my-2">
                            <ButtonLight text="Add filters" onClick={() => setModalShow(true)} />
                            <AddFilters show={modalShow} onHide={() => setModalShow(false)} />
                            </div>
                        </Col>
                        <Col sm={{ span: 6, offset: 0 }}>
                            <div className="my-2">
                            <Link to="/ArticleList">
                                <ButtonLight text="Search" onClick={handleSearchClicked} />
                            </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="container--primary mt-4">
                <div class="p-2">
                    <Titletext text="Your reports" />
                </div>
            <Container fluid className="mb-4">
            <Row>
            <Table responsive className="reportsTable" borderless="true">
                <thead>
                    <tr>
                        <th>Keyword</th>
                        <th className="d-none d-sm-block">Language</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
            <tr className="reportRow">
                <td>ISRO</td>
                <td className="d-none d-sm-block">English</td>
                <td>02/05/2020</td>
                <td>
                    <ButtonLight text="View" btype="submit" bSize="btn-sm" />
                </td>
                <td>
                    <ButtonLight text="Edit" btype="submit" bSize="btn-sm" />
                </td>
            </tr>
            <tr className="reportRow">
                <td>Microservices</td>
                <td className="d-none d-sm-block">English</td>
                <td>03/05/2020</td>
                <td>
                    <ButtonLight text="View" btype="submit" bSize="btn-sm" />
                </td>
                <td>
                    <ButtonLight text="Edit" btype="submit" bSize="btn-sm" />
                </td>
            </tr>
            <tr className="reportRow">
                <td>Pizza</td>
                <td className="d-none d-sm-block">English</td>
                <td>03/05/2020</td>
                <td>
                    <ButtonLight text="View" btype="submit" bSize="btn-sm" />
                </td>
                <td>
                    <ButtonLight text="Edit" btype="submit" bSize="btn-sm" />
                </td>
            </tr>
            
            </tbody>
            </Table>
        </Row>
    </Container>
    </Container>
    <Footer />
</>
  );
};


export default DashboardUser;
