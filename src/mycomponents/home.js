import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="navbar">
        <h2 className="tech-preview h2">
          Apple iPhone 13 brings portrait mode for video
        </h2>
        <p className="tech-preview">
          Apple has announced its new iPhone 13, which can film "portrait mode"
          videos with a depth of field effect. The new cinematic mode
          "anticipates when someone is about to enter the frame" and shifts
          focus to them, Apple said - something known as "pull focus". It is the
          only smartphone that lets users edit this effect after shooting, Apple
          boss Tim Cook said. However, most other features on the new model were
          incremental updates over previous versions.
        </p>
        <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17DDC/production/_120565779_iphone13colours.png" style = {{ width : 250, height : 250, marginTop : "-68vh",padding : 5 }}
        ></img>
      </div>
    );
  }
}