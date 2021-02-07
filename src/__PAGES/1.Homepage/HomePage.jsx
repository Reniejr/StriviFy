import React, { PureComponent } from "react";
import { connect } from "react-redux";

//REDUX IMPORTS
import { createUser } from "../../_STORE/User/actions";
import { setToken } from "../../_STORE/Spotify/actions";

//UTILITIES IMPORTS
import { searchFetch, getPlaylistFetch } from "../../__UTILITIES";
//PERSONAL COMPONENTS IMPORTS

//STYLE
import "./HomePage.scss";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  setToken: (token) => dispatch(setToken(token)),
});

class HomePage extends PureComponent {
  componentDidMount() {
    // const user = {
    //   username: localStorage.getItem("username"),
    //   password: localStorage.getItem("password"),
    // };
    // if (
    //   this.props.user.userList.filter(
    //     (users) => users.username === user.username
    //   ).length === 0 &&
    //   user.username !== null
    // ) {
    //   this.props.createUser(user);
    // }
    // console.log(user);
    if (this.props.spotify.token) {
      getPlaylistFetch();
    }
  }
  render() {
    // console.log(this.props);
    return (
      <div id="home-page">
        <button onClick={() => searchFetch()}>get refresh token</button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
