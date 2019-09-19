import React, { Component } from "react";

// store
import { connect } from "react-redux";
import { loginAdmin, setAdminData } from "../actions";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { getAuthTokenFromLS } from "../utils";
import { push } from "connected-react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "", //temporary text for form
      password: "", //temporary text for form
      redirect: false
    };
  }

  componentDidMount() {
    const authData = getAuthTokenFromLS();
    if (authData) this.props.redirectToDashboard(authData);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    this.props.loginAdmin(email, password);
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            onChange={e =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group">
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
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a
                          href="index.html"
                          className="btn btn-primary btn-user btn-block"
                          onClick={e => this.handleSubmit(e)}
                        >
                          Login
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <span className="small link-hover" onClick={() => this.props.redirectToRegister()}>
                          Create an Account!
                        </span>
                      </div>
                    </div>
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
    loginAdmin: (email, password) => {
      dispatch(loginAdmin(email, password));
    },
    redirectToDashboard: adminData => {
      dispatch(setAdminData(adminData));
      dispatch(push("/"));
    },
    redirectToRegister: adminData => {
      dispatch(push("/register"));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
