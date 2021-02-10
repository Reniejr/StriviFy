//MAIN IMPORTS
import React, { PureComponent } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// REACT BOOTSTRAP
import { Alert } from "react-bootstrap";

//REDUX IMPORTS
import { setUserList, loggedUser } from "../../_STORE/User/actions";
import { setToken, getURLCode } from "../../_STORE/Spotify/actions";

//UTILITIES IMPORTS
import {
  getAuthorized,
  getAuthToken,
  getCode,
} from "../../__UTILITIES/Spotify";

import { newUser, getUser } from "../../__UTILITIES";

//STYLE
import "./LoginPage.scss";
import {
  ToggleBtn,
  ToastDev,
  LogoStart,
} from "../../__COMPONENTS/__MAIN/2.General/General";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) =>
    dispatch((dispatch, getState) => {
      dispatch(setToken(token));
    }),
  setCode: (code) => dispatch(getURLCode(code)),
  setUserList: (userList) => dispatch(setUserList(userList)),
  loggedUser: (user) => dispatch(loggedUser(user)),
});

class LoginPage extends PureComponent {
  state = {
    user: {
      userName: null,
      password: null,
      email: null,
    },
    toggle: false,
    toastState: false,
    redirect: false,
    registered: true,
    alert: false,
  };

  toggle = async () => {
    if (this.state.user.email) {
      let toggle = !this.state.toggle;
      this.setState({ toggle: !this.state.toggle });
      if (toggle) {
        await newUser(this.state.user);
        const userList = await getUser();
        this.props.setUserList(userList);
        // console.log(localStorage.getItem("username"));
      }
    } else {
      this.setState({ alert: true });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 1500);
    }
  };

  fillLogin = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      this.login();
    } else {
      let user = { ...this.state.user },
        currentId = e.currentTarget.id;
      user[currentId] = e.currentTarget.value;
      this.setState({ user });
      if (!this.state.user.password) {
        this.setState({ toastState: false });
      } else {
        this.setState({ toastState: true });
      }
    }
  };

  login = async () => {
    //VALIDATION
    let validation = this.props.user.userList.filter(
      (user) =>
        user.userName === this.state.user.userName &&
        user.password === this.state.user.password
    );

    if (validation.length > 0) {
      this.props.loggedUser(validation[0]);
      await this.setState({ redirect: true });
    } else {
      this.setState({ alert: true });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 1500);
    }
  };

  componentDidMount = async () => {
    const userList = await getUser();
    this.props.setUserList(userList);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div id="login-page">
          {this.props.start ? (
            <LogoStart />
          ) : (
            <Container>
              <Alert
                variant="danger"
                style={{ display: this.state.alert ? "" : "none" }}
              >
                Oops! Something went wrong! Check your credentials
              </Alert>
              <header>
                <img src="https://i.ibb.co/c8rjG5S/spotify.png" alt="" />
                <span>Strivify</span>
              </header>
              <button id="login-fb">Log in with Facebook</button>
              <div className="separator">Or</div>
              <input
                type="text"
                id="userName"
                placeholder="Username"
                onChange={this.fillLogin}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.fillLogin}
                onKeyDown={this.fillLogin}
              />
              <p
                onClick={() =>
                  this.setState({ registered: !this.state.registered })
                }
              >
                Not Register to Strivify yet?
              </p>
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={this.fillLogin}
                style={{ display: this.state.registered ? "none" : "" }}
              />
              <div className="remember">
                <span>Remember me</span>
                <ToastDev
                  toastState={this.state.toastState}
                  close={() => this.setState({ toastState: false })}
                >
                  Click here to create an account on our database
                </ToastDev>
                <ToggleBtn
                  toggleState={this.state.toggle}
                  toggleAction={this.toggle}
                />
              </div>
              <button id="login" onClick={() => this.login()}>
                Log In
              </button>
            </Container>
          )}
        </div>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
