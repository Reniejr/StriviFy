import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";

//STYLE
import "./TopBar.scss";

class TopBar extends PureComponent {
  selected = (path) => {
    let style = {};
    let clicked = {
      width: "100%",
      visibility: "visible",
    };
    let noClicked = {};
    this.props.location.pathname === path
      ? (style = clicked)
      : (style = noClicked);
    return style;
  };

  render() {
    return (
      <ul id="topBar">
        <li>
          <Link to="/home">Trending</Link>
          <span style={this.selected("/home")}></span>
        </li>
        <li>
          <Link to="/home/podcast">Podcast</Link>
          <span style={this.selected("/home/podcast")}></span>
        </li>
        <li>
          <Link to="/home/moods">Moods And Genres</Link>

          <span style={this.selected("/home/moods")}></span>
        </li>
        <li>
          <Link to="/home/new-releases">New Releases</Link>
          <span style={this.selected("/home/new-releases")}></span>
        </li>
        <li>
          <Link to="/home/discover">Discover</Link>
          <span style={this.selected("/home/discover")}></span>
        </li>
      </ul>
    );
  }
}
export default withRouter(TopBar);
