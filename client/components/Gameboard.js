import React from "react";
import axios from "axios";
import QuestionView from "./QuestionView"

class Gameboard extends React.Component {
  constructor() {
    super();
    this.state = {randomQuestions: []};
  }
  componentDidMount() {
  }
  newQuestions() {
    axios.get("https://opentdb.com/api.php?amount=10").then(res => {
      this.setState({ randomQuestions: res.data.results });
    });
  }
  render() {
    return (
      <div> 
        <button onClick={this.newQuestions.bind(this)}>Start Game</button>
        {this.state.randomQuestions.map((question) =>
          <QuestionView question={question} />)
        }
      </div>
    )     
  }
}

export default Gameboard;
