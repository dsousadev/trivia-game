import React from 'react';
let _ = require('underscore');

class QuestionView extends React.Component {
    constructor(props) {
      super(props);
      let answers = props.question.incorrect_answers.slice(0);
      answers.push(props.question.correct_answer);
      answers = _.shuffle(answers);
      this.state = {
        answers: answers,
        question: props.question
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
    
    render() {
      return (
        <div>
          <h4>Category: {this.decodeEntities(this.state.question.category)} </h4>
          <p>Question: {this.decodeEntities(this.state.question.question)} </p> 

          <form>
              {this.state.answers.map((answer) => <div><input type="radio" name='answer' label={this.decodeEntities(answer)}/> {this.decodeEntities(answer)} </div> )}
          </form>
        </div>
      ) 
    }
}

export default QuestionView;