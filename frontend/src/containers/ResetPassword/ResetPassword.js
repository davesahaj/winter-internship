import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../../actions/auth";
import Footer from "../../components/Footer/Footer";
import "./ResetPassword.css";

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-fluid">
      <Helmet>
        <title>Reset your Password</title>
      </Helmet>
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-7 col-lg-7 bg-image"></div>
        <div className="col-md-5 col-lg-5 bg-white">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Reset Password</h3>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                      {/* <Textbox
                        text="Enter your Email"
                        ttype="email"
                        tid="typeEmail"
                      /> */}
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      {/* <ButtonLight text="Reset Password" btype="submit" /> */}
                      <button className="btn btn-primary" type="submit">
                        Reset Password
                      </button>
                    </div>
                  </form>
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

export default connect(null, { reset_password })(ResetPassword);
