import React, { Component } from "react";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import { connect } from "react-redux";
import { createNewUser } from "../actions";

import { push } from "connected-react-router";

// images

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "", //temporary text for form
      password: "" //temporary text for form
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let name = `${this.state.firstName} ${this.state.lastName}`;
    let password = this.state.password;
    let email = this.state.email;
    let industry = this.state.industry;
    this.props.createNewUser({ name, email, industry, password });
  }

  handleLogin(e) {
    this.props.redirectToLogin();
  }
  render() {
    return (
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="First Name"
                          onChange={e =>
                            this.setState({ firstName: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Last Name"
                          onChange={e =>
                            this.setState({ lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="Email Address"
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleIndustry"
                          placeholder="Industry"
                          onChange={e =>
                            this.setState({ industry: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <div data-tip="Must include at least 8 characters">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          onChange={e =>
                            this.setState({ password: e.target.value })
                          }
                        />
                        </div>
                      </div>
                      <div className="col-sm-6" >
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                        />

                        
                      </div>
                    </div>
                    <a
                      href="login.html"
                      className="btn btn-primary btn-user btn-block"
                      onClick={e => this.handleSubmit(e)}
                    >
                      Register Account
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <span className="small link-hover"
                      onClick={() => this.props.redirectToLogin()}>
                      Already have an account? Login!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: user => {
      dispatch(createNewUser(user));
    },
    redirectToLogin: adminData => {
      dispatch(push("/login"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
