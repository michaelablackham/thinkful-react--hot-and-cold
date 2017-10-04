//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './header.css';

export default function Header(props){
  return (
    <header>
      <h1>Guess My Secret Number</h1>
      <p>I chose a number at random between 1 and 20. Can you guess it?</p>
    </header>
  );
}
