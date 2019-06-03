import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

import store from './store/index';
import Header from "./common/header";
import Home from "./pages/home"
import Detail from "./pages/detail"
import Login from "./pages/login"

export default class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route path={"/"} exact component={Home} />
              <Route path={"/detail"} exact component={Detail} />
              <Route path={"/login"} exact component={Login} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}