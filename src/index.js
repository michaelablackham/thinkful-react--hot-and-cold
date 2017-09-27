//ALWAYS IMPORT REACT IN ALL COMPONENTS
import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import Game from './components/game';
// {/* Not sure what this is? seems to be a default when you create the app? */}
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Game />, //Render the game component
  document.getElementById('root')
);

{/* Not sure what this is? seems to be a default when you create the app? */}
registerServiceWorker();
