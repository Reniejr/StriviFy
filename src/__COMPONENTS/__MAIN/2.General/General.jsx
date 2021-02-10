import React, { PureComponent } from "react";
import { connect } from "react-redux";

//REDUX IMPORTS
import { setPlaylist } from "../../../_STORE/Spotify/actions";

//REACT BOOTSTRAP
import { Toast, Col } from "react-bootstrap";

//STYLE
import "./General.scss";

//REDUX
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setPlaylist: (playlist) => dispatch(setPlaylist(playlist)),
});

//TOAST
export class ToastDev extends PureComponent {
  render() {
    let { toastState, close } = this.props;
    return (
      <Toast style={{ opacity: toastState ? "1" : "0" }}>
        <Toast.Header>
          <img
            src="https://i.ibb.co/c8rjG5S/spotify.png"
            className="rounded mr-2"
            alt=""
            width="20px"
            height="20px"
          />
          <strong className="mr-auto">Strivify</strong>
          <button onClick={close}>x</button>
        </Toast.Header>
        <Toast.Body>{this.props.children}</Toast.Body>
      </Toast>
    );
  }
}

//TOGGLE
export class ToggleBtn extends React.PureComponent {
  render() {
    const { toggleState, toggleAction } = this.props;
    return (
      <div
        className="toggle-btn"
        style={{
          backgroundColor: toggleState ? "white" : "#0d0d0d",
        }}
      >
        <div
          className="toggle"
          onClick={toggleAction}
          style={
            toggleState
              ? { backgroundColor: "#0d0d0d", marginLeft: "50%" }
              : { backgroundColor: "white", marginLeft: "" }
          }
        ></div>
      </div>
    );
  }
}

//LOGO START
export class LogoStart extends React.PureComponent {
  render() {
    return (
      <div className="logo">
        <img src="https://i.ibb.co/c8rjG5S/spotify.png" alt="" />
      </div>
    );
  }
}

//FILTERS BOX
export class FilterBox extends React.PureComponent {
  render() {
    let { type, search, start, show, showFilter } = this.props;
    return (
      <>
        <span className="show-filters" onClick={show}>
          Show filters
        </span>
        <div className="filters" style={{ display: showFilter ? "" : "none" }}>
          <div>
            <input
              type="checkbox"
              id="artist"
              onChange={type}
              onKeyDown={search}
              checked={start === "artist" ? true : false}
            />{" "}
            <label htmlFor="artist">Artist</label>
            <input
              type="checkbox"
              id="album"
              onChange={type}
              onKeyDown={search}
            />{" "}
            <label htmlFor="album">Album</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="track"
              onChange={type}
              onKeyDown={search}
            />{" "}
            <label htmlFor="track">Track</label>
            <input
              type="checkbox"
              id="playlist"
              onChange={type}
              onKeyDown={search}
            />{" "}
            <label htmlFor="playlist">Playlist</label>
          </div>
        </div>
      </>
    );
  }
}
