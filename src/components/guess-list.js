//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './guess-list.css';

export default function GuesList(props){
  const guesses = props.guesses.map((guess, index) => (
     <li key={index} className={`guess-${props.isCorrect}`}>
         {guess}
     </li>
   ));

  return (
    <ul>
      {guesses}
    </ul>
  );
}
