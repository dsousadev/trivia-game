import React from "react";
import axios from "axios";
import Start from "./Start.js";
import Gameboard from "./Gameboard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Test your knowledge</h1>
        <Gameboard />
      </div>
    );
  }
}

export default App;
