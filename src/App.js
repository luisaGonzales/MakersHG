import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Menu} from './Components/FirstSelection';
import {Layers} from './Components/Layers';
import {Check} from './Components/Check';

const App = ({title})=> {
  return(
    <HashRouter>
      <Switch>
          <Route exact path="/" render={() => <Menu title={title}/>} />
          <Route exact path="/menu" render={() => <Menu title={title}/>} />
          <Route exact path="/layers" render={() => <Layers />} />
          <Route exact path="/check" render={() => <Check />} />
          <Route render={() => <Redirect to={"/"} />}/>
      </Switch>
    </HashRouter>
  );
}

const mapToProps = ({title}) => ({title})
export default connect (mapToProps)(App);
