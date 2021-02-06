import React, { PureComponent } from "react";

//REACT BOOTSTRAP
import { Toast } from "react-bootstrap";

//STYLE
import "./General.scss";

//TOAST
export class ToastDev extends PureComponent {
  render() {
    let { toastState, close } = this.props;
    return (
      <Toast style={{ opacity: toastState ? "1" : "0" }}>
        <Toast.Header>
          <img
            src="./assets/spotify.png"
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
        <img src="./assets/spotify.png" alt="" />
      </div>
    );
  }
}
