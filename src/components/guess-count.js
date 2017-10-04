//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './guess-count.css';

//EXPORT GUESST COUNT TO BE USED IN OTHER COMPONENTS
export default function GuessCount(props) {
  return (
    <p className="guess-count">Guess #{props.count}</p>
  );
}
