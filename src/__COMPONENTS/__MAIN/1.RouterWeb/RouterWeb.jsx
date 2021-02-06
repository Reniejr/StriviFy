import React, { PureComponent } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//UTILITIES IMPORTS
import { getUser } from "../../../__UTILITIES";

//PERSONAL COMPONENTS IMPORTS
import HomePage from "../../../__PAGES/1.Homepage/HomePage";
import LoginPage from "../../../__PAGES/2.LoginPage/LoginPage";

//REDUX IMPORTS

//UTILITIES IMPORTS

//STYLE
import "./RouterWeb.scss";

const mapStateToProps = (state) => state;

class RouterWeb extends PureComponent {
  componentDidMount = async () => {
    getUser();
  };
  render() {
    return (
      <Router id="router-web">
        <Switch>
          <Route
            path="/home"
            exact
            render={(props) => <HomePage {...props} />}
          />
          <Route path="/" exact render={(props) => <LoginPage {...props} />} />
          <Route
            path="/?code"
            exact
            render={(props) => <LoginPage {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}
export default connect(mapStateToProps)(RouterWeb);
