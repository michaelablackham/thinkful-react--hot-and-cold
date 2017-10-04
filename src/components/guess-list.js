//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

export default function GuesList(props){
  return (
    <ul>
    <li>{props.guesses}</li>
    </ul>
  );
}
