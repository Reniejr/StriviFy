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

const mapStateToProps = (state) => state;

class Player extends PureComponent {
  render() {
    return (
      <div
        id="player"
        style={{ display: this.props.location.pathname === "/" ? "none" : "" }}
      >
        <div className="song-info">
          <img src="" alt="" />
          <div className="info">
            <p>Title</p>
            <p>Album</p>
            <p>Artist</p>
          </div>
          <i className="far fa-heart"></i>
        </div>
        <div className="main-controls">
          <div className="controls">
            <i className="fas fa-random"></i>
            <i className="fas fa-step-backward"></i>
            <i className="fas fa-play"></i>
            <i className="fas fa-step-forward"></i>
            <i className="fas fa-redo"></i>
          </div>
          <div className="time-bar">
            <span>00:00</span>
            <ProgressBar variant="success" now={20} />
            <span>00:00</span>
          </div>
        </div>
        <div className="side-controls">
          <i className="fas fa-list"></i>
          <i className="fas fa-volume-up"></i>
          <ProgressBar now={50} />
        </div>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Player));
