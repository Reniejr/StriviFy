import React, { PureComponent } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//PERSONAL COMPONENTS IMPORTS
import HomePage from "../../../__PAGES/1.Homepage/HomePage";
import LoginPage from "../../../__PAGES/2.LoginPage/LoginPage";

//REDUX IMPORTS
import { setToken } from "../../../_STORE/Spotify/actions";
import { createUser } from "../../../_STORE/User/actions";

//UTILITIES IMPORTS
import { getToken, getAuthorized } from "../../../__UTILITIES/Spotify";

//STYLE
import "./RouterWeb.scss";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) =>
    dispatch((dispatch, getState) => {
      dispatch(setToken(token));
    }),
});

const token = getToken();
window.location.hash = "";

class RouterWeb extends PureComponent {
  componentDidMount() {
    if (token) {
      this.props.setToken(token);
    }
  }
  render() {
    return (
      <Router id="router-web">
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route
            path="/login"
            exact
            render={(props) => <LoginPage {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RouterWeb);
