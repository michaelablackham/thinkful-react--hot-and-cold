//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './guess-list.css';

export default function GuessList(props) {

  const guesses = props.guesses.map((guess, index) => {
    console.log(guess, props.correctAnswer);
    return (<li key={index} className={'guess-' + (guess == props.correctAnswer)}>
      {guess}
    </li>)
  })
    // guess === props.correctAnswer
    //   ? <li key={index} className={`guess-false`}>
    //       {guess}
    //     </li>
    //   : <li key={index} className={`guess-true`}>
    //       {guess}
    //     </li>
  //  ));

  return (
    <ul>
      {guesses}
    </ul>
  );
}
