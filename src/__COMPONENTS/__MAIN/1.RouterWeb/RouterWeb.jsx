import React, { PureComponent } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//UTILITIES IMPORTS
import {
  getCode,
  getAuthToken,
  getAuthorized,
} from "../../../__UTILITIES/Spotify";

//PERSONAL COMPONENTS IMPORTS
import HomePage from "../../../__PAGES/1.Homepage/HomePage";
import LoginPage from "../../../__PAGES/2.LoginPage/LoginPage";
import SideBar from "../3.SideBar/SideBar";
import Player from "../4.Player/Player";

//REDUX IMPORTS
import { getURLCode, setToken } from "../../../_STORE/Spotify/actions";
//UTILITIES IMPORTS

//STYLE
import "./RouterWeb.scss";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setCode: (code) => dispatch(getURLCode(code)),
  setToken: (tokens) => dispatch(setToken(tokens)),
});

class RouterWeb extends PureComponent {
  state = {
    start: true,
  };

  componentDidMount = async () => {
    const code = getCode();
    this.props.setCode(code);
    if (code) {
      this.setState({ start: false });
      // console.log(this.props);
      let tokens = await getAuthToken(code);
      console.log(tokens.refresh_token);
      tokens = await {
        token: tokens.access_token,
        refresh_token: tokens.refresh_token,
      };
      localStorage.setItem("refresh_token", tokens.refresh_token);
      this.props.setToken(tokens);
    } else {
      setTimeout(() => {
        this.setState({ start: false });
        getAuthorized();
      }, 1800);
    }
  };
  render() {
    return (
      <Router id="router-web">
        <SideBar />
        <Player />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <LoginPage {...props} start={this.state.start} />
            )}
          />
          <Route path="/home" render={(props) => <HomePage {...props} />} />
        </Switch>
      </Router>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RouterWeb);
