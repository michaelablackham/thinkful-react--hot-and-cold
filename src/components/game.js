//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';
import Header from './header';
import Footer from './footer';
import Feedback from './guess-feedback';
import Form from './guess-form';
import GuessList from './guess-list';
import GuessCount from './guess-count';

import './game.css';

const INITIAL_STATE = {
  guesses: [],
  feedback: 'Guess a number',
  correctAnswer: Math.floor(Math.random() * 20) + 1,
  correct: null,
}

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.newGame = this.newGame.bind(this);// TODO: learn Function#bind()
  }

  newGame() {
    this.setState(INITIAL_STATE);
  };

  guess(guess) {
    let feedback;
    let correct;

    const possibleFeedbacks = [
      "Guess again",
      "NOPE",
      "Uhhhh I don\'t think so",
      "Come on!",
      "Try again",
      "Pick another number",
      "You stink at this",
      "Clearly you aren\'t a mind reader"
    ]

    if (guess != this.state.correctAnswer) {
      console.log("loser" + this.state.correctAnswer)
      feedback = possibleFeedbacks[Math.floor(Math.random() * possibleFeedbacks.length)]
      correct = false;
    }
    else {
      correct = true;
      feedback = "Good job! You guessed it!";
    }

    this.setState({
      correct,
      feedback,
      guesses: [...this.state.guesses, guess],
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <section className={`game-container game-container-${this.state.correct}`}>
          <Feedback feedback={this.state.feedback}/>
          <Form submitGuess={(guess) => this.guess(guess)} />
          <section>
            <GuessCount count={this.state.guesses.length+1}/>
            <GuessList guesses={this.state.guesses} correctAnswer={this.state.correctAnswer}/>
          </section>
        </section>
        <Footer newGame={this.newGame} />
      </div>
    );
  }
}
