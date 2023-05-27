import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Login from "./Login"
import Test from "./Test";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);