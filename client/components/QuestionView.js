import React from 'react'
import _ from 'underscore'
import { Form, Button, ButtonControl } from 'react-bootstrap'
import AlertContainer from 'react-alert'

class QuestionView extends React.Component {
    constructor(props) {
      super(props);
      let answers = props.question.incorrect_answers.slice(0);
      answers.push(props.question.correct_answer);
      answers = _.shuffle(answers);
      this.state = {
        answers: answers,
        question: props.question,
        correctAnswer: props.question.correct_answer,
        incrementScore: props.incrementScore
      };
      this.alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        transition: 'fade'
      };
    }
    decodeEntities (str) {
      var element = document.createElement('div');
      if(str && typeof str === 'string') {
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }
      return str;
    }
    handleOptionChange(changeEvent) {
      this.setState({
        selectedOption: changeEvent.currentTarget.value
      });
    }
    handleButtonClick(e) {
      e.preventDefault();
      if(this.state.correctAnswer === this.state.selectedOption){
        this.state.incrementScore();
        msg.success('You are correct!');
      } else {
        msg.error('Oops the correct answer was: ' + this.state.correctAnswer);
      }
     
    }
    render() {
      return (
        <div>
          <h4>Category: {this.decodeEntities(this.state.question.category)} </h4>
          <p>Question: {this.decodeEntities(this.state.question.question)} </p> 
          <div>
              {this.state.answers.map((answer) => <div><input type="radio" name={this.state.question} onChange={this.handleOptionChange.bind(this)}   value={this.decodeEntities(answer)} /> {this.decodeEntities(answer)} </div> )}
              <Button bsStyle='primary' onClick={this.handleButtonClick.bind(this)}>Submit</Button> 
              <br /> <br />
          </div>
          <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
        </div>
      ) 
    }
}

export default QuestionView;