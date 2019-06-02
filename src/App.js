import React from 'react';
import { Provider } from 'react-redux';

import store from './store/index';
import Header from "./common/header";

export default class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}