import React, { Component } from "react";
import Test from "./Test.js"; 

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
    );
  }
}