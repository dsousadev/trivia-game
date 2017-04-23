import React from 'react';
let _ = require('underscore');
var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();

let QuestionView = ({question}) => {
    let answers = question.incorrect_answers.slice(0);
    answers.push(question.correct_answer);
    answers = _.shuffle(answers);
    

    return (
      <div>
        <h4>Category: {decodeEntities(question.category)} </h4>
        <p>Question: {decodeEntities(question.question)} </p> 


        <form>
            {answers.map((answer) => <div><input type="radio" name='answer' label={decodeEntities(answer)}/> {decodeEntities(answer)} </div> )}
        </form>
      </div>
    )
}

export default QuestionView;