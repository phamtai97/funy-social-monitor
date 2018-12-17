import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import {store} from '../store';
import HeaderMain from '../containers/header-main';
import BlocksPage from '../containers/blocks-page';
import NodesPage from '../containers/nodes-page';
import AboutPage from '../components/about-page';
import HomePage from '../containers/home-page';


class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <BrowserRouter>
          <div className="App">
            <HeaderMain></HeaderMain>
            <Switch>
              <Route exact path = '/' component = {HomePage} />
              <Route path ='/blocks' component = {BlocksPage}/>
              <Route path ='/nodes' component = {NodesPage}/>
              <Route path ='/about' component = {AboutPage}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
