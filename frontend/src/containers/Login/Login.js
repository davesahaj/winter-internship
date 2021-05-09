import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import ButtonLight from "../../components/ButtonLight/ButtonLight";
import Footer from "../../components/Footer/Footer";
import Textbox from "../../components/Textbox/Textbox";
import "./Login.css";
import Inputgroup from "../../components/Inputgroup/Inputgroup";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-fluid">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-7 col-lg-7 bg-image"></div>
        <div className="col-md-5 col-lg-5 bg-white">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                      <Inputgroup placeholder="Email" type="email" id="typeEmail" isRequired={true}/>
                    </div>

                    <div className="form-group">
                      <Inputgroup placeholder="Password" type="password" id="typePass" isRequired={true}/>
                    </div>

                    <div className="form-group">
                      <ButtonLight text="Log in" btype="submit" />
                    </div>

                    <div className="text-center">
                      <Link className="small" to="/reset-password">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/signup">
                        Don't have an account?
                      </Link>
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
