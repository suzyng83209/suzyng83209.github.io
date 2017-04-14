import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// functions for setting up the app
import initStore from './setup/store';      // creates the store
import initHistory from './setup/history';  // creates the history
import loadMisc from './setup/misc';        // loads miscellaneous code after setup
import RootComponent from './setup/Root';   // root component

// create the store and history
const store = initStore();
const history = initHistory(store);

// Render the root element to the DOM
const rootEl = document.getElementById('app-container');
ReactDOM.render(
  <RootComponent store={store} history={history} />, rootEl);

// load miscellaneous code
loadMisc(store);
