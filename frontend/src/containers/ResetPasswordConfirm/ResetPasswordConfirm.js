import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../../actions/auth";
import ButtonLight from "../../components/ButtonLight/ButtonLight";
import Footer from "../../components/Footer/Footer";
import "./ResetPasswordConfirm.css";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
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
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                      {/* <Textbox
                        text="New Password"
                        ttype="password"
                        tid="typePass"
                        value={new_password}
                        name="new_password"
                      /> */}
                      <input
                        className="form-control"
                        type="password"
                        placeholder="New Password"
                        name="new_password"
                        value={new_password}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      {/* <Textbox
                        text="Confirm New Password"
                        ttype="password"
                        tid="typePass"
                        value={re_new_password}
                        name="re_new_password"
                      /> */}
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm New Password"
                        name="re_new_password"
                        value={re_new_password}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <ButtonLight text="Reset Password" btype="submit" />
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
