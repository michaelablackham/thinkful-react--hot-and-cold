//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

export default function Feedback(props){
  return (
    <h2>
      {props.feedback}
    </h2>
  );
}
