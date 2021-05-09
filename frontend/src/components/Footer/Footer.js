import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container bottom_border">
        <Row>
          <Col>
          <h5 className="headin5_amrc col_white_amrc pt2 ">WritePro</h5>

          <p>
              <i className="fa fa-location-arrow"></i> DAIICT, Gandhinagar{" "}
            </p>
            <p>
              <i className="fa fa-phone"></i> +91-7737811426{" "}
            </p>
            <p>
              <i className="fa fa fa-envelope"></i> writepro@gmail.com{" "}
            </p>          
          </Col>

          <Col>
            <h5 className="headin5_amrc col_white_amrc pt2 text-uppercase">
              Quick links
            </h5>

            <ul className="footer_ul_amrc">
              <li>
                <a href="/DashboardUser">Dashboard</a>
              </li>
              <li>
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/Signup">Signup</a>
              </li>
            </ul>
          </Col>

          <Col>
            <h5 className="headin5_amrc col_white_amrc pt2 text-uppercase">
              Student Ids
            </h5>

            <ul className="footer_ul_amrc">
              <li>
                <a href="/D">201912117</a>
              </li>
              <li>
                <a href="/H">201912103</a>
              </li>
              <li>
                <a href="/L">201912084</a>
              </li>
            </ul>
          </Col>

          <Col className="">
          <h5 className="headin5_amrc col_white_amrc pt2 text-uppercase">
              Follow us
            </h5>

            <ul className="footer_ul2_amrc">
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  <a href="#">Facebook</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  <a href="#">twitter</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  <a href="#">Instagram</a>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      <div className="container">
        <p className="text-center">
          Copyright @2021 | Designed by <a href="#">WritePro Team</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
