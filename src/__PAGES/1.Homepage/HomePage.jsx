import React, { PureComponent } from "react";
import { connect } from "react-redux";

//REDUX IMPORTS
import { createUser } from "../../_STORE/User/actions";

//UTILITIES IMPORTS

//PERSONAL COMPONENTS IMPORTS
import LoginPage from "../2.LoginPage/LoginPage";

//STYLE
import "./HomePage.scss";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
});

class HomePage extends PureComponent {
  componentDidMount() {
    const user = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    };
    if (
      this.props.user.userList.filter(
        (users) => users.username === user.username
      ).length === 0 &&
      user.username !== null
    ) {
      this.props.createUser(user);
    }
    console.log(user);
  }
  render() {
    return (
      <div id="home-page">
        {this.props.spotify.token === null ? <LoginPage /> : <p>Connected</p>}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
