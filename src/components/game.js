//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';
import Header from './header';
import Footer from './footer';
import Feedback from './guess-feedback';
import Form from './guess-form';
import GuessList from './guess-list';
import GuessCount from './guess-count';

import './game.css';

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: "Guess a number",
      correctAnswer: Math.floor(Math.random() * 20) + 1,
      correct: null,
    };
  }

  newGame() {
   this.setState({
     guesses: [],
     feedback: 'Make your guess!',
     correctAnswer: Math.floor(Math.random() * 100) + 1,
     correct: null
    });
  };

  guess(guess) {
    let feedback;
    let correct;
    if (guess != this.state.correctAnswer) {
      console.log("loser" + this.state.correctAnswer)
      feedback = "WRONG";
      correct = false;
    }
    else {
      correct = true;
      feedback = "Good job! You guessed it!";
    }

    this.setState({
      correct,
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <section className="game-container">
          <Feedback className={this.state.correct} feedback={this.state.feedback}/>
          <Form submitGuess={(guess) => this.guess(guess)} />
          <GuessCount count={this.state.guesses.length+1}/>
          <GuessList guesses={this.state.guesses}/>
        </section>
        <Footer newGame={this.props.newGame} />
      </div>
    );
  }
}
