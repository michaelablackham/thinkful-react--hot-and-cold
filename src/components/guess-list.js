//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './guess-list.css';

export default function GuesList(props){
  return (
    <ul>
    <li>{props.guesses}</li>
    </ul>
  );
}
