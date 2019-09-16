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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            onChange={e =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={e =>
                              this.setState({ password: e.target.value })
                            }
                          />
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a
                          href="index.html"
                          class="btn btn-primary btn-user btn-block"
                          onClick={e => this.handleSubmit(e)}
                        >
                          Login
                        </a>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="register.html">
                          Create an Account!
                        </a>
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
      dispatch(push("/dashboard"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
