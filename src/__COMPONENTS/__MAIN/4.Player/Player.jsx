import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

//REDUX
import { connect } from "react-redux";

//BOOTSTRAP
import { ProgressBar } from "react-bootstrap";

//UTILITIES
import { togglePlay } from "../../../__UTILITIES/Player";

//STYLE
import "./Player.scss";

const mapStateToProps = (state) => state.spotify;

class Player extends PureComponent {
  render() {
    return (
      <iframe
        id="player"
        title="player"
        src={`https://open.spotify.com/embed/${this.props.player.type}/${
          this.props.player.id ? this.props.player.id : ""
        }`}
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        style={{ display: this.props.location.pathname === "/" ? "none" : "" }}
      ></iframe>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Player));
