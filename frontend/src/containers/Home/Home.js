import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import { Row, Col, Image } from 'react-bootstrap'
import ButtonLight from "../../components/ButtonLight/ButtonLight";
import { Link } from "react-router-dom";
import allDeviceImg from "../../assets/allDevice.jpg"
import logoImg from "../../assets/logo.png"

const Home = () => {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>WritePro</title>
      </Helmet>
      <Row className="homepage-col-1 text-center m-0 py-5">
        <Col sm={8} className="centerDiv">
          <div>
          <Row>
            <p className="display-4 mx-auto">Search everything about anything!</p>
          </Row>
          <Row>
            <p class="h4">
                WritePro is a tool to minimize your efforts in online research. 
                Use keywords to search and get all relevant articles, 
                important information on one single page.
            </p>
          </Row>
          <Row className="my-4">
            <Col></Col>
            <Col>
            <Link to="/DashboardUser">
            <ButtonLight bSize="btn-lg" text="Click here, Try WritePro" />
            </Link>
            </Col>
            <Col></Col>
          </Row>
          </div>
        </Col>
        <Col sm={4} className="centerDiv">
          <Image className="" src={allDeviceImg} thumbnail />
        </Col>
      </Row>
      <Row className="homepage-col-2 text-center m-0 py-5">
        <Col sm={1}></Col>
        <Col sm={2} className="centerDiv">
          <Image className="" src={logoImg} />
        </Col>
        <Col sm={1}></Col>
        <Col sm={8} className="centerDiv">
          <div>
          <Row>
            <p className="display-4 mx-auto">Features</p>
          </Row>
          <Row>
            <p class="h4">
            Search using Keywords, 
            Add Filters, 
            Manage which Articles to use, 
            Generate Reports, 
            Share Reports with other Users.
            </p>
          </Row>
          </div>
        </Col>
      </Row>
      <div className=" row no-gutters">
        <div className="col-md-12">
          <div className="homepage-col-3 ">
            <div>
              <p class="display-4">REVIEWS</p>
            </div>

            <div>
              <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
                <h4
                  class="font-cond-l fg-accent lts-md mgb-10"
                  contenteditable="false"
                >
                  Not Yet Convinced?
                </h4>
                <h1
                  class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg"
                  contenteditable="false"
                >
                  Read Customer Reviews
                </h1>
              </div>
              <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                <li>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    class="wpx-100 img-round mgb-20"
                    title=""
                    alt=""
                    data-edit="false"
                    data-editor="field"
                    data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                  />
                  <p class="fs-110 font-cond-l" contenteditable="false">
                    " Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae. "
                  </p>
                  <h5
                    class="font-cond mgb-5 fg-text-d fs-130"
                    contenteditable="false"
                  >
                    Martha Stewart
                  </h5>
                  <small
                    class="font-cond case-u lts-sm fs-80 fg-text-l"
                    contenteditable="false"
                  >
                    Business Woman - New York
                  </small>
                </li>
                <li>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    class="wpx-100 img-round mgb-20"
                    title=""
                    alt=""
                    data-edit="false"
                    data-editor="field"
                    data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                  />
                  <p class="fs-110 font-cond-l" contenteditable="false">
                    " Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae. "
                  </p>
                  <h5
                    class="font-cond mgb-5 fg-text-d fs-130"
                    contenteditable="false"
                  >
                    Ariana Menage
                  </h5>
                  <small
                    class="font-cond case-u lts-sm fs-80 fg-text-l"
                    contenteditable="false"
                  >
                    Recording Artist - Los Angeles
                  </small>
                </li>
                <li>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    class="wpx-100 img-round mgb-20"
                    title=""
                    alt=""
                    data-edit="false"
                    data-editor="field"
                    data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                  />
                  <p class="fs-110 font-cond-l" contenteditable="false">
                    " Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae. "
                  </p>
                  <h5
                    class="font-cond mgb-5 fg-text-d fs-130"
                    contenteditable="false"
                  >
                    Sean Carter
                  </h5>
                  <small
                    class="font-cond case-u lts-sm fs-80 fg-text-l"
                    contenteditable="false"
                  >
                    Fund Manager - Chicago
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
