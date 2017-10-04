//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './footer.css';

export default class Footer extends React.Component {
  newGame(event) {
    console.log('newGame called');
    event.preventDefault();

    console.log('this.props.newGame contents:', this.props.newGame);
    if (this.props.newGame) {
      // console.log('this.props.newGame contents:', this.props.newGame);
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
