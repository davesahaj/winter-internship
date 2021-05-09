import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../../actions/auth";
import ButtonLight from "../../components/ButtonLight/ButtonLight";
import ButtonDark from "../../components/ButtonDark/ButtonDark";
import Footer from "../../components/Footer/Footer";
import Textbox from "../../components/Textbox/Textbox";
import Checkbox from "../../components/Checkbox/Checkbox";
import Radiobutton from "../../components/Radiobutton/Radiobutton";
import Switchbox from "../../components/Switchbox/Switchbox";
import axios from "axios";
import "./Activate.css";

const Activate = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-fluid">
      <Helmet>
        <title>Activate your Account</title>
      </Helmet>
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-7 col-lg-7 bg-image"></div>
        <div className="col-md-5 col-lg-5 bg-white">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Sign Up</h3>

                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={verify_account}
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);
