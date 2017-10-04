import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
  submitGuess(event) {
      event.preventDefault();

      if (this.props.submitGuess) {
          const value = this.input.value;
          this.props.submitGuess(value);
      }
      this.input.value = '';
  }
  render() {
    //Been having errors because iforgot the render :-/

    return (
      <form onSubmit={e => this.submitGuess(e)}>
        <label htmlFor="guess">Enter your guess</label>
        <input
          id="guess"
          type="number"
          placeholder="Enter your guess"
          min="0"
          max="20"
          required
          defaultValue=""
          ref={input => this.input = input}
        />
        <button type="submit">Guess</button>
      </form>
    );
  }
};
