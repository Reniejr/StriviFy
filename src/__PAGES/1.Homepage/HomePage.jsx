import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//REDUX IMPORTS
import { setToken } from "../../_STORE/Spotify/actions";

//UTILITIES IMPORTS

//PERSONAL COMPONENTS IMPORTS
import TopBar from "../../__COMPONENTS/1.HomePage_SubComp/0.TopBar/TopBar";
import Trending from "../../__COMPONENTS/1.HomePage_SubComp/1.Trending/Trending";
import Podcast from "../../__COMPONENTS/1.HomePage_SubComp/2.Podcast/Podcast";
import Moods from "../../__COMPONENTS/1.HomePage_SubComp/3.Moods/Moods";
import NewReleases from "../../__COMPONENTS/1.HomePage_SubComp/4.NewReleases/NewReleases";

//STYLE
import "./HomePage.scss";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
});

class HomePage extends PureComponent {
  componentDidMount() {}

  render() {
    // console.log(this.props);
    return (
      <div
        id="home-page"
        style={{
          paddingLeft: this.props.sideBar.toggle ? "250px" : "",
        }}
      >
        <Router>
          <TopBar />
          <Switch>
            <Route
              path="/home"
              exact
              render={(props) => <Trending {...props} />}
            />
            <Route
              path="/home/podcast"
              exact
              render={(props) => <Podcast {...props} />}
            />
            <Route
              path="/home/moods"
              exact
              render={(props) => <Moods {...props} />}
            />
            <Route
              path="/home/new-releases"
              exact
              render={(props) => <NewReleases {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
