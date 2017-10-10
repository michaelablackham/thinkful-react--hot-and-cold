import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount/>', () => {

  it('Renders without crashing', () => {
    shallow(<GuessCount title="foo" />);
  });

  // it('renders the correct number of guess', () => {
  //   const value = 5;
  //   const wrapper = shallow(<GuessCount count={value} />);
  //   expect(wrapper.text()).toEqual(`Guess #${value}!`);
  // });

});
