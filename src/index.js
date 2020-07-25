import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './assets/styles/main.css';
import 'semantic-ui-css/semantic.min.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
