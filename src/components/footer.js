//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './footer.css';

export default class Footer extends React.Component {
  newGame(event) {
    event.preventDefault();
    if (this.props.newGame) {
      this.props.newGame();
    }
  }

  render() {
    return (
      <footer>
        <button className="new-game" onClick={e => this.newGame(e)}>New Game</button>
      </footer>
    );
  }
};
