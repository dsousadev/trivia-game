import React from 'react';
import axios from 'axios';

let Highscores = (props) => {
    // axios.get('/highscores')
    //   .then(res => {
        
    //    })
    return (
        <div>
            <h2>Your score: {props.score}</h2>
            <h2>Highscores:</h2>
            
        </div>
    )
}

export default Highscores;