import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'react-redux-api-tools';

import Routes from './routes';
import rootReducer from './store/reducers';

import 'whatwg-fetch';
import '../scss/index.scss';

const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware));


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
