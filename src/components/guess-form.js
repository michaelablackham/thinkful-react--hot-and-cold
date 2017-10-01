//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import './guess-form.css';

export default function Form(props){

  // submitGuess(event) {
  //   event.preventDefault();
  //
  //   if (this.props.submitGuess) {
  //     const value = this.input.value;
  //     this.props.submitGuess(value);
  //   }
  //   this.input.value = '';
  // }
  //
  // render() {
    return (
      <form submitGuess={(e) => this.submitGuess(e)}>
        <label for="guess"Enter your guess></label>
        <input
          id="guess"
          type="number"
          placeholder="Enter your guess"
          min="0"
          max="20"
          required
          value=""
          // ref={input => this.input = input}
        />
        <button type="submit">Guess</button>
      </form>
    );
  }
// };
