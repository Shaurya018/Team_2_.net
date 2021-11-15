import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  style = {};
  render() {
    return (
      <div>
        <nav className="navbar">
          <h1>HummingBirds Tech</h1>
          <div className="links">
            <Link to="./">Home</Link>
            <Link to="./gallery">Gallery</Link>
            <Link to="./contact">Contact</Link>
            <Link to="./about">About Us</Link>
          </div>
        </nav>
      </div>
    );
  }
}