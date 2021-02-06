//MAIN IMPORTS
import React, { PureComponent } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// REACT BOOTSTRAP

//REDUX IMPORTS
import { createUser } from "../../_STORE/User/actions";
import { setToken, getURLCode } from "../../_STORE/Spotify/actions";

//UTILITIES IMPORTS
import {
  getAuthorized,
  getAuthToken,
  getRefreshToken,
  getCode,
} from "../../__UTILITIES/Spotify";

//STYLE
import "./LoginPage.scss";
import {
  ToggleBtn,
  ToastDev,
  LogoStart,
} from "../../__COMPONENTS/__MAIN/2.General/General";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) =>
    dispatch((dispatch, getState) => {
      dispatch(createUser(user));
    }),
  setToken: (token) =>
    dispatch((dispatch, getState) => {
      dispatch(setToken(token));
    }),
  setCode: (code) => dispatch(getURLCode(code)),
});

class LoginPage extends PureComponent {
  state = {
    user: {
      username: null,
      password: null,
    },
    toggle: false,
    toastState: false,
    start: true,
    redirect: false,
  };

  toggle = () => {
    let toggle = !this.state.toggle;
    this.setState({ toggle: !this.state.toggle });
    if (toggle) {
      this.remember();
      console.log(localStorage.getItem("username"));
    }
  };

  fillLogin = (e) => {
    let user = { ...this.state.user },
      currentId = e.currentTarget.id;
    user[currentId] = e.currentTarget.value;
    this.setState({ user });
    if (!this.state.user.password) {
      this.closeToast();
    } else {
      this.toastShow();
    }
  };

  login = async () => {
    let tokens = await getAuthToken(this.props.spotify.code);
    // console.log(tokens.refresh_token);
    tokens = await {
      token: tokens.access_token,
      refresh_token: tokens.refresh_token,
    };
    this.props.setToken(tokens);
    await this.setState({ redirect: true });
  };

  getRefreshToken = () => {
    getRefreshToken();
  };

  remember = () => {
    localStorage.setItem("username", this.state.user.username);
    localStorage.setItem("password", this.state.user.password);
  };

  toastShow = () => {
    this.setState({ toastState: true });
  };

  closeToast = () => {
    this.setState({ toastState: false });
  };

  componentDidMount = () => {
    const code = getCode();
    this.props.setCode(code);
    if (code) {
      this.setState({ start: false });
      console.log(this.props);
    } else {
      setTimeout(() => {
        this.setState({ start: false });
        getAuthorized();
      }, 1800);
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div id="login-page">
          {this.state.start ? (
            <LogoStart />
          ) : (
            <Container>
              <header>
                <img src="./assets/spotify.png" alt="" />
                <span>Strivify</span>
              </header>
              <button id="login-fb">Log in with Facebook</button>
              <div className="separator">Or</div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={this.fillLogin}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.fillLogin}
              />
              <div className="remember">
                <span>Remember me</span>
                <ToastDev
                  toastState={this.state.toastState}
                  close={this.closeToast}
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
