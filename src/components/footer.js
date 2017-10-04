//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './footer.css';

export default function Footer(props){
  return (
    <footer>
      <button className="answer">I give up</button>
      <button className="new-game">New Game</button>
    </footer>
  );
}
