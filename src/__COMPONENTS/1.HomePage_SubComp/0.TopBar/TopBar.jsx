import React, { PureComponent } from "react";

//STYLE
import "./TopBar.scss";

export default class TopBar extends PureComponent {
  underline = {
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textDecorationColor: "limegreen",
    textUnderlineOffset: ".5rem",
  };

  selectedLi = (selected, actual) => {
    let style = {};
    actual === selected ? (style = this.underline) : (style = {});
    return style;
  };

  render() {
    let { select, selected } = this.props;
    return (
      <ul id="topBar">
        <li>
          <p
            onClick={(e) => select(e)}
            style={this.selectedLi(selected, "Trending")}
          >
            Trending
          </p>
          <span></span>
        </li>
        <li>
          <p
            onClick={(e) => select(e)}
            style={this.selectedLi(selected, "Podcast")}
          >
            Podcast
          </p>
          <span></span>
        </li>
        <li>
          <p
            onClick={(e) => select(e)}
            style={this.selectedLi(selected, "Moods And Genres")}
          >
            Moods And Genres
          </p>
          <span></span>
        </li>
        <li>
          <p
            onClick={(e) => select(e)}
            style={this.selectedLi(selected, "New Releases")}
          >
            New Releases
          </p>
          <span></span>
        </li>
        <li>
          <p
            onClick={(e) => select(e)}
            style={this.selectedLi(selected, "Discover")}
          >
            Discover
          </p>
          <span></span>
        </li>
      </ul>
    );
  }
}
