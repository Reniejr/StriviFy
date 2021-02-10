import React, { PureComponent } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//UTILITIES IMPORTS
import { getUser } from "../../../__UTILITIES";

//PERSONAL COMPONENTS IMPORTS
import HomePage from "../../../__PAGES/1.Homepage/HomePage";
import LoginPage from "../../../__PAGES/2.LoginPage/LoginPage";
import SideBar from "../3.SideBar/SideBar";
import Player from "../4.Player/Player";
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
        <SideBar />
        <Player />
        <Switch>
          <Route path="/" exact render={(props) => <LoginPage {...props} />} />
          <Route path="/home" render={(props) => <HomePage {...props} />} />
        </Switch>
      </Router>
    );
  }
}
export default connect(mapStateToProps)(RouterWeb);
