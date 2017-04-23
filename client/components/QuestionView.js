import React from 'react';
let QuestionView = ({question}) => {
    return (
      <div>
        <p>Category: {question.category} </p>
        <p>Question: {question.question} </p> 
        <ul>Answers: 
            {question.incorrect_answers.map((answer) => <p>{answer}</p>)}
        </ul>
      </div>
    )
}

export default QuestionView;