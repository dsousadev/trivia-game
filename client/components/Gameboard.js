import React from "react";
import axios from "axios";
import QuestionView from "./QuestionView"
import Highscores from "./Highscores"
import { Form, Button, ButtonControl } from 'react-bootstrap'

class Gameboard extends React.Component {
  constructor() {
    super();
    this.state = {
      randomQuestions: [],
      score: 0
    };
  }
  newQuestions() {
    axios.get("https://opentdb.com/api.php?amount=5").then(res => {
      this.setState({ randomQuestions: res.data.results });
    });
  }
  incrementScore() {
    this.state.score++;
    console.log('score is ', this.state.score);
  }
  handleButton() {
    this.setState({checkScores: true});
  }
  render() {
    if(this.state.checkScores) {
      return (
        <Highscores score={this.state.score} />
      )
    }
    else {
      return (
        <div> 
          <Button bsStyle='primary' onClick={this.newQuestions.bind(this)}>Start Game</Button>
          <br />
          <br />
          <Form>
            {this.state.randomQuestions.map((question) =>
              <QuestionView incrementScore={this.incrementScore.bind(this)} question={question} />)
            }
            <Button bsStyle='primary' onClick={this.handleButton.bind(this)}>Check Your Score</Button>
          </Form>
        </div>
      )     
    }
  }
}

export default Gameboard;
