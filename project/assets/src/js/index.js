import 'whatwg-fetch';
import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'react-redux-api-tools';
import { GlobalStyle } from './components/Atomic/GlobalStyle.atm';

const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware));

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
