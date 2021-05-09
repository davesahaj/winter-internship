import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import Footer from "../../components/Footer/Footer";
import "./Signup.css";
import Inputgroup from "../../components/Inputgroup/Inputgroup";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (accountCreated) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container-fluid">
      <Helmet>
        <title>Create a new Account</title>
      </Helmet>
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-7 col-lg-7 bg-image"></div>
        <div className="col-md-5 col-lg-5 bg-white">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Sign Up</h3>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name*"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email*"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password*"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        minLength="6"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password*"
                        name="re_password"
                        value={re_password}
                        onChange={(e) => onChange(e)}
                        minLength="6"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary" type="submit">
                        Register
                      </button>
                    </div>

                    <div className="text-center">
                      <Link className="small" to="/login">
                        Already have an Account
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

export default connect(null, { signup })(Signup);
