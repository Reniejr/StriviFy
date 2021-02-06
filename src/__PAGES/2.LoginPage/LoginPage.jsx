//MAIN IMPORTS
import React, { PureComponent } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//REDUX IMPORTS
import { createUser } from "../../_STORE/User/actions";

//UTILITIES IMPORTS
import { getAuthorized } from "../../__UTILITIES/Spotify";

//STYLE
import "./LoginPage.scss";

const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => ({
//   createUser: (user) =>
//     dispatch((dispatch, getState) => {
//       dispatch(createUser(user));
//     }),
// });

class LoginPage extends PureComponent {
  state = {
    user: {
      username: "",
      password: "",
    },
    toggle: false,
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
  };

  login = async () => {
    if (this.props.spotify.token) {
      this.setState({ redirect: true });
    } else {
      await getAuthorized();
    }
  };

  remember = () => {
    localStorage.setItem("username", this.state.user.username);
    localStorage.setItem("password", this.state.user.password);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div id="login-page">
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
              <div
                className="toggle-btn"
                style={{
                  backgroundColor: this.state.toggle ? "white" : "#0d0d0d",
                }}
              >
                <div
                  className="toggle"
                  onClick={() => this.toggle()}
                  style={
                    this.state.toggle
                      ? { backgroundColor: "#0d0d0d", marginLeft: "50%" }
                      : { backgroundColor: "white", marginLeft: "" }
                  }
                ></div>
              </div>
            </div>
            <button id="login" onClick={() => this.login()}>
              Log In
            </button>
          </Container>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps)(LoginPage);
