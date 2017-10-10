import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game/>', () => {

  it('Renders without crashing', () => {
    shallow(<Game title="foo" />);
  });

  //Render a new game and check state
  // it('Can start a new game', () => {
  //   const wrapper = shallow(<Game />);
  //   wrapper.setState({
  //     guesses: [1,2,3,4],
  //     feedback: 'awesome',
  //     correctAnswer: -1
  //   });
  //   wrapper.instance().newGame();
  //   expect(wrapper.state('guesses')).toEqual([]);
  //   expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
  //   expect(wrapper.state('feedback')).toEqual('Make your guess!');
  //   expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  // });
  //
  // //Make sure the test can render new guesses
  // it('can make guesses', () => {
  //   const wrapper = shallow(<Game />);
  //   wrapper.setState({
  //     correctAnswer: 100
  //   });
  //
  //   wrapper.instance().guess(37);
  //   expect(wrapper.state('guesses')).toEqual([37]);
  //   expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
  //
  //   wrapper.instance().guess(100);
  //   expect(wrapper.state('guesses')).toEqual([37, 100]);
  //   expect(wrapper.state('feedback')).toEqual('You got it!');
  // });

});
