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
    };
  }

    // newGame() {
    //  this.setState({
    //    guesses: [],
    //    feedback: 'Make your guess!',
    //    correctAnswer: Math.floor(Math.random() * 100) + 1,
    //  });

    guess(guess) {
      if  (guess == this.state.correctAnswer) {
        console.log("GOOD JOB" + this.state.correctAnswer)
      }
      else {
        console.log("loser" + this.state.correctAnswer)
      }
    }

  //  const feedback = {
  //    initial: "Guess a number!",
  //    correct: "Good job! You guessed it!",
  //    wrong: [
  //      "Guess again",
  //      "NOPE",
  //      "Uhhhh I don\'t think so",
  //      "Come on!",
  //      "Try again",
  //      "Pick another number",
  //      "You stink at this",
  //      "Clearly you aren\'t a mind reader"
  //    ]
  //  }

    //CHOOSE RANDOM WRONG ANSWER FEEDBACK
    //  ChooseFeedback(feedback) {
    //    this.setState({
    //       feedback: this.feedback.wrong[Math.floor(Math.random() * 8) + 1]
    //     });
    //  }

  render() {
    return (
      <div>
        <Header/>
        <section className="game-container">
          <Feedback feedback={this.state.feedback}/>
          <Form submitGuess={(guess) => this.guess(guess)} />
          <GuessCount count={this.state.guesses.length+1}/>
          <GuessList guesses={this.state.guesses}/>
        </section>
        <Footer/>
      </div>
    );
  }
}
